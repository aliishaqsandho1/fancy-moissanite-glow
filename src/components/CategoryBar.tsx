
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Heart, Diamond, Gem, Users, Medal, Sparkles, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { categories } from '@/data/siteData';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Define a complete category interface that works with our data
interface Category {
  slug: string;
  name: string;
  description: string;
  id?: string;
  bannerImage?: string;
  subcategories?: Array<{
    id: string;
    name: string;
    slug: string;
    image: string;
  }>;
}

interface CategoryBarProps {
  activeCategory?: string;
  className?: string;
  vertical?: boolean;
}

export default function CategoryBar({ activeCategory, className, vertical = false }: CategoryBarProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  // Cast our categories to match the expected interface
  const allCategories = categories as Category[];
  
  const getCategoryIcon = (slug: string) => {
    switch (slug.toLowerCase()) {
      case 'gifts':
        return <Gift className="mr-2 h-4 w-4" />;
      case 'rings':
        return <Heart className="mr-2 h-4 w-4" />; 
      case 'wedding':
        return <Diamond className="mr-2 h-4 w-4" />;
      case 'engagement':
        return <Diamond className="mr-2 h-4 w-4" />;
      case 'earrings':
        return <Gem className="mr-2 h-4 w-4" />;
      case 'couples':
        return <Users className="mr-2 h-4 w-4" />;
      case 'custom':
        return <Heart className="mr-2 h-4 w-4" />;
      case 'necklaces':
        return <Medal className="mr-2 h-4 w-4" />;
      case 'bracelets':
        return <Sparkles className="mr-2 h-4 w-4" />;
      case 'men':
        return <User className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };
  
  // Category banner images - using placeholders, replace with actual category images
  const categoryImages = {
    gifts: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    rings: "https://images.unsplash.com/photo-1589207212777-f897e3a2b499",
    wedding: "https://images.unsplash.com/photo-1546961342-ea5f71b193f3",
    engagement: "https://images.unsplash.com/photo-1515784638688-3f7e90ebb446",
    earrings: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e",
    couples: "https://images.unsplash.com/photo-1516401266446-6432a8a07d41",
    custom: "https://images.unsplash.com/photo-1606293459339-11525d8f1aa4",
    necklaces: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    bracelets: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
    men: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1",
  };
  
  if (vertical) {
    return (
      <div className={cn("flex flex-col bg-gradient-to-br from-gold-light to-gold rounded-lg shadow-md", className)}>
        <div className="flex flex-col w-full">
          {allCategories.map((category) => {
            const image = categoryImages[category.slug as keyof typeof categoryImages] || "https://images.unsplash.com/photo-1600721391689-2564bb8055de";
            
            return (
              <HoverCard key={category.slug} openDelay={150} closeDelay={150}>
                <HoverCardTrigger asChild>
                  <Link
                    to={`/category/${category.slug}`}
                    className={cn(
                      "flex items-center py-3 px-4 hover:bg-white/20 hover:text-white backdrop-blur-sm transition-all duration-300 relative overflow-hidden z-10 border-b border-white/10 first:rounded-t-lg last:rounded-b-lg last:border-b-0",
                      activeCategory === category.slug
                        ? "bg-white/30 font-medium text-white"
                        : "text-gold-dark"
                    )}
                    onMouseEnter={() => setHoveredCategory(category.slug)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {getCategoryIcon(category.slug)}
                    <span className="font-medium">{category.name}</span>
                    <span className="ml-auto">›</span>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent 
                  side="right" 
                  className="w-80 p-0 border-gold/20 shadow-lg" 
                  sideOffset={5}
                >
                  <div className="relative h-40 w-full">
                    <img 
                      src={image} 
                      alt={category.name} 
                      className="h-full w-full object-cover rounded-t-md"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-t-md">
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{category.description || `Explore our collection of beautiful ${category.name.toLowerCase()}`}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {category.subcategories?.length || 0} styles available
                      </span>
                      <Link 
                        to={`/category/${category.slug}`}
                        className="text-xs font-medium hover:underline text-primary"
                      >
                        View Collection →
                      </Link>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    );
  }
  
  return (
    <div className={cn("overflow-x-auto", className)}>
      <div className="flex min-w-max gap-1 p-1">
        <Link
          to="/shop"
          className={cn(
            "whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors shadow-sm",
            !activeCategory
              ? "bg-gradient-to-br from-gold to-gold-dark text-white font-medium"
              : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
          )}
        >
          All Items
        </Link>
        
        {allCategories.map((category) => {
          const image = categoryImages[category.slug as keyof typeof categoryImages] || "https://images.unsplash.com/photo-1600721391689-2564bb8055de";
          
          return (
            <Popover key={category.slug}>
              <PopoverTrigger asChild>
                <Link
                  to={`/category/${category.slug}`}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors shadow-sm flex items-center gap-1",
                    activeCategory === category.slug
                      ? "bg-gradient-to-br from-gold to-gold-dark text-white font-medium"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  )}
                >
                  {getCategoryIcon(category.slug)}
                  {category.name}
                </Link>
              </PopoverTrigger>
              <PopoverContent 
                className="w-80 p-0 border-gold/20 shadow-lg" 
                align="center"
              >
                <div className="relative h-40 w-full">
                  <img 
                    src={image} 
                    alt={category.name} 
                    className="h-full w-full object-cover rounded-t-md"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-t-md">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{category.description || `Explore our collection of beautiful ${category.name.toLowerCase()}`}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {category.subcategories?.length || 0} styles available
                    </span>
                    <Link 
                      to={`/category/${category.slug}`}
                      className="text-xs font-medium hover:underline text-primary"
                    >
                      View Collection →
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          );
        })}
      </div>
      
      {/* Optional: Banner for active category */}
      {activeCategory && allCategories.find(c => c.slug === activeCategory)?.bannerImage && (
        <div className="mt-4 relative h-40 rounded-lg overflow-hidden">
          <img
            src={allCategories.find(c => c.slug === activeCategory)?.bannerImage}
            alt={allCategories.find(c => c.slug === activeCategory)?.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">{allCategories.find(c => c.slug === activeCategory)?.name}</h2>
          </div>
        </div>
      )}
      
      {/* Optional: Subcategories for active category */}
      {activeCategory && allCategories.find(c => c.slug === activeCategory)?.subcategories && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {allCategories.find(c => c.slug === activeCategory)?.subcategories?.map(sub => (
            <Link key={sub.id} to={`/category/${activeCategory}/${sub.slug}`} className="group">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/50 shadow-sm">
                {sub.image && <img src={sub.image} alt={sub.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />}
              </div>
              <p className="mt-2 text-sm font-medium text-center">{sub.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
