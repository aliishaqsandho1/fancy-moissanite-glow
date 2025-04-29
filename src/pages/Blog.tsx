
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

// Blog post data
const blogPosts = [
  {
    id: "1",
    title: "The Science Behind Moissanite's Brilliance",
    excerpt: "Discover why moissanite has more fire and sparkle than diamonds and how its unique properties create unmatched brilliance.",
    date: "2023-12-10",
    author: "Dr. Emma Richardson",
    category: "Education",
    image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlhbW9uZCUyMHNwYXJrbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: true
  },
  {
    id: "2",
    title: "Ethical Gemstones: Why Lab-Created is the Future",
    excerpt: "Learn about the environmental and ethical advantages of choosing lab-created moissanite over mined diamonds.",
    date: "2023-11-22",
    author: "Michael Chen",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhYm9yYXRvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: true
  },
  {
    id: "3",
    title: "2024 Engagement Ring Trends",
    excerpt: "Explore the latest engagement ring styles, settings, and cuts that are captivating couples this year.",
    date: "2024-01-05",
    author: "Sofia Martinez",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1515626553181-0f218cb03f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nYWdlbWVudCUyMHJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: false
  },
  {
    id: "4",
    title: "The History of Moissanite: From Stars to Earth",
    excerpt: "Follow the fascinating journey of moissanite from its cosmic origins to becoming a sustainable luxury gemstone.",
    date: "2023-10-18",
    author: "Dr. James Wilson",
    category: "History",
    image: "https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcnMlMjBzcGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    featured: false
  },
  {
    id: "5",
    title: "Caring for Your Moissanite Jewelry",
    excerpt: "Essential tips and tricks to keep your moissanite jewelry sparkling brilliantly for generations.",
    date: "2023-09-28",
    author: "Alexandra Chen",
    category: "Care",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhbW9uZCUyMGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    featured: false
  },
  {
    id: "6",
    title: "Custom Design Process: From Concept to Creation",
    excerpt: "A behind-the-scenes look at how our artisans bring your custom jewelry vision to life.",
    date: "2023-11-02",
    author: "Marcus Rodriguez",
    category: "Design",
    image: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpld2VscnklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: false
  },
  {
    id: "7",
    title: "Moissanite vs. Lab-Grown Diamonds: Making the Right Choice",
    excerpt: "A comprehensive comparison to help you choose between moissanite and lab-grown diamonds for your next purchase.",
    date: "2023-12-15",
    author: "Sophia Kim",
    category: "Education",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    featured: false
  },
  {
    id: "8",
    title: "Choosing the Perfect Metal for Your Moissanite Jewelry",
    excerpt: "From platinum to rose gold, learn which metal pairs best with moissanite and complements your style.",
    date: "2024-01-20",
    author: "Emma Richardson",
    category: "Design",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    featured: false
  }
];

// Unique categories from blog posts
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="fancy-container py-12">
      <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Explore insights, education, and inspiration from the world of luxury jewelry and moissanite.
      </p>
      
      {/* Search & Filter */}
      <div className="mb-12 space-y-6">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-10 bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
          >
            All Topics
          </Button>
          
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Featured Posts */}
      {activeCategory === "all" && searchQuery === "" && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map(post => (
              <Link 
                to={`/blog/${post.id}`} 
                key={post.id}
                className="group"
              >
                <div className="bg-secondary/30 rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-primary text-sm font-medium">{post.category}</span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">By {post.author}</span>
                      <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* All Posts or Filtered Posts */}
      <div>
        {activeCategory !== "all" || searchQuery !== "" ? (
          <h2 className="text-2xl font-semibold mb-8">
            {activeCategory !== "all" ? `${activeCategory} Articles` : "Search Results"}
          </h2>
        ) : (
          <h2 className="text-2xl font-semibold mb-8">All Articles</h2>
        )}
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Link 
                to={`/blog/${post.id}`} 
                key={post.id}
                className="group"
              >
                <div className="bg-background border border-border rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-primary text-sm font-medium">{post.category}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                    <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-secondary/30 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No Articles Found</h3>
            <p className="text-muted-foreground mb-4">
              We couldn't find any articles matching your search criteria.
            </p>
            <Button onClick={() => {setSearchQuery(""); setActiveCategory("all");}}>
              Reset Search
            </Button>
          </div>
        )}
      </div>
      
      {/* Newsletter */}
      <div className="mt-16 bg-gradient-to-b from-secondary/30 to-transparent py-12 px-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Stay updated with our latest articles, product launches, and exclusive offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            placeholder="Enter your email address" 
            type="email"
            className="flex-grow"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
