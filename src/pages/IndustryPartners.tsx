
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HandshakeIcon, Award, Globe, ArrowRight } from 'lucide-react';

const partners = [
  {
    id: 1,
    name: 'GemTech Laboratories',
    type: 'supplier',
    description: 'Leading provider of lab-grown moissanite stones with exceptional quality control.',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    featured: true
  },
  {
    id: 2,
    name: 'MetalWorks International',
    type: 'supplier',
    description: 'Supplier of recycled precious metals with a commitment to sustainable sourcing.',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    featured: true
  },
  {
    id: 3,
    name: 'Luxe Packaging Co.',
    type: 'supplier',
    description: 'Creator of eco-friendly, luxury packaging solutions for fine jewelry.',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    featured: false
  },
  {
    id: 4,
    name: 'Global Gemological Institute',
    type: 'certification',
    description: 'Independent laboratory providing grading and certification for moissanite gemstones.',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    featured: true
  },
  {
    id: 5,
    name: 'Sustainable Jewelry Alliance',
    type: 'association',
    description: 'Industry organization promoting ethical practices and sustainability in jewelry production.',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    featured: true
  },
  {
    id: 6,
    name: 'Creative Casting Studios',
    type: 'supplier',
    description: 'Master jewelers specializing in intricate casting and finishing for fine jewelry.',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    featured: false
  },
  {
    id: 7,
    name: 'Ethical Mining Collective',
    type: 'association',
    description: 'Organization dedicated to improving standards in the mining and mineral sourcing industry.',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    featured: false
  },
  {
    id: 8,
    name: 'Digital Jewelry Marketing Group',
    type: 'marketing',
    description: 'Specialized marketing agency for luxury jewelry brands with digital expertise.',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    featured: true
  }
];

const IndustryPartners = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="fancy-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Our Industry Partners</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            We collaborate with the finest organizations in the jewelry industry to ensure exceptional quality, sustainability, and innovation.
          </p>
        </div>

        <div className="futuristic-panel p-6 md:p-8 mb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Better Together</h2>
              <div className="gold-accent mb-6">
                <p className="text-muted-foreground">
                  At Fancy Moissanite, we believe that creating extraordinary jewelry requires extraordinary partnerships. Our carefully cultivated network of suppliers, certifiers, and industry organizations enables us to deliver exceptional quality while upholding our commitment to ethical practices.
                </p>
              </div>
              <p className="mb-6">
                Each partner is selected based on their expertise, commitment to sustainability, and shared values. Together, we're transforming the jewelry industry by making ethical, sustainable luxury accessible to all.
              </p>
              <div className="flex gap-4">
                <Button className="group">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <Card className="gold-glass-panel h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Partner Standards</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Quality Excellence</h4>
                        <p className="text-sm text-muted-foreground">
                          Our partners must demonstrate unwavering commitment to quality in materials, craftsmanship, and service.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Environmental Responsibility</h4>
                        <p className="text-sm text-muted-foreground">
                          We partner with organizations that implement sustainable practices and minimize environmental impact.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Fair Labor Practices</h4>
                        <p className="text-sm text-muted-foreground">
                          All partners must adhere to fair labor practices, providing safe working conditions and fair compensation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <LightbulbIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Innovation</h4>
                        <p className="text-sm text-muted-foreground">
                          We seek partners who continually invest in research and development to advance the jewelry industry.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <TabsTrigger value="all">All Partners</TabsTrigger>
              <TabsTrigger value="supplier">Suppliers</TabsTrigger>
              <TabsTrigger value="certification">Certification</TabsTrigger>
              <TabsTrigger value="association">Associations</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="supplier" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.filter(p => p.type === 'supplier').map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certification" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.filter(p => p.type === 'certification').map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="association" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.filter(p => p.type === 'association').map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="gold-glass-panel p-6 md:p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Collaborations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="GemTech Laboratory" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">GemTech Laboratories: The Science of Brilliance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our collaboration with GemTech Laboratories has revolutionized the quality and consistency of our moissanite stones. Using advanced spectroscopy and AI-driven quality control, GemTech ensures that every stone meets our exceptional standards.
                </p>
                <Button variant="outline" size="sm">Read Case Study</Button>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Sustainable Jewelry Alliance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainable Jewelry Alliance: Setting New Standards</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  As founding members of the Sustainable Jewelry Alliance, we've helped establish industry-wide standards for ethical sourcing and environmental responsibility. This partnership continues to drive positive change throughout the jewelry supply chain.
                </p>
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnering With Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always open to exploring new partnerships that align with our values and enhance our ability to create exceptional jewelry. Whether you're a supplier, industry organization, or service provider, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button>Partner Inquiry Form</Button>
            <Button variant="outline">Download Partnership Guidelines</Button>
          </div>
        </div>

        <div className="futuristic-panel p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Message className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Submit Inquiry</h3>
              <p className="text-sm text-muted-foreground">
                Fill out our partnership inquiry form with details about your organization and proposed collaboration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Review Process</h3>
              <p className="text-sm text-muted-foreground">
                Our partnership team will review your inquiry and arrange an initial discussion if there's potential alignment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <HandshakeIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Develop a formal partnership agreement and begin our collaborative journey together.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button>Contact Partnership Team</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PartnerCard = ({ partner }) => {
  return (
    <Card className="gold-glass-panel overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
              <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{partner.name}</h3>
              <div className="inline-block px-2 py-1 rounded-full text-xs bg-primary/10 text-primary mb-2">
                {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
              </div>
              <p className="text-sm text-muted-foreground">
                {partner.description}
              </p>
            </div>
          </div>
        </div>
        {partner.featured && (
          <div className="bg-primary/10 p-2 text-center text-sm">
            <span className="font-medium text-primary">Featured Partner</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const LightbulbIcon = ({ className }) => (
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
    <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
  </svg>
);

const Users = ({ className }) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const HandshakeIcon = ({ className }) => (
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
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const Message = ({ className }) => (
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
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default IndustryPartners;
