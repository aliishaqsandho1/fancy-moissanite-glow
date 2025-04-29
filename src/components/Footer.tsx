
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="fancy-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              <span className="font-light">FANCY</span> MOISSANITE
            </h3>
            <p className="text-muted-foreground">
              Futuristic jewelry for the modern individual. Ethically sourced and expertly crafted.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/shop/rings" className="text-muted-foreground hover:text-primary transition-colors">Rings</Link></li>
              <li><Link to="/shop/necklaces" className="text-muted-foreground hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop/earrings" className="text-muted-foreground hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop/bracelets" className="text-muted-foreground hover:text-primary transition-colors">Bracelets</Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/care" className="text-muted-foreground hover:text-primary transition-colors">Care Instructions</Link></li>
              <li><Link to="/warranty" className="text-muted-foreground hover:text-primary transition-colors">Warranty Information</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">About Us</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/custom" className="text-muted-foreground hover:text-primary transition-colors">Custom Jewelry</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FANCY MOISSANITE. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
