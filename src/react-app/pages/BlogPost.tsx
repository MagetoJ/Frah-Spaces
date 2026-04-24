import { useParams, Link } from "react-router";
import { blogPosts, type BlogPost as BlogPostType, type BlogSection } from "@/react-app/data/blog";
import { ArrowLeft, Calendar, User, MessageCircle, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import { Badge } from "@/react-app/components/ui/badge";
import { Card } from "@/react-app/components/ui/card";
import { useEffect } from "react";
import { MaterialCalculator } from "@/react-app/components/MaterialCalculator";
import { projects, type Project } from "@/react-app/data/projects";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p: BlogPostType) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} | Frah Spaces Knowledge Hub`;
    }
  }, [id, post]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Link to="/blog" className="text-primary hover:underline">Return to Hub</Link>
      </div>
    );
  }

  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Knowledge Hub
        </Link>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <Badge className="mb-4 uppercase tracking-wider">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl font-medium text-foreground mb-12 leading-relaxed italic border-l-4 border-primary pl-6">
                {post.hook}
              </p>

              {post.sections.map((section: BlogSection, idx: number) => (
                <div key={idx} className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{section.content}</p>
                  {section.list && (
                    <ul className="space-y-4 mb-6">
                      {section.list.map((item: string, lIdx: number) => (
                        <li key={lIdx} className="flex gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.proTip && (
                    <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 my-8">
                      <p className="font-bold text-primary mb-2 flex items-center gap-2">
                        <Quote className="w-4 h-4" /> Pro Tip:
                      </p>
                      <p className="text-muted-foreground italic">{section.proTip}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Mid-article Testimonial */}
              <div className="my-16 p-10 bg-muted/30 rounded-[32px] text-center border-2 border-dashed border-border">
                <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
                <p className="text-2xl font-medium italic text-muted-foreground mb-6">
                  "Frah Spaces finished my commercial fit-out two weeks ahead of schedule, saving me KES 450,000 in overheads."
                </p>
                <p className="font-bold text-primary">— Satisfied Developer, Westlands</p>
              </div>

              <div className="p-8 bg-primary rounded-3xl text-primary-foreground mb-12">
                <h3 className="text-2xl font-bold mb-4">Take the Next Step</h3>
                <p className="mb-8 opacity-90 leading-relaxed">{post.cta}</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" onClick={() => window.open("https://wa.me/254721175735", "_blank")} className="gap-2">
                    <MessageCircle className="w-4 h-4" /> Chat with us
                  </Button>
                  <Link to="/engage">
                    <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">Book a Consultation</Button>
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <Card className="border-none shadow-xl bg-slate-50 dark:bg-slate-900/50 p-6 rounded-[32px]">
                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-primary">Featured Projects</h4>
                <div className="space-y-4">
                  {featuredProjects.map((p: Project) => (
                    <Link key={p.id} to={`/work/${p.id}`} className="flex gap-4 group">
                      <img src={p.image} className="w-20 h-20 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
                      <div className="flex flex-col justify-center">
                        <p className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">{p.title}</p>
                        <p className="text-[10px] text-muted-foreground uppercase mt-1">{p.location}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link to="/work">
                  <Button variant="link" className="px-0 h-auto text-xs mt-6 text-primary font-bold">View Full Portfolio <ArrowRight className="ml-2 w-3 h-3" /></Button>
                </Link>
              </Card>

              <div className="p-1 bg-muted/20 rounded-[32px] border border-border overflow-hidden">
                <MaterialCalculator className="border-none shadow-none" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
