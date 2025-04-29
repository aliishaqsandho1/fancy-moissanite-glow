
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

export default function Shop() {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMetals, setSelectedMetals] = useState<string[]>([]);

  const categories = Array.from(new Set(products.map(p => p.category)));
  const metalTypes = Array.from(new Set(products.map(p => p.metalType)));
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const handleMetalChange = (metal: string) => {
    setSelectedMetals(prev => 
      prev.includes(metal) 
        ? prev.filter(m => m !== metal)
        : [...prev, metal]
    );
  };
  
  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesMetal = selectedMetals.length === 0 || selectedMetals.includes(product.metalType);
    
    return matchesPrice && matchesCategory && matchesMetal;
  });

  return (
    <div className="fancy-container py-12">
      <h1 className="text-3xl font-bold mb-8">Our Collection</h1>
      
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
          
          {/* Category Filter */}
          <div className="space-y-4">
            <h3 className="font-medium">Category</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category} className="flex items-center gap-2">
                  <Checkbox 
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
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
              setSelectedCategories([]);
              setSelectedMetals([]);
            }}
          >
            Reset Filters
          </Button>
        </aside>
        
        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <select className="fancy-input">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
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
                  setSelectedCategories([]);
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
