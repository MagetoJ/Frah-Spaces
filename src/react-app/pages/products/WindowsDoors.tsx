import { useState } from "react";
import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Mail, MessageCircle, Phone, Check, ArrowRight, X } from "lucide-react";

export default function WindowsDoors() {
  const [showDoors, setShowDoors] = useState(false);

  const doors = [
    { 
      name: "Mahogany Solid Doors", 
      specs: "Premium handcrafted mahogany entrance doors with superior finish",
      image: "/Mahogany doors 2.jpg"
    },
    { 
      name: "Engineered Wood Doors", 
      specs: "Modern composite doors combining durability with aesthetic wood grains",
      image: "/Engineered Wood Doors 2.jpg"
    },
    { 
      name: "Security Steel Doors", 
      specs: "High-grade reinforced steel doors for maximum residential security",
      image: "/Steel Doors.jpg"
    },
    { 
      name: "Classic Panel Doors", 
      specs: "Traditional internal doors featuring elegant raised panel designs",
      image: "/panel-doors.jpg"
    },
    { 
      name: "Flush Finish Doors", 
      specs: "Sleek and minimalist internal doors for contemporary spaces",
      image: "/Flush Doors 2.png"
    }
  ];

  const windows = [
    { 
      name: "Aluminum Windows", 
      specs: "Modern slimline aluminum designs for maximum panoramic views with durable thermal break solutions",
      image: "/Aluminium 1.jpg"
    }
  ];

  const handleWhatsApp = (item: string, phone = "254721175735") => {
    window.open(`https://wa.me/${phone}?text=Hello Frah Spaces, I'm interested in ${item}. Could you please provide more information?`, "_blank");
  };

  const handleEmail = (item: string) => {
    window.location.href = `mailto:admin@frahspaces.com?subject=Product Inquiry: ${item}`;
  };

  const handleCall = (phone = "254721175735") => {
    window.location.href = `tel:+${phone}`;
  };

  return (
    <div className="pb-20">
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-4">Product Catalog</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Windows &
            <span className="block text-primary">Doors</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Highlighting security, insulation, and style with our premium window and door solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Unified Doors Card */}
            {!showDoors ? (
              <Card 
                onClick={() => setShowDoors(true)}
                className="group overflow-hidden border-2 border-primary/20 hover:border-primary transition-all flex flex-col shadow-2xl cursor-pointer bg-gradient-to-br from-white to-primary/5 relative"
              >
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <img 
                    src="/Mahogany doors 2.jpg" 
                    alt="Doors Collection" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors flex items-end justify-center pb-8">
                    <div className="bg-primary text-white px-8 py-3 rounded-full font-bold flex items-center gap-3 shadow-2xl group-hover:scale-105 transition-all hover:bg-primary/90">
                      Explore Doors Collection
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 backdrop-blur-md border-0 shadow-lg px-4 py-1.5 uppercase tracking-wider text-[10px] font-bold">{doors.length} Luxury Styles</Badge>
                  </div>
                </div>
                <CardContent className="p-10 flex-1 flex flex-col items-center justify-center text-center">
                  <h3 className="text-3xl font-bold mb-3 tracking-tight">Premium Door Series</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                    Exquisite craftsmanship in Mahogany, Steel, and Engineered wood for statement entrances.
                  </p>
                </CardContent>
              </Card>
            ) : (
              // Individual Door Cards
              <>
                <div className="lg:col-span-3 flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-primary/5 p-6 rounded-3xl border-2 border-primary/10 backdrop-blur-sm">
                  <div>
                    <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center">
                        <Check className="w-6 h-6" />
                      </div>
                      Premium Door Catalog
                    </h2>
                    <p className="text-muted-foreground mt-1 ml-13">Browse our curated selection of high-performance doors</p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowDoors(false)}
                    className="gap-2 rounded-full px-6 border-destructive/30 text-destructive hover:bg-destructive hover:text-white transition-all shadow-sm"
                  >
                    <X className="w-4 h-4" />
                    Exit Catalog
                  </Button>
                </div>
                {doors.map((item, idx) => (
                  <Card key={`door-${idx}`} className="group overflow-hidden border-2 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 flex flex-col animate-in fade-in slide-in-from-bottom-6 delay-75">
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-indigo-600/90 backdrop-blur-md border-0 shadow-xl px-3 py-1 font-semibold">Premium Finish</Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{item.name}</h3>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                        {item.specs}
                      </p>
                      
                      <div className="mt-auto space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" className="h-12 border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors gap-2" onClick={() => handleEmail(item.name)}>
                            <Mail className="w-4 h-4 text-primary" />
                            <span className="text-[10px] uppercase font-bold tracking-widest">Email</span>
                          </Button>
                          <Button 
                            variant="outline" 
                            className="h-12 border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors gap-2" 
                            onClick={() => handleWhatsApp(item.name, "254721175735")}
                          >
                            <MessageCircle className="w-4 h-4 text-primary" />
                            <span className="text-[10px] uppercase font-bold tracking-widest">WhatsApp</span>
                          </Button>
                        </div>
                        <Button className="w-full h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all gap-2" onClick={() => handleCall("254721175735")}>
                          <Phone className="w-4 h-4" />
                          <span className="text-[10px] uppercase font-bold tracking-widest">Inquire Now</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </>
            )}

            {/* Window Cards */}
            {windows.map((item, idx) => (
              <Card key={`window-${idx}`} className="group overflow-hidden border-2 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-indigo-600/90 backdrop-blur-md border-0 shadow-xl px-3 py-1 font-semibold">Verified Quality</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{item.name}</h3>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {item.specs}
                  </p>
                  
                  <div className="mt-auto space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-12 border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors gap-2" onClick={() => handleEmail(item.name)}>
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Email</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="h-12 border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors gap-2" 
                        onClick={() => handleWhatsApp(item.name, "254721175735")}
                      >
                        <MessageCircle className="w-4 h-4 text-primary" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">WhatsApp</span>
                      </Button>
                    </div>
                    <Button className="w-full h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all gap-2" onClick={() => handleCall("254721175735")}>
                      <Phone className="w-4 h-4" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Inquire Now</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
