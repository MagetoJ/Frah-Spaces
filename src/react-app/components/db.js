const Database = require('better-sqlite3');
const path = require('path');

// Use an environment variable for the DB path to support Render Disks
// e.g., /var/data/cnj_safaris.db
const dbPath = process.env.DATABASE_PATH || path.join(__dirname, 'cnj_safaris.db');
const db = new Database(dbPath);

/**
 * Initialize Database Schema
 */
db.exec(`
  CREATE TABLE IF NOT EXISTS destinations (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
  );

  CREATE TABLE IF NOT EXISTS itineraries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    destination_id TEXT,
    experience_type TEXT,
    title TEXT,
    content TEXT, -- JSON string of Array<{day, title, description, activities}>
    base_price INTEGER,
    FOREIGN KEY(destination_id) REFERENCES destinations(id)
  );
`);

// Seed Sample Data (Optional: for testing)
const seed = () => {
  const count = db.prepare('SELECT count(*) as count FROM destinations').get();
  if (count.count === 0) {
    const insertDest = db.prepare('INSERT INTO destinations (id, name, description) VALUES (?, ?, ?)');
    insertDest.run('kenya', 'Kenya', 'The home of the Big Five.');

    const insertItin = db.prepare(`
      INSERT INTO itineraries (destination_id, experience_type, title, content, base_price) 
      VALUES (?, ?, ?, ?, ?)
    `);
    
    const sampleDays = JSON.stringify([
      { 
        day: 1, 
        title: 'Arrival in Nairobi', 
        description: 'Welcome to Kenya.', 
        activities: ['Airport pickup', 'Hotel check-in'] 
      },
      { 
        day: 2, 
        title: 'Maasai Mara Game Drive', 
        description: 'Spotting the Big Five.', 
        activities: ['Morning Drive', 'Bush Breakfast'] 
      }
    ]);
    insertItin.run('kenya', 'big-five', 'Maasai Mara Classic', sampleDays, 1200);
  }
};
seed();

module.exports = db;