
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Info } from "lucide-react";

const JewelryEducation = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="fancy-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Jewelry Education</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Explore our comprehensive guides to help you make informed decisions about your fine jewelry purchases.
          </p>
        </div>

        <Tabs defaultValue="moissanite" className="w-full mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="moissanite">Moissanite Guide</TabsTrigger>
              <TabsTrigger value="metals">Metal Types</TabsTrigger>
              <TabsTrigger value="settings">Setting Styles</TabsTrigger>
              <TabsTrigger value="care">Jewelry Care</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="moissanite" className="animate-fade-in">
            <div className="futuristic-panel p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">What is Moissanite?</h2>
                  <div className="gold-accent mb-6">
                    <p className="text-muted-foreground">
                      Moissanite is a lab-created gemstone that was first discovered in 1893 by Nobel Prize-winning scientist Dr. Henri Moissan. Originally found in a meteor crater, natural moissanite is extremely rare, so today's moissanite is created in controlled laboratory environments.
                    </p>
                  </div>
                  <p className="mb-6">
                    With a brilliance and fire that exceeds even that of a diamond, moissanite has become a popular choice for engagement rings and fine jewelry. It rates 9.25 on the Mohs scale of hardness, making it one of the hardest substances on earth, second only to diamond.
                  </p>
                  <div className="flex gap-4">
                    <Button className="group">
                      Shop Moissanite
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3"
                    alt="Moissanite gemstone"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Moissanite vs. Diamond</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="gold-glass-panel">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Brilliance & Fire</h4>
                    <p className="text-sm text-muted-foreground">
                      Moissanite actually has a higher refractive index than diamond, giving it more brilliance and fire. This means it returns more light to the eye, creating more sparkle.
                    </p>
                  </CardContent>
                </Card>
                <Card className="gold-glass-panel">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Durability</h4>
                    <p className="text-sm text-muted-foreground">
                      With a hardness of 9.25 on the Mohs scale (diamonds are 10), moissanite is extremely durable and resistant to scratching, making it perfect for everyday wear.
                    </p>
                  </CardContent>
                </Card>
                <Card className="gold-glass-panel">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Value</h4>
                    <p className="text-sm text-muted-foreground">
                      Moissanite offers exceptional value, typically costing 80-90% less than a diamond of comparable size and quality, allowing you to get more sparkle for your budget.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Moissanite Quality Grades</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">Moissanite is typically graded on color and clarity:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><strong>DEF (Colorless)</strong>: The highest color grade, completely colorless</li>
                      <li><strong>GHI (Near Colorless)</strong>: Very slight hints of color, not noticeable to most</li>
                      <li><strong>JK (Faint Color)</strong>: Slight hints of color may be visible in certain lighting</li>
                    </ul>
                    <p>At Fancy Moissanite, we primarily offer DEF colorless moissanite for the most diamond-like appearance.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Popular Moissanite Cuts</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">Moissanite can be cut into virtually any shape:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Round Brilliant</strong>: The most popular and sparkly cut</li>
                      <li><strong>Oval</strong>: An elongated shape that can make fingers appear slimmer</li>
                      <li><strong>Cushion</strong>: A square shape with rounded corners for a vintage look</li>
                      <li><strong>Princess</strong>: A square cut with excellent brilliance</li>
                      <li><strong>Emerald</strong>: A rectangular step-cut with long, elegant lines</li>
                      <li><strong>Pear</strong>: A teardrop shape combining round and marquise cuts</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Ethical & Environmental Benefits</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">Choosing moissanite offers several ethical and environmental advantages:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Lab-created with minimal environmental impact</li>
                      <li>No mining required, eliminating habitat destruction</li>
                      <li>Ethically produced with fair labor practices</li>
                      <li>100% conflict-free origin guaranteed</li>
                      <li>Sustainable and eco-friendly choice</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="metals" className="animate-fade-in">
            <div className="futuristic-panel p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6">Precious Metals Guide</h2>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                The metal you choose for your jewelry impacts its appearance, durability, and maintenance. Learn about the different precious metals we offer and which might be right for you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="gold-glass-panel overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-[#E8E8E8] to-[#D0D0D0]"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">White Gold</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      A gold alloy mixed with white metals and plated with rhodium for a bright, silvery appearance. Popular for modern designs.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Durability: High</span>
                      <span>Maintenance: Medium</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gold-glass-panel overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-[#FFD700] to-[#DAA520]"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Yellow Gold</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      The classic gold color, available in different karats (10k, 14k, 18k). Warm and traditional with timeless appeal.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Durability: Medium</span>
                      <span>Maintenance: Low</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gold-glass-panel overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-[#B76E79] to-[#E0BFB8]"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Rose Gold</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Gold mixed with copper for a romantic pink hue. Vintage appeal with modern durability. Flattering on most skin tones.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Durability: High</span>
                      <span>Maintenance: Low</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <Card className="gold-glass-panel md:w-1/2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Understanding Karats</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Karat (K) measures the purity of gold in an alloy:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><strong>24K:</strong> 99.9% pure gold - too soft for everyday jewelry</li>
                      <li><strong>18K:</strong> 75% gold - luxurious with good durability</li>
                      <li><strong>14K:</strong> 58.3% gold - excellent balance of purity and strength</li>
                      <li><strong>10K:</strong> 41.7% gold - most durable but less valuable</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="gold-glass-panel md:w-1/2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Metal Maintenance</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Each metal requires different care to maintain its beauty:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><strong>White Gold:</strong> May need rhodium replating every 1-2 years</li>
                      <li><strong>Yellow Gold:</strong> Simple cleaning with soap and water</li>
                      <li><strong>Rose Gold:</strong> Low maintenance, develops richer patina over time</li>
                      <li><strong>Platinum:</strong> Develops attractive patina, can be polished to restore shine</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Link to="/shop">
                  <Button className="group">
                    Browse Jewelry by Metal
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="animate-fade-in">
            <div className="futuristic-panel p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6">Setting Styles Guide</h2>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                The setting of your jewelry affects both its appearance and how securely the stones are held. Explore our guide to popular setting styles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="gold-glass-panel">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Prong Setting</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Metal claws that secure the stone while allowing maximum light exposure. Most common in engagement rings.
                    </p>
                    <div className="flex items-center text-sm">
                      <Info className="h-4 w-4 mr-2" />
                      <span>Best for: Solitaire designs, maximizing sparkle</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gold-glass-panel">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Halo Setting</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Small stones encircle the center stone, enhancing its apparent size and adding extra sparkle.
                    </p>
                    <div className="flex items-center text-sm">
                      <Info className="h-4 w-4 mr-2" />
                      <span>Best for: Maximizing apparent stone size</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gold-glass-panel">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Pavé Setting</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Small stones set closely together with minimal metal showing, creating a "paved" surface of continuous sparkle.
                    </p>
                    <div className="flex items-center text-sm">
                      <Info className="h-4 w-4 mr-2" />
                      <span>Best for: Adding brilliance to bands</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gold-glass-panel">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Channel Setting</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Stones set side by side in a channel with no metal separating them. Sleek, modern appearance with good protection.
                    </p>
                    <div className="flex items-center text-sm">
                      <Info className="h-4 w-4 mr-2" />
                      <span>Best for: Active lifestyles, secure stone setting</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gold-glass-panel">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Bezel Setting</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Metal rim completely surrounds the stone, offering maximum protection. Modern, sleek appearance.
                    </p>
                    <div className="flex items-center text-sm">
                      <Info className="h-4 w-4 mr-2" />
                      <span>Best for: Active lifestyles, contemporary design</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gold-glass-panel">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Tension Setting</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Stone appears suspended between two sides of the band, held by pressure. Creates a floating, modern look.
                    </p>
                    <div className="flex items-center text-sm">
                      <Info className="h-4 w-4 mr-2" />
                      <span>Best for: Contemporary, artistic designs</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Link to="/shop">
                  <Button className="group">
                    Explore Setting Styles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="care" className="animate-fade-in">
            <div className="futuristic-panel p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">Jewelry Care Guide</h2>
                  <div className="gold-accent mb-6">
                    <p className="text-muted-foreground">
                      Proper care and maintenance will keep your moissanite jewelry looking brilliant for generations. Follow these guidelines to ensure your pieces remain as stunning as the day you received them.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">Daily Care</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                    <li>Remove jewelry before swimming, showering, or using household chemicals</li>
                    <li>Apply lotions, perfumes, and hairsprays before putting on jewelry</li>
                    <li>Store pieces separately to prevent scratching</li>
                    <li>Clean regularly with mild soap and warm water</li>
                  </ul>
                  
                  <Link to="/care-instructions">
                    <Button variant="outline" className="group">
                      View Full Care Guide
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <Card className="gold-glass-panel h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Professional Services</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-1">Cleaning & Polishing</h4>
                          <p className="text-sm text-muted-foreground">
                            We offer professional cleaning services to restore your jewelry to its original brilliance. Recommended every 6-12 months.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Prong Inspection</h4>
                          <p className="text-sm text-muted-foreground">
                            Have the settings checked annually to ensure stones are secure and prongs aren't worn.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Rhodium Plating</h4>
                          <p className="text-sm text-muted-foreground">
                            White gold jewelry may need replating every 1-2 years to maintain its bright white appearance.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Sizing & Repairs</h4>
                          <p className="text-sm text-muted-foreground">
                            Our expert jewelers can resize rings and repair damaged pieces to ensure a perfect fit and appearance.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="inline-block gold-border p-8 rounded-xl">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">Download Our Complete Jewelry Guide</h3>
                  <p className="text-muted-foreground mb-6">
                    Our comprehensive guide includes detailed information on moissanite, precious metals, setting styles, and jewelry care.
                  </p>
                  <Button>Download PDF Guide</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default JewelryEducation;
