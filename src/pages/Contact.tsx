
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a backend
    setFormSubmitted(true);
    toast({
      title: "Message Sent",
      description: "We've received your message and will respond within 24 hours.",
      duration: 5000,
    });
  };
  
  return (
    <div className="fancy-container py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Have questions about our products or services? We're here to help.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          
          {formSubmitted ? (
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-lg text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="text-primary" size={30} />
              </div>
              <h3 className="text-xl font-medium mb-2">Thank You!</h3>
              <p className="text-lg mb-4">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
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
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this regarding?" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Type your message here..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
          )}
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          
          <div className="bg-secondary/30 p-8 rounded-lg mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Our Store</h3>
                  <p className="text-muted-foreground">
                    123 Luxury Lane<br />
                    Beverly Hills, CA 90210<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-muted-foreground">
                    General Inquiries: info@fancymoissanite.com<br />
                    Customer Support: support@fancymoissanite.com<br />
                    Custom Designs: design@fancymoissanite.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground">
                    Sales & Support: +1 (800) 555-GEMS<br />
                    International: +1 (213) 555-1234<br />
                    Hours: Mon-Fri 9am-6pm PST
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Store Hours */}
          <div className="bg-secondary/30 p-8 rounded-lg">
            <h3 className="font-medium mb-4">Store Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 AM - 5:00 PM</span>
              </div>
            </div>
            <p className="text-muted-foreground mt-4">
              Private appointments are available outside regular hours by request.
            </p>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
        <div className="h-96 bg-secondary/50 rounded-lg flex items-center justify-center">
          {/* This would be replaced with an actual map in a real application */}
          <div className="text-center p-8">
            <MapPin className="mx-auto mb-4" size={40} />
            <p className="text-lg font-medium">FANCY MOISSANITE</p>
            <p className="text-muted-foreground">123 Luxury Lane, Beverly Hills, CA 90210</p>
          </div>
        </div>
      </div>
      
      {/* FAQ Preview */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Find quick answers to common questions about our products and services.
        </p>
        <Button asChild variant="outline" size="lg">
          <a href="/faq">View FAQ</a>
        </Button>
      </div>
    </div>
  );
}
