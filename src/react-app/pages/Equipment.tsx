import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/react-app/components/ui/dialog";
import { Truck, Drill, Ruler, Shield, Info, Settings, Hammer, Mail, MessageCircle, Phone } from "lucide-react";

export default function Equipment() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const equipmentList = [
    {
      category: "Heavy Machinery",
      icon: Truck,
      items: [
        {
          name: "Crawler Excavator",
          specs: "20 Ton, 1.0m³ bucket capacity",
          details: "High-performance excavator suitable for major earthmoving, trenching, and foundation work. Fuel-efficient and maintained to the highest standards.",
          usage: "Available for Rent & Project Contracts",
          tech: ["Engine Power: 110kW", "Max Dig Depth: 6.5m", "Operating Weight: 21,500kg"]
        },
        {
          name: "Backhoe Loader",
          specs: "4x4 Turbo, Extendable dipper",
          details: "Versatile machine for urban construction and site preparation. Combines the capabilities of a wheel loader and an excavator.",
          usage: "Available for Hourly & Daily Rates",
          tech: ["Engine Power: 74kW", "Max Speed: 40km/h", "Bucket Capacity: 1.1m³"]
        }
      ]
    },
    {
      category: "Specialized Technical Tools",
      icon: Drill,
      items: [
        {
          name: "Laser Total Station",
          specs: "High-precision 2\" accuracy",
          details: "Top-tier surveying equipment for precise site layout, volume calculations, and architectural mapping.",
          usage: "Available with Operator Only",
          tech: ["Range: 500m reflectorless", "Data Export: USB/Bluetooth", "Accuracy: 2mm + 2ppm"]
        },
        {
          name: "Industrial Core Drill",
          specs: "Up to 250mm diameter",
          details: "Heavy-duty concrete drilling equipment for plumbing, HVAC, and structural reinforcements.",
          usage: "Available for Daily Rental",
          tech: ["Power: 2400W", "Speed: 3-Speed gearbox", "Max Hole: 252mm"]
        }
      ]
    },
    {
      category: "Site Support & Safety",
      icon: Shield,
      items: [
        {
          name: "Scaffolding Systems",
          specs: "H-Frame & Cup-lock systems",
          details: "Modular scaffolding for safe vertical access. Certified for safety and easy to assemble on any terrain.",
          usage: "Available for Short & Long-term Lease",
          tech: ["Material: Galvanized Steel", "Load Rating: Heavy Duty", "Standard Height: Up to 30m"]
        }
      ]
    }
  ];

  const handleWhatsApp = (item: string) => {
    window.open(`https://wa.me/254711441245?text=Hi, I'm interested in renting/using the ${item}.`, "_blank");
  };

  const handleEmail = (item: string) => {
    window.location.href = `mailto:admin@frahspaces.com?subject=Inquiry about ${item} equipment`;
  };

  const handleCall = () => {
    window.location.href = "tel:+254711441245";
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4">Fleet & Tools</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Precision Power
              <span className="block text-primary">At Your Service</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Rent specialized tools and heavy machinery or leverage our modern 
              fleet for your next construction project. All equipment is safety-certified and regularly maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {equipmentList.map((section, sIdx) => (
            <div key={sIdx} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">{section.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item, iIdx) => (
                  <Card key={iIdx} className="border-2 hover:border-primary/50 transition-all flex flex-col h-full overflow-hidden shadow-sm">
                    <CardHeader className="p-8 pb-4">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="secondary" className="font-normal">{item.usage}</Badge>
                        <Settings className="w-5 h-5 text-muted-foreground/50" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{item.name}</CardTitle>
                      <p className="text-primary font-medium mt-1">{item.specs}</p>
                    </CardHeader>
                    <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                      <p className="text-muted-foreground mb-6 line-clamp-2">
                        {item.details}
                      </p>
                      
                      <div className="space-y-4 mt-auto">
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 gap-1"
                            onClick={() => handleEmail(item.name)}
                          >
                            <Mail className="w-3.5 h-3.5" /> Email
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 gap-1"
                            onClick={() => handleWhatsApp(item.name)}
                          >
                            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 gap-1 border-primary/20 hover:bg-primary hover:text-white"
                            onClick={handleCall}
                          >
                            <Phone className="w-3.5 h-3.5" /> Call
                          </Button>
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="w-full gap-2 text-primary hover:text-primary hover:bg-primary/5"
                              onClick={() => setSelectedItem(item)}
                            >
                              <Info className="w-4 h-4" />
                              Technical Specifications
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">{item.name}</DialogTitle>
                              <DialogDescription className="text-primary font-medium">{item.specs}</DialogDescription>
                            </DialogHeader>
                            <div className="grid md:grid-cols-2 gap-8 py-6">
                              <div>
                                <h4 className="font-bold mb-3 flex items-center gap-2">
                                  <Hammer className="w-4 h-4 text-primary" />
                                  Description
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {item.details}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-bold mb-3 flex items-center gap-2">
                                  <Ruler className="w-4 h-4 text-primary" />
                                  Key Specifications
                                </h4>
                                <ul className="space-y-2">
                                  {item.tech.map((spec, tIdx) => (
                                    <li key={tIdx} className="text-sm p-2 bg-muted rounded flex justify-between">
                                      {spec}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="pt-4 border-t flex flex-col sm:flex-row gap-3">
                              <Button className="flex-1 gap-2" onClick={() => handleWhatsApp(item.name)}>
                                <MessageCircle className="w-4 h-4" />
                                Check Availability Now
                              </Button>
                              <Button variant="outline" className="flex-1 gap-2" onClick={handleCall}>
                                <Phone className="w-4 h-4" />
                                Speak to Logistics
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rental Support */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Specialized Rental Support?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our logistics team can help you select the right equipment for your specific terrain and project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="gap-2" onClick={() => window.location.href="tel:+254711441245"}>
              <Phone className="w-5 h-5" />
              Call Support: 254 711 441245
            </Button>
            <Button size="lg" className="gap-2" onClick={() => window.open("https://wa.me/254711441245", "_blank")}>
              <MessageCircle className="w-5 h-5" />
              Chat with Logistics
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
