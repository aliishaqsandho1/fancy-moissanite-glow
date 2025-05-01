
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Truck,
  Globe,
  Clock,
  Package,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  MapPin
} from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="fancy-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Shipping Information</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Everything you need to know about our shipping policies, delivery times, and international orders.
          </p>
        </div>

        <Tabs defaultValue="domestic" className="w-full mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <TabsTrigger value="domestic">Domestic Shipping</TabsTrigger>
              <TabsTrigger value="international">International</TabsTrigger>
              <TabsTrigger value="tracking">Order Tracking</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="domestic" className="animate-fade-in">
            <div className="futuristic-panel p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Truck className="mr-3 h-6 w-6 text-primary" />
                    Domestic Shipping Options
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="gold-accent">
                      <h3 className="font-bold text-lg mb-2">Free Standard Shipping</h3>
                      <p className="text-muted-foreground mb-2">
                        All orders over $100 qualify for free standard shipping within the continental United States.
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Delivery time: 5-7 business days</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Fully insured and tracked</span>
                        </li>
                        <li className="flex items-start">
                          <Package className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Signature required upon delivery</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">Expedited Shipping ($15)</h3>
                      <p className="text-muted-foreground mb-2">
                        Need your jewelry sooner? Choose our expedited shipping option at checkout.
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Delivery time: 2-3 business days</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Fully insured and tracked</span>
                        </li>
                        <li className="flex items-start">
                          <Package className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Signature required upon delivery</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">Next Day Delivery ($35)</h3>
                      <p className="text-muted-foreground mb-2">
                        For urgent gifts or special occasions, choose our premium next-day delivery service.
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Delivery time: Next business day (order by 1pm EST)</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Priority handling and premium packaging</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Not available for custom orders or to all locations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <Card className="gold-glass-panel h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">Important Information</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-1">Processing Time</h4>
                          <p className="text-sm text-muted-foreground">
                            Most in-stock items ship within 1-2 business days. Custom and made-to-order items may require 5-10 business days before shipping.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-1">Shipping Restrictions</h4>
                          <p className="text-sm text-muted-foreground">
                            We currently ship to all 50 states, but some remote locations may experience additional delays or fees.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-1">Weekend & Holiday Deliveries</h4>
                          <p className="text-sm text-muted-foreground">
                            Orders placed on weekends or holidays will be processed the next business day. Next-day delivery is not available for Saturday, Sunday, or holidays.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="international" className="animate-fade-in">
            <div className="futuristic-panel p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Globe className="mr-3 h-6 w-6 text-primary" />
                    International Shipping
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="gold-accent">
                      <h3 className="font-bold text-lg mb-2">Standard International ($39.99)</h3>
                      <p className="text-muted-foreground mb-2">
                        Available to most countries worldwide with full tracking and insurance.
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Delivery time: 7-14 business days</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Fully insured and tracked</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Customs duties and taxes not included</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">Express International ($79.99)</h3>
                      <p className="text-muted-foreground mb-2">
                        Faster delivery option with priority customs clearance where available.
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Delivery time: 3-5 business days</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Priority handling and premium packaging</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Customs duties and taxes not included</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">Countries We Ship To</h3>
                      <p className="text-muted-foreground mb-4">
                        We currently ship to over 90 countries worldwide. Our most popular international destinations include:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          <span>Canada</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          <span>United Kingdom</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          <span>Australia</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          <span>Germany</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          <span>France</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          <span>Japan</span>
                        </div>
                      </div>
                      <p className="text-sm mt-2">
                        <Link to="#" className="text-primary hover:underline">View full list of countries</Link>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <Card className="gold-glass-panel h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">International Shipping Information</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-1">Customs & Import Duties</h4>
                          <p className="text-sm text-muted-foreground">
                            International orders may be subject to customs duties and taxes imposed by the destination country. These fees are the responsibility of the recipient and are not included in our shipping charges.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-1">Delivery Guarantees</h4>
                          <p className="text-sm text-muted-foreground">
                            While we provide estimated delivery timeframes, international shipping times can vary due to customs processing and local delivery conditions.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-1">International Returns</h4>
                          <p className="text-sm text-muted-foreground">
                            International orders are eligible for our standard return policy, but the customer is responsible for return shipping costs and any customs fees for returned items.
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button variant="outline" size="sm" className="w-full">
                          International Shipping FAQ
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tracking" className="animate-fade-in">
            <div className="futuristic-panel p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Package className="mr-3 h-6 w-6 text-primary" />
                    Track Your Order
                  </h2>
                  
                  <div className="space-y-8 mb-8">
                    <div className="gold-accent">
                      <h3 className="font-bold text-lg mb-2">How to Track Your Order</h3>
                      <p className="text-muted-foreground mb-4">
                        We provide tracking information for all orders. Here's how to check the status of your shipment:
                      </p>
                      <ol className="text-sm space-y-4 list-decimal pl-5">
                        <li>
                          <span className="font-medium">Order Confirmation Email</span>
                          <p className="text-muted-foreground mt-1">
                            Once your order ships, you'll receive an email with tracking information and a direct link to monitor your package's journey.
                          </p>
                        </li>
                        <li>
                          <span className="font-medium">Account Dashboard</span>
                          <p className="text-muted-foreground mt-1">
                            Log in to your Fancy Moissanite account and visit the "Order History" section to see real-time tracking information.
                          </p>
                        </li>
                        <li>
                          <span className="font-medium">Contact Customer Service</span>
                          <p className="text-muted-foreground mt-1">
                            If you need assistance tracking your order, our customer service team is available to help via phone, email, or live chat.
                          </p>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">Delivery Notifications</h3>
                      <p className="text-muted-foreground mb-4">
                        Stay informed throughout the shipping process with our automated notification system:
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Order confirmation when your purchase is complete</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Processing notification when your order enters production</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Shipping confirmation with tracking details</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>Delivery confirmation when your package arrives</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">Shipping Carriers</h3>
                      <p className="text-muted-foreground mb-4">
                        We partner with premium shipping carriers to ensure safe and timely delivery:
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Domestic Shipping:</span>
                          <ul className="mt-1 space-y-1">
                            <li>FedEx</li>
                            <li>UPS</li>
                            <li>USPS Priority</li>
                          </ul>
                        </div>
                        <div>
                          <span className="font-medium">International Shipping:</span>
                          <ul className="mt-1 space-y-1">
                            <li>DHL Express</li>
                            <li>FedEx International</li>
                            <li>UPS International</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="inline-block gold-border p-6 rounded-xl">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <AlertTriangle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Missing Package?</h4>
                        <p className="text-sm text-muted-foreground">
                          If your tracking shows delivered but you haven't received your package, please contact us within 24 hours. All shipments are insured against loss or damage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <Card className="gold-glass-panel mb-6">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">Track by Order Number</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="orderNumber" className="block text-sm font-medium mb-1">Order Number</label>
                          <input 
                            type="text" 
                            id="orderNumber"
                            placeholder="Enter your order number" 
                            className="futuristic-input w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                          <input 
                            type="email" 
                            id="email"
                            placeholder="Enter your email" 
                            className="futuristic-input w-full"
                          />
                        </div>
                        <Button className="w-full">Track Order</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="gold-glass-panel">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">Shipping Timeline</h3>
                      <div className="space-y-4 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gold/20">
                          <span>Order Placed</span>
                          <span>Day 0</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gold/20">
                          <span>Processing</span>
                          <span>1-2 Days</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gold/20">
                          <span>Quality Check</span>
                          <span>1 Day</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gold/20">
                          <span>Packaging</span>
                          <span>1 Day</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>In Transit</span>
                          <span>Varies by Shipping Method</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="gold-glass-panel">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Packaging</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Every piece of Fancy Moissanite jewelry arrives in our signature packaging, including a premium jewelry box, polishing cloth, and care instructions.
              </p>
              <Link to="/care-instructions">
                <Button variant="outline" size="sm" className="group">
                  Care Guide
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="gold-glass-panel">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Insurance & Protection</h3>
              <p className="text-sm text-muted-foreground mb-4">
                All shipments are fully insured against loss or damage. In the rare event of a shipping issue, we'll promptly replace your item or provide a full refund.
              </p>
              <Link to="/policies/returns">
                <Button variant="outline" size="sm" className="group">
                  Return Policy
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="gold-glass-panel">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gift Options</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Add a personal touch to your gift with our complimentary gift wrapping service and custom message option, available at checkout for all orders.
              </p>
              <Link to="/gift-guide">
                <Button variant="outline" size="sm" className="group">
                  Gift Guide
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our customer service team is here to assist with any shipping questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button>Contact Us</Button>
            <Link to="/faq">
              <Button variant="outline">Shipping FAQ</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckCircleIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const Gift = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);

export default ShippingInfo;
