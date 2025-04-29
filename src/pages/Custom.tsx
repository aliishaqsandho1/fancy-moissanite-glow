
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export default function Custom() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a backend
    setFormSubmitted(true);
    toast({
      title: "Custom Design Request Received",
      description: "Our design team will contact you within 48 hours to discuss your vision.",
      duration: 5000,
    });
  };
  
  return (
    <div className="fancy-container py-12">
      <h1 className="text-3xl font-bold mb-4">Custom Jewelry Design</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Let's create something unique together, crafted specifically for you.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative">
          <div className="rounded-lg overflow-hidden gold-glow">
            <img
              src="https://images.unsplash.com/photo-1588877834184-933518e3dea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxyeSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Custom jewelry design process"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-gold border border-gold/30"></div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Vision, Our Craft</h2>
          <p className="mb-4">
            Our custom design process combines your inspiration with our expertise to create a one-of-a-kind piece that perfectly captures your vision.
          </p>
          <p className="mb-6">
            Whether you're looking to redesign a family heirloom, create an engagement ring that tells your unique story, or design something entirely new, our team of expert jewelers will guide you through every step of the process.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-medium">Free Initial Consultation</h3>
                <p className="text-muted-foreground">Discuss your vision with our design team</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-medium">3D Rendering & Visualization</h3>
                <p className="text-muted-foreground">See your design before production begins</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-medium">Expert Craftsmanship</h3>
                <p className="text-muted-foreground">Handcrafted with precision and care</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-medium">Lifetime Warranty</h3>
                <p className="text-muted-foreground">Your custom piece is protected for life</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="bg-secondary/30 py-16 px-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Custom Design Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="font-semibold text-primary text-xl">01</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-center">Consultation</h3>
            <p className="text-muted-foreground text-center">
              Share your ideas, inspiration, and preferences with our design team
            </p>
            <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          
          <div className="relative">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="font-semibold text-primary text-xl">02</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-center">Design</h3>
            <p className="text-muted-foreground text-center">
              Our designers create detailed sketches and 3D renderings of your piece
            </p>
            <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          
          <div className="relative">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="font-semibold text-primary text-xl">03</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-center">Creation</h3>
            <p className="text-muted-foreground text-center">
              Master jewelers handcraft your piece with attention to every detail
            </p>
            <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          
          <div>
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="font-semibold text-primary text-xl">04</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-center">Delivery</h3>
            <p className="text-muted-foreground text-center">
              Your unique piece is finished, quality checked, and delivered to you
            </p>
          </div>
        </div>
      </div>
      
      {/* Custom Design Request Form */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Start Your Custom Design Journey</h2>
        
        {formSubmitted ? (
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-lg text-center animate-fade-in">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <CheckCircle className="text-primary" size={30} />
            </div>
            <h3 className="text-xl font-medium mb-2">Thank You!</h3>
            <p className="text-lg mb-4">
              Your custom design request has been received. Our design team will contact you within 48 hours to discuss your vision.
            </p>
            <Button onClick={() => setFormSubmitted(false)}>Submit Another Request</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Your contact number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Approximate Budget</Label>
                <Input id="budget" placeholder="Budget range for your piece" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Type of Jewelry</Label>
              <Input id="type" placeholder="Ring, Necklace, Earrings, etc." required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Your Vision</Label>
              <Textarea 
                id="description" 
                placeholder="Please describe your design ideas, inspiration, and any specific details you'd like to include..."
                className="min-h-[150px]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timeline">Desired Timeline</Label>
              <Input id="timeline" placeholder="When would you like to receive your piece?" />
            </div>
            
            <Button type="submit" className="w-full" size="lg">Submit Design Request</Button>
            
            <p className="text-sm text-muted-foreground text-center">
              By submitting this form, you agree to be contacted by our design team regarding your custom jewelry request.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
