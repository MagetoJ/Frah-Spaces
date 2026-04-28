import { useEffect } from "react";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Building2, Award, Users, Target, ShieldCheck, FileText, CheckCircle } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Frah Spaces - Quality Verified Construction";
  }, []);

  const timeline = [
    { year: "2020", event: "Our Inception", description: "Frah Spaces was established with a mission to build dreams through luxury and affordable housing." },
    { year: "Growth", event: "National Reach", description: "Successfully expanded operations across more than 20 Kenyan counties." },
    { year: "Today", event: "70+ Projects Completed", description: "Excellence in construction, renovations, and property management delivered with precision." },
  ];

  const teamGroups = [
    {
      title: "Executive Leadership",
      members: [
        { 
          name: "Fred Nyanturi", 
          role: "Managing Director", 
          specialty: "General Construction & Renovation",
          image: "/Fred_-_Managing_Director-removebg-preview (1).png"
        },
        { 
          name: "Carlos", 
          role: "Director", 
          specialty: "Project Management & Strategy",
          image: "/Carlos_Director-removebg-preview (1).png"
        },
      ]
    },
    {
      title: "Technical Expertise",
      members: [
        { 
          name: "Arch. Mutuku John Kaeke", 
          role: "Lead Architect", 
          specialty: "Architectural Design & Planning (B.Arch, JKUAT)",
          image: "/Arch. John Kaeke.png"
        },
        { 
          name: "Eng. Orina", 
          role: "Civil Engineer", 
          specialty: "Civil Works & Infrastructure",
          image: "/Eng._Orina_-_Civil_Engineer-removebg-preview (1).png"
        },
      ]
    },
    {
      title: "Business & Operations",
      members: [
        { 
          name: "Jim", 
          role: "Business Development Manager", 
          specialty: "Strategic Growth & Client Relations",
          image: "/James - Business Development Manager .png"
        },
        { 
          name: "Hellen", 
          role: "Finance & Admin Manager", 
          specialty: "Financial Management & Operations",
          image: "/Hellen_-_Finance___Admin-removebg-preview (1).png"
        },
        { 
          name: "Shallom", 
          role: "Marketing and Client Relations Lead", 
          specialty: "Marketing & Client Relations",
          image: "/Shallom - Marketing Client Relations Lead.png"
        },
        { 
          name: "Timothy", 
          role: "Office Operations", 
          specialty: "Logistics & Administrative Support",
          image: "/Timothy_-_Office_Operations-removebg-preview (1).png"
        },
      ]
    },
    {
      title: "Field Specialists",
      members: [
        { 
          name: "Phillip", 
          role: "Senior Foreman", 
          specialty: "Site Supervision & Construction Management",
          image: "/Phillip_-_Senior_Foreman-removebg-preview (1).png"
        },
        { 
          name: "David", 
          role: "Electrician", 
          specialty: "Electrical Systems & Solar Installation",
          image: "/David_-_Electrician-removebg-preview (1).png"
        },
        { 
          name: "Sebastian", 
          role: "Painter", 
          specialty: "Interior & Exterior Finishing",
          image: "/Sebastian_-_Painter-removebg-preview (1).png"
        },
      ]
    }
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
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/Frah%20Spaces%20Team%20(1).png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Best & Most Reliable
              <span className="block text-primary">Construction Partner in East Africa</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Frah Spaces Limited is a premier high-end architecture and construction firm based in Nairobi, 
              recognized for delivering quality-verified building solutions. 
              We provide a seamless, end-to-end experience—from initial consultancy and 
              architectural design to masterful construction and final outdoor styling. 
              With our NCA5 and NCA6 registrations, we bring your vision to life with precision and luxury across Kenya.
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
            <h2 className="text-4xl font-bold mb-4">Quality Assurance & Compliance</h2>
            <p className="text-xl text-muted-foreground">Certified excellence and regulatory adherence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((item, idx) => (
              <Card key={idx} className="bg-background/50 backdrop-blur border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Reliable & {item.title}</h3>
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
            <div className="absolute left-5 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-12 md:pl-20">
                  <div className="absolute left-2 md:left-5 top-1 w-7 h-7 rounded-full bg-primary border-4 border-background shadow-lg" />
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
          <h2 className="text-4xl font-bold mb-4 text-center">Our Expert Team</h2>
          <p className="text-xl text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            Managed by seasoned professionals with over a decade of experience in the construction industry.
          </p>
          
          <div className="space-y-20">
            {teamGroups.map((group, groupIdx) => (
              <div key={groupIdx}>
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-2xl font-bold text-primary whitespace-nowrap">{group.title}</h3>
                  <div className="h-px w-full bg-primary/10" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {group.members.map((member, idx) => (
                    <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-none bg-background/50 backdrop-blur">
                      <div className="aspect-[4/5] overflow-hidden relative">
                        <img 
                          src={member.image} 
                          alt={`${member.name} - ${member.role} at Frah Spaces`} 
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Glassmorphism Hover Overlay */}
                        <div className="absolute inset-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-6 scale-95 group-hover:scale-100">
                          <div className="text-white space-y-3">
                            <Badge variant="outline" className="text-white border-white/40">{member.role}</Badge>
                            <h3 className="font-black text-2xl uppercase tracking-tighter">{member.name}</h3>
                            <p className="text-sm text-white/80">
                              Expertise in <span className="font-semibold">{member.specialty}</span>.
                            </p>
                            <Button size="sm" variant="secondary" className="rounded-full font-bold">
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Expertise in <span className="text-foreground font-semibold">{member.specialty}</span>. 
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
