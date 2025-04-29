
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured);
  
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

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
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
