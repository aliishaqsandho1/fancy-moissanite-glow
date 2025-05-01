
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Clock, Search } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: "Fancy Moissanite Flagship",
    address: "123 Fashion Avenue, New York, NY 10001",
    phone: "(212) 555-1234",
    email: "nyc@fancymoissanite.com",
    hours: "Mon-Sat: 10am-9pm, Sun: 11am-6pm",
    services: ["Custom Design", "Jewelry Repair", "Appraisals", "Cleaning"],
    coordinates: { lat: 40.7128, lng: -74.0060 },
    region: "East Coast"
  },
  {
    id: 2,
    name: "Fancy Moissanite Beverly Hills",
    address: "456 Luxury Lane, Beverly Hills, CA 90210",
    phone: "(310) 555-6789",
    email: "beverlyhills@fancymoissanite.com",
    hours: "Mon-Sat: 10am-7pm, Sun: 12pm-6pm",
    services: ["Custom Design", "Jewelry Repair", "Stone Setting"],
    coordinates: { lat: 34.0736, lng: -118.4004 },
    region: "West Coast"
  },
  {
    id: 3,
    name: "Fancy Moissanite Chicago",
    address: "789 Magnificent Mile, Chicago, IL 60611",
    phone: "(312) 555-4321",
    email: "chicago@fancymoissanite.com",
    hours: "Mon-Fri: 10am-8pm, Sat: 10am-7pm, Sun: 11am-5pm",
    services: ["Custom Design", "Jewelry Repair", "Cleaning"],
    coordinates: { lat: 41.8781, lng: -87.6298 },
    region: "Midwest"
  },
  {
    id: 4,
    name: "Fancy Moissanite Miami",
    address: "101 Ocean Drive, Miami, FL 33139",
    phone: "(305) 555-5678",
    email: "miami@fancymoissanite.com",
    hours: "Mon-Sat: 9am-9pm, Sun: 10am-7pm",
    services: ["Custom Design", "Stone Setting", "Appraisals"],
    coordinates: { lat: 25.7617, lng: -80.1918 },
    region: "East Coast"
  },
  {
    id: 5,
    name: "Fancy Moissanite Seattle",
    address: "222 Pike Street, Seattle, WA 98101",
    phone: "(206) 555-8765",
    email: "seattle@fancymoissanite.com",
    hours: "Mon-Fri: 10am-7pm, Sat: 10am-8pm, Sun: 11am-6pm",
    services: ["Custom Design", "Jewelry Repair", "Stone Setting"],
    coordinates: { lat: 47.6062, lng: -122.3321 },
    region: "West Coast"
  }
];

const StoreLocator = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  
  const filteredStores = stores.filter(store => {
    // Filter by search term
    const matchesSearch = 
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by region
    const matchesRegion = selectedRegion === "all" || store.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="py-12 md:py-16">
      <div className="fancy-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Our Stores</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Visit one of our showrooms to experience our moissanite jewelry in person and receive expert guidance.
          </p>
        </div>

        <div className="futuristic-panel p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="search" className="text-sm font-medium mb-2 block">Search by location or store name</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  id="search"
                  placeholder="Enter city, state, or store name" 
                  className="pl-10 futuristic-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Filter by region</label>
              <Tabs defaultValue="all" value={selectedRegion} onValueChange={setSelectedRegion}>
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="all">All Regions</TabsTrigger>
                  <TabsTrigger value="East Coast">East Coast</TabsTrigger>
                  <TabsTrigger value="West Coast">West Coast</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredStores.length} of {stores.length} stores
            </p>
          </div>

          <div className="space-y-6">
            {filteredStores.length > 0 ? (
              filteredStores.map(store => (
                <Card key={store.id} className="gold-glass-panel">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">{store.name}</h2>
                        <div className="flex items-start space-x-2 mb-2">
                          <MapPin className="h-5 w-5 text-primary mt-0.5" />
                          <p>{store.address}</p>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Phone className="h-5 w-5 text-primary" />
                          <p>{store.phone}</p>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Mail className="h-5 w-5 text-primary" />
                          <p>{store.email}</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Clock className="h-5 w-5 text-primary mt-0.5" />
                          <p>{store.hours}</p>
                        </div>
                      </div>
                      <div className="md:text-right">
                        <h3 className="font-bold mb-2">Services</h3>
                        <ul className="text-sm mb-4">
                          {store.services.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                        </ul>
                        <Button size="sm" className="w-full md:w-auto">Book Appointment</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg font-medium mb-2">No stores match your search criteria</p>
                <p className="text-muted-foreground mb-4">Try adjusting your search or browse all locations</p>
                <Button onClick={() => {setSearchTerm(""); setSelectedRegion("all");}}>
                  View All Stores
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Can't Visit In Person?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer virtual appointments where our jewelry consultants can guide you through our collections, answer questions, and help you find the perfect piece.
          </p>
          <Button className="mb-4">Schedule Virtual Appointment</Button>
          <p className="text-sm text-muted-foreground">
            Available Monday-Friday, 9am-7pm EST
          </p>
        </div>

        <div className="futuristic-panel p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Do I need an appointment?</h3>
              <p className="text-muted-foreground mb-4">
                Walk-ins are welcome at all of our locations, but appointments are recommended for personalized service, especially for custom design consultations.
              </p>
              
              <h3 className="font-bold mb-2">What should I bring to an appointment?</h3>
              <p className="text-muted-foreground mb-4">
                If you have inspiration images or specific ideas, bring those along. For resizing or repairs, bring the piece that needs attention.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What services are available in-store?</h3>
              <p className="text-muted-foreground mb-4">
                Services vary by location but generally include custom design consultations, jewelry cleaning, repairs, appraisals, and of course, shopping our collections.
              </p>
              
              <h3 className="font-bold mb-2">Can I see moissanite in person before purchasing?</h3>
              <p className="text-muted-foreground mb-4">
                Yes! Our showrooms have a wide selection of moissanite jewelry for you to try on and compare. Our experts can explain the differences between cuts and sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
