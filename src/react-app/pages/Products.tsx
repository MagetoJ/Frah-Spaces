import { useEffect } from "react";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/react-app/components/ui/tabs";
import { Package, Check, Mail, MessageCircle, Phone, Home, TreePine, Paintbrush, DoorOpen, Flower2, Layout } from "lucide-react";

export default function Products() {
  useEffect(() => {
    document.title = "Building Materials & Interior Products | Frah Spaces Catalog";
  }, []);

  const categories = [
    {
      id: "building",
      label: "Building Materials",
      icon: Package,
      color: "blue",
      subcategories: [
        {
          title: "Aggregates",
          items: [
            { 
              name: "Ballast (All sizes)", 
              specs: "Crushed stone for concrete & sub-base",
              image: "/Ballast.jpg"
            },
            { 
              name: "River Sand / Quarry Sand", 
              specs: "Fine aggregates for masonry & plastering",
              image: "/Sand.jpg"
            }
          ]
        },
        {
          title: "Timber & Wood",
          items: [
            { 
              name: "Structural Timber", 
              specs: "Cypress & Pine for roofing & framing",
              image: "/cypress 1.jpeg"
            },
            { 
              name: "Plywood & MDF", 
              specs: "Interior finishing and cabinetry boards",
              image: "/engineered 1.jpeg"
            }
          ]
        },
        {
          title: "Roofing & Walling",
          items: [
            { 
              name: "Premium Roofing Sheets", 
              specs: "Durable metal and stone-coated roofing solutions",
              image: "/design 1.png"
            },
            { 
              name: "Structural Walling", 
              specs: "High-quality stone and concrete walling units",
              image: "/Ballast.jpg"
            }
          ]
        }
      ]
    },
    {
      id: "interiors",
      label: "Interiors",
      icon: Home,
      color: "indigo",
      subcategories: [
        {
          title: "Paint & Finishes",
          items: [
            { 
              name: "Premium Emulsion", 
              specs: "Luxury silk and matte interior finishes",
              image: "/paint 1.jpg"
            },
            { 
              name: "Weather-guard Exterior", 
              specs: "High-durability external protection",
              image: "/paint 2.jpeg"
            }
          ]
        },
        {
          title: "Flooring",
          items: [
            { 
              name: "Designer Tiles", 
              specs: "Premium Ceramic & Porcelain flooring solutions",
              image: "/tiles 1.jpg"
            },
            { 
              name: "Luxury Porcelain", 
              specs: "High-end porcelain tiles for elegant interiors",
              image: "/tiles 2.jpg"
            }
          ]
        },
        {
          title: "Doors & Windows",
          items: [
            { 
              name: "Mahogany Solid Doors", 
              specs: "Premium handcrafted mahogany entrance doors",
              image: "/Mahogany doors 2.jpg"
            },
            { 
              name: "Security Steel Doors", 
              specs: "Reinforced steel doors for maximum security",
              image: "/Steel Doors.jpg"
            },
            { 
              name: "Engineered Wood Doors", 
              specs: "Modern durable composite wood doors",
              image: "/Engineered Wood Doors 2.jpg"
            },
            { 
              name: "Classic Panel Doors", 
              specs: "Traditional elegant raised panel designs",
              image: "/panel-doors.jpg"
            }
          ]
        }
      ]
    },
    {
      id: "outdoor",
      label: "Outdoor & Vision",
      icon: Flower2,
      color: "green",
      subcategories: [
        {
          title: "Gardens & Landscaping",
          items: [
            { 
              name: "Landscape Design", 
              specs: "Modern garden layouts and plant selection",
              image: "/Pavement cabros.jpeg"
            },
            { 
              name: "Outdoor Paving", 
              specs: "Cabros and natural stone garden paths",
              image: "/cabros.jpeg"
            }
          ]
        },
        {
          title: "Architectural Vision",
          items: [
            { 
              name: "3D House Designs", 
              specs: "Complete architectural floor plans and renders",
              image: "/design 1.png"
            }
          ]
        }
      ]
    }
  ];

  const handleWhatsApp = (item: string, phone = "254721175735") => {
    window.open(`https://wa.me/${phone}?text=Hello Frah Spaces, I'm interested in ${item}. Could you please provide more information?`, "_blank");
  };

  const handleEmail = (item: string) => {
    window.location.href = `mailto:admin@frahspaces.com?subject=Product Inquiry: ${item}`;
  };

  const handleCall = (phone = "254721175735") => {
    window.location.href = `tel:+${phone}`;
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4">Product Catalog</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Products
              <span className="block text-primary">From Foundation to Finish</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We source only the highest quality components for our builds. 
              From durable Walling and Roofing materials to luxury Flooring and 
              bespoke Interior/Outdoor design elements, we ensure every detail 
              exudes excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="building" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto pb-4">
              <TabsList className="h-auto md:h-14 p-1.5 rounded-2xl bg-muted/50 border border-border flex-wrap md:flex-nowrap justify-center">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id} 
                    className="px-4 md:px-8 py-2 md:py-0 rounded-xl flex items-center gap-2 text-sm md:text-base data-[state=active]:shadow-md"
                  >
                    <cat.icon className="w-5 h-5" />
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="animate-in fade-in duration-500">
                <div className="space-y-20">
                  {cat.subcategories.map((sub, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          cat.color === 'blue' ? 'bg-blue-100 text-blue-600' : 
                          cat.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' : 
                          'bg-green-100 text-green-600'
                        }`}>
                          {sub.title.includes('Timber') ? <TreePine className="w-6 h-6" /> : 
                           sub.title.includes('Paint') ? <Paintbrush className="w-6 h-6" /> :
                           sub.title.includes('Flooring') ? <DoorOpen className="w-6 h-6" /> :
                           sub.title.includes('Gardens') ? <Flower2 className="w-6 h-6" /> :
                           <Layout className="w-6 h-6" />}
                        </div>
                        <h2 className="text-3xl font-bold">{sub.title}</h2>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {sub.items.map((item, iIdx) => (
                          <Card key={iIdx} className="group overflow-hidden border-2 hover:border-primary/50 transition-all flex flex-col shadow-sm">
                            <div className="aspect-[16/9] w-full overflow-hidden relative">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute top-4 right-4">
                                <Badge className={`${
                                  cat.color === 'blue' ? 'bg-blue-500' : 
                                  cat.color === 'indigo' ? 'bg-indigo-500' : 
                                  'bg-green-500'
                                } border-0 shadow-lg`}>
                                  Verified Quality
                                </Badge>
                              </div>
                            </div>
                            <CardContent className="p-8 flex-1 flex flex-col">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-2xl font-bold">{item.name}</h3>
                                <Check className="w-6 h-6 text-primary" />
                              </div>
                              <p className="text-muted-foreground mb-8 text-lg">
                                {item.specs}
                              </p>
                              
                              <div className="mt-auto flex flex-col gap-3">
                                <div className="grid grid-cols-2 gap-2">
                                  <Button 
                                    variant="outline" 
                                    className="flex-1 h-auto py-2.5 gap-1 hover:bg-primary/5 border-primary/20"
                                    onClick={() => handleEmail(item.name)}
                                  >
                                    <Mail className="w-3.5 h-3.5" />
                                    <span className="text-[9px] uppercase font-bold">Email</span>
                                  </Button>
                                  <div className="flex gap-1">
                                    <Button 
                                      variant="outline" 
                                      className="flex-[2] h-auto py-2.5 gap-1 hover:bg-primary/5 border-primary/20"
                                      onClick={() => handleWhatsApp(item.name, "254721175735")}
                                    >
                                      <MessageCircle className="w-3.5 h-3.5" />
                                      <span className="text-[9px] uppercase font-bold">WhatsApp</span>
                                    </Button>
                                    <Button 
                                      variant="outline" 
                                      className="flex-1 h-auto py-2.5 text-[8px] font-bold opacity-70 border-primary/20"
                                      onClick={() => handleWhatsApp(item.name, "254711441245")}
                                    >
                                      Alt
                                    </Button>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <Button 
                                    variant="default" 
                                    className="flex-[2] h-auto py-2.5 gap-1 shadow-md"
                                    onClick={() => handleCall("254721175735")}
                                  >
                                    <Phone className="w-3.5 h-3.5" />
                                    <span className="text-[9px] uppercase font-bold">Call Primary</span>
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    className="flex-1 h-auto py-2.5 text-[9px] font-bold opacity-80"
                                    onClick={() => handleCall("254711441245")}
                                  >
                                    Call Alt
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-3xl p-12 text-primary-foreground relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Bulk Sourcing & Logistics</h2>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Partner with Frah Spaces for reliable material supply and transport logistics. 
                  We handle the sourcing, quality control, and delivery to your site.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-white/20 text-white py-2 px-4 border-0">Kenya Wide Delivery</Badge>
                  <Badge className="bg-white/20 text-white py-2 px-4 border-0">Quality Guaranteed</Badge>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-4">
                  <Button variant="secondary" size="lg" className="h-16 px-10 text-lg font-bold shadow-xl" onClick={() => handleWhatsApp("Bulk Materials Inquiry", "254721175735")}>
                    Start Bulk Order
                  </Button>
                  <Button variant="outline" size="lg" className="h-16 px-8 text-lg font-bold border-white/20 hover:bg-white/10 text-white opacity-80" onClick={() => handleWhatsApp("Bulk Materials Inquiry", "254711441245")}>
                    Alt WhatsApp
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
          </div>
        </div>
      </section>
    </div>
  );
}
