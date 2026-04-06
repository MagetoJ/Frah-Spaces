import { Card, CardContent } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Building2, Award, Users, Target, ShieldCheck, FileText, CheckCircle } from "lucide-react";

export default function About() {
  const timeline = [
    { year: "2020", event: "Our Inception", description: "Frah Spaces was established with a mission to build dreams through luxury and affordable housing." },
    { year: "Growth", event: "National Reach", description: "Successfully expanded operations across more than 20 Kenyan counties." },
    { year: "Today", event: "70+ Projects Completed", description: "Excellence in construction, renovations, and property management delivered with precision." },
  ];

  const team = [
    { 
      name: "Fred Nyanturi", 
      role: "Managing Director", 
      specialty: "General Construction & Renovation",
      image: "/Fred_-_Managing_Director-removebg-preview.png"
    },
    { 
      name: "Arch. Mutuku John Kaeke", 
      role: "Lead Architect", 
      specialty: "Architectural Design & Planning (B.Arch, JKUAT)",
      image: "/Frah_Spaces_Team-removebg-preview.png"
    },
    { 
      name: "Carlos", 
      role: "Director", 
      specialty: "Project Management & Strategy",
      image: "/Carlos_Director-removebg-preview.png"
    },
    { 
      name: "Eng. Orina", 
      role: "Civil Engineer", 
      specialty: "Civil Works & Infrastructure",
      image: "/Eng._Orina_-_Civil_Engineer-removebg-preview.png"
    },
    { 
      name: "James", 
      role: "Business Development Manager", 
      specialty: "Strategic Growth & Client Relations",
      image: "/James - Business Development Manager.jpg"
    },
    { 
      name: "Hellen", 
      role: "Finance & Admin Manager", 
      specialty: "Financial Management & Operations",
      image: "/Hellen_-_Finance___Admin-removebg-preview.png"
    },
    { 
      name: "Phillip", 
      role: "Senior Foreman", 
      specialty: "Site Supervision & Construction Management",
      image: "/Phillip_-_Senior_Foreman-removebg-preview.png"
    },
    { 
      name: "Timothy", 
      role: "Office Operations", 
      specialty: "Logistics & Administrative Support",
      image: "/Timothy_-_Office_Operations-removebg-preview.png"
    },
    { 
      name: "David", 
      role: "Electrician", 
      specialty: "Electrical Systems & Solar Installation",
      image: "/David_-_Electrician-removebg-preview.png"
    },
    { 
      name: "Sebastian", 
      role: "Painter", 
      specialty: "Interior & Exterior Finishing",
      image: "/Sebastian_-_Painter-removebg-preview.png"
    },
  ];

  const values = [
    { icon: Award, title: "Excellence", description: "Fostering excellence through precision and quality craftsmanship." },
    { icon: Building2, title: "Innovation", description: "Driving innovation with modern, high-quality designs and sustainable practices." },
    { icon: Target, title: "Precision", description: "Ensuring precision in every project to exceed our clients' expectations." },
    { icon: Users, title: "Commitment", description: "A deep commitment to providing luxury with affordability for all Kenyans." },
  ];

  const credentials = [
    { 
      title: "NCA Registered", 
      description: "NCA5 Building Works, NCA6 Electrical & Mechanical Engineering Services.",
      icon: ShieldCheck
    },
    { 
      title: "Licensed Architects", 
      description: "Registered practicing certificates valid through June 2026.",
      icon: FileText
    },
    { 
      title: "KRA Compliant", 
      description: "Full tax compliance with current certificates valid through 2026.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4">Our Story</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Innovative Design,
              <span className="block text-primary">Masterful Construction</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Frah Spaces Limited is a premier high-end architecture and construction firm based in Nairobi. 
              We provide a seamless, end-to-end experience—from initial consultancy and 
              architectural design to masterful construction and final outdoor styling. 
              Our mission is to bring your vision to life with precision and luxury across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To build dreams one home at a time by delivering exceptional craftsmanship and 
                innovative design that combines luxury with affordability to enhance the lives of Kenyans.
              </p>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To foster excellence through collaboration, innovation, and sustainability, ensuring every project exceeds expectations and sets new standards in the built environment.
              </p>
            </div>
            <div 
              className="h-96 rounded-2xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `url('/Liuwa Gardens 1.jpg')`
              }}
            />
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Compliance & Credentials</h2>
            <p className="text-xl text-muted-foreground">Certified excellence and regulatory adherence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((item, idx) => (
              <Card key={idx} className="bg-background/50 backdrop-blur border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-20">
                  <div className="absolute left-5 top-1 w-7 h-7 rounded-full bg-primary border-4 border-background shadow-lg" />
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-primary border-primary">
                          {item.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Leadership</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Managed by seasoned professionals with over a decade of experience in the construction industry.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-none bg-muted/20">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="mb-2 bg-primary/90 text-white border-none">{member.role}</Badge>
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Expertise in <span className="text-foreground font-semibold">{member.specialty}</span>. 
                    Committed to delivering excellence across all Frah Spaces projects.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
