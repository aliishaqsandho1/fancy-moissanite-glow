
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/siteData';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export default function CategoryBar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const handleMouseEnter = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  if (isMobile) return null; // Don't render on mobile, will be in mobile menu instead

  return (
    <div className="category-bar-container bg-background/95 backdrop-blur-md border-b border-border">
      <div className="fancy-container">
        {/* Category Navigation */}
        <nav className="relative" onMouseLeave={handleMouseLeave}>
          {/* Top level categories */}
          <ul className="flex items-center justify-center space-x-8 py-3">
            {categories.map((category) => (
              <li key={category.id} className="relative" onMouseEnter={() => handleMouseEnter(category.id)}>
                <Link 
                  to={`/category/${category.slug}`} 
                  className={cn(
                    "text-sm font-medium py-2 border-b-2 border-transparent transition-colors", 
                    activeCategory === category.id ? "text-primary border-primary" : "hover:text-primary"
                  )}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mega Menu Dropdown */}
          {activeCategory && (
            <div 
              className="absolute left-0 w-full z-50 bg-background border-b border-border shadow-lg animate-in fade-in-5 duration-100 ease-in-out"
              onMouseLeave={handleMouseLeave}
            >
              {categories
                .filter(category => category.id === activeCategory)
                .map((category) => (
                  <div key={category.id} className="grid grid-cols-4 gap-6 p-6">
                    {/* Banner Image */}
                    <div className="col-span-1">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg relative">
                        <img 
                          src={category.bannerImage} 
                          alt={category.name} 
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Link 
                            to={`/category/${category.slug}`} 
                            className="bg-background/80 backdrop-blur-sm text-foreground font-medium px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            View All {category.name}
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Subcategories */}
                    <div className="col-span-3 grid grid-cols-3 gap-8">
                      {category.subcategories.map((subcategory) => (
                        <Link 
                          key={subcategory.id} 
                          to={`/category/${category.slug}/${subcategory.slug}`}
                          className="group"
                        >
                          <div className="aspect-square overflow-hidden rounded-lg mb-2">
                            <img 
                              src={subcategory.image || category.image} 
                              alt={subcategory.name} 
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                            {subcategory.name}
                          </h3>
                          {subcategory.description && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {subcategory.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
