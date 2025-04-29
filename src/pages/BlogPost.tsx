
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  ArrowLeft,
  Calendar,
  User,
  Tag
} from "lucide-react";

// Blog post data (in a real app, this would be fetched from an API)
const blogPosts = [
  {
    id: "1",
    title: "The Science Behind Moissanite's Brilliance",
    content: [
      "Moissanite is one of the most brilliant gemstones available today, outshining even diamonds in terms of fire and sparkle. But what exactly gives moissanite its spectacular visual properties?",
      "The brilliance of a gemstone is determined by its refractive index (RI) - a measure of how light bends as it passes through the stone. Moissanite has an RI of 2.65-2.69, significantly higher than diamond's 2.42. This higher refractive index is the primary reason moissanite displays more brilliance and fire than a diamond of equivalent size and cut.",
      "When light enters a moissanite stone, it slows down more dramatically than it would in a diamond due to the higher density of the crystal structure. This slowing effect causes light to bend more sharply, creating the distinctive flashes of rainbow colors (dispersion) that moissanite is famous for. In fact, moissanite has 2.4 times the dispersion of diamond, resulting in those captivating flashes of color that dance across the stone as it moves.",
      "The crystal structure of moissanite (silicon carbide) is hexagonal, differing from diamond's cubic structure. This arrangement of atoms affects how light travels through and exits the stone. Expert cutting takes advantage of this unique structure to maximize the stone's natural optical properties, carefully positioning facets to create ideal light reflection and refraction patterns.",
      "Additionally, moissanite is pleochroic, meaning it can display different colors when viewed from different angles. This property adds another dimension of visual interest not present in diamonds.",
      "Modern moissanite is typically grown in controlled laboratory environments, allowing scientists to optimize growth conditions for clarity and color. The highest quality moissanite stones, like those used in our FANCY MOISSANITE collections, are virtually colorless and flawless, further enhancing their exceptional optical performance.",
      "The combination of higher refractive index, greater dispersion, and expert cutting is what gives moissanite its extraordinary brilliance - a fiery, dazzling display that maintains its sparkle even in low lighting conditions and continues to captivate jewelry enthusiasts around the world."
    ],
    excerpt: "Discover why moissanite has more fire and sparkle than diamonds and how its unique properties create unmatched brilliance.",
    date: "2023-12-10",
    author: "Dr. Emma Richardson",
    category: "Education",
    tags: ["Moissanite", "Gemstones", "Science", "Brilliance"],
    image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlhbW9uZCUyMHNwYXJrbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: true,
    relatedPosts: ["2", "4", "7"]
  },
  {
    id: "2",
    title: "Ethical Gemstones: Why Lab-Created is the Future",
    content: [
      "The jewelry industry is undergoing a significant transformation as consumers become increasingly conscious of the ethical and environmental implications of their purchases. Lab-created gemstones, particularly moissanite, are at the forefront of this revolution.",
      "Traditional diamond mining has long been associated with serious ethical concerns. Despite efforts like the Kimberley Process, fully tracking a natural diamond's origins remains challenging. Issues like poor working conditions, child labor, and funding of conflicts continue to plague parts of the industry.",
      "The environmental impact of diamond mining is equally concerning. Large-scale operations often result in habitat destruction, soil erosion, deforestation, and water pollution. A single one-carat diamond typically requires the removal of 250 tons of earth, uses approximately 127 gallons of water, and generates 143 pounds of carbon dioxide emissions.",
      "Lab-created moissanite offers a compelling alternative. Created in controlled laboratory environments, these gemstones eliminate concerns about unethical mining practices. The controlled production process ensures that every stone can be traced to its source, providing complete transparency that's often impossible with mined stones.",
      "From an environmental perspective, lab-created moissanite has a significantly smaller footprint. The production process requires less water and energy, produces fewer emissions, and causes no habitat destruction. As manufacturing technologies continue to advance, these environmental benefits will likely increase even further.",
      "Beyond ethics and sustainability, lab-created moissanite is also more accessible. Costing approximately 80-90% less than comparable diamonds, these gemstones democratize luxury, allowing more people to enjoy exceptional brilliance without compromise.",
      "As consumer values evolve and technology advances, lab-created gemstones like moissanite represent not just an alternative to traditional mined stones, but the future of the jewelry industry - a future that aligns with our collective desire for beauty, quality, ethics, and sustainability."
    ],
    excerpt: "Learn about the environmental and ethical advantages of choosing lab-created moissanite over mined diamonds.",
    date: "2023-11-22",
    author: "Michael Chen",
    category: "Sustainability",
    tags: ["Ethics", "Sustainability", "Lab-Created", "Environment"],
    image: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhYm9yYXRvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: true,
    relatedPosts: ["1", "3", "7"]
  },
];

// Function to get post data
const getPostData = (id: string) => {
  return blogPosts.find(post => post.id === id) || blogPosts[0]; // Default to first post if not found
};

// Function to get related posts
const getRelatedPosts = (relatedIds: string[]) => {
  return blogPosts.filter(post => relatedIds.includes(post.id));
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = getPostData(id || "1");
  const relatedPosts = getRelatedPosts(post.relatedPosts || []);
  
  return (
    <div className="fancy-container py-12">
      {/* Back to Blog */}
      <div className="mb-8">
        <Button asChild variant="outline" size="sm">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </Button>
      </div>
      
      {/* Article Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>By {post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag size={16} />
            <span>{post.category}</span>
          </div>
        </div>
      </div>
      
      {/* Feature Image */}
      <div className="rounded-lg overflow-hidden mb-10 max-h-96">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full object-cover" 
        />
      </div>
      
      {/* Article Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-6">
          {post.content.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "text-lg" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Sidebar */}
        <div className="space-y-8">
          {/* Share */}
          <div className="bg-secondary/30 p-6 rounded-lg">
            <h3 className="font-medium mb-4">Share This Article</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail size={18} />
              </Button>
            </div>
          </div>
          
          {/* Tags */}
          <div className="bg-secondary/30 p-6 rounded-lg">
            <h3 className="font-medium mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Button key={index} variant="outline" size="sm" className="rounded-full">
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Author */}
          <div className="bg-secondary/30 p-6 rounded-lg">
            <h3 className="font-medium mb-4">About the Author</h3>
            <p className="text-sm text-muted-foreground">
              {post.author} is a jewelry expert with over 15 years of experience in the industry. 
              They are passionate about educating consumers about ethical and sustainable jewelry options.
            </p>
          </div>
        </div>
      </div>
      
      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(relatedPost => (
              <Link 
                to={`/blog/${relatedPost.id}`} 
                key={relatedPost.id}
                className="group"
              >
                <div className="bg-background border border-border rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <span className="text-primary text-sm font-medium mb-2">{relatedPost.category}</span>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
