import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Newspaper, Download, Calendar, Globe, ArrowRight } from 'lucide-react';

const pressReleases = [
  {
    id: 'pr-1',
    title: 'Fancy Moissanite Unveils Revolutionary New Cutting Technique',
    date: '2024-04-15',
    summary: 'Industry-leading jewelry brand introduces proprietary cutting method that enhances the fire and brilliance of moissanite stones by up to 30%.',
    category: 'Product Innovation',
    featured: true
  },
  {
    id: 'pr-2',
    title: 'Sustainability Report: Fancy Moissanite Achieves Carbon Neutrality',
    date: '2024-02-28',
    summary: 'Luxury jewelry brand announces milestone achievement in its environmental initiatives, reaching complete carbon neutrality across all operations.',
    category: 'Sustainability',
    featured: true
  },
  {
    id: 'pr-3',
    title: 'Fancy Moissanite Expands Global Presence with New Paris Showroom',
    date: '2023-11-12',
    summary: 'Following successful expansion in North America, leading moissanite jewelry brand opens its first European flagship store in Paris.',
    category: 'Company News',
    featured: false
  },
  {
    id: 'pr-4',
    title: 'Award-Winning Designer Joins Fancy Moissanite as Creative Director',
    date: '2023-09-05',
    summary: 'Renowned jewelry designer Emma Laurent brings her visionary aesthetic to sustainable luxury brand as new Creative Director.',
    category: 'Company News',
    featured: true
  },
  {
    id: 'pr-5',
    title: 'Fancy Moissanite Partners with Wildlife Conservation Foundation',
    date: '2023-07-20',
    summary: 'New philanthropic initiative will donate 5% of proceeds from the "Wilderness" collection to global wildlife conservation efforts.',
    category: 'Partnerships',
    featured: false
  },
];

