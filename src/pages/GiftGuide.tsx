
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Gift, Sparkles, Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import products from '@/data/products';

const occasions = [
  { id: 'anniversary', label: 'Anniversary', icon: <Calendar className="h-5 w-5" /> },
  { id: 'birthday', label: 'Birthday', icon: <Gift className="h-5 w-5" /> },
  { id: 'engagement', label: 'Engagement', icon: <Heart className="h-5 w-5" /> },
  { id: 'wedding', label: 'Wedding', icon: <Sparkles className="h-5 w-5" /> },
  { id: 'self-gift', label: 'Self Gift', icon: <User className="h-5 w-5" /> },
];

const featuredProducts = products.filter(product => product.featured).slice(0, 4);

const GiftGuide = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="fancy-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Gift Guide</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Find the perfect moissanite gift for every occasion, recipient, and budget with our curated collections.
          </p>
        </div>

        <Tabs defaultValue="anniversary" className="w-full mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {occasions.map(occasion => (
                <TabsTrigger key={occasion.id} value={occasion.id} className="flex gap-2 items-center">
                  {occasion.icon}
                  <span>{occasion.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {occasions.map(occasion => (
            <TabsContent key={occasion.id} value={occasion.id} className="animate-fade-in">
              <div className="futuristic-panel p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  {occasion.icon}
                  <span>Perfect for {occasion.label}</span>
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Our curated selection of moissanite jewelry pieces perfect for celebrating {occasion.label.toLowerCase()}.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProducts.map(product => (
                    <Card key={product.id} className="product-card overflow-hidden gold-border">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-medium mb-1 truncate">{product.title}</h3>
                        <p className="text-primary font-semibold">${product.price.toLocaleString()}</p>
                        <Link to={`/product/${product.id}`} className="mt-3 inline-block">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Link to="/shop">
                    <Button variant="secondary" className="group">
                      View All Products
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="gold-glass-panel p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 gold-highlight">Gift by Price Range</h2>
            <div className="space-y-3">
              <Link to="/shop?price=under500" className="flex items-center justify-between p-3 hover:bg-secondary/20 rounded-md transition-colors">
                <span>Under $500</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/shop?price=500to1000" className="flex items-center justify-between p-3 hover:bg-secondary/20 rounded-md transition-colors">
                <span>$500 - $1,000</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/shop?price=1000to2000" className="flex items-center justify-between p-3 hover:bg-secondary/20 rounded-md transition-colors">
                <span>$1,000 - $2,000</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/shop?price=over2000" className="flex items-center justify-between p-3 hover:bg-secondary/20 rounded-md transition-colors">
                <span>Over $2,000</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="gold-glass-panel p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 gold-highlight">Gift by Recipient</h2>
            <div className="space-y-3">
              <Link to="/shop?recipient=partner" className="flex items-center justify-between p-3 hover:bg-secondary/20 rounded-md transition-colors">
                <span>Partner or Spouse</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/shop?recipient=friend" className="flex items-center justify-between p-3 hover:bg-secondary/20 rounded-md transition-colors">
                <span>Friend</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/shop?recipient=parent" className="flex items-center justify-between p-3 hover:bg-secondary/20 rounded-md transition-colors">
                <span>Parent</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/shop?recipient=yourself" className="flex items-center justify-between p-3 hover:bg-secondary/20 rounded-md transition-colors">
                <span>Yourself</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="futuristic-panel p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Personal Shopping Assistance</h2>
          <p className="mb-6 text-muted-foreground">
            Not sure what to choose? Our jewelry consultants can help you find the perfect gift. Schedule a free consultation online or in-store.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button>Schedule Consultation</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftGuide;
