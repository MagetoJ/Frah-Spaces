import { Card, CardContent } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { Building2, Shield, Mail, MessageCircle, Phone, Hammer, Ruler, Briefcase, Layout, Globe } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      icon: Ruler,
      title: "Architectural Designs",
      description: "Our visionary architectural team transforms concepts into structural masterpieces, blending aesthetic elegance with functional brilliance.",
      options: ["Conceptual Design", "Detailed Blueprints", "3D Visualization", "Structural Engineering"]
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Expert building solutions executed with precision. We oversee every detail of the build to ensure the highest standards of quality and safety.",
      options: ["Residential Development", "Commercial Builds", "Renovations & Fit-outs", "Quality Control & Safety"]
    },
    {
      icon: Layout,
      title: "Interior Design",
      description: "Creating bespoke interior environments that reflect your personality. We focus on luxury, comfort, and sophisticated material selection.",
      options: ["Space Planning", "Gypsum & Finishes", "Custom Cabinetry", "Furniture Selection"]
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Seamless coordination of every project phase. We manage timelines, budgets, and contractors to deliver a stress-free client experience.",
      options: ["Timeline Management", "Budget Optimization", "Contractor Oversight", "Risk Mitigation"]
    },
    {
      icon: Shield,
      title: "Consultancy",
      description: "Expert advice at every step. We provide strategic guidance on land use, regulatory compliance, and investment feasibility.",
      options: ["Feasibility Studies", "Statutory Approvals", "Material Selection", "Cost Estimation"]
    },
    {
      icon: Globe,
      title: "Outdoor Design",
      description: "Extending luxury beyond your four walls. We design and implement stunning landscapes and outdoor living spaces.",
      options: ["Landscaping", "Outdoor Paving", "Lighting Design", "Garden Elements"]
    }
  ];

  const handleWhatsApp = (service: string) => {
    window.open(`https://wa.me/254711441245?text=Hi, I'm interested in learning more about your ${service} services.`, "_blank");
  };

  const handleEmail = (service: string) => {
    window.location.href = `mailto:admin@frahspaces.com?subject=Inquiry about ${service} services`;
  };

  const handleCall = () => {
    window.location.href = "tel:+254711441245";
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-4">Our Expertise</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Multi-Disciplinary
            <span className="block text-primary">Service Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From high-level construction to specialized interior finishes, we provide 
            comprehensive solutions with direct support at every stage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-all flex flex-col h-full">
                <CardContent className="p-8 flex-1">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {category.options.map((option, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-2 text-sm font-medium p-3 bg-muted/30 rounded-lg border border-border">
                        <Hammer className="w-4 h-4 text-primary" />
                        {option}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <div className="p-8 pt-0 border-t border-border mt-auto bg-muted/10 rounded-b-xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => handleEmail(category.title)} 
                      variant="outline" 
                      className="flex-1 gap-2 border-primary/20 hover:bg-primary/5"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </Button>
                    <Button 
                      onClick={() => handleWhatsApp(category.title)} 
                      variant="outline" 
                      className="flex-1 gap-2 border-primary/20 hover:bg-primary/5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Button>
                    <Button 
                      onClick={handleCall} 
                      className="flex-1 gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Direct Call
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">70+</div>
              <p className="text-primary-foreground/70 uppercase tracking-widest text-sm">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <p className="text-primary-foreground/70 uppercase tracking-widest text-sm">Counties Covered</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-primary-foreground/70 uppercase tracking-widest text-sm">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <p className="text-primary-foreground/70 uppercase tracking-widest text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl -ml-10 -mb-10" />
      </section>
    </div>
  );
}
