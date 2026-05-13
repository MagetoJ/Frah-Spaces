import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Textarea } from "@/react-app/components/ui/textarea";
import { Label } from "@/react-app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/react-app/components/ui/select";
import { Badge } from "@/react-app/components/ui/badge";
import { MessageCircle, Mail, Phone, MapPin, ArrowRight, PencilRuler, Hammer, ClipboardList, Instagram } from "lucide-react";

export default function Engage() {
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    document.title = "Contact Us | Build Your Dream Project with Frah Spaces";
  }, []); 

  const services = [
    {
      icon: PencilRuler,
      title: "Design",
      description: "Comprehensive design services from concept to detailed plans.",
      features: ["Floorplans", "2D renders", "3D renders"]
    },
    {
      icon: Hammer,
      title: "Construction",
      description: "Expert execution of building projects with various delivery models.",
      features: ["Engineering Procurement Construction (EPC/Turnkey)", "Labour-based", "Supplies", "Equipment"]
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "Meticulous oversight ensuring quality, budget, and timely delivery.",
      features: ["Construction Project Management", "Quality Control", "Progress Assessment", "Liaison"]
    },
  ];

  const handleWhatsApp = (phone = "254711441245") => {
    window.open(`https://wa.me/${phone}?text=Hello Frah Spaces, I'm interested in learning more about your services. Could you please provide more information?`, "_blank");
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4">Get Started</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Build Your
              <span className="block text-primary">Dreams Together</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From architectural plans to final construction and property management, 
              we're here to deliver excellence at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Choose from our comprehensive range of design and project management services
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" role="radiogroup" aria-label="Our Services">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className={`border-2 cursor-pointer transition-all hover:shadow-lg ${
                  selectedService === service.title ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                }`}
                onClick={() => setSelectedService(service.title)}
                role="radio"
                aria-checked={selectedService === service.title}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedService(service.title);
                  }
                }}
                aria-label={service.title}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-0 sm:ml-16">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Smith" required aria-required="true" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required aria-required="true" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+254 ..." />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger id="service" aria-label="Select a service category">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60 overflow-y-auto">
                        <SelectGroup>
                          <SelectLabel>Our Core Services</SelectLabel>
                          {services.map((service) => (
                            <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  
                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project vision, timeline, and budget..."
                      rows={5}
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Submit Inquiry
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & WhatsApp */}
            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <MessageCircle className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Chat on WhatsApp</h3>
                  <p className="mb-6 opacity-90">
                    Get instant answers to your questions. Our team is available to chat now.
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    <Button 
                      onClick={() => handleWhatsApp("254711441245")}
                      variant="secondary"
                      size="lg"
                      className="w-full"
                    >
                      WhatsApp Line 1 - +254 711 44 12 45
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button 
                      onClick={() => handleWhatsApp("254721175735")}
                      variant="outline"
                      size="lg"
                      className="w-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
                    >
                      WhatsApp Line 2 - +254 721 17 57 35
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:admin@frah.co.ke" className="text-muted-foreground hover:text-primary">
                        admin@frah.co.ke
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="flex flex-col">
                        <a href="tel:+254711441245" className="text-muted-foreground hover:text-primary transition-colors">
                          +254 711 441245
                        </a>
                        <a href="tel:+254721175735" className="text-muted-foreground hover:text-primary transition-colors text-sm opacity-80">
                          +254 721 175735 (Alt)
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Office</div>
                      <p className="text-muted-foreground">
                        Fourways Business Park, Kiambu Road
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border mt-6">
                    <div className="font-bold text-sm uppercase tracking-widest text-primary mb-4">Follow Our Progress</div>
                    <div className="flex gap-4">
                      <a 
                        href="https://www.instagram.com/frahcontractors" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
                        title="Instagram"
                      >
                        <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                      <a 
                        href="https://x.com/frahspaces"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
                        title="X"
                      >
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-4 h-4 group-hover:scale-110 transition-transform"
                        >
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
                        </svg>
                      </a>
                      <a 
                        href="https://www.tiktok.com/@frahconstruction" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
                        title="TikTok"
                      >
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="w-5 h-5 group-hover:scale-110 transition-transform"
                        >
                          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                      </a>
                      <a 
                        href="tel:+254711441245" 
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
                        title="Call Us"
                      >
                        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/10">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Office Hours</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: By Appointment</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
