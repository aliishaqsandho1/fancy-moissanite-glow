import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Minus, 
  Plus, 
  Heart, 
  Share, 
  ShoppingCart, 
  Check, 
  ChevronRight,
  Star,
  StarHalf,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";
import { getProductById, getRelatedProducts } from '@/data/siteData';
import { Product } from '@/types/api';
import ProductCard from '@/components/ProductCard';

// Define a simplified review type that matches what we're using
interface ProductReview {
  rating: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

// Extend the Product type with additional properties we need
interface ExtendedProduct {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  rating: number;
  reviews: ProductReview[];
  soldCount: number;
  compareAtPrice?: number;
  isNew: boolean;
  metalType: string;
  stoneSize?: string;
  stoneCut?: string;
  bandWidth?: string;
  longDescription?: string;
  accentStones?: string;
  category: string;
  createdAt: string;
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  
  // Get product data
  const productData = getProductById(id || '');
  
  // Create an extended product with all required fields
  const product: ExtendedProduct | undefined = productData ? {
    id: productData.id,
    name: productData.title || "Product Name",
    description: productData.description || "No description available",
    images: productData.images || ["https://placehold.co/400x400/png"],
    price: productData.price || 0,
    rating: 4.5, // Default rating
    reviews: [
      {
        rating: 5,
        title: "Excellent product",
        content: "I love this jewelry piece! It's exactly as described and looks even better in person.",
        author: "Jane Smith",
        date: "2023-05-15",
      },
      {
        rating: 4,
        title: "Great value",
        content: "Beautiful design and quality craftsmanship. I'm very happy with my purchase.",
        author: "John Doe",
        date: "2023-04-22",
      },
    ],
    soldCount: 120, // Default sold count
    compareAtPrice: productData.compareAtPrice,
    isNew: true, // Default isNew
    metalType: productData.metalType || "White Gold",
    stoneSize: productData.stoneSize,
    stoneCut: productData.stoneCut,
    bandWidth: productData.bandWidth,
    longDescription: productData.longDescription || productData.description,
    accentStones: productData.accentStones,
    category: productData.category || "Jewelry",
    createdAt: productData.createdAt || new Date().toISOString(),
  } : undefined;
  
  // Get related products
  const relatedProductsData = getRelatedProducts(id || '', 4);
  const relatedProducts = relatedProductsData.map(p => ({
    id: p.id,
    name: p.title || "Product Name",
    description: p.description || "No description available",
    images: p.images || ["https://placehold.co/400x400/png"],
    price: p.price || 0,
    rating: 4.5,
    reviews: [] as ProductReview[],
    soldCount: 100,
    isNew: true,
    metalType: p.metalType || "White Gold",
    category: p.category || "Jewelry",
    createdAt: p.createdAt || new Date().toISOString(),
  }));
  
