import { useEffect } from "react";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router";
import { blogPosts, type BlogPost } from "@/react-app/data/blog";

export default function Blog() {
  useEffect(() => {
    document.title = "Knowledge Hub | Construction Insights & Guides | Frah Spaces";
  }, []);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4">Knowledge Hub</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insights for the
              <span className="block text-primary">Modern Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert guides on building approvals, cost optimization, and luxury construction in the Kenyan market.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post: BlogPost) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="overflow-hidden group h-full hover:shadow-2xl transition-all duration-300 border-none bg-muted/20">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/90 text-foreground border backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary font-bold group-hover:translate-x-1 transition-transform">
                      Read Full Guide <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
