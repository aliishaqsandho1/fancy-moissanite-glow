
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { categories } from '@/data/siteData';
import { useIsMobile } from '@/hooks/use-mobile';

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
  // Cast our categories to match the expected interface
  const allCategories = categories as Category[];
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  return (
    <div className={cn("relative", className)}>
      {/* Main navigation */}
      <div className={cn(
        "bg-gradient-to-r from-primary/5 to-secondary/30 backdrop-blur-sm border border-primary/10 rounded-xl shadow-lg",
        vertical ? "p-4" : "p-2 z-10"
      )}>
        <div className={cn(
          vertical ? "flex flex-col gap-2 p-1" : "flex gap-1 p-1 overflow-x-auto scrollbar-hide",
          !vertical && "flex-nowrap md:flex-wrap"
        )}>
          <Link
            to="/shop"
            className={cn(
              "whitespace-nowrap rounded-lg flex items-center gap-1.5 transition-colors flex-shrink-0",
              vertical ? "px-4 py-2.5 text-base" : "px-3 py-1.5 text-sm",
              !activeCategory
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary/50 hover:bg-secondary/80"
            )}
            onMouseEnter={() => setHoveredCategory(null)}
          >
            <span>All Items</span>
            {vertical && <ChevronRight className="h-4 w-4" />}
          </Link>
          
          {allCategories.map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className={cn(
                "whitespace-nowrap rounded-lg flex items-center gap-1.5 group transition-all flex-shrink-0",
                vertical ? "px-4 py-2.5 text-base" : "px-3 py-1.5 text-sm",
                activeCategory === category.slug
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-card/70 hover:bg-secondary/90 backdrop-blur-sm border border-primary/10"
              )}
              onMouseEnter={() => setHoveredCategory(category.slug)}
              onMouseLeave={() => isMobile ? null : setHoveredCategory(null)}
            >
              <span>{category.name}</span>
              {vertical && (
                <ChevronRight className={cn(
                  "h-4 w-4 transition-transform",
                  hoveredCategory === category.slug ? "translate-x-1" : ""
                )} />
              )}
              {!vertical && (
                <Heart className={cn(
                  "h-3 w-3 opacity-0 group-hover:opacity-100 text-primary transition-all",
                )} />
              )}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Category preview on hover - Only show when not in vertical mode */}
      {!vertical && hoveredCategory && !isMobile && (
        <div 
          className="absolute left-0 right-0 mt-3 bg-card/95 backdrop-blur-md rounded-xl shadow-xl border border-primary/10 overflow-hidden transition-opacity z-20" 
          onMouseEnter={() => setHoveredCategory(hoveredCategory)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Category info */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {allCategories.find(c => c.slug === hoveredCategory)?.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {allCategories.find(c => c.slug === hoveredCategory)?.description}
                </p>
                <Link 
                  to={`/category/${hoveredCategory}`}
                  className="text-primary hover:text-primary/80 flex items-center group"
                >
                  <span>View all products</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Banner image */}
              <div className="rounded-lg overflow-hidden h-40">
                {allCategories.find(c => c.slug === hoveredCategory)?.bannerImage ? (
                  <img 
                    src={allCategories.find(c => c.slug === hoveredCategory)?.bannerImage} 
                    alt={allCategories.find(c => c.slug === hoveredCategory)?.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/30 flex items-center justify-center">
                    <h3 className="text-2xl font-bold">
                      {allCategories.find(c => c.slug === hoveredCategory)?.name}
                    </h3>
                  </div>
                )}
              </div>
            </div>
            
            {/* Subcategories if available */}
            {allCategories.find(c => c.slug === hoveredCategory)?.subcategories && (
              <div className="mt-4 border-t border-border/50 pt-4">
                <h4 className="font-medium mb-3">Popular Categories:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {allCategories.find(c => c.slug === hoveredCategory)?.subcategories?.map(sub => (
                    <Link key={sub.id} to={`/category/${hoveredCategory}/${sub.slug}`} className="group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-secondary/50 border border-border/50">
                        {sub.image ? (
                          <img src={sub.image} alt={sub.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/70 to-accent/20">
                            {sub.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <p className="mt-2 text-sm font-medium text-center group-hover:text-primary transition-colors">{sub.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Mobile category view */}
      {!vertical && hoveredCategory && isMobile && (
        <div className="mt-3 bg-card/95 backdrop-blur-md rounded-xl shadow-xl border border-primary/10 overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              {allCategories.find(c => c.slug === hoveredCategory)?.name}
            </h3>
            <Link 
              to={`/category/${hoveredCategory}`}
              className="text-primary hover:text-primary/80 flex items-center group"
            >
              <span>View all products</span>
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      )}
      
      {/* Banner for active category in vertical mode */}
      {vertical && activeCategory && allCategories.find(c => c.slug === activeCategory)?.bannerImage && (
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
      
      {/* Subcategories for active category in vertical mode */}
      {vertical && activeCategory && allCategories.find(c => c.slug === activeCategory)?.subcategories && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {allCategories.find(c => c.slug === activeCategory)?.subcategories?.map(sub => (
            <Link key={sub.id} to={`/category/${activeCategory}/${sub.slug}`} className="group">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/50 border border-primary/10">
                {sub.image && <img src={sub.image} alt={sub.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />}
              </div>
              <p className="mt-2 text-sm font-medium text-center group-hover:text-primary transition-colors">{sub.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
