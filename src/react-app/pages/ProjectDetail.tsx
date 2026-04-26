import { useParams, Link } from "react-router";
import { projects } from "@/react-app/data/projects";
import { ArrowLeft, MapPin, CheckCircle, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import { Badge } from "@/react-app/components/ui/badge";
import { Card } from "@/react-app/components/ui/card";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | ${project.location} | Frah Spaces Portfolio`;
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/work">
          <Button>Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  const uniqueImages = Array.from(new Set(project.images));

  // Find related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Portfolio
        </Link>

        {/* Project Header & Story */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Badge className="mb-4 uppercase tracking-wider">{project.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{project.title}</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {project.story}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-muted/30 rounded-2xl border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-xl bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[32px]">
              <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">Project Intel</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                    <MapPin className="text-primary w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter mb-1">Location</p>
                    <p className="font-semibold text-lg">{project.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                    <Calendar className="text-primary w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter mb-1">Year</p>
                    <p className="font-semibold text-lg">{project.year}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                    <User className="text-primary w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter mb-1">Client</p>
                    <p className="font-semibold text-lg">{project.client}</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-8 border-2 border-dashed border-border rounded-[32px]">
              <p className="italic text-muted-foreground text-center mb-4">
                "{project.testimonial}"
              </p>
              <p className="text-center font-bold text-sm">— {project.client}</p>
            </div>
          </div>
        </div>

        {/* Visual Gallery */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Project Gallery</h3>
            <Badge variant="outline" className="text-primary border-primary">
              {uniqueImages.length} High-Res Images
            </Badge>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {uniqueImages.map((img, idx) => (
              <div 
                key={idx} 
                className="relative group overflow-hidden rounded-3xl shadow-lg border border-border transition-all duration-500 hover:shadow-2xl hover:border-primary/30"
              >
                <img 
                  src={img} 
                  alt={`${project.category.charAt(0).toUpperCase() + project.category.slice(1)} construction project in ${project.location} - ${project.title} by Frah Spaces`} 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm font-medium">View Full Image</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Projects Slider */}
        {relatedProjects.length > 0 && (
          <div className="pt-20 border-t border-border">
            <div className="flex justify-between items-end mb-12">
              <div>
                <Badge variant="outline" className="mb-4 text-primary border-primary">More Projects</Badge>
                <h2 className="text-4xl font-bold">Related {project.category} Works</h2>
              </div>
              <Link to="/work">
                <Button variant="ghost" className="hidden sm:flex group">
                  View Full Portfolio
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <Link key={p.id} to={`/work/${p.id}`}>
                  <Card className="group overflow-hidden border-none shadow-lg rounded-2xl h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={`${p.category.charAt(0).toUpperCase() + p.category.slice(1)} construction project in ${p.location} - ${p.title} by Frah Spaces`} 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <div className="text-white">
                          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{p.location}</p>
                          <p className="font-bold text-lg">{p.title}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
