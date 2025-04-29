
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, Sun, Moon, Search, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="hover:text-primary transition-colors px-3 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              
              {/* Shop Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          to="/shop"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            All Collections
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Browse our entire collection of premium moissanite jewelry.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/category/rings" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Rings</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Engagement, wedding, and fashion rings
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/category/necklaces" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Necklaces</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Pendants, chains, and statement pieces
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/category/earrings" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Earrings</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Studs, hoops, and drops
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/category/bracelets" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Bracelets</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Tennis bracelets, bangles, and cuffs
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Our Story
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/testimonials" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Testimonials
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Customer Care Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Customer Care</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[250px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          FAQ
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/care-instructions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Care Instructions
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/warranty" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Warranty Information
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Contact Us
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/custom" className="hover:text-primary transition-colors px-3 py-2">
                  Custom
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/blog" className="hover:text-primary transition-colors px-3 py-2">
                  Blog
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
            <Link to="/faq" className="px-4 py-2 hover:bg-secondary/50 rounded-md" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/blog" className="px-4 py-2 hover:bg-secondary/50 rounded-md" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          </div>
        </div>
      )}
    </header>
  );
}