const mediaFeatures = [
  {
    id: 'mf-1',
    outlet: 'Vogue',
    title: 'The Future of Sustainable Luxury: How Moissanite is Changing Fine Jewelry',
    date: '2024-03-21',
    summary: 'An in-depth look at how Fancy Moissanite is revolutionizing the fine jewelry industry with sustainable practices and ethical sourcing.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mf-2',
    outlet: 'Forbes',
    title: 'Diamond Alternatives: The $2 Billion Industry Disruption',
    date: '2024-01-10',
    summary: 'How companies like Fancy Moissanite are capturing market share from traditional diamond sellers with superior ethical credentials and value.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mf-3',
    outlet: 'Luxury Daily',
    title: 'Interview: Fancy Moissanite CEO on Redefining Luxury for Modern Consumers',
    date: '2023-12-05',
    summary: 'An exclusive interview with our CEO on sustainability, innovation, and the changing preferences of luxury consumers.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

const PressRoom = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="fancy-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Press Room</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            The latest news, press releases, and media resources from Fancy Moissanite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="futuristic-panel p-6 md:p-8 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
            <div className="gold-accent mb-6">
              <p className="text-muted-foreground">
                For press inquiries, interview requests, or high-resolution images, please contact our media relations team. We're happy to provide information about our products, sustainability initiatives, or company developments.
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span>press@fancymoissanite.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>(212) 555-0123</span>
              </div>
            </div>
            <Button className="w-full sm:w-auto mt-auto">Contact Press Team</Button>
          </div>
          
          <div className="gold-glass-panel p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Press Kit</h2>
            <p className="text-muted-foreground mb-6">
              Download our comprehensive press kit containing company information, high-resolution images, product details, and fact sheets.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-gold/20 rounded-md">
                <div className="flex items-center">
                  <Download className="h-5 w-5 text-primary mr-3" />
                  <span>Company Fact Sheet</span>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
              <div className="flex items-center justify-between p-3 border border-gold/20 rounded-md">
                <div className="flex items-center">
                  <Download className="h-5 w-5 text-primary mr-3" />
                  <span>Product Images (High-Res)</span>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
              <div className="flex items-center justify-between p-3 border border-gold/20 rounded-md">
                <div className="flex items-center">
                  <Download className="h-5 w-5 text-primary mr-3" />
                  <span>Brand Guidelines & Logos</span>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
              <div className="flex items-center justify-between p-3 border border-gold/20 rounded-md">
                <div className="flex items-center">
                  <Download className="h-5 w-5 text-primary mr-3" />
                  <span>Complete Press Kit (ZIP)</span>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Media Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaFeatures.map(feature => (
              <Card key={feature.id} className="gold-glass-panel overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-primary">{feature.outlet}</span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(feature.date)}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.summary}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <a href={feature.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                    <span className="mr-1">Read Article</span>
                    <Globe className="h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full mb-16">
          <div className="flex flex-col space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-center">Press Releases</h2>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="innovation">Product Innovation</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                <TabsTrigger value="company">Company News</TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="all" className="animate-fade-in">
            <div className="space-y-6">
              {pressReleases.map(release => (
                <PressReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="innovation" className="animate-fade-in">
            <div className="space-y-6">
              {pressReleases.filter(release => release.category === 'Product Innovation').map(release => (
                <PressReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sustainability" className="animate-fade-in">
            <div className="space-y-6">
              {pressReleases.filter(release => release.category === 'Sustainability').map(release => (
                <PressReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="company" className="animate-fade-in">
            <div className="space-y-6">
              {pressReleases.filter(release => release.category === 'Company News').map(release => (
                <PressReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="futuristic-panel p-6 md:p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">About Fancy Moissanite</h2>
          <div className="text-muted-foreground space-y-4 mb-8">
            <p>
              Fancy Moissanite is a pioneering jewelry brand dedicated to creating exceptional moissanite jewelry that combines timeless elegance with sustainable practices. Founded in 2015, we've rapidly established ourselves as leaders in the ethical luxury jewelry space.
            </p>
            <p>
              Our mission is to provide consumers with beautiful, high-quality jewelry that doesn't compromise their values. By using lab-created moissanite instead of mined diamonds, we offer pieces with extraordinary brilliance and fire at a fraction of the environmental and ethical cost.
            </p>
            <p>
              With showrooms across the United States and a growing international presence, Fancy Moissanite continues to transform the jewelry industry through innovation, transparency, and commitment to excellence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button>
              Company History
            </Button>
            <Link to="/about">
              <Button variant="outline" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="gold-glass-panel p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Expert Commentary</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Our leadership team is available for expert commentary on sustainable jewelry, lab-created gemstones, jewelry trends, and ethical luxury.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border border-gold/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-1">Sustainability & Ethics</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Commentary on sustainable practices in jewelry production, ethical sourcing, and reducing environmental impact.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-bold">Jessica Davis</p>
                    <p className="text-xs text-muted-foreground">Chief Sustainability Officer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-gold/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-1">Gemstone Innovation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert insights on moissanite properties, cutting techniques, and technological advancements in gemstone creation.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-bold">RM</span>
                  </div>
                  <div>
                    <p className="font-bold">Dr. Robert Miller</p>
                    <p className="text-xs text-muted-foreground">Head of Gemstone Research</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-gold/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-1">Jewelry Design Trends</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Commentary on emerging design trends, consumer preferences, and the evolution of modern jewelry aesthetics.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-bold">EL</span>
                  </div>
                  <div>
                    <p className="font-bold">Emma Laurent</p>
                    <p className="text-xs text-muted-foreground">Creative Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button>Schedule an Interview</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PressReleaseCard = ({ release }) => {
  return (
    <Card className={`gold-glass-panel ${release.featured ? 'border border-primary/30' : ''}`}>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
          <div className="flex items-center mb-2 md:mb-0">
            <Newspaper className="h-5 w-5 text-primary mr-2" />
            <span className="font-medium text-sm">{release.category}</span>
            {release.featured && (
              <span className="ml-3 inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(release.date)}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{release.title}</h3>
        <p className="text-muted-foreground mb-4">{release.summary}</p>
        <div className="flex gap-4">
          <Button variant="outline" size="sm">Read Full Release</Button>
          <Button variant="ghost" size="sm" className="flex items-center">
            <Download className="h-4 w-4 mr-1" />
            Download PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper function to format dates
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options as Intl.DateTimeFormatOptions);
};

const Mail = ({ className }) => (
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
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Phone = ({ className }) => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default PressRoom;
