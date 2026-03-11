import { useState, useEffect } from "react";
import { Button } from "@/react-app/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Users, Award, Building2, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "@/react-app/components/ui/badge";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Carousel Background */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={slide} 
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-sm">
              Building Dreams from
              <span className="block text-primary-foreground">Foundation to Finish</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/work">
                <Button size="lg" className="w-full sm:w-auto text-lg px-10 h-14 rounded-full">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/engage">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-10 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Columns */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: About Us - Blue Theme */}
            <div className="flex flex-col h-full bg-blue-50/50 dark:bg-blue-950/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-900 shadow-sm transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">About Us</h2>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Established in 2020, Frah Spaces is a multi-disciplinary firm specializing in construction, real estate management, and technical services. Managed by a team with over a decade of industry experience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  NCA Registered (NCA5/NCA6)
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Users className="w-4 h-4 text-blue-600" />
                  Expert Management
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Innovative Design
                </div>
              </div>
              <Link to="/about" className="mt-auto">
                <Button variant="link" className="p-0 text-blue-600 font-bold hover:no-underline flex items-center gap-2">
                  Learn More about our Story <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Column 2: Past Work - Light Blue Theme */}
            <div className="flex flex-col h-full bg-sky-50/50 dark:bg-sky-950/20 p-8 rounded-3xl border border-sky-100 dark:border-sky-900 shadow-sm transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Past Work</h2>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Explore our diverse portfolio of residential and commercial masterpieces. From concept to stunning reality.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Project Gallery
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Case Studies
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Testimonials
                </div>
              </div>
              <Link to="/work" className="mt-auto">
                <Button variant="link" className="p-0 text-sky-500 font-bold hover:no-underline flex items-center gap-2">
                  View Our Portfolio <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Column 3: Engage Us - Indigo/Dark Blue Theme */}
            <div className="flex flex-col h-full bg-indigo-50/50 dark:bg-indigo-950/20 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900 shadow-sm transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Engage Us</h2>
              </div>
              <div className="space-y-2 mb-6 flex-grow">
                {['Construction & Civil Works', 'Real Estate Management', 'Electrical & Solar', 'Plumbing & HVAC', 'Glazing & Welding', 'Landscaping', 'Facility Care'].map((service) => (
                  <div key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    {service}
                  </div>
                ))}
              </div>
              <div className="mt-auto space-y-4">
                <Link to="/engage">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Get Started
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full border-green-500 text-green-600 hover:bg-green-50 flex items-center justify-center gap-2"
                  onClick={() => window.open("https://wa.me/15551234567?text=Hi, I'm interested in learning more about Frah Spaces services", "_blank")}
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">70+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Kenyan Counties</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Quality Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Trust & Philosophy - Inspired by Triad */}
      <section className="py-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary">Our Professional Standards</Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Innovative Solutions in the Built Environment</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Guided by excellence and ethical professionalism, Frah Spaces delivers 
              integrated solutions from concept design to construction management. 
              We aim to create inspired destinations that combine international standards 
              with local flair.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-foreground">Project Management</h4>
                <p className="text-sm text-muted-foreground text-pretty">Meticulous planning, budget management, and quality benchmarks for every build stage.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-foreground">Design Excellence</h4>
                <p className="text-sm text-muted-foreground text-pretty">Utilizing advanced 3D modeling and sustainable practices to bring future spaces to life.</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
              alt="Design Studio" 
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-medium">NCA Certified Professional Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your vision and bring it to life with our expert team
          </p>
          <Link to="/engage">
            <Button size="lg" className="text-lg px-12">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
