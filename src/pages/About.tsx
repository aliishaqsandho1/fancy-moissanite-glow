
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="fancy-container py-12">
      <h1 className="text-3xl font-bold mb-8">About FANCY MOISSANITE</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4">
            At FANCY MOISSANITE, we're revolutionizing the jewelry industry by bringing together cutting-edge technology and timeless elegance. Our vision is to make sustainable luxury accessible to modern individuals who desire exceptional brilliance without the ethical concerns of traditional diamond mining.
          </p>
          <p>
            Founded in 2020, our mission has been to showcase the extraordinary qualities of moissanite - a gem that surpasses diamonds in brilliance and fire while being ethically created in laboratories rather than mined from the earth.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden gold-glow">
          <img 
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhbW9uZCUyMGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
            alt="Moissanite jewelry craftsmanship" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Why Moissanite Section */}
      <div className="bg-secondary/30 py-16 px-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why Moissanite?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background/50 p-8 rounded-lg">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">✨</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Superior Brilliance</h3>
            <p className="text-muted-foreground">
              Moissanite has a higher refractive index than diamonds (2.65 vs 2.42), giving it more sparkle and fire in various lighting conditions.
            </p>
          </div>
          
          <div className="bg-background/50 p-8 rounded-lg">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">🌿</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Ethical Sourcing</h3>
            <p className="text-muted-foreground">
              Lab-created moissanite eliminates concerns about mining practices, habitat destruction, and exploitation associated with diamond mining.
            </p>
          </div>
          
          <div className="bg-background/50 p-8 rounded-lg">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">💎</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Incredible Durability</h3>
            <p className="text-muted-foreground">
              With a hardness of 9.25 on the Mohs scale (diamonds are 10), moissanite is highly resistant to scratches and suitable for everyday wear.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Process */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Craftsmanship Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="font-semibold text-primary">01</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Design</h3>
            <p className="text-muted-foreground">
              Our designers create futuristic yet timeless pieces inspired by architecture, nature, and technology.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="font-semibold text-primary">02</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Stone Selection</h3>
            <p className="text-muted-foreground">
              Only the highest quality moissanite stones with perfect clarity and cut make it into our pieces.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="font-semibold text-primary">03</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Crafting</h3>
            <p className="text-muted-foreground">
              Master jewelers with decades of experience handcraft each piece with meticulous attention to detail.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="font-semibold text-primary">04</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Quality Control</h3>
            <p className="text-muted-foreground">
              Rigorous testing ensures each piece meets our exacting standards for brilliance and durability.
            </p>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Alexandra Chen" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">Alexandra Chen</h3>
            <p className="text-primary mb-3">Founder & Lead Designer</p>
            <p className="text-muted-foreground">
              With over 15 years in jewelry design, Alexandra brings her passion for sustainable luxury to every collection.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                alt="Marcus Rodriguez" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">Marcus Rodriguez</h3>
            <p className="text-primary mb-3">Master Jeweler</p>
            <p className="text-muted-foreground">
              Marcus brings traditional craftsmanship into the future, with expertise in emerging jewelry technologies.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Sophia Kim" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">Sophia Kim</h3>
            <p className="text-primary mb-3">Gemologist</p>
            <p className="text-muted-foreground">
              Sophia's expertise ensures we use only the highest quality moissanite stones in our creations.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center bg-gradient-to-b from-secondary/30 to-transparent py-16 px-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Experience the Future of Luxury</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Discover why more discerning customers are choosing FANCY MOISSANITE for their special moments. Browse our collection or create a custom piece that tells your unique story.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/shop">Shop Collection</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/custom">Design Custom Piece</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
