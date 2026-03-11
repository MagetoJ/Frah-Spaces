import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Mail, MessageCircle, Phone, Ruler, Hammer } from "lucide-react";

export default function ArchitecturalDesigns() {
  const options = ["Conceptual Design", "Detailed Blueprints", "3D Visualization", "Structural Engineering"];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/254711441245?text=Hi, I'm interested in learning more about your Architectural Designs services.`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:admin@frahspaces.com?subject=Inquiry about Architectural Designs services`;
  };

  const handleCall = () => {
    window.location.href = "tel:+254711441245";
  };

  return (
    <div className="pb-20">
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-4">Our Expertise</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Architectural
            <span className="block text-primary">Designs</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Focusing on conceptualization, 3D rendering, and structural planning to transform your vision into a reality.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="border-2 hover:border-primary/50 transition-all max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Ruler className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Service Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our visionary architectural team transforms concepts into structural masterpieces, blending aesthetic elegance with functional brilliance.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {options.map((option, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium p-3 bg-muted/30 rounded-lg border border-border">
                    <Hammer className="w-4 h-4 text-primary" />
                    {option}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border">
                <Button onClick={handleEmail} variant="outline" className="flex-1 gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Button>
                <Button onClick={handleWhatsApp} variant="outline" className="flex-1 gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
                <Button onClick={handleCall} className="flex-1 gap-2">
                  <Phone className="w-4 h-4" />
                  Direct Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
