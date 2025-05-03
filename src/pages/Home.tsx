
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
import { getFeaturedProducts, getNewArrivals, getPopularProducts, getProducts, getTestimonials } from '@/data/siteData';

export default function Home() {
  const featuredProducts = getFeaturedProducts(3);
  const newArrivals = getNewArrivals(4);
  const popularProducts = getPopularProducts(6);
  const testimonials = getTestimonials(3);
  
  return (
    <div>
      {/* Featured Banner Section with CategoryBar */}
      <section className="py-6">
        <div className="fancy-container grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Vertical CategoryBar */}
          <div className="lg:col-span-3">
            <CategoryBar vertical={true} className="h-full" />
          </div>
          
          {/* Main Banner */}
          <div className="lg:col-span-9 bg-stone-50 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="flex flex-col justify-center p-8">
                <h2 className="text-xl text-gray-500 mb-1">PERFECT GIFTS</h2>
                <p className="text-sm mb-2">British & European Tastes</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">JEWELLERY DESIGNED FOR<br/>YOUR SPECIAL MOMENTS</h1>
                <Button asChild variant="outline" className="rounded-none w-fit border-black text-black hover:bg-black hover:text-white">
                  <Link to="/shop">Shop now</Link>
                </Button>
              </div>
              <div className="hidden lg:block relative h-full">
                <img
                  src="/lovable-uploads/06733140-3eaf-4d43-996b-e89f6205344a.png"
                  alt="Featured jewelry"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
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
      <section className="py-16">
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
      <section className="py-16 bg-secondary/30">
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

      {/* Popular Products Section - New Section */}
      <section className="py-16">
        <div className="fancy-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Most Popular</h2>
              <p className="text-muted-foreground">Discover what our customers love the most</p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/shop" className="flex items-center gap-2">
                View All <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
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
      <section className="py-16 bg-secondary/30">
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
      <section className="py-16">
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
      <section className="py-16 bg-secondary/30">
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
      <section className="py-16">
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
