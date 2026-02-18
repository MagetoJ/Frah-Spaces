import { useState } from "react";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/react-app/components/ui/tabs";
import { Star, MapPin, Calendar, Play } from "lucide-react";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const videos = [
    {
      title: "Luxury Villa Walkthrough",
      description: "A detailed tour of our most recent residential completion in Nairobi.",
      thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      videoUrl: "#"
    },
    {
      title: "Design Process: Concept to Completion",
      description: "Behind the scenes of our project management and interior design workflow.",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      videoUrl: "#"
    }
  ];

  const projects = [
    {
      title: "Siri Africa A-Frame House",
      category: "residential",
      location: "Tigoni, Kiambu",
      year: "2024",
      description: "An innovative residential project blending contemporary architecture with the lush highlands of Kiambu County.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
      testimonial: "A masterpiece of modern design that perfectly complements its natural surroundings.",
      client: "Siri Africa"
    },
    {
      title: "Hospitality Renovation",
      category: "commercial",
      location: "Kitale, Trans Nzoia",
      year: "2023",
      description: "Comprehensive expansion of a prominent restaurant, including a new upper floor, grill section, and swimming pool.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      testimonial: "The transformation was incredible. Frah Spaces delivered a world-class facility that our customers love.",
      client: "Kitale Grill & Swim"
    },
    {
      title: "Luxury Residential",
      category: "residential",
      location: "Karen, Nairobi",
      year: "2024",
      description: "Design and construction of high-value homes, including a KES 82M luxury villa featuring multiple bedrooms and guest wings.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      testimonial: "Exceptional attention to detail in every aspect of our new luxury home.",
      client: "Private Client"
    },
    {
      title: "Landscaping Portfolio",
      category: "landscaping",
      location: "Multiple Counties",
      year: "2023",
      description: "Successful transformations of gardens and courtyards across Nairobi, Kiambu, Machakos, and Trans Nzoia.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      testimonial: "Transformed our outdoor spaces into beautiful, functional environments.",
      client: "Various Clients"
    },
    {
      title: "Civil Works & Drainage",
      category: "commercial",
      location: "Machakos County",
      year: "2022",
      description: "Implementation of essential drainage systems and paving for a commercial development project.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80",
      testimonial: "Quality civil works that addressed all our structural concerns effectively.",
      client: "Industrial Partner"
    },
    {
      title: "Modern Mixed-Use Build",
      category: "residential",
      location: "Kiambu Road, Nairobi",
      year: "2023",
      description: "New build mixed-use development focusing on affordable but high-quality living spaces.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      testimonial: "Frah Spaces brought our vision to life with strategic guidance and excellent execution.",
      client: "Property Investor"
    },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4">Portfolio</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Work Speaks
              <span className="block text-primary">For Itself</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our collection of transformative projects spanning residential, commercial, 
              and landscape design across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>All</TabsTrigger>
              <TabsTrigger value="residential" onClick={() => setSelectedCategory("residential")}>Residential</TabsTrigger>
              <TabsTrigger value="commercial" onClick={() => setSelectedCategory("commercial")}>Commercial</TabsTrigger>
              <TabsTrigger value="landscaping" onClick={() => setSelectedCategory("landscaping")}>Landscaping</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div 
                    className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground border">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Star className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-sm italic text-muted-foreground">
                        "{project.testimonial}"
                      </p>
                    </div>
                    <p className="text-sm font-medium text-right">— {project.client}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Project Walkthroughs</h2>
              <p className="text-xl text-muted-foreground">Experience our designs in motion</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer border-2 hover:border-primary/50 transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${video.thumbnail}')` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Project Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-primary mb-2">70+</div>
                <div className="text-muted-foreground">Completed Projects</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-accent mb-2">20+</div>
                <div className="text-muted-foreground">Kenyan Counties</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-secondary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Commitment</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
