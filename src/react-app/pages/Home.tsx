import { useState, useEffect } from "react";
import { Button } from "@/react-app/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Award, Building2, PencilRuler, Palette, ClipboardList, Calculator } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "@/react-app/components/ui/badge";
import { MaterialCalculator } from "@/react-app/components/MaterialCalculator";
import { Card } from "@/react-app/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/react-app/components/ui/tabs";
import { blogPosts, type BlogPost } from "@/react-app/data/blog";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/Liuwa%20Gardens%201.jpg",
    "/nyambura%201.png",
    "/kahawa%20sukari%201.png"
  ];

  useEffect(() => {
    document.title = "Frah Spaces | Leading Construction & Architecture Firm in East Africa";
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
              alt={`High-quality and reliable construction project in East Africa by Frah Spaces - Featured Build ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white drop-shadow-md">
              East Africa's Most
              <span className="block text-primary-foreground md:text-6xl lg:text-7xl">Reliable & Quality-Verified Construction Firm</span>
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

      {/* Featured Case Study - Problem Solver Story */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/Liuwa%20Gardens%201.jpg" 
                  alt="Liuwa Gardens - Premier hospitality design and quality construction in Kenya by Frah Spaces" 
                  className="w-full h-[300px] md:h-[500px] object-cover"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary text-white px-4 py-1 text-sm">Featured Project</Badge>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Case Study</h4>
              <h2 className="text-4xl font-bold leading-tight">Liuwa Gardens: <br/>Modern Hospitality Design</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Liuwa Gardens represents the pinnacle of our hospitality design portfolio, seamlessly 
                integrating modern architecture with lush garden landscapes.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-bold">Kenya</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <p className="font-bold">Completed 2024</p>
                </div>
              </div>
              <Link to="/work/liuwa-gardens">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  View Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Sections */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">Our Integrated Solutions</Badge>
          <h2 className="text-4xl font-bold">Expertise Across the Built Environment</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Architecture - Indigo Theme */}
            <div className="flex flex-col h-full bg-indigo-50/50 dark:bg-indigo-950/20 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900 shadow-sm transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                  <PencilRuler className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Architecture</h2>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                From conceptual sketches to detailed structural designs, we create spaces that balance aesthetic vision with functional necessity.
              </p>
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  Conceptual Planning
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  3D Visualization
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  Structural Engineering
                </div>
              </div>
              <Link to="/services" className="mt-auto">
                <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  Explore Architecture
                </Button>
              </Link>
            </div>

            {/* Interior Design - Blue Theme */}
            <div className="flex flex-col h-full bg-blue-50/50 dark:bg-blue-950/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-900 shadow-sm transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <Palette className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Interior Design</h2>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Bespoke interiors that reflect your brand or personality. We manage every detail of finishing, lighting, and furnishing.
              </p>
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Space Optimization
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Material Selection
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Custom Cabinetry
                </div>
              </div>
              <Link to="/services" className="mt-auto">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Interiors
                </Button>
              </Link>
            </div>

            {/* Project Management - Sky Theme */}
            <div className="flex flex-col h-full bg-sky-50/50 dark:bg-sky-950/20 p-8 rounded-3xl border border-sky-100 dark:border-sky-900 shadow-sm transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Project Management</h2>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Meticulous oversight from foundation to finish. We ensure your project stays on schedule, on budget, and meets all quality benchmarks.
              </p>
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Budgeting & Costing
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Site Supervision
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  NCA Compliance
                </div>
              </div>
              <Link to="/engage" className="mt-auto">
                <Button variant="outline" className="w-full border-sky-500 text-sky-500 hover:bg-sky-50">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Typology Navigator - Portfolio Spotlight */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4 text-primary border-primary">Portfolio spotlight</Badge>
              <h2 className="text-4xl font-bold mb-4">A Legacy of Diverse <br/>Architectural Typologies</h2>
              <p className="text-lg text-muted-foreground">
                From high-end residential villas to complex commercial renovations, 
                explore how we apply technical excellence across different sectors.
              </p>
            </div>
            <Link to="/work">
              <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="residential" className="w-full">
            <div className="flex justify-start mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-white/50 dark:bg-slate-800/50 p-1 border border-border flex-wrap md:flex-nowrap">
                <TabsTrigger value="residential" className="px-4 md:px-6 py-2.5">Residential</TabsTrigger>
                <TabsTrigger value="commercial" className="px-4 md:px-6 py-2.5">Commercial</TabsTrigger>
                <TabsTrigger value="hotels" className="px-4 md:px-6 py-2.5">Hotels</TabsTrigger>
                <TabsTrigger value="landscaping" className="px-4 md:px-6 py-2.5">Landscaping</TabsTrigger>
                <TabsTrigger value="management" className="px-4 md:px-6 py-2.5">Management</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="residential" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { id: "siri-africa-a-frame", title: "Siri Africa A-Frame", loc: "Tigoni, Kiambu", img: "/Siri%20A%20frame%20house%202.png" },
                  { id: "kahawa-sukari-villa", title: "Kahawa Sukari Villa", loc: "Nairobi", img: "/kahawa%20sukari%201.png" },
                  { id: "syokimau-residence", title: "Syokimau Residence", loc: "Syokimau", img: "/Syokimau%202.jpg" },
                  { id: "nyambura-house", title: "Nyambura House", loc: "Nairobi", img: "/nyambura 1.png" },
                  { id: "kapsaret-residence", title: "Kapsaret Residence", loc: "Eldoret", img: "/kapsaret%201.jpg" }
                ].map((p, i) => (
                  <Link key={i} to={`/work/${p.id}`} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
                    <Card className="group overflow-hidden border-none shadow-lg rounded-2xl h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img src={p.img} alt={p.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                          <div className="text-white">
                            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{p.loc}</p>
                            <p className="font-bold text-lg">{p.title}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { id: "modern-apartment-complex", title: "Modern Apartment Complex", loc: "Nairobi", img: "/Apartment%204.jpg" },
                  { id: "kitale-restaurant-renovation", title: "Kitale Restaurant Expansion", loc: "Kitale", img: "/Liuwa%20Gardens%201.jpg" }
                ].map((p, i) => (
                  <Link key={i} to={`/work/${p.id}`}>
                    <Card className="group overflow-hidden border-none shadow-lg rounded-2xl h-full">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img src={p.img} alt={p.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                          <div className="text-white">
                            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{p.loc}</p>
                            <p className="font-bold text-2xl">{p.title}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hotels" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {[
                  { id: "liuwa-gardens", title: "Liuwa Gardens", loc: "Kenya", img: "/Liuwa%20Gardens%201.jpg" }
                ].map((p, i) => (
                  <Link key={i} to={`/work/${p.id}`}>
                    <Card className="group overflow-hidden border-none shadow-lg rounded-2xl h-full max-w-2xl">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img src={p.img} alt={p.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                          <div className="text-white">
                            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{p.loc}</p>
                            <p className="font-bold text-2xl">{p.title}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="landscaping" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {[
                  { id: "landscaping-design-portfolio", title: "Premium Landscaping & Outdoor Styling", loc: "Nairobi & Eldoret", img: "/Landscaping%201.jpeg" }
                ].map((p, i) => (
                  <Link key={i} to={`/work/${p.id}`}>
                    <Card className="group overflow-hidden border-none shadow-lg rounded-2xl h-full max-w-2xl">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img src={p.img} alt={p.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                          <div className="text-white">
                            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{p.loc}</p>
                            <p className="font-bold text-2xl">{p.title}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="management" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {[
                  { id: "project-management-portfolio", title: "Project Management & Site Supervision", loc: "Across Kenya", img: "/Project%20Management%204.png" }
                ].map((p, i) => (
                  <Link key={i} to={`/work/${p.id}`}>
                    <Card className="group overflow-hidden border-none shadow-lg rounded-2xl h-full max-w-2xl">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img src={p.img} alt={p.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                          <div className="text-white">
                            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{p.loc}</p>
                            <p className="font-bold text-2xl">{p.title}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
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

      {/* Integrated Utility: Material Estimator */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary">Integrated Tools</Badge>
              <h2 className="text-4xl font-bold mb-6">Kenya's Most Accurate <br/>Construction Material Estimator</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We provide immediate value through technical transparency. Use our custom estimator 
                to calculate building material requirements for your project, factoring in Kenyan construction standards 
                and professional wastage rules.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  10% Wastage Buffer included by default
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Based on Kenyan construction standards
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Real-time calculation for budgeting
                </li>
              </ul>
              <Link to="/engage">
                <Button className="rounded-full px-8">
                  Get a Detailed Quote
                  <Calculator className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-muted/10 p-4 sm:p-8 rounded-[40px] border border-border shadow-inner">
              <MaterialCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence - Lead with "NCA-Grade" */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative group overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="/Project Management 1.jpg" 
              alt="NCA Registered Technical Precision - Quality-verified building site management by Frah Spaces" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-wider">NCA Registered</p>
                  <p className="text-white/60">Category NCA5 & NCA6</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Badge variant="outline" className="mb-4 text-primary border-primary">Technical Excellence</Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">NCA-Grade Precision in <br/>Every Build</h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Our legacy is built on a foundation of professional standards and rigorous certifications. 
              Frah Spaces operates with the highest level of ethical professionalism, ensuring 
              that every structural element meets national quality management benchmarks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-white">Structural Integrity</h4>
                <p className="text-sm text-white/50">Meticulous engineering that exceeds safety standards and ensures longevity.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-white">Sustainable Ethics</h4>
                <p className="text-sm text-white/50">Prioritizing eco-friendly materials and energy-efficient designs for future-ready spaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Hub Preview */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4 text-primary border-primary">Knowledge Hub</Badge>
              <h2 className="text-4xl font-bold mb-4 text-foreground">Construction Insights for <br/>High-End Developers</h2>
            </div>
            <Link to="/blog">
              <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5">
                Read All Guides <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post: BlogPost) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="overflow-hidden group hover:shadow-xl transition-all border-none bg-background">
                  <div className="grid sm:grid-cols-5 h-full">
                    <div className="sm:col-span-2 overflow-hidden h-48 sm:h-full">
                      <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="sm:col-span-3 p-6 flex flex-col justify-center">
                      <Badge variant="outline" className="w-fit mb-3 text-[10px] uppercase tracking-wider">{post.category}</Badge>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
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
