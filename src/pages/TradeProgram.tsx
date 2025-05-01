
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Users, Award, Briefcase, ArrowRight } from 'lucide-react';

const TradeProgram = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="fancy-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Trade Program</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Exclusive benefits for jewelry industry professionals, designers, and wedding planners.
          </p>
        </div>

        <div className="futuristic-panel p-6 md:p-8 mb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Join Our Trade Program</h2>
              <div className="gold-accent mb-6">
                <p className="text-muted-foreground">
                  Our Trade Program is designed to support professionals in the jewelry and wedding industry with special pricing, priority service, and exclusive resources.
                </p>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Who Can Apply?</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Jewelry Designers & Retailers</h4>
                    <p className="text-sm text-muted-foreground">
                      Independent designers and established retailers looking to incorporate moissanite into their collections.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Wedding & Event Planners</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional planners who regularly work with clients on jewelry selections for special occasions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Interior Designers & Stylists</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional designers who source jewelry and accessories for photo shoots, film, or client projects.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="group">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <Card className="gold-glass-panel h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Program Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">Wholesale Pricing</h4>
                        <p className="text-sm text-muted-foreground">Enjoy discounts of up to 40% off retail prices</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">Dedicated Account Representative</h4>
                        <p className="text-sm text-muted-foreground">Personal point of contact for all your needs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">Priority Production</h4>
                        <p className="text-sm text-muted-foreground">Expedited manufacturing and shipping</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">Marketing Resources</h4>
                        <p className="text-sm text-muted-foreground">Access to high-resolution images and educational materials</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">Sample Program</h4>
                        <p className="text-sm text-muted-foreground">Option to borrow samples for client presentations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">Custom Design Services</h4>
                        <p className="text-sm text-muted-foreground">Collaborative design process for unique pieces</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Tabs defaultValue="designers" className="w-full mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <TabsTrigger value="designers">For Designers</TabsTrigger>
              <TabsTrigger value="planners">For Wedding Planners</TabsTrigger>
              <TabsTrigger value="stylists">For Stylists</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="designers" className="animate-fade-in">
            <div className="futuristic-panel p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Jewelry Designer Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="gold-glass-panel">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Loose Moissanite</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Access our extensive collection of loose moissanite stones in various cuts, colors, and sizes for your custom designs.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Browse Selection</Button>
                  </CardFooter>
                </Card>
                
                <Card className="gold-glass-panel">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Custom Settings</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Work with our master jewelers to create custom settings that bring your unique designs to life.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
                
                <Card className="gold-glass-panel">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Designer Showcases</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Opportunity to showcase your moissanite designs in our stores and online galleries.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join over 200 independent jewelry designers who have incorporated our exceptional moissanite into their collections.
                </p>
                <Button>Apply to Designer Program</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="planners" className="animate-fade-in">
            <div className="futuristic-panel p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Wedding Planner Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="gold-glass-panel">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Client Presentations</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Access sample collections and presentation materials to help your clients make informed jewelry decisions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Access Materials</Button>
                  </CardFooter>
                </Card>
                
                <Card className="gold-glass-panel">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Private Consultations</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Schedule private showings for your clients with our jewelry experts, either in-store or virtually.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Book Now</Button>
                  </CardFooter>
                </Card>
                
                <Card className="gold-glass-panel">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Referral Program</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Earn commissions on client referrals and enjoy special benefits for your wedding planning business.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Enhance your wedding planning services by offering expert jewelry guidance through our planner partnership program.
                </p>
                <Button>Join Planner Program</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stylists" className="animate-fade-in">
            <div className="futuristic-panel p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Stylist Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="gold-glass-panel">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Product Loans</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Borrow jewelry pieces for photo shoots, events, or client styling with our flexible loan program.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Loan Terms</Button>
                  </CardFooter>
                </Card>
                
                <Card className="gold-glass-panel">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Styling Kits</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Access curated styling kits with complementary pieces designed to work together for various occasions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Browse Kits</Button>
                  </CardFooter>
                </Card>
                
                <Card className="gold-glass-panel">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Editorial Features</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Collaborate on editorial content featuring our moissanite jewelry for publications and digital media.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Propose Collaboration</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join our network of professional stylists and gain access to premium moissanite jewelry for your creative projects.
                </p>
                <Button>Apply to Stylist Program</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="gold-glass-panel p-6 md:p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-bold mb-2">Submit Application</h3>
              <p className="text-sm text-muted-foreground">
                Complete our online application form with your business details and credentials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-bold mb-2">Verification</h3>
              <p className="text-sm text-muted-foreground">
                We'll review your application and verify your professional credentials within 2-3 business days.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-bold mb-2">Account Setup</h3>
              <p className="text-sm text-muted-foreground">
                Once approved, we'll create your trade account and send login credentials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-bold mb-2">Welcome Call</h3>
              <p className="text-sm text-muted-foreground">
                Your dedicated account manager will schedule a welcome call to introduce you to the program.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take your business to the next level with our Trade Program. Apply today to access exclusive benefits and wholesale pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Apply Now</Button>
            <Link to="/contact">
              <Button variant="outline" size="lg">Contact Trade Team</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeProgram;
