import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black italic tracking-tighter uppercase">
              Frah <span className="text-primary">Spaces</span>
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              East Africa's premier quality-verified construction firm. We bridge the gap between architectural vision and structural reality with precision and luxury.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Navigation</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/engage" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Fourways Business Park, Kiambu Road, Nairobi</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:admin@frahspaces.com" className="hover:text-primary transition-colors">admin@frahspaces.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+254711441245" className="hover:text-primary transition-colors">+254 711 441 245</a>
                  <a href="tel:+254721175735" className="hover:text-primary transition-colors text-xs opacity-60">+254 721 175 735</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Presence */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Follow Our Progress</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/frahcontractors" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary text-zinc-400 hover:text-white transition-all group shadow-lg"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://x.com/frahspaces"
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary text-zinc-400 hover:text-white transition-all group shadow-lg"
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
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary text-zinc-400 hover:text-white transition-all group shadow-lg"
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
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary text-zinc-400 hover:text-white transition-all group shadow-lg"
                title="Call Us"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Frah Spaces Limited. All rights reserved. Quality Verified Construction.</p>
        </div>
      </div>
    </footer>
  );
}