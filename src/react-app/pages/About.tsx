import { Card, CardContent } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Building2, Award, Users, Target } from "lucide-react";

export default function About() {
  const timeline = [
    { year: "Founded", event: "Our Inception", description: "Frah Spaces was founded with a mission to build dreams through luxury and affordable housing." },
    { year: "Growth", event: "National Reach", description: "Successfully expanded operations across more than 20 Kenyan counties." },
    { year: "Today", event: "70+ Projects Completed", description: "A decade of excellence in construction, renovations, and property management." },
  ];

  const team = [
    { name: "Fred Nyanturi", role: "Managing Director", specialty: "General Construction & Renovation" },
    { name: "Technical Team", role: "Specialized Services", specialty: "Electrical, Plumbing, HVAC & Landscaping" },
  ];

  const values = [
    { icon: Award, title: "Excellence", description: "Fostering excellence through precision and quality craftsmanship." },
    { icon: Building2, title: "Innovation", description: "Driving innovation with modern, high-quality designs and sustainable practices." },
    { icon: Target, title: "Precision", description: "Ensuring precision in every project to exceed our clients' expectations." },
    { icon: Users, title: "Commitment", description: "A deep commitment to providing luxury with affordability for all Kenyans." },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4">Our Story</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building Dreams
              <span className="block text-primary">Across Kenya</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Frah Spaces Limited is a multi-disciplinary Kenyan firm specializing in construction, 
              real estate management, and specialized technical services. Managed by seasoned professionals 
              with over a decade of experience, we provide modern, high-quality, and affordable homes.
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
                To foster excellence through collaboration, innovation, and sustainability, ensuring every project exceeds expectations.
              </p>
            </div>
            <div 
              className="h-96 rounded-2xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592dee58c460?w=800&q=80')`
              }}
            />
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
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div 
                  className="h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80')`
                  }}
                />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-lg text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
