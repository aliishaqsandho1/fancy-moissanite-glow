
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Recycle, Globe, ArrowRight } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="fancy-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Our Commitment to Sustainability</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            At Fancy Moissanite, we believe that beautiful jewelry shouldn't come at the expense of our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="futuristic-panel p-6 md:p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Eco-Friendly Alternative</h2>
            <p className="text-muted-foreground mb-6">
              Moissanite is a sustainable alternative to mined diamonds, with a significantly lower environmental impact. Our moissanite is lab-created, eliminating the need for destructive mining practices.
            </p>
            <div className="gold-divider w-1/2 mb-6"></div>
            <Link to="/about" className="mt-auto">
              <Button variant="outline" className="group">
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="futuristic-panel p-6 md:p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Recycle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Responsible Sourcing</h2>
            <p className="text-muted-foreground mb-6">
              We carefully select suppliers who share our commitment to ethical practices and environmental responsibility. All our precious metals are recycled whenever possible, reducing the need for additional mining.
            </p>
            <div className="gold-divider w-1/2 mb-6"></div>
            <Link to="/about" className="mt-auto">
              <Button variant="outline" className="group">
                Our Partners
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="gold-glass-panel p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Sustainability Practices</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border border-gold/20">
              <CardContent className="p-6">
                <CheckCircle className="text-primary mb-4 h-8 w-8" />
                <h3 className="text-xl font-medium mb-2">Carbon-Neutral Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  We offset 100% of carbon emissions from our shipping and deliveries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-gold/20">
              <CardContent className="p-6">
                <CheckCircle className="text-primary mb-4 h-8 w-8" />
                <h3 className="text-xl font-medium mb-2">Plastic-Free Packaging</h3>
                <p className="text-sm text-muted-foreground">
                  Our packaging is 100% recyclable and plastic-free, made from sustainable materials.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-gold/20">
              <CardContent className="p-6">
                <CheckCircle className="text-primary mb-4 h-8 w-8" />
                <h3 className="text-xl font-medium mb-2">Energy Efficient Studios</h3>
                <p className="text-sm text-muted-foreground">
                  Our workshops run on renewable energy and employ energy-efficient practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-gold/20">
              <CardContent className="p-6">
                <CheckCircle className="text-primary mb-4 h-8 w-8" />
                <h3 className="text-xl font-medium mb-2">Recycled Metals</h3>
                <p className="text-sm text-muted-foreground">
                  We prioritize recycled gold, platinum, and silver to reduce mining impact.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our commitment to sustainability goes beyond just using eco-friendly materials. We're constantly seeking ways to reduce our environmental footprint across all aspects of our business.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3" 
            alt="Sustainability" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="fancy-container">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold mb-4">Future Initiatives</h2>
                <p className="text-muted-foreground mb-6">
                  We're working on new ways to make our business even more sustainable, from carbon-negative shipping to blockchain traceability for all our materials.
                </p>
                <Button>Join Our Journey</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="inline-block gold-border p-8 rounded-xl">
            <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4">Environmental Impact Report</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We believe in transparency. Download our annual environmental impact report to see the concrete steps we're taking to protect our planet.
            </p>
            <Button variant="outline">Download Report (PDF)</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
