import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import ProductCard from '@/components/ProductCard';
import { categories, allProducts } from '@/data/siteData';

// Extended product interface to satisfy ProductCard component
interface ExtendedProduct {
  id: string;
  category: string;
  price: number;
  metalType: string;
  createdAt: string;
  name: string;
  description: string;
  images: string[];
  rating: number;
  reviews: Array<any>;
  soldCount: number;
  compareAtPrice?: number;
  isNew: boolean;
  featured?: boolean;
  stoneSize?: string;
  stoneCut?: string;
  bandWidth?: string;
}

export default function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedMetals, setSelectedMetals] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");
  
  // Find category details from centralized data
  const categoryDetail = categories.find(c => c.slug === categoryId) || {
    name: categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : "Collection", 
    description: "Browse our collection",
  };

  // Filter products by category
  const categoryProducts = allProducts.filter(p => 
    categoryId ? p.category.toLowerCase() === categoryId.toLowerCase() : true
  ) as ExtendedProduct[];
  
  const metalTypes = Array.from(new Set(categoryProducts.map(p => p.metalType)));
  
  const handleMetalChange = (metal: string) => {
    setSelectedMetals(prev => 
      prev.includes(metal) 
        ? prev.filter(m => m !== metal)
        : [...prev, metal]
    );
  };
  
  // Apply filters
  const filteredProducts = categoryProducts.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesMetal = selectedMetals.length === 0 || selectedMetals.includes(product.metalType);
    
    return matchesPrice && matchesMetal;
  });

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0; // featured - no specific sorting
    }
  });

  useEffect(() => {
    // Reset filters when category changes
    setPriceRange([0, 2000]);
    setSelectedMetals([]);
    setSortOption("featured");
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <div className="fancy-container py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryDetail.name}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{categoryDetail.description}</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 space-y-8">
          {/* Price Range Filter */}
          <div className="space-y-4">
            <h3 className="font-medium">Price Range</h3>
            <Slider
              defaultValue={priceRange}
              min={0}
              max={2000}
              step={50}
              onValueChange={(value) => setPriceRange(value as number[])}
              className="py-4"
            />
            <div className="flex items-center justify-between">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          
          {/* Metal Type Filter */}
          <div className="space-y-4">
            <h3 className="font-medium">Metal Type</h3>
            <div className="space-y-2">
              {metalTypes.map(metal => (
                <div key={metal} className="flex items-center gap-2">
                  <Checkbox 
                    id={`metal-${metal}`}
                    checked={selectedMetals.includes(metal)}
                    onCheckedChange={() => handleMetalChange(metal)}
                  />
                  <Label htmlFor={`metal-${metal}`}>{metal}</Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Reset Button */}
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => {
              setPriceRange([0, 2000]);
              setSelectedMetals([]);
              setSortOption("featured");
            }}
          >
            Reset Filters
          </Button>
        </aside>
        
        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-muted-foreground">
              Showing {sortedProducts.length} of {categoryProducts.length} products
            </p>
            <select 
              className="fancy-input"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-secondary/30 rounded-lg p-8 text-center">
              <h3 className="text-xl font-medium mb-2">No Products Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filter criteria to find more products.
              </p>
              <Button 
                onClick={() => {
                  setPriceRange([0, 2000]);
                  setSelectedMetals([]);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
