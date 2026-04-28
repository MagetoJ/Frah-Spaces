import { useEffect } from "react";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/react-app/components/ui/tabs";
import { Package, Check, MessageCircle, Phone, Home, TreePine, Paintbrush, DoorOpen, Flower2, Layout } from "lucide-react";

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
    subcategories: [ { title: "Gardens & Landscaping", items: [ { name: "Landscape Design",
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
        { title: "Architectural Vision",
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

  const handleCall = (phone = "254721175735") => {
    window.location.href = `tel:+${phone}`;
  };

  // Update default phone numbers for WhatsApp and Call
  const defaultWhatsAppNumber = "254711441245";
  const defaultCallNumber = "254721175735";

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
                                loading="lazy"
                                decoding="async"
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
                            {/* Glassmorphism Hover Overlay */}
                            <div className="absolute inset-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-6 scale-95 group-hover:scale-100">
                              <div className="text-white space-y-3">
                                <Badge variant="outline" className="text-white border-white/40">{sub.title}</Badge>
                                <h3 className="font-black text-2xl uppercase tracking-tighter">{item.name}</h3>
                                <Button size="sm" variant="secondary" className="rounded-full font-bold" onClick={() => handleWhatsApp(item.name, defaultWhatsAppNumber)}>
                                  <MessageCircle className="w-4 h-4 mr-2" />
                                  Inquire Now
                                </Button>
                              </div>
                            </div>
                            <CardContent className="p-8 flex-1 flex flex-col hidden"> {/* Hide default content, show on hover via glassmorphism */}
                              <div className="flex items-start justify-between mb-2"> {/* This content will be hidden */}
                                <h3 className="text-2xl font-bold">{item.name}</h3> {/* This content will be hidden */}
                                <Check className="w-6 h-6 text-primary" /> {/* This content will be hidden */}
                              </div>
                              <p className="text-muted-foreground mb-8 text-lg">
                                {item.specs}
                              </p>
                              
                              <div className="mt-auto flex flex-col gap-3">
                                <Button
                                  variant="default"
                                  className="h-auto py-2.5 gap-1 shadow-md"
                                  onClick={() => handleWhatsApp(item.name, defaultWhatsAppNumber)}
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                  <span className="text-[9px] uppercase font-bold">
                                    WhatsApp (+254 711 44 12 45)
                                  </span>
                                </Button>
                                <Button
                                  variant="outline"
                                  className="h-auto py-2.5 gap-1"
                                  onClick={() => handleCall(defaultCallNumber)}
                                >
                                  <Phone className="w-3.5 h-3.5" />
                                  <span className="text-[9px] uppercase font-bold">
                                    Call (+254 721 17 57 35)
                                  </span>
                                </Button>
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
    </div>
  );
}
