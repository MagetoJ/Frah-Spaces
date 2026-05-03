import { useEffect, useState } from "react";
import { Button } from "@/react-app/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Award, Building2, PencilRuler, ClipboardList, Calculator, Hammer } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "@/react-app/components/ui/badge";
import { MaterialCalculator } from "@/react-app/components/MaterialCalculator";
import { Card } from "@/react-app/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/react-app/components/ui/tabs";
import { blogPosts, type BlogPost } from "@/react-app/data/blog";

export default function Home() {
  const [sliderPos, setSliderPos] = useState(50);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    "/Syokimau%201.jpeg",
    "/Experience%20(3).jpeg",
    "/Liuwa%20Gardens%201.jpg",
    "/Syokimau%202.jpg",
    "/kapsaret%201.jpg"
  ];

  useEffect(() => {
    document.title = "Frah Spaces | Leading Construction & Architecture Firm in East Africa";
    
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentHeroSlide ? "opacity-60" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                className={`w-full h-full object-cover ${
                  index === currentHeroSlide ? "animate-in fade-in zoom-in-110 duration-[10000ms] ease-out fill-mode-forwards" : ""
                }`}
                alt={`Frah Spaces Project Showcase ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="absolute inset-0 bg-slate-950/40" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary text-white px-4 py-1 text-xs uppercase tracking-[0.3em] font-black">Professional Precision</Badge>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white uppercase italic">
              Built to <br />
              <span className="text-primary italic">Endure.</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-xl font-medium border-l-4 border-primary pl-6">
              East Africa's premier quality-verified construction firm. We bridge the gap between architectural vision and structural reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/work">
                <Button size="lg" className="w-full sm:w-auto text-lg px-10 h-16 rounded-full font-black uppercase tracking-wider">
                  Explore Portfolio
                </Button>
              </Link>
              <Link to="/engage">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-10 h-16 rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 backdrop-blur-md font-black uppercase tracking-wider">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Showcase - Before & After */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-none">The Transformation</Badge>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-6">Reality <br/>Validated.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                See how we transform raw sites into architectural landmarks. Our "Zero Rework" policy ensures what you see in the design is exactly what we build.
              </p>
            </div>
            <div className="lg:col-span-3 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group cursor-ew-resize select-none">
              {/* After Image */}
              <div className="absolute inset-0">
                <img src="/Syokimau%202.jpg" alt="After Transformation" className="w-full h-full object-cover" />
              </div>
              
              {/* Before Image (Clipped) */}
              <div 
                className="absolute inset-0 border-r-2 border-white shadow-[10px_0_15px_-5px_rgba(0,0,0,0.5)] z-10" 
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img src="/Experience%20(3).jpeg" alt="Before Transformation" className="w-full h-full object-cover" />
              </div>

              {/* Slider Control Button */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-2xl z-20 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="flex gap-0.5">
                  <div className="w-1 h-4 bg-primary rounded-full" />
                  <div className="w-1 h-4 bg-primary rounded-full" />
                </div>
              </div>

              {/* Range Input for Sliding */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPos} 
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
              />
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
                  loading="lazy"
                  decoding="async"
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
            {/* Pillar I: Design - Indigo Theme */}
            <div className="flex flex-col h-full bg-indigo-50/50 dark:bg-indigo-950/20 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900 shadow-sm transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                  <PencilRuler className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Pillar I: Design</h2>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow text-sm text-left">
                Expertise in design means understanding spatial functionality, building codes, and material science. It is the production of a coordinated architectural vision that takes into account the users needs/resources, latest developments, and environmental qualities.
              </p>
              <div className="grid grid-cols-1 gap-2 mb-8 text-sm text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  Architectural & Structural
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  Mechanical, Electrical & Plumbing (MEP)
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  Interior & Landscaping
                </div>
              </div>
              <Link to="/services" className="mt-auto">
                <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  Explore Design
                </Button>
              </Link>
            </div>

            {/* Pillar II: Construction - Blue Theme */}
            <div className="flex flex-col h-full bg-blue-50/50 dark:bg-blue-950/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-900 shadow-sm transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <Hammer className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Pillar II: Construction</h2>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow text-sm text-left">
                We manage the physical assembly—from foundations to the building envelope. We leverage our supply chain to source, verify, and deliver high-spec materials while managing specialized tools and heavy machinery.
              </p>
              <div className="grid grid-cols-1 gap-2 mb-8 text-sm text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  Turnkey / EPC Framework
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  Labour-Based Model
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  Strategic Supplies & Logistics
                </div>
              </div>
              <Link to="/services" className="mt-auto">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Construction
                </Button>
              </Link>
            </div>

            {/* Pillar III: Project Management - Sky Theme */}
            <div className="flex flex-col h-full bg-sky-50/50 dark:bg-sky-950/20 p-8 rounded-3xl border border-sky-100 dark:border-sky-900 shadow-sm transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Pillar III: PM</h2>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow text-sm text-left">
                This layer enforces fiduciary oversight through systematic auditing, scheduling, and QA/QC. We ensure technical integrity is never compromised for speed, validating each stage against the BIM model for zero rework.
              </p>
              <div className="grid grid-cols-1 gap-2 mb-8 text-sm text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  Fiduciary Oversight & Auditing
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  Zero Rework Policy (BIM)
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  Administrative Closeout
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
              <Badge className="mb-4 bg-primary/10 text-primary border-none">Portfolio Spotlight</Badge>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-6">A Legacy of <br/><span className="text-primary italic">Technical Excellence</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
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
            <div className="flex mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-white/50 dark:bg-slate-800/50 p-1 border border-border flex-wrap md:flex-nowrap">
                <TabsTrigger value="residential" className="px-4 md:px-6 py-2.5">Residential</TabsTrigger>
                <TabsTrigger value="commercial" className="px-4 md:px-6 py-2.5">Commercial</TabsTrigger>
                <TabsTrigger value="hotels" className="px-4 md:px-6 py-2.5">Hotels</TabsTrigger>
                <TabsTrigger value="landscaping" className="px-4 md:px-6 py-2.5">Landscaping</TabsTrigger>
                <TabsTrigger value="management" className="px-4 md:px-6 py-2.5">Management</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="residential" className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Masonry Grid for Residential Projects */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {[
                  { id: "siri-africa-a-frame", title: "Siri Africa A-Frame", loc: "Tigoni, Kiambu", img: "/Siri%20A%20frame%20house%206%20(1).jpg" },
                  { id: "interior-design-1", title: "Premium Interior Design", loc: "Nairobi", img: "/Interior%201.jpeg" },
                  { id: "interior-detail-3", title: "Interior Finishes", loc: "Nairobi", img: "/Interior%203.jpeg" },
                  { id: "interior-detail-4", title: "Modern Styling", loc: "Nairobi", img: "/interior%204.jpeg" },
                  { id: "interior-detail-5", title: "Bespoke Interiors", loc: "Nairobi", img: "/Interior%205.jpeg" },
                  { id: "interior-detail-6", title: "Interior Experience", loc: "Nairobi", img: "/Interior%206.mp4" },
                  { id: "eldoret-clubhouse", title: "Eldoret Clubhouse", loc: "Eldoret", img: "/Eldoret%20clubhouse%201.jpg" },
                  { id: "experience-1", title: "Project Experience", loc: "East Africa", img: "/Experience%20(1).jpeg" },
                  { id: "experience-2", title: "Quality Verification", loc: "East Africa", img: "/Experience%20(2).jpeg" },
                  { id: "experience-4", title: "Site Mobilization", loc: "East Africa", img: "/Experience%20(4).jpeg" },
                  { id: "experience-5", title: "Material Excellence", loc: "East Africa", img: "/Experience%20(5).jpeg" },
                  { id: "experience-6", title: "Technical Precision", loc: "East Africa", img: "/Experience%20(6).jpeg" },
                  { id: "experience-7", title: "Architectural Vision", loc: "East Africa", img: "/Experience%20(7).jpeg" },
                  { id: "experience-8", title: "Project Milestones", loc: "East Africa", img: "/Experience%20(8).jpeg" },
                  
                  { id: "experience-10", title: "Client Delivery", loc: "East Africa", img: "/Experience%20(10).jpeg" }
                ].map((p, i) => (
                  <div key={i}>
                    <Card className="group relative overflow-hidden border-none shadow-xl rounded-[40px] break-inside-avoid-column transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                      <div className="relative overflow-hidden">
                        {p.img.endsWith('.mp4') ? (
                          <video 
                            src={p.img} 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            className="object-cover w-full h-full min-h-[300px] transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <img 
                            src={p.img} 
                            alt={p.title} 
                            className="object-cover w-full h-full min-h-[300px] transition-transform duration-700 group-hover:scale-110" 
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                        {/* Enhanced Glassmorphism Overlay */}
                        <div className="absolute inset-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-[32px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-8 scale-90 group-hover:scale-100 shadow-2xl">
                          <div className="text-white space-y-4">
                            <Badge className="bg-primary/20 backdrop-blur-sm border-primary/30 text-white text-[10px] uppercase tracking-widest">{p.loc}</Badge>
                            <h3 className="font-black text-3xl uppercase tracking-tighter leading-tight">{p.title}</h3>
                            <Button size="sm" variant="secondary" className="rounded-full font-black uppercase text-xs tracking-wider px-6 h-10 shadow-lg shadow-black/20">
                              View Project
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-0">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {[
                  { id: "modern-apartment-complex", title: "Modern Apartment Complex", loc: "Nairobi", img: "/Apartment%204.jpg" }
                ].map((p, i) => (
                  <div key={i}>
                    <Card className="group overflow-hidden border-none shadow-lg rounded-2xl h-full">
                      <div className="relative overflow-hidden">
                        <img 
                          src={p.img} 
                          alt={p.title} 
                          className="object-cover w-full h-full min-h-[250px] transition-transform duration-700 group-hover:scale-110" 
                          loading="lazy"
                          decoding="async"
                        />
                        {/* Glassmorphism Hover Overlay */}
                        <div className="absolute inset-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-6 scale-95 group-hover:scale-100">
                          <div className="text-white space-y-3">
                            <Badge variant="outline" className="text-white border-white/40">{p.loc}</Badge>
                            <h3 className="font-black text-2xl uppercase tracking-tighter">{p.title}</h3>
                            <Button size="sm" variant="secondary" className="rounded-full font-bold">
                              View Project
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hotels" className="mt-0">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {[
                  { id: "liuwa-gardens", title: "Liuwa Gardens", loc: "Kenya", img: "/Liuwa%20Gardens%203.jpg" }
                ].map((p, i) => (
                  <div key={i}>
                    <Card className="group overflow-hidden border-none shadow-lg rounded-2xl h-full max-w-2xl">
                      <div className="relative overflow-hidden">
                        <img 
                          src={p.img} 
                          alt={p.title} 
                          className="object-cover w-full h-full min-h-[250px] transition-transform duration-700 group-hover:scale-110" 
                          loading="lazy"
                          decoding="async"
                        />
                        {/* Glassmorphism Hover Overlay */}
                        <div className="absolute inset-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-6 scale-95 group-hover:scale-100">
                          <div className="text-white space-y-3">
                            <Badge variant="outline" className="text-white border-white/40">{p.loc}</Badge>
                            <h3 className="font-black text-2xl uppercase tracking-tighter">{p.title}</h3>
                            <Button size="sm" variant="secondary" className="rounded-full font-bold">
                              View Project
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="landscaping" className="mt-0">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {[
                  { id: "landscaping-design-portfolio", title: "Premium Landscaping & Outdoor Styling", loc: "Nairobi & Eldoret", img: "/Landscaping%201.jpeg" }
                ].map((p, i) => (
                  <div key={i}>
                    <Card className="group overflow-hidden border-none shadow-lg rounded-2xl h-full max-w-2xl">
                      <div className="relative overflow-hidden">
                        <img 
                          src={p.img} 
                          alt={p.title} 
                          className="object-cover w-full h-full min-h-[250px] transition-transform duration-700 group-hover:scale-110" 
                          loading="lazy"
                          decoding="async"
                        />
                        {/* Glassmorphism Hover Overlay */}
                        <div className="absolute inset-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-6 scale-95 group-hover:scale-100">
                          <div className="text-white space-y-3">
                            <Badge variant="outline" className="text-white border-white/40">{p.loc}</Badge>
                            <h3 className="font-black text-2xl uppercase tracking-tighter">{p.title}</h3>
                            <Button size="sm" variant="secondary" className="rounded-full font-bold">
                              View Project
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="management" className="mt-0">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {[
                  { id: "project-management-portfolio", title: "Project Management & Site Supervision", loc: "Across Kenya", img: "/Project%20Management%204.png" }
                ].map((p, i) => (
                  <div key={i}>
                    <Card className="group overflow-hidden border-none shadow-lg rounded-2xl h-full max-w-2xl">
                      <div className="relative overflow-hidden">
                        <img 
                          src={p.img} 
                          alt={p.title} 
                          className="object-cover w-full h-full min-h-[250px] transition-transform duration-700 group-hover:scale-110" 
                          loading="lazy"
                          decoding="async"
                        />
                        {/* Glassmorphism Hover Overlay */}
                        <div className="absolute inset-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-6 scale-95 group-hover:scale-100">
                          <div className="text-white space-y-3">
                            <Badge variant="outline" className="text-white border-white/40">{p.loc}</Badge>
                            <h3 className="font-black text-2xl uppercase tracking-tighter">{p.title}</h3>
                            <Button size="sm" variant="secondary" className="rounded-full font-bold">
                              View Project
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
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
              src="/Project%20Management%201.jpg" 
              alt="NCA Registered Technical Precision - Quality-verified building site management by Frah Spaces" 
              loading="lazy"
              decoding="async"
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
                <p className="text-sm text-white/75">Meticulous engineering that exceeds safety standards and ensures longevity.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-white">Sustainable Ethics</h4>
                <p className="text-sm text-white/75">Prioritizing eco-friendly materials and energy-efficient designs for future-ready spaces.</p>
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
                      <img 
                        src={post.image} 
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
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