  if (!product) {
    return (
      <div className="fancy-container py-20 text-center">
        <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
        <p className="mb-8">We couldn't find the product you were looking for.</p>
        <Button asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} (Qty: ${quantity}) has been added to your cart.`,
    });
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-primary text-primary w-4 h-4" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-primary text-primary w-4 h-4" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="text-gray-300 w-4 h-4" />);
    }
    
    return stars;
  };
  
  return (
    <div className="fancy-container py-10">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to="/shop" className="hover:text-primary">Shop</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link 
          to={`/category/${product.category.toLowerCase()}`} 
          className="hover:text-primary"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-foreground">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product Images */}
        <div>
          <div className="bg-secondary/20 rounded-lg overflow-hidden mb-4 aspect-square">
            <img 
              src={product.images[activeImage]} 
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`bg-secondary/20 rounded-lg overflow-hidden aspect-square ${
                  activeImage === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div>
          <div className="mb-4">
            {product.isNew && (
              <Badge className="mb-2">New Arrival</Badge>
            )}
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center">
                {renderStars(product.rating)}
                <span className="ml-2 text-sm text-muted-foreground">
                  ({product.reviews.length} reviews)
                </span>
              </div>
              <Separator orientation="vertical" className="h-5" />
              <span className="text-sm text-muted-foreground">
                {product.soldCount}+ sold
              </span>
            </div>
            <div className="text-2xl font-semibold mb-2">${product.price.toFixed(2)}</div>
            {product.compareAtPrice && (
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
                <Badge variant="destructive">
                  Save ${(product.compareAtPrice - product.price).toFixed(2)}
                </Badge>
              </div>
            )}
          </div>
          
          <Separator className="my-6" />
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Specifications</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><span className="font-medium text-foreground">Metal Type:</span> {product.metalType}</li>
                {product.stoneSize && <li><span className="font-medium text-foreground">Stone Size:</span> {product.stoneSize}</li>}
                {product.stoneCut && <li><span className="font-medium text-foreground">Stone Cut:</span> {product.stoneCut}</li>}
                {product.bandWidth && <li><span className="font-medium text-foreground">Band Width:</span> {product.bandWidth}</li>}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center w-32 border border-input rounded-md">
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon"
                  className="rounded-none"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <input
                  type="number"
                  className="w-full text-center bg-transparent border-0 focus:ring-0"
                  value={quantity}
                  readOnly
                />
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon"
                  className="rounded-none"
                  onClick={incrementQuantity}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleAddToCart}
                className="flex-1 gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
              
              <Button 
                onClick={handleAddToWishlist}
                variant="outline" 
                className="gap-2"
              >
                <Heart className="w-4 h-4" />
                Add to Wishlist
              </Button>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4">
              <div className="flex items-start gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Lifetime Warranty</h4>
                  <p className="text-sm text-muted-foreground">We stand behind our products with a comprehensive lifetime warranty.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Free Shipping & Returns</h4>
                  <p className="text-sm text-muted-foreground">Enjoy free shipping on all orders and easy returns within 30 days.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">Share this product</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start mb-8">
            <TabsTrigger value="details">Details & Specs</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviews.length})</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Product Details</h3>
              <p className="text-muted-foreground">{product.longDescription || product.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Materials</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Primary Stone: Moissanite</li>
                <li>Metal: {product.metalType}</li>
                {product.accentStones && <li>Accent Stones: {product.accentStones}</li>}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Category</span>
                  <span className="text-muted-foreground">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Metal Type</span>
                  <span className="text-muted-foreground">{product.metalType}</span>
                </div>
                {product.stoneSize && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Stone Size</span>
                    <span className="text-muted-foreground">{product.stoneSize}</span>
                  </div>
                )}
                {product.stoneCut && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Stone Cut</span>
                    <span className="text-muted-foreground">{product.stoneCut}</span>
                  </div>
                )}
                {product.bandWidth && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Band Width</span>
                    <span className="text-muted-foreground">{product.bandWidth}</span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Product ID</span>
                  <span className="text-muted-foreground">{product.id}</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            {product.reviews.length > 0 ? (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">Customer Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(product.rating)}
                      </div>
                      <span>Based on {product.reviews.length} reviews</span>
                    </div>
                  </div>
                  <Button>Write a Review</Button>
                </div>
                
                {product.reviews.map((review, index) => (
                  <div key={index} className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {renderStars(review.rating)}
                      </div>
                      <h4 className="font-medium">{review.title}</h4>
                    </div>
                    <p className="mb-2 text-muted-foreground">{review.content}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{review.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-lg font-medium mb-2">No Reviews Yet</h3>
                <p className="text-muted-foreground mb-6">Be the first to review this product</p>
                <Button>Write a Review</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="shipping">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                <p className="text-muted-foreground mb-2">
                  We offer free shipping on all orders within the United States. International shipping rates vary based on location.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Domestic orders: 2-5 business days</li>
                  <li>International orders: 7-14 business days</li>
                  <li>Express shipping options available at checkout</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Return Policy</h3>
                <p className="text-muted-foreground mb-2">
                  We want you to be completely satisfied with your purchase. If you're not, you may return it within 30 days of receipt.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Items must be unworn and in original packaging</li>
                  <li>Custom pieces are non-returnable</li>
                  <li>Return shipping is free for domestic orders</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Warranty</h3>
                <p className="text-muted-foreground">
                  All our jewelry comes with a comprehensive lifetime warranty against manufacturing defects. This includes free prong tightening, re-polishing, and rhodium plating (for white gold pieces).
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={{
                id: product.id,
                title: product.name,
                description: product.description,
                price: product.price,
                images: product.images,
                category: product.category,
                metalType: product.metalType,
                createdAt: product.createdAt
              }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
