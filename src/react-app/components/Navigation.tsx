import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/react-app/components/ui/dropdown-menu";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { 
      path: "/services", 
      label: "Services",
      dropdown: [
        { label: "Architectural Designs", path: "/services/architectural-designs" },
        { label: "Construction", path: "/services/construction" },
        { label: "Interior Design", path: "/services/interior-design" },
        { label: "Project Management", path: "/services/project-management" },
        { label: "Consultancy", path: "/services/consultancy" }
      ]
    },
    { 
      path: "/products", 
      label: "Products",
      dropdown: [
        { label: "Walling & Roofing", path: "/products/walling-roofing" },
        { label: "Flooring", path: "/products/flooring" },
        { label: "Windows & Doors", path: "/products/windows-doors" },
        { label: "Interior Finishes", path: "/products/interior-finishes" },
        { label: "Outdoor & Landscaping", path: "/products/outdoor-landscaping" }
      ]
    },
    { 
      path: "/equipment", 
      label: "Equipment",
      dropdown: [
        { label: "Heavy Machinery", path: "/equipment" },
        { label: "Technical Tools", path: "/equipment" },
        { label: "Site Support", path: "/equipment" }
      ]
    },
    { 
      path: "/designs", 
      label: "Designs",
      dropdown: [
        { label: "Flooring", path: "/designs" },
        { label: "Kitchens", path: "/designs" },
        { label: "Living Spaces", path: "/designs" },
        { label: "Commercial Fit-outs", path: "/designs" }
      ]
    },
    { path: "/work", label: "Past Work" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-white shadow-sm border border-border group-hover:border-primary/50 transition-all">
              <img 
                src="/Frah Spaces Logo resized.jpg" 
                alt="Frah Spaces Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-sm sm:text-xl font-bold tracking-tight">FRAH SPACES</h1>
              <p className="hidden sm:block text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">Construction & Real Estate Management</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.path}>
                  <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none ${
                    isActive(link.path) ? "text-primary" : "text-foreground/70"
                  }`}>
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {link.dropdown.map((item, idx) => (
                      <DropdownMenuItem key={idx} asChild>
                        <Link to={item.path} className="w-full">
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <Link to="/engage">
              <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Engage Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <Link to="/engage">
              <button className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-primary/20">
                Engage
              </button>
            </Link>
            <button 
              className="p-2 text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border mt-4 flex flex-col gap-2 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <div key={link.path} className="flex flex-col gap-2">
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold py-2 transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 flex flex-col gap-2 border-l border-border ml-2">
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-muted-foreground hover:text-primary py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
