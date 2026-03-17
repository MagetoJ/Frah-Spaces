import { Card, CardContent, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/react-app/components/ui/dialog";
import { Truck, Drill, Settings, ChevronRight } from "lucide-react";

export default function Equipment() {
  const equipmentList = [
    {
      category: "Heavy Machinery",
      icon: Truck,
      description: "Our core fleet of earthmoving and construction vehicles, maintained for peak performance.",
      items: [
        {
          name: "Crawler Excavator",
          specs: "20 Ton, 1.0m³ bucket capacity",
          details: "High-performance excavator suitable for major earthmoving, trenching, and foundation work. Fuel-efficient and maintained to the highest standards.",
          usage: "Available for Rent & Project Contracts",
          tech: ["Engine Power: 110kW", "Max Dig Depth: 6.5m", "Operating Weight: 21,500kg"],
          image: "/Excavator.jpg"
        },
        {
          name: "Backhoe Loader",
          specs: "4x4 Turbo, Extendable dipper",
          details: "Versatile machine for urban construction and site preparation. Combines the capabilities of a wheel loader and an excavator.",
          usage: "Available for Hourly & Daily Rates",
          tech: ["Engine Power: 74kW", "Max Speed: 40km/h", "Bucket Capacity: 1.1m³"],
          image: "/backhoe-parts-hec-scaled-1.jpg"
        },
        {
          name: "Bulldozer",
          specs: "D6 Series, High Track",
          details: "Powerful earthmoving equipment for clearing, grading, and site leveling. Designed for durability and efficiency in tough terrains.",
          usage: "Available for Site Preparation",
          tech: ["Blade Capacity: 5.6m³", "Operating Weight: 22,000kg", "Engine Power: 145kW"],
          image: "/Bulldozer.jpg"
        },
        {
          name: "Motor Grader",
          specs: "14ft Moldboard, Ripper included",
          details: "Essential for precise grading and road maintenance. Ensures accurate leveling and surface finishing for civil engineering projects.",
          usage: "Available for Road Works",
          tech: ["Engine Power: 142kW", "Moldboard Width: 4.3m", "Operating Weight: 18,500kg"],
          image: "/Grader.jpg"
        },
        {
          name: "Tipper Truck",
          specs: "15-20 Ton capacity",
          details: "Reliable logistics solution for transporting aggregates, earth, and building materials to and from project sites.",
          usage: "Available for Haulage & Disposal",
          tech: ["Volume Capacity: 18m³", "Payload: 20,000kg", "Drive: 6x4"],
          image: "/Tipper 2.jpg"
        },
        {
          name: "Concrete Mixer Truck",
          specs: "9m³ Transit Mixer",
          details: "High-capacity transit mixer for delivering ready-mix concrete. Features advanced mixing controls and fast discharge rates.",
          usage: "Available for Large Pours",
          tech: ["Drum Volume: 14.5m³", "Filling Ratio: 62%", "Chassis: Zoomlion Heavy Duty"],
          image: "/Zoomlion-9m3-Concrete-Trucks-Mixer.avif"
        }
      ]
    },
    {
      category: "Specialized Technical Tools",
      icon: Drill,
      description: "Precision tools for demolition, material handling, and site-specific technical tasks.",
      items: [
        {
          name: "Rock Breaker",
          specs: "Hydraulic, for 20 Ton Excavators",
          details: "High-impact breaker for demolition and rock excavation. Compatible with our 20-ton crawler excavators for maximum power.",
          usage: "Available with Excavator Hire",
          tech: ["Impact Force: 4500J", "Tool Diameter: 140mm", "Operating Pressure: 160bar"],
          image: "/rock-breaker-for-20-ton-excavator.jpg"
        },
        {
          name: "Portable Concrete Mixer",
          specs: "Drum mixer with integrated pump",
          details: "Efficient solution for on-site mixing and pumping. Ideal for smaller projects and tight access locations.",
          usage: "Available for Daily Rental",
          tech: ["Drum Capacity: 450L", "Pump Output: 30m³/h", "Vertical Reach: 50m"],
          image: "/Portable-Concrete-Mixer-with-Pump.jpg"
        },
        {
          name: "Jack Hammers",
          specs: "Pneumatic & Electric Heavy Duty",
          details: "Industrial-grade hammers for breaking concrete, asphalt, and masonry. Available in various sizes for different demolition needs.",
          usage: "Available for Short-term Rental",
          tech: ["Impact Rate: 1300bpm", "Bit Type: Hex Shank", "Weight: 30kg"],
          image: "/Jack Hammers.jpg"
        },
        {
          name: "Industrial Forklift",
          specs: "3-5 Ton Lift Capacity",
          details: "Versatile material handling equipment for warehouses, loading bays, and site logistics. Features adjustable forks and high vertical reach.",
          usage: "Available for Loading & Logistics",
          tech: ["Lift Height: 4.5m", "Fuel Type: Diesel/Electric", "Fork Length: 1200mm"],
          image: "/forklift-1.png"
        }
      ]
    }
  ];

  const handleWhatsApp = (item: string, phone = "254721175735") => {
    window.open(`https://wa.me/${phone}?text=Hello Frah Spaces, I'm interested in renting/using the ${item}. Could you please provide more information?`, "_blank");
  };

  const handleEmail = (item: string) => {
    window.location.href = `mailto:admin@frahspaces.com?subject=Inquiry about ${item} equipment`;
  };

  const handleCall = (phone = "254721175735") => {
    window.location.href = `tel:+${phone}`;
  };

  return (
    <div className="pb-20">
      {/* Premium Hero Section */}
      <section className="relative py-24 bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Badge className="mb-4 bg-primary text-white border-0 hover:bg-primary/90">Asset Fleet 2024</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Industrial Power.
            <span className="block text-primary/80">Professional Precision.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            Access our certified fleet of heavy machinery and specialized tools. 
            We provide the mechanical muscle needed to drive your project from 
            excavation to completion.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20" onClick={() => handleCall()}>
              Talk to Logistics
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-bold border-white/20 hover:bg-white/10" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
              Browse Fleet
            </Button>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {equipmentList.map((section, sIdx) => (
            <div key={sIdx} className="mb-24 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <section.icon className="w-8 h-8" />
                    <span className="text-sm font-black uppercase tracking-[0.2em]">{section.category}</span>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight mb-4">{section.category}</h2>
                  <p className="text-muted-foreground text-lg">{section.description}</p>
                </div>
                <Badge variant="outline" className="h-8 px-4 text-xs font-bold">{section.items.length} Units Available</Badge>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, iIdx) => (
                  <Card key={iIdx} className="border-0 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full overflow-hidden bg-card">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="secondary" className="w-full font-bold h-11">
                              View Technical Specs
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl overflow-hidden p-0 border-none bg-zinc-950 text-white">
                            <div className="relative aspect-video w-full overflow-hidden">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-60" />
                              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex items-end p-8">
                                <div>
                                  <Badge className="mb-3 bg-primary border-0">{item.usage}</Badge>
                                  <DialogTitle className="text-4xl font-bold mb-2">{item.name}</DialogTitle>
                                  <DialogDescription className="text-zinc-400 text-lg font-medium">{item.specs}</DialogDescription>
                                </div>
                              </div>
                            </div>
                            <div className="p-10">
                              <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                  <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Unit Overview</h4>
                                  <p className="text-zinc-300 leading-relaxed italic">"{item.details}"</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Technical Data</h4>
                                  <div className="space-y-3">
                                    {item.tech.map((spec, tIdx) => (
                                      <div key={tIdx} className="flex justify-between items-center py-2 border-b border-white/10 text-sm">
                                        <span className="text-zinc-500">{spec.split(':')[0]}</span>
                                        <span className="font-bold text-zinc-200">{spec.split(':')[1] || spec}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                                <div className="flex flex-1 gap-2">
                                  <Button className="flex-[2] h-14 text-lg font-bold" onClick={() => handleWhatsApp(item.name, "254721175735")}>
                                    Book this Unit
                                  </Button>
                                  <Button variant="outline" className="flex-1 h-14 text-sm font-bold border-white/20 hover:bg-white/10 opacity-70" onClick={() => handleWhatsApp(item.name, "254711441245")}>
                                    Alt
                                  </Button>
                                </div>
                                <div className="flex flex-1 gap-2">
                                  <Button variant="outline" className="flex-[2] h-14 text-lg font-bold border-white/20 hover:bg-white/10" onClick={() => handleCall("254721175735")}>
                                    Talk to Logistics
                                  </Button>
                                  <Button variant="outline" className="flex-1 h-14 text-sm font-bold border-white/20 hover:bg-white/10 opacity-70" onClick={() => handleCall("254711441245")}>
                                    Alt
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <CardHeader className="p-6 pb-2">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-muted/50 font-semibold text-[10px] uppercase tracking-wider">{item.usage}</Badge>
                        <Settings className="w-4 h-4 text-muted-foreground/30" />
                      </div>
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{item.name}</CardTitle>
                      <p className="text-primary/70 text-sm font-bold mt-1 uppercase tracking-tighter">{item.specs}</p>
                    </CardHeader>
                    <CardContent className="p-6 pt-2 flex-1 flex flex-col">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2 italic">
                        {item.details}
                      </p>
                      <div className="mt-auto pt-6 border-t border-border/50 flex flex-col gap-3">
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="ghost" size="sm" className="h-10 text-[11px] font-bold uppercase hover:bg-primary/5 hover:text-primary border border-border/50" onClick={() => handleEmail(item.name)}>
                            Email
                          </Button>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm" className="flex-[2] h-10 text-[11px] font-bold uppercase hover:bg-primary/5 hover:text-primary border border-border/50" onClick={() => handleWhatsApp(item.name, "254721175735")}>
                              WhatsApp
                            </Button>
                            <Button variant="ghost" size="sm" className="flex-1 h-10 text-[9px] font-bold uppercase hover:bg-primary/5 hover:text-primary border border-border/50 opacity-60" onClick={() => handleWhatsApp(item.name, "254711441245")}>
                              Alt
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="ghost" size="sm" className="h-10 text-[11px] font-bold uppercase hover:bg-primary/5 hover:text-primary border border-border/50" onClick={() => handleCall("254721175735")}>
                            Call Primary
                          </Button>
                          <Button variant="ghost" size="sm" className="h-10 text-[11px] font-bold uppercase hover:bg-primary/5 hover:text-primary border border-border/50 opacity-60" onClick={() => handleCall("254711441245")}>
                            Call Alt
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Footer CTA */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Project Logistics?</h2>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            Our specialized logistics team helps you select the right equipment 
            for your terrain and project requirements. From one-day rentals to 
            full-scale construction contracts.
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold" onClick={() => window.open("https://wa.me/254721175735?text=Hello Frah Spaces, I'm interested in learning more about your equipment and logistics services. Could you please provide more information?", "_blank")}>
                Chat Primary
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg font-bold border-white/20 hover:bg-white/10 text-white opacity-80" onClick={() => window.open("https://wa.me/254711441245?text=Hello Frah Spaces, I'm interested in learning more about your equipment and logistics services. Could you please provide more information?", "_blank")}>
                Chat Alternative
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="link" className="text-zinc-400" onClick={() => handleCall("254721175735")}>
                Primary: +254 721 175 735
              </Button>
              <Button variant="link" className="text-zinc-400" onClick={() => handleCall("254711441245")}>
                Alternative: +254 711 441 245
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -ml-48 -mb-48" />
      </section>
    </div>
  );
}
