
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, Sun, Moon, Search, User } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="fancy-container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-primary">
            <span className="font-light">FANCY</span> MOISSANITE
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/custom" className="hover:text-primary transition-colors">Custom</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}
            className="text-foreground hover:text-primary transition-colors">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary transition-colors">
            <Search size={20} />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary transition-colors">
            <User size={20} />
          </Button>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary transition-colors">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <div className="fancy-container py-4 flex flex-col space-y-4">
            <Link to="/" className="px-4 py-2 hover:bg-secondary/50 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="px-4 py-2 hover:bg-secondary/50 rounded-md" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/about" className="px-4 py-2 hover:bg-secondary/50 rounded-md" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/custom" className="px-4 py-2 hover:bg-secondary/50 rounded-md" onClick={() => setIsMenuOpen(false)}>Custom</Link>
            <Link to="/contact" className="px-4 py-2 hover:bg-secondary/50 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
