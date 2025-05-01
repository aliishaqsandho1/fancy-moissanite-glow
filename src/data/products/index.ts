
import { Product } from '@/types/api';
import { rings } from './rings';
import { earrings } from './earrings';
import { necklaces } from './necklaces';
import { bracelets } from './bracelets';
import { normalizeProductReviews } from '@/utils/apiUtils';

// Combine all product categories
const allProducts: Product[] = normalizeProductReviews([
  ...rings,
  ...earrings,
  ...necklaces,
  ...bracelets
]);

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getFeaturedProducts = (limit?: number): Product[] => {
  const featured = allProducts.filter(product => product.featured);
  return limit ? featured.slice(0, limit) : featured;
};

export const getNewArrivals = (limit: number = 8): Product[] => {
  // Sort by createdAt date and take the most recent
  return [...allProducts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  // Find products in same category excluding the current product
  const related = allProducts.filter(p => 
    p.id !== productId && p.category === product.category
  );
  
  // Shuffle and take requested number
  return shuffleArray(related).slice(0, limit);
};

// Helper to shuffle array
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Exporting everything for backward compatibility
export type { Product };
export default allProducts;
