
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Award, Clock, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  const newArrivals = products.slice(0, 4);
  const testimonials = [
    {
      id: 1,
      author: "Sophia Martinez",
      comment: "The brilliance of my moissanite ring surpasses any diamond I've ever seen. Everyone asks where I got it!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      id: 2,
      author: "James Wilson",
      comment: "I was skeptical about moissanite, but after seeing it in person, I'm a complete convert. Stunning brilliance!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      id: 3,
      author: "Emily Chen",
      comment: "The custom design process was so easy, and the final piece exceeded my expectations. Worth every penny!",
      rating: 4,
      image: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
            alt="Luxury Jewelry"
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="fancy-container relative z-10 text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Futuristic Elegance</h1>
            <p className="text-lg md:text-xl mb-8">
              Experience the brilliance of moissanite jewelry designed for the modern era
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/shop">Explore Collection</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                <Link to="/custom">Custom Designs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="fancy-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ethically Sourced</h3>
              <p className="text-muted-foreground">
                Our moissanite stones are lab-created, ensuring ethical sourcing and minimal environmental impact.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Superior Brilliance</h3>
              <p className="text-muted-foreground">
                Moissanite has a higher refractive index than diamonds, creating unparalleled sparkle and fire.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
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
              <h2 className="text-3xl font-bold mb-2">Featured Collection</h2>
              <p className="text-muted-foreground">Discover our most sought-after designs</p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
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

      {/* New Arrivals Section */}
      <section className="py-20 bg-secondary/30">
        <div className="fancy-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
              <p className="text-muted-foreground">The latest additions to our collection</p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
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

      {/* About Section */}
      <section className="py-20">
        <div className="fancy-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Future of Jewelry</h2>
            <p className="mb-6">
              At FANCY MOISSANITE, we combine cutting-edge technology with traditional craftsmanship to create jewelry that defines the future of luxury. Our moissanite stones offer superior brilliance and ethical sourcing.
            </p>
            <p className="mb-6">
              Each piece is meticulously designed and crafted to showcase the exceptional fire and brilliance that makes moissanite truly special.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden gold-glow">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhbW9uZCUyMG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-gold border border-gold/30"></div>
          </div>
        </div>
      </section>

      {/* Collection Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="fancy-container">
          <h2 className="text-3xl font-bold text-center mb-12">Shop By Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((category) => (
              <Link 
                key={category}
                to={`/category/${category.toLowerCase()}`} 
                className="relative overflow-hidden rounded-lg group h-64"
              >
                <img 
                  src={`https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60`}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="w-full">
                    <h3 className="text-xl font-semibold text-white mb-1">{category}</h3>
                    <div className="flex items-center text-white/80 group-hover:text-primary transition-colors">
                      <span className="text-sm">Shop Now</span>
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
      <section className="py-20">
        <div className="fancy-container">
          <h2 className="text-3xl font-bold text-center mb-2">What Our Customers Say</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Discover why our customers love our moissanite jewelry
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-gold/20 hover:border-gold/40 transition duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover" 
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
                <CardContent>
                  <p className="text-muted-foreground italic">{testimonial.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="fancy-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Moissanite?</h2>
            <p className="text-muted-foreground">
              Moissanite offers exceptional brilliance and ethical benefits compared to traditional diamonds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-transparent border-gold/20 hover:border-gold/40 transition">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Better Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get more brilliance and fire for your budget, with moissanite costing a fraction of a diamond.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-transparent border-gold/20 hover:border-gold/40 transition">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Ethical Choice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lab-created moissanite is conflict-free and environmentally responsible.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-transparent border-gold/20 hover:border-gold/40 transition">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Lasting Durability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rated 9.25 on the Mohs scale, moissanite is highly durable and resistant to scratching.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="fancy-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Design Your Perfect Piece</h2>
          <p className="text-lg mb-8">
            Can't find exactly what you're looking for? Work with our designers to create a custom piece that's uniquely yours.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/custom">Start Custom Design</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
