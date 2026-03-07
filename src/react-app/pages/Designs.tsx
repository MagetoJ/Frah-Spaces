import { Card, CardContent } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/react-app/components/ui/dialog";
import { Palette, Maximize2, Layout, Home, Building, Layers, Mail, MessageCircle, Phone } from "lucide-react";

export default function Designs() {
  const designCategories = [
    {
      title: "Kitchens",
      icon: Layout,
      description: "Modern, ergonomic kitchen layouts with premium finishes and smart storage solutions.",
      projects: [
        { name: "Modern Minimalist Kitchen", image: "/design 2.jpg", type: "3D Rendering" },
        { name: "Luxury Island Concept", image: "/design 3.jpg", type: "Floor Plan" }
      ]
    },
    {
      title: "Living Spaces",
      icon: Home,
      description: "Inviting residential interiors that maximize natural light and promote comfort.",
      projects: [
        { name: "Open-plan Living Room", image: "/design 4.jpg", type: "3D Rendering" },
        { name: "Master Suite Concept", image: "/design 5.jpg", type: "Interior Design" }
      ]
    },
    {
      title: "Commercial Fit-outs",
      icon: Building,
      description: "Professional office and retail designs tailored for productivity and brand identity.",
      projects: [
        { name: "Modern Co-working Space", image: "/design 6.jpg", type: "3D Rendering" },
        { name: "Retail Boutique Layout", image: "/design 7.jpg", type: "Floor Plan" }
      ]
    },
    {
      title: "Flooring",
      icon: Layers,
      description: "Premium tiling and floor finish concepts for elegant and durable interior surfaces.",
      projects: [
        { name: "Modern Ceramic Tiling", image: "/tiles 1.jpg", type: "Interior Design" },
        { name: "Luxury Porcelain Layout", image: "/tiles 2.jpg", type: "3D Rendering" }
      ]
    }
  ];

  const handleWhatsApp = (item: string) => {
    window.open(`https://wa.me/254711441245?text=Hi, I'm interested in the ${item} design.`, "_blank");
  };

  const handleEmail = (item: string) => {
    window.location.href = `mailto:admin@frahspaces.com?subject=Inquiry about ${item} design`;
  };

  const handleCall = () => {
    window.location.href = "tel:+254711441245";
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-4">Visual Studio</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Visionary
            <span className="block text-primary">Designs & Concepts</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From photorealistic 3D renderings to detailed architectural floor plans, 
            we bring your future spaces to life with precision and creativity.
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {designCategories.map((category, cIdx) => (
            <div key={cIdx} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.projects.map((project, pIdx) => (
                  <Card key={pIdx} className="group overflow-hidden border-2 hover:border-primary/50 transition-all shadow-sm">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="secondary" className="gap-2">
                              <Maximize2 className="w-4 h-4" />
                              View Full Design
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-transparent shadow-none">
                            <DialogHeader className="sr-only">
                              <DialogTitle>{project.name}</DialogTitle>
                            </DialogHeader>
                            <div className="relative w-full aspect-video">
                              <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-xl" />
                              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/80 backdrop-blur-md rounded-xl border border-border">
                                <Badge className="mb-2">{project.type}</Badge>
                                <h3 className="text-2xl font-bold">{project.name}</h3>
                                <p className="text-muted-foreground mt-2">Part of our {category.title} portfolio. Available for customization.</p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                  <Button className="gap-2" onClick={() => handleWhatsApp(project.name)}>
                                    <MessageCircle className="w-4 h-4" /> WhatsApp
                                  </Button>
                                  <Button variant="outline" className="gap-2" onClick={() => handleEmail(project.name)}>
                                    <Mail className="w-4 h-4" /> Email
                                  </Button>
                                  <Button variant="outline" className="gap-2" onClick={handleCall}>
                                    <Phone className="w-4 h-4" /> Call
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge variant="outline" className="mb-2">{project.type}</Badge>
                            <h3 className="text-xl font-bold">{project.name}</h3>
                          </div>
                          <Palette className="w-5 h-5 text-primary" />
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 gap-1 text-[11px] px-1"
                            onClick={() => handleEmail(project.name)}
                          >
                            <Mail className="w-3.5 h-3.5" /> Email
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 gap-1 text-[11px] px-1"
                            onClick={() => handleWhatsApp(project.name)}
                          >
                            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 gap-1 text-[11px] px-1 border-primary/20 hover:bg-primary hover:text-white"
                            onClick={handleCall}
                          >
                            <Phone className="w-3.5 h-3.5" /> Call
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

      {/* Service Philosophy */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Why Our Designs Stand Out</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Advanced 3D Modeling</h4>
                    <p className="text-muted-foreground">We use industry-leading software to create accurate 3D representations of your project.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Layout className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Functional Planning</h4>
                    <p className="text-muted-foreground">Beauty meets utility. Every floor plan is optimized for flow and spatial efficiency.</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="h-14 px-8 text-lg" onClick={() => handleWhatsApp("General Design Consultation")}>
                Book a Design Consultation
              </Button>
            </div>
            <div className="bg-primary rounded-3xl p-1 shadow-2xl overflow-hidden">
               <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592dee58c460?w=800&q=80')" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
