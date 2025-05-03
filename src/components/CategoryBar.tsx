
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { categories } from '@/data/siteData';

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
}

export default function CategoryBar({ activeCategory, className }: CategoryBarProps) {
  // Cast our categories to match the expected interface
  const allCategories = categories as Category[];
  
  return (
    <div className={cn("overflow-x-auto", className)}>
      <div className="flex min-w-max gap-1 p-1">
        <Link
          to="/shop"
          className={cn(
            "whitespace-nowrap rounded-full px-3 py-1 text-sm transition-colors",
            !activeCategory
              ? "bg-primary text-primary-foreground"
              : "bg-secondary/50 hover:bg-secondary/80"
          )}
        >
          All Items
        </Link>
        
        {allCategories.map((category) => (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            className={cn(
              "whitespace-nowrap rounded-full px-3 py-1 text-sm transition-colors",
              activeCategory === category.slug
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 hover:bg-secondary/80"
            )}
          >
            {category.name}
          </Link>
        ))}
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
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/50">
                {sub.image && <img src={sub.image} alt={sub.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />}
              </div>
              <p className="mt-2 text-sm font-medium text-center">{sub.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
