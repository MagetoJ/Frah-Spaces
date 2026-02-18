import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Textarea } from "@/react-app/components/ui/textarea";
import { Label } from "@/react-app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/react-app/components/ui/select";
import { Badge } from "@/react-app/components/ui/badge";
import { MessageCircle, Mail, Phone, MapPin, Home, Building2, Trees, Wrench, ArrowRight } from "lucide-react";

export default function Engage() {
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      icon: Building2,
      title: "Construction & Civil Works",
      description: "End-to-end building solutions from architectural plans to final quality control",
      features: ["Residential & Commercial", "New Builds & Mixed-use", "Civil Works & Drainage", "Renovations & Expansions"]
    },
    {
      icon: Home,
      title: "Real Estate Management",
      description: "Comprehensive management to protect and maximize your property value",
      features: ["Operations & Inspections", "Preventive Maintenance", "Lease Administration", "Statutory Compliance"]
    },
    {
      icon: Trees,
      title: "Landscaping",
      description: "Professional design and upkeep of beautiful outdoor environments",
      features: ["Private Home Gardens", "Commercial Courtyards", "Design & Upkeep", "Water Features"]
    },
    {
      icon: Wrench,
      title: "Electrical & Solar",
      description: "Installation and maintenance of power systems and eco-friendly solar solutions",
      features: ["Power Distribution", "Off-grid/Hybrid Solar", "Lighting Design", "Maintenance"]
    },
    {
      icon: Wrench,
      title: "Plumbing & HVAC",
      description: "Installation of water, waste, and climate control systems",
      features: ["Biodigesters & Septic", "Sewer Lines", "AC & Ventilation", "Glazing & Facades"]
    },
    {
      icon: Building2,
      title: "Facility Care",
      description: "Professional maintenance, office clean-up, and furniture restoration",
      features: ["Office Clean-up", "Furniture Restoration", "Regular Maintenance", "General Repairs"]
    },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/254711441245?text=Hi, I'm interested in learning more about Frah Spaces services", "_blank");
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

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className={`border-2 cursor-pointer transition-all hover:shadow-lg ${
                  selectedService === service.title ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                }`}
                onClick={() => setSelectedService(service.title)}
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
                  <ul className="space-y-2 ml-16">
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
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Smith" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.title} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project vision, timeline, and budget..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Submit Inquiry
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
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
                  <Button 
                    onClick={handleWhatsApp}
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    Start WhatsApp Chat
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
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
                      <a href="mailto:admin@frahengineering.com" className="text-muted-foreground hover:text-primary">
                        admin@frahengineering.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:+254711441245" className="text-muted-foreground hover:text-primary">
                        +254 711 44 12 45
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Office</div>
                      <p className="text-muted-foreground">
                        4Ways Village Business Park, 1st Floor, Rm. 109<br />
                        Fourways Junction, Kiambu Road, Nairobi
                      </p>
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
