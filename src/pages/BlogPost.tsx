
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
import { blogPosts } from "@/data/siteData";

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
