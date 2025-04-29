
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    author: "Alexandra Morgan",
    location: "New York, NY",
    rating: 5,
    date: "2023-11-15",
    title: "Absolutely Stunning Engagement Ring",
    content: "I couldn't be happier with my Aurora Halo engagement ring! The sparkle is incredible - it catches light from every angle and the craftsmanship is impeccable. My fiancé was amazed at the quality and beauty compared to traditional diamond rings we looked at. Customer service was exceptional throughout the entire process.",
    product: "Aurora Halo Engagement Ring",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    featured: true
  },
  {
    id: 2,
    author: "Michael Richards",
    location: "Los Angeles, CA",
    rating: 5,
    date: "2023-10-22",
    title: "Perfect Anniversary Gift",
    content: "I surprised my wife with the Quantum Solitaire Necklace for our 10th anniversary and she absolutely loves it! The pear-shaped moissanite has such incredible fire and brilliance - it looks much more expensive than it was. The adjustable chain length is a nice touch that lets her wear it with different outfits. Shipping was fast and the packaging was beautiful.",
    product: "Quantum Solitaire Necklace",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    featured: true
  },
  {
    id: 3,
    author: "Priya Sharma",
    location: "Chicago, IL",
    rating: 5,
    date: "2023-09-18",
    title: "Exceeded My Expectations",
    content: "The Nebula Tennis Bracelet is absolutely gorgeous! I've received so many compliments on it. The stones are perfectly matched and the platinum setting feels substantial and well-made. I was hesitant about purchasing fine jewelry online, but the quality is even better than I expected. Will definitely be purchasing from FANCY MOISSANITE again!",
    product: "Nebula Tennis Bracelet",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: true
  },
  {
    id: 4,
    author: "Emma Lee",
    location: "Seattle, WA",
    rating: 5,
    date: "2023-12-05",
    title: "Perfect Everyday Elegance",
    content: "I've been wearing my Stellar Stud Earrings daily for two months now and they still look as brilliant as the day they arrived. The comfort is impressive - I often forget I'm wearing them! The 4-prong setting feels secure and the posts don't irritate my sensitive ears. The sparkle is unbelievable, especially in sunlight.",
    product: "Stellar Stud Earrings",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: false
  },
  {
    id: 5,
    author: "James Wilson",
    location: "Austin, TX",
    rating: 4,
    date: "2023-11-02",
    title: "Beautiful Wedding Band",
    content: "My wife is thrilled with her Infinity Eternity Band! The stones are incredibly brilliant and the craftsmanship is excellent. The only reason for 4 stars instead of 5 is that sizing took longer than expected, but the customer service team was very communicative throughout the process. The final result was worth the wait!",
    product: "Infinity Eternity Band",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: false
  },
  {
    id: 6,
    author: "Sophia Rodriguez",
    location: "Miami, FL",
    rating: 5,
    date: "2023-10-15",
    title: "Stunning Statement Piece",
    content: "The Celestial Drop Earrings are absolutely beautiful! They have the perfect amount of movement and catch the light wonderfully. I wore them to a wedding and received compliments all night. Despite their dramatic look, they're surprisingly lightweight and comfortable to wear for hours. The packaging was lovely as well - perfect for gift-giving.",
    product: "Celestial Drop Earrings",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    featured: false
  },
  {
    id: 7,
    author: "David Chen",
    location: "San Francisco, CA",
    rating: 5,
    date: "2023-08-30",
    title: "Custom Design Excellence",
    content: "Working with the design team on a custom engagement ring was an exceptional experience from start to finish. They took my vague ideas and transformed them into something more beautiful than I could have imagined. The 3D renderings were helpful in visualizing the final piece, and my fiancée was completely surprised and overjoyed with the result!",
    product: "Custom Engagement Ring",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    featured: false
  },
  {
    id: 8,
    author: "Olivia Thompson",
    location: "Denver, CO",
    rating: 5,
    date: "2023-12-10",
    title: "Heirloom Quality",
    content: "The craftsmanship of my ring is spectacular - every detail is perfect. The moissanite has such incredible brilliance, even more than my sister's diamond ring! I appreciate the ethical sourcing and the lifetime warranty gives me confidence that this piece will truly be an heirloom. The ring arrived earlier than expected and the presentation box is lovely.",
    product: "Aurora Halo Engagement Ring",
    image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: false
  }
];

export default function Testimonials() {
  const [filter, setFilter] = useState("all");
  
  const filteredTestimonials = filter === "featured" 
    ? testimonials.filter(t => t.featured) 
    : testimonials;

  // Function to render rating stars
  const renderRating = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "fill-primary text-primary" : "text-gray-300"} 
      />
    ));
  };
  
  return (
    <div className="fancy-container py-12">
      <h1 className="text-3xl font-bold mb-4">Customer Testimonials</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Discover what our valued customers have to say about their FANCY MOISSANITE experience.
      </p>
      
      {/* Featured Testimonials */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Featured Reviews</h2>
          <div className="space-x-2">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Reviews
            </Button>
            <Button 
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
            >
              Featured
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredTestimonials.slice(0, 3).map(testimonial => (
            <Card key={testimonial.id} className="bg-secondary/30 border border-primary/20">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <Quote size={24} className="text-primary opacity-50" />
                </div>
                
                <div className="flex mb-2">
                  {renderRating(testimonial.rating)}
                </div>
                
                <h3 className="text-lg font-medium mb-2">{testimonial.title}</h3>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <p className="text-sm font-medium">
                  Product: <span className="text-primary">{testimonial.product}</span>
                </p>
              </CardContent>
              <CardFooter className="border-t border-border pt-4 text-sm text-muted-foreground">
                {new Date(testimonial.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {/* More Testimonials */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">More Customer Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.slice(3).map(testimonial => (
            <Card key={testimonial.id} className="bg-background border-border">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {renderRating(testimonial.rating)}
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-2">{testimonial.title}</h3>
                <p className="text-muted-foreground mb-3">{testimonial.content}</p>
                <p className="text-sm">
                  Product: <span className="text-primary">{testimonial.product}</span>
                </p>
              </CardContent>
              <CardFooter className="border-t border-border pt-4 text-sm text-muted-foreground">
                {new Date(testimonial.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Leave a Review CTA */}
      <div className="text-center bg-gradient-to-b from-secondary/30 to-transparent py-16 px-8 rounded-lg mt-16">
        <h2 className="text-2xl font-semibold mb-4">Share Your Experience</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          We'd love to hear about your experience with FANCY MOISSANITE. Your feedback helps us continue to provide exceptional products and service.
        </p>
        <Button size="lg">
          Write a Review
        </Button>
      </div>
    </div>
  );
}
