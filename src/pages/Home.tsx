
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Award, Clock, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import CategoryBar from '@/components/CategoryBar';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { products } from '@/data/siteData';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  const newArrivals = products.slice(0, 4);
  const testimonials = [
    {
      id: "1",
      author: "Sarah Johnson",
      rating: 5,
      comment: "I absolutely love my moissanite engagement ring! The sparkle is incredible and nobody can tell it's not a diamond. Amazing quality for the price.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      id: "2",
      author: "Michael Brown",
      rating: 5,
      comment: "Purchased a pair of earrings for my wife's birthday. She was thrilled with the quality and brilliance. Great customer service too!",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      id: "3",
      author: "Jessica Williams",
      rating: 4,
      comment: "The custom necklace I ordered exceeded my expectations. Beautiful craftsmanship and it arrived faster than I expected.",
      image: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
            alt="Luxury Jewelry"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="fancy-container relative z-10 text-white">
          <div className="max-w-2xl animate-fade-in bg-black/30 backdrop-blur-sm p-10 rounded-xl">
            <h5 className="text-primary mb-2 font-medium tracking-wider">TIMELESS ELEGANCE</h5>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Futuristic Elegance <span className="text-primary">Redefined</span></h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Experience the brilliance of moissanite jewelry designed for the modern era, with unparalleled sparkle and ethical sourcing
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 tracking-wider">
                <Link to="/shop">BROWSE COLLECTION</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                <Link to="/custom">DESIGN YOURS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Bar Section */}
      <section className="py-6 bg-gradient-to-r from-secondary/50 to-accent/20">
        <div className="fancy-container">
          <CategoryBar className="shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="fancy-container">
          <div className="text-center mb-12">
            <h6 className="text-primary font-medium mb-2">WHY CHOOSE US</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Moissanite Advantage</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 bg-card hover:bg-accent/10 rounded-xl transition-all duration-300 hover:translate-y-[-5px] shadow-sm hover:shadow-md border border-border/50">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethically Sourced</h3>
              <p className="text-muted-foreground">
                Our moissanite stones are lab-created, ensuring ethical sourcing and minimal environmental impact.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-card hover:bg-accent/10 rounded-xl transition-all duration-300 hover:translate-y-[-5px] shadow-sm hover:shadow-md border border-border/50">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Superior Brilliance</h3>
              <p className="text-muted-foreground">
                Moissanite has a higher refractive index than diamonds, creating unparalleled sparkle and fire.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-card hover:bg-accent/10 rounded-xl transition-all duration-300 hover:translate-y-[-5px] shadow-sm hover:shadow-md border border-border/50">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lifetime Warranty</h3>
              <p className="text-muted-foreground">
                Every piece comes with our lifetime warranty against manufacturing defects for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="fancy-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h6 className="text-primary font-medium mb-2">EXCLUSIVE SELECTION</h6>
              <h2 className="text-3xl font-bold">Featured Collection</h2>
              <div className="w-20 h-1 bg-primary mt-3"></div>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0 border-primary text-primary hover:bg-primary/10">
              <Link to="/shop" className="flex items-center gap-2">
                View All <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="py-16 bg-gradient-to-r from-accent/20 to-secondary/30 overflow-hidden">
        <div className="fancy-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-primary font-medium mb-2">OUR VISION</h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Redefining Luxury For The Modern Era</h2>
              <p className="mb-6 text-lg">
                At FANCY MOISSANITE, we combine cutting-edge technology with traditional craftsmanship to create jewelry that defines the future of luxury. Our moissanite stones offer superior brilliance and ethical sourcing.
              </p>
              <p className="mb-8">
                Each piece is meticulously designed and crafted to showcase the exceptional fire and brilliance that makes moissanite truly special, while maintaining a commitment to ethical practices and affordability.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 tracking-wide">
                <Link to="/about">DISCOVER OUR STORY</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhbW9uZCUyMG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                  alt="Jewelry craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/20 border border-primary/30 blur-md"></div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="fancy-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h6 className="text-primary font-medium mb-2">FRESH DESIGNS</h6>
              <h2 className="text-3xl font-bold">New Arrivals</h2>
              <div className="w-20 h-1 bg-primary mt-3"></div>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0 border-primary text-primary hover:bg-primary/10">
              <Link to="/shop" className="flex items-center gap-2">
                View All <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Collection Categories */}
      <section className="py-20">
        <div className="fancy-container">
          <div className="text-center mb-12">
            <h6 className="text-primary font-medium mb-2">BROWSE OUR COLLECTIONS</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop By Category</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
              { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599459183200-59c7687a0275?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
              { name: 'Earrings', image: 'https://images.unsplash.com/photo-1635767798638-3665a0a107fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
              { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
            ].map((category) => (
              <Link 
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`} 
                className="relative overflow-hidden rounded-xl group h-80 shadow-lg"
              >
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 group-hover:bg-black/60 transition-all duration-300">
                  <div className="w-full">
                    <h3 className="text-2xl font-semibold text-white mb-2">{category.name}</h3>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm font-medium">EXPLORE COLLECTION</span>
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="fancy-container">
          <div className="text-center mb-12">
            <h6 className="text-primary font-medium mb-2">CUSTOMER EXPERIENCES</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why our customers love our moissanite jewelry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-border/50 hover:border-primary/40 transition duration-300 hover:shadow-lg bg-card rounded-xl overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-border/30">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary" 
                  />
                  <div>
                    <CardTitle className="text-lg">{testimonial.author}</CardTitle>
                    <div className="flex items-center mt-1">
                      {Array(5).fill(0).map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-primary' : 'text-gray-300'}`}
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic leading-relaxed">{testimonial.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/testimonials" className="flex items-center gap-2">View All Testimonials <ChevronRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-accent/20 to-secondary/30">
        <div className="fancy-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h6 className="text-primary font-medium mb-2">BEYOND DIAMONDS</h6>
            <h2 className="text-3xl font-bold mb-4">Why Choose Moissanite?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">
              Moissanite offers exceptional brilliance and ethical benefits compared to traditional diamonds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 hover:translate-y-[-5px] shadow-sm hover:shadow-md rounded-xl overflow-hidden">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <ShoppingBag className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-center">Better Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Get more brilliance and fire for your budget, with moissanite costing a fraction of a diamond while offering superior visual properties.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 hover:translate-y-[-5px] shadow-sm hover:shadow-md rounded-xl overflow-hidden">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-center">Ethical Choice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Lab-created moissanite is conflict-free and environmentally responsible, providing peace of mind with every purchase.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 hover:translate-y-[-5px] shadow-sm hover:shadow-md rounded-xl overflow-hidden">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-center">Lasting Durability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Rated 9.25 on the Mohs scale, moissanite is highly durable and resistant to scratching, ensuring lifelong beauty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="fancy-container text-center max-w-3xl mx-auto relative z-10">
          <h6 className="text-primary font-medium mb-2">PERSONALIZED DESIGN</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Design Your Perfect Piece</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg mb-10 max-w-xl mx-auto">
            Can't find exactly what you're looking for? Work with our designers to create a custom piece that's uniquely yours and perfectly fits your style.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10 tracking-wider">
            <Link to="/custom">START YOUR CUSTOM DESIGN</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
