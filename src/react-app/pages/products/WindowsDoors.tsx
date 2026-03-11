import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Mail, MessageCircle, Phone, Check } from "lucide-react";

export default function WindowsDoors() {
  const items = [
    { 
      name: "Solid Wood Doors", 
      specs: "Custom mahogany and mvule entrance doors",
      image: "/bluegum 1.jpeg"
    },
    { 
      name: "Aluminum Windows", 
      specs: "Durable and stylish aluminum window solutions",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80"
    }
  ];

  const handleWhatsApp = (item: string) => {
    window.open(`https://wa.me/254711441245?text=Hi Frah Spaces, I am interested in ${item}.`, "_blank");
  };

  const handleEmail = (item: string) => {
    window.location.href = `mailto:admin@frahspaces.com?subject=Product Inquiry: ${item}`;
  };

  const handleCall = () => {
    window.location.href = "tel:+254711441245";
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
                  
                  <div className="mt-auto grid grid-cols-3 gap-3">
                    <Button variant="outline" className="flex-col h-auto py-3 gap-1" onClick={() => handleEmail(item.name)}>
                      <Mail className="w-4 h-4" />
                      <span className="text-[10px] uppercase font-bold">Email</span>
                    </Button>
                    <Button variant="outline" className="flex-col h-auto py-3 gap-1" onClick={() => handleWhatsApp(item.name)}>
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-[10px] uppercase font-bold">WhatsApp</span>
                    </Button>
                    <Button className="flex-col h-auto py-3 gap-1" onClick={handleCall}>
                      <Phone className="w-4 h-4" />
                      <span className="text-[10px] uppercase font-bold">Call</span>
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
