import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white border border-border">
                <img 
                  src="/Frah Spaces Logo resized.jpg" 
                  alt="Frah Spaces Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold tracking-tight">FRAH SPACES</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building dreams through modern design, high-quality construction, 
              and innovative real estate management across Kenya.
            </p>
            <div className="flex items-center gap-4 pt-2">
               <a href="https://facebook.com/frahspaces" target="_blank" rel="noopener noreferrer" title="Facebook: Frah Spaces" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Facebook className="w-4 h-4 text-primary" />
               </a>
               <a href="https://instagram.com/frah_spaces" target="_blank" rel="noopener noreferrer" title="Instagram: @frah_spaces" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram className="w-4 h-4 text-primary" />
               </a>
               <a href="https://linkedin.com/company/frah-spaces" target="_blank" rel="noopener noreferrer" title="LinkedIn: Frah Spaces" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-primary" />
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/equipment" className="text-muted-foreground hover:text-primary transition-colors">Equipment</Link></li>
              <li><Link to="/designs" className="text-muted-foreground hover:text-primary transition-colors">Designs</Link></li>
              <li><Link to="/work" className="text-muted-foreground hover:text-primary transition-colors">Past Work</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/engage" className="text-muted-foreground hover:text-primary transition-colors font-semibold">Engage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-xs">Core Solutions</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-bold text-foreground mb-1">Pillar I: Design</p>
                <p className="text-[11px] leading-relaxed">Floorplans, 2D renders, 3D renders</p>
              </div>
              <div>
                <p className="font-bold text-foreground mb-1">Pillar II: Construction</p>
                <p className="text-[11px] leading-relaxed">Engineering Procurement Construction (EPC/Turnkey), Labour-based, Supplies, Equipment</p>
              </div>
              <div>
                <p className="font-bold text-foreground mb-1">Pillar III: Project Management</p>
                <p className="text-[11px] leading-relaxed">Construction Project Management, Quality Control, Progress Assessment, Liaison</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span>admin@frahspaces.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div className="flex flex-col">
                   <a href="tel:+254711441245" className="hover:text-primary transition-colors">+254 711 441245</a>
                   <a href="tel:+254721175735" className="hover:text-primary transition-colors text-xs opacity-80">+254 721 175735 (Alt)</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>Fourways Business Park, Kiambu Road</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>Established 2020 | &copy; {new Date().getFullYear()} Frah Spaces Limited. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-primary">Privacy Policy</a>
             <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
