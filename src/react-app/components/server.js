require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const puppeteer = require('puppeteer');

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Helper: Calculate seasonal and tier pricing
 */
const calculateFinalPrice = (basePrice, budget, startDate) => {
  let multiplier = 1.0;
  
  // Budget Tier Multipliers
  if (budget === 'mid-range') multiplier = 1.8;
  if (budget === 'luxury') multiplier = 3.5;

  // Seasonal Adjustment (Peak: Jul-Oct)
  const month = new Date(startDate).getMonth();
  if (month >= 6 && month <= 9) multiplier *= 1.3;

  const estimatedPrice = Math.round(basePrice * multiplier);
  
  return {
    estimatedPrice,
    priceBreakdown: {
      accommodation: Math.round(estimatedPrice * 0.45),
      activities: Math.round(estimatedPrice * 0.30),
      transport: Math.round(estimatedPrice * 0.15),
      parkFees: Math.round(estimatedPrice * 0.10)
    }
  };
};

/**
 * POST /api/itinerary/generate
 */
app.post('/api/itinerary/generate', (req, res) => {
  try {
    const { destination, experience, budget, startDate, endDate } = req.body;

    const row = db.prepare(`
      SELECT * FROM itineraries 
      WHERE destination_id = ? AND experience_type = ?
    `).get(destination, experience);

    if (!row) {
      return res.status(404).json({ error: 'No itinerary template found for this selection.' });
    }

    const { estimatedPrice, priceBreakdown } = calculateFinalPrice(row.base_price, budget, startDate);

    res.json({
      title: row.title,
      days: JSON.parse(row.content),
      estimatedPrice,
      priceBreakdown
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate itinerary' });
  }
});

/**
 * POST /api/itinerary/pdf
 */
app.post('/api/itinerary/pdf', async (req, res) => {
  let browser;
  try {
    const { itinerary, quizData } = req.body;

    // Important for Render: --no-sandbox is usually required
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    const htmlContent = `
      <div style="font-family: sans-serif; padding: 40px;">
        <h1 style="color: #064E3B;">${itinerary.title}</h1>
        <p><strong>Destination:</strong> ${quizData.destination}</p>
        <p><strong>Duration:</strong> ${quizData.startDate} to ${quizData.endDate}</p>
        <hr />
        ${itinerary.days.map(day => `
          <div style="margin-bottom: 20px;">
            <h3>Day ${day.day}: ${day.title}</h3>
            <p>${day.description}</p>
            <ul>${day.activities.map(a => `<li>${a}</li>`).join('')}</ul>
          </div>
        `).join('')}
        <div style="margin-top: 40px; padding: 20px; background: #f4f4f4;">
          <h2>Estimated Price: $${itinerary.estimatedPrice} per person</h2>
        </div>
      </div>
    `;

    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    
    res.contentType("application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error('PDF Generation Error:', error);
    res.status(500).send('Error generating PDF');
  } finally {
    if (browser) await browser.close();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`CNJ Backend running on port ${PORT}`));