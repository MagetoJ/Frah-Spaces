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
      "/nyambura 6.png",
      "/nyambura 7.png",
      "/nyambura 8.png",
      "/nyambura 9.png",
      "/nyambura 10.png"
    ]
  },
  {
    id: "syokimau-residence",
    title: "Syokimau Contemporary Villa",
    category: "residential",
    location: "Syokimau, Machakos",
    year: "2024",
    description: "A striking residential masterpiece featuring bold geometric lines and an emphasis on open, airy living spaces.",
    image: "/Syokimau%202.jpg",
    testimonial: "Frah Spaces delivered a home that perfectly balances modern architectural boldness with warm family functionality.",
    client: "Private Homeowner",
    story: "Located in the vibrant Syokimau neighborhood, this contemporary villa was designed to stand out. We utilized a mix of textured finishes, expansive glazing, and unique structural forms to create a home that feels both futuristic and grounded. The interior layout prioritizes natural ventilation and light, making it a sustainable choice for the local climate.",
    features: ["Geometric Architecture", "Natural Ventilation", "High-End Finishes", "Multi-Level Living"],
    images: [
      "/Syokimau%201.jpeg",
      "/Syokimau%202.jpg",
      "/Syokimau%203.jpeg",
      "/Syokimau%204.jpg",
      "/Syokimau%205.jpg",
      "/Syokimau%206.jpeg",
      "/Syokimau%207.jpeg",
      "/Syokimau%208.jpeg",
      "/Syokimau%209.jpeg"
    ]
  },
  {
    id: "liuwa-gardens",
    title: "Liuwa Gardens Hotel & Restaurant",
    category: "hotels",
    location: "Kenya",
    year: "2024",
    description: "An exquisite hospitality landmark featuring a perfect blend of modern architecture and lush garden landscapes.",
    image: "/Liuwa%20Gardens%201.jpg",
    testimonial: "Frah Spaces transformed our vision into a breathtaking hospitality oasis that our guests absolutely adore.",
    client: "Liuwa Gardens Management",
    story: "Liuwa Gardens represents the pinnacle of our hospitality design portfolio. The project seamlessly integrates a world-class restaurant with elegant hotel accommodations, all centered around meticulously landscaped gardens. Every detail, from the ambient lighting to the custom interior finishes, was crafted to provide an unforgettable guest experience.",
    features: ["Boutique Hotel Design", "Fine Dining Spaces", "Tropical Garden Integration", "Luxury Interior Finishes"],
    images: [
      "/Liuwa%20Gardens%201.jpg",
      "/Liuwa%20Gardens%202.jpg",
      "/Liuwa%20Gardens%203.jpg",
      "/Liuwa%20Gardens%204.jpg",
      "/Liuwa%20Gardens%205.jpg",
      "/Liuwa%20Gardens%206.jpg",
      "/Liuwa%20Gardens%207.jpg",
      "/Liuwa%20Gardens%208.jpg",
      "/Liuwa%20Gardens%209.jpg",
      "/Liuwa%20Gardens%2010.jpg"
    ]
  },
  {
    id: "modern-apartment-complex",
    title: "Modern Apartment Complex",
    category: "commercial",
    location: "Nairobi, Kenya",
    year: "2024",
    description: "A contemporary multi-unit residential development designed for urban living with premium amenities.",
    image: "/Apartment%204.jpg",
    testimonial: "Frah Spaces maximized our space while maintaining a high standard of luxury and comfort.",
    client: "Urban Development Group",
    story: "This apartment complex project focused on urban density without sacrificing quality of life. The design includes open-plan units, natural ventilation, and shared rooftop spaces. We utilized durable materials and modern architectural elements to create a sustainable and attractive living environment in the heart of the city.",
    features: ["Urban Living Design", "Open-Plan Units", "Premium Amenities", "Sustainable Materials"],
    images: [
      "/Apartment%201.jpg",
      "/Apartment%202.jpg",
      "/Apartment%203.jpg",
      "/Apartment%204.jpg",
      "/Apartment%205.jpg"
    ]
  },
  {
    id: "kapsaret-residence",
    title: "Kapsaret Modern Residence",
    category: "residential",
    location: "Kapsaret, Eldoret",
    year: "2024",
    description: "A stunning modern home featuring clean lines, expansive windows, and a perfect blend of indoor-outdoor living.",
    image: "/kapsaret%201.jpg",
    testimonial: "The architectural brilliance of Frah Spaces is evident in every corner of our new home. We couldn't be happier.",
    client: "Private Client",
    story: "Kapsaret Modern Residence was designed to harmonize with its serene surroundings in Eldoret. The house features a spacious open-plan layout that connects the living areas with the beautifully landscaped gardens. High ceilings and large glass panels ensure the interior is always filled with natural light, creating a warm and inviting atmosphere.",
    features: ["Open-Plan Layout", "Expansive Glazing", "Indoor-Outdoor Flow", "Modern Facade"],
    images: [
      "/kapsaret%201.jpg",
      "/Kapsaret%202.jpg",
      "/Kapsaret%203.jpg",
      "/Kapsaret%204.jpg",
      "/Kapsaret%205.jpg",
      "/Kapsaret%206.jpg",
      "/Kapsaret%208.jpg",
      "/Kapsaret%209.jpg"
    ]
  },
  {
    id: "siri-africa-a-frame",
    title: "Siri Africa A-Frame House",
    category: "residential",
    location: "Kenya",
    year: "2024",
    description: "An iconic A-frame residential design that perfectly complements its natural surroundings with sustainable timber and panoramic glazing.",
    image: "/Siri%20A%20frame%20house%202.png",
    testimonial: "Frah Spaces brought our vision of a modern forest retreat to life. The A-frame design is both efficient and breathtaking.",
    client: "Siri Africa Retreats",
    story: "The Siri Africa A-Frame House is a masterclass in modern timber construction. Designed as a sustainable retreat, it features a dramatic steeply pitched roof that creates expansive double-height interior spaces. Large panoramic windows offer uninterrupted views of the landscape, while the use of natural materials ensures the structure feels grounded and eco-friendly.",
    features: ["A-Frame Architecture", "Sustainable Timber", "Panoramic Glazing", "Double-Height Living"],
    images: [
      "/Siri%20A%20frame%20house%202.png",
      "/Siri%20A%20frame%20house%203.png",
      "/Siri%20A%20frame%20house%204%20(1).jpg",
      "/Siri%20A%20frame%20house%206%20(1).jpg",
      "/Siri%20A%20frame%20house%207%20(1).jpg",
      "/Siri%20A%20frame%20house%208%20(1).jpg",
      "/Siri%20A%20frame%20house%209%20(1).jpg",
      "/Siri%20A%20frame%20house%2010.jpg"
    ]
  },
];
