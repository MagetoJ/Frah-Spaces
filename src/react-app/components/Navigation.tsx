import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Calculator } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/react-app/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/react-app/components/ui/dialog";
import { MaterialCalculator } from "./MaterialCalculator";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

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
                        {item.path ? (
                          <Link to={item.path} className="w-full">
                            {item.label}
                          </Link>
                        ) : (
                          <button 
                            onClick={item.action}
                            className="w-full text-left"
                          >
                            {item.label}
                          </button>
                        )}
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

            {/* Calculator Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none text-foreground/70">
                <Calculator className="w-4 h-4 mr-1" />
                Calculator
                <ChevronDown className="w-3 h-3 ml-0.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[350px] p-0 border-none bg-transparent shadow-2xl">
                <MaterialCalculator />
              </DropdownMenuContent>
            </DropdownMenu>
            
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
          <div className="md:hidden py-4 border-t border-border mt-4 flex flex-col gap-1 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-80px)] overflow-y-auto pr-2 custom-scrollbar">
            {navLinks.map((link) => (
              <div key={link.path} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold py-3 transition-colors hover:text-primary flex-1 ${
                      isActive(link.path) ? "text-primary" : "text-foreground/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button 
                      onClick={() => setActiveMobileDropdown(activeMobileDropdown === link.label ? null : link.label)}
                      className={`p-3 text-muted-foreground transition-transform duration-200 ${
                        activeMobileDropdown === link.label ? "rotate-180 text-primary" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  )}
                </div>
                {link.dropdown && activeMobileDropdown === link.label && (
                  <div className="pl-4 flex flex-col gap-1 border-l-2 border-primary/20 ml-2 mb-2 animate-in slide-in-from-top-2 duration-200">
                    {link.dropdown.map((item, idx) => (
                      item.path ? (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-sm py-2.5 transition-colors hover:text-primary border-b border-border/50 last:border-0 ${
                            location.pathname === item.path ? "text-primary font-medium" : "text-muted-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          key={idx}
                          onClick={() => {
                            item.action?.();
                            setIsOpen(false);
                          }}
                          className="text-sm py-2.5 text-left transition-colors hover:text-primary border-b border-border/50 last:border-0 text-muted-foreground"
                        >
                          {item.label}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Calculator */}
            <button 
              onClick={() => {
                setIsCalculatorOpen(true);
                setIsOpen(false);
              }}
              className="text-base font-semibold py-3 transition-colors hover:text-primary flex-1 text-left flex items-center gap-2 text-foreground/70"
            >
              <Calculator className="w-5 h-5" />
              Calculator
            </button>
          </div>
        )}
      </div>

      {/* Global Calculator Dialog */}
      <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
        <DialogContent className="max-w-md p-0 overflow-hidden border-none bg-transparent shadow-none">
          <DialogHeader className="sr-only">
            <DialogTitle>Material Calculator</DialogTitle>
          </DialogHeader>
          <MaterialCalculator onClose={() => setIsCalculatorOpen(false)} />
        </DialogContent>
      </Dialog>
    </nav>
  );
}
