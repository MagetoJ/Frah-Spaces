export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  testimonial: string;
  client: string;
  story: string;
  features: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: "siri-africa-a-frame",
    title: "Siri Africa A-Frame House",
    category: "residential",
    location: "Tigoni, Kiambu",
    year: "2024",
    description: "An innovative residential project blending contemporary architecture with the lush highlands of Kiambu County.",
    image: "/Siri%20A%20frame%20house%202.png",
    testimonial: "A masterpiece of modern design that perfectly complements its natural surroundings.",
    client: "Siri Africa",
    story: "The Siri Africa A-Frame House was designed to redefine highland living. By utilizing a steep roofline and expansive glazing, we captured the breathtaking views of Tigoni while maintaining a cozy, private atmosphere. The project emphasizes sustainable timber construction and minimal site impact.",
    features: ["A-Frame Architecture", "Highland Integration", "Sustainable Timber", "Panoramic Glazing"],
    images: [
      "/Siri%20A%20frame%20house%201.heic",
      "/Siri%20A%20frame%20house%202.png",
      "/Siri%20A%20frame%20house%203.png",
      "/Siri%20A%20frame%20house%204.heic"
    ]
  },
  {
    id: "hospitality-renovation-kitale",
    title: "Hospitality Renovation",
    category: "commercial",
    location: "Kitale, Trans Nzoia",
    year: "2023",
    description: "Comprehensive expansion of a prominent restaurant, including a new upper floor, grill section, and swimming pool.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    testimonial: "The transformation was incredible. Frah Spaces delivered a world-class facility that our customers love.",
    client: "Kitale Grill & Swim",
    story: "This project involved transforming a local eatery into a premier hospitality destination. We added a modern upper-floor dining area, a professional-grade grill section, and a resort-style swimming pool, all while maintaining operational continuity for the client.",
    features: ["Floor Expansion", "Commercial Kitchen", "Pool Design", "Modern Facade"],
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"
    ]
  },
  {
    id: "luxury-residential-karen",
    title: "Luxury Residential Villa",
    category: "residential",
    location: "Karen, Nairobi",
    year: "2024",
    description: "Design and construction of high-value homes, including a KES 82M luxury villa featuring multiple bedrooms and guest wings.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    testimonial: "Exceptional attention to detail in every aspect of our new luxury home.",
    client: "Private Client",
    story: "Located in the prestigious Karen suburb, this luxury villa exemplifies modern elegance. The design features open-plan living spaces, high-end finishes, and integrated smart home technology, providing a seamless blend of comfort and sophistication.",
    features: ["Smart Home Tech", "Guest Wing", "Open-Plan Design", "Premium Finishes"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80"
    ]
  },
  {
    id: "landscaping-portfolio",
    title: "Landscaping Portfolio",
    category: "landscaping",
    location: "Multiple Counties",
    year: "2023",
    description: "Successful transformations of gardens and courtyards across Nairobi, Kiambu, Machakos, and Trans Nzoia.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    testimonial: "Transformed our outdoor spaces into beautiful, functional environments.",
    client: "Various Clients",
    story: "Our landscaping work focuses on creating harmonious outdoor environments that complement the architecture. We specialize in drought-resistant planting, automated irrigation systems, and decorative hardscaping to enhance the curb appeal and functionality of any property.",
    features: ["Native Planting", "Automated Irrigation", "Hardscaping", "Landscape Lighting"],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
      "https://images.unsplash.com/photo-1558904541-efa8c196b27d?w=1200&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80"
    ]
  },
  {
    id: "civil-works-drainage",
    title: "Civil Works & Drainage",
    category: "commercial",
    location: "Machakos County",
    year: "2022",
    description: "Implementation of essential drainage systems and paving for a commercial development project.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80",
    testimonial: "Quality civil works that addressed all our structural concerns effectively.",
    client: "Industrial Partner",
    story: "Addressing core infrastructure needs, this project involved the design and installation of heavy-duty drainage systems and professional paving for an industrial site. Our focus was on durability, efficiency, and long-term structural integrity.",
    features: ["Stormwater Mgmt", "Industrial Paving", "Site Grading", "Infrastructure Design"],
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1200&q=80",
      "https://images.unsplash.com/photo-1590486803833-ffc6f684c303?w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
    ]
  },
  {
    id: "modern-mixed-use",
    title: "Modern Mixed-Use Build",
    category: "residential",
    location: "Kiambu Road, Nairobi",
    year: "2023",
    description: "New build mixed-use development focusing on affordable but high-quality living spaces.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    testimonial: "Frah Spaces brought our vision to life with strategic guidance and excellent execution.",
    client: "Property Investor",
    story: "This mixed-use development aims to bridge the gap between affordability and quality. By optimizing spatial layouts and selecting cost-effective but durable materials, we've created a vibrant community space that serves both residential and light commercial needs.",
    features: ["Spatial Optimization", "Mixed-Use Zoning", "Energy Efficiency", "Community Spaces"],
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80"
    ]
  },
  {
    id: "nyambura-house",
    title: "Nyambura House",
    category: "residential",
    location: "Nairobi, Kenya",
    year: "2024",
    description: "A modern residential masterpiece focusing on elegant finishes and spacious living.",
    image: "/nyambura 1.png",
    testimonial: "Frah Spaces' architectural vision transformed our dream into a stunning reality.",
    client: "The Nyambura Family",
    story: "Nyambura House is a testament to contemporary residential design. The project focused on creating a seamless flow between indoor and outdoor spaces, utilizing large windows to flood the interior with natural light. High-quality finishes and custom cabinetry throughout the house reflect the client's desire for a sophisticated yet comfortable home.",
    features: ["Modern Finishes", "Open-Plan Living", "Natural Lighting", "Custom Cabinetry"],
    images: [
      "/nyambura 1.png",
      "/nyambura 2.png",
      "/nyambura 3.png",
      "/nyambura 4.png",
      "/nyambura 5.png",
      "/nyambura 6.png"
    ]
  },
  {
    id: "syokimau-residence",
    title: "Syokimau Residence",
    category: "residential",
    location: "Syokimau, Machakos",
    year: "2024",
    description: "A contemporary residential development featuring elegant architectural lines and premium finishes.",
    image: "/Syokimau%202.jpg",
    testimonial: "Frah Spaces delivered a home that exceeds our expectations in both design and quality.",
    client: "Private Client",
    story: "The Syokimau Residence project focused on creating a modern family home that maximizes space and natural light. Located in the fast-growing Syokimau area, the design incorporates clean lines, large windows, and high-quality materials to create a sophisticated yet functional living environment.",
    features: ["Contemporary Design", "Spacious Interiors", "Premium Finishes", "Natural Lighting"],
    images: [
      "/Syokimau%201.jpeg",
      "/Syokimau%202.jpg",
      "/Syokimau%203.jpeg"
    ]
  },
  {
    id: "liuwa-gardens",
    title: "Liuwa Gardens Hotel & Restaurant",
    category: "commercial",
    location: "Kenya",
    year: "2024",
    description: "A premier hospitality destination featuring lush gardens, modern dining facilities, and elegant accommodations.",
    image: "/Liuwa%20Gardens%201.jpg",
    testimonial: "Frah Spaces transformed our vision into a breathtaking reality that our guests absolutely adore.",
    client: "Liuwa Gardens",
    story: "Liuwa Gardens was designed to be an oasis of comfort and luxury. The project involved creating a seamless integration between the lush outdoor gardens and the modern interior spaces. We focused on high-end finishes, ambient lighting, and functional layouts to provide an exceptional experience for every guest.",
    features: ["Hospitality Design", "Garden Integration", "Modern Restaurant", "Elegant Suites"],
    images: [
      "/Liuwa%20Gardens%201.jpg",
      "/Liuwa%20Gardens%202.jpg",
      "/Liuwa%20Gardens%203.jpg",
      "/Liuwa%20Gardens%204.jpg",
      "/Liuwa%20Gardens%205.jpg"
    ]
  },
];
