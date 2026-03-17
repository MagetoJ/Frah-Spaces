import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Mail, MessageCircle, Phone, Check } from "lucide-react";

export default function Flooring() {
  const items = [
    { 
      name: "Designer Tiles", 
      specs: "Premium Ceramic & Porcelain flooring solutions",
      image: "/tiles 1.jpg"
    },
    { 
      name: "Luxury Porcelain", 
      specs: "High-end porcelain tiles for elegant interiors",
      image: "/tiles 2.jpg"
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
            Flooring
            <span className="block text-primary">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Detailing options like tiling, wood, or polished concrete for a sophisticated interior.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, idx) => (
              <Card key={idx} className="group overflow-hidden border-2 hover:border-primary/50 transition-all flex flex-col shadow-sm">
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-indigo-500 border-0 shadow-lg">Verified Quality</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg">
                    {item.specs}
                  </p>
                  
                  <div className="mt-auto flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="flex-1 h-auto py-2.5 gap-1" onClick={() => handleEmail(item.name)}>
                        <Mail className="w-4 h-4" />
                        <span className="text-[9px] uppercase font-bold">Email</span>
                      </Button>
                      <div className="flex gap-1">
                        <Button variant="outline" className="flex-[2] h-auto py-2.5 gap-1" onClick={() => handleWhatsApp(item.name, "254721175735")}>
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-[9px] uppercase font-bold">WhatsApp</span>
                        </Button>
                        <Button variant="outline" className="flex-1 h-auto py-2.5 text-[8px] font-bold opacity-70" onClick={() => handleWhatsApp(item.name, "254711441245")}>
                          Alt
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button className="flex-[2] h-auto py-2.5 gap-1" onClick={() => handleCall("254721175735")}>
                        <Phone className="w-4 h-4" />
                        <span className="text-[9px] uppercase font-bold">Call</span>
                      </Button>
                      <Button variant="outline" className="flex-1 h-auto py-2.5 text-[9px] font-bold opacity-80" onClick={() => handleCall("254711441245")}>
                        Alt
                      </Button>
                    </div>
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
