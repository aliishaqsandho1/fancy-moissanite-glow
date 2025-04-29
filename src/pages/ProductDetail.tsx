
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, ArrowLeft, Star, ShoppingCart, Share } from 'lucide-react';
import products from '@/data/products';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colorVariations[0].name || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizeOptions[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="fancy-container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">Sorry, the product you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/shop">Return to Shop</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.title} (${selectedColor}, Size ${selectedSize}) has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.title} has been added to your wishlist.`,
    });
  };

  return (
    <div className="fancy-container py-12">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/shop" className="flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Shop
        </Link>
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-secondary/30">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                className={`w-24 h-24 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                  selectedImage === idx ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={image} alt={`${product.title} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-2xl text-primary font-semibold">${product.price.toLocaleString()}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  size={16}
                  fill={product.reviews.length > 0 && product.reviews[0].rating >= star ? "currentColor" : "none"}
                  className="text-gold"
                />
              ))}
            </div>
            <span className="text-sm">{product.reviews.length} reviews</span>
          </div>
          
          <p className="text-muted-foreground">{product.description}</p>
          
          <div className="space-y-4 pt-4">
            {/* Color Options */}
            <div>
              <h3 className="text-sm font-medium mb-2">Color</h3>
              <div className="flex gap-3">
                {product.colorVariations.map(color => (
                  <button
                    key={color.name}
                    type="button"
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedColor === color.name ? 'ring-2 ring-primary ring-offset-2' : ''
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                  >
                    <span 
                      className="w-6 h-6 rounded-full" 
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    ></span>
                  </button>
                ))}
              </div>
              <p className="mt-1 text-sm">Selected: {selectedColor}</p>
            </div>
            
            {/* Size Options */}
            <div>
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizeOptions.map(size => (
                  <button
                    key={size}
                    type="button"
                    className={`px-3 py-1 border rounded-md text-sm ${
                      selectedSize === size 
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background hover:bg-secondary/50'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center w-32 border rounded-md">
                <button
                  type="button"
                  className="w-10 h-10 flex items-center justify-center hover:bg-secondary/50"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={e => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-12 h-10 text-center border-x bg-transparent"
                />
                <button
                  type="button"
                  className="w-10 h-10 flex items-center justify-center hover:bg-secondary/50"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={handleAddToCart}>
                <ShoppingCart size={16} className="mr-2" /> Add to Cart
              </Button>
              <Button variant="outline" className="flex-1" onClick={handleAddToWishlist}>
                <Heart size={16} className="mr-2" /> Add to Wishlist
              </Button>
            </div>
            
            {/* Product Meta */}
            <div className="pt-4 space-y-2 text-sm border-t">
              <p><span className="font-medium">SKU:</span> {product.sku}</p>
              <p><span className="font-medium">Category:</span> {product.category}</p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Share:</span>
                <button className="hover:text-primary transition-colors">
                  <Share size={16} />
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="w-full grid grid-cols-4 mb-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="care">Care & Warranty</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="space-y-4">
            <h3 className="text-lg font-semibold">Product Description</h3>
            <p>{product.description}</p>
            <p>Our moissanite stones are ethically sourced and lab-created to provide exceptional beauty without environmental impact.</p>
          </TabsContent>
          
          <TabsContent value="specifications" className="space-y-4">
            <h3 className="text-lg font-semibold">Product Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/30 rounded-lg">
                <h4 className="font-medium mb-2">Stone Details</h4>
                <ul className="space-y-2">
                  <li><span className="font-medium">Type:</span> {product.moissaniteType}</li>
                  <li><span className="font-medium">Cut:</span> {product.moissaniteCut}</li>
                  <li><span className="font-medium">Clarity:</span> VVS1-VVS2 Equivalent</li>
                </ul>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <h4 className="font-medium mb-2">Metal Details</h4>
                <ul className="space-y-2">
                  <li><span className="font-medium">Type:</span> {product.metalType}</li>
                  <li><span className="font-medium">Finish:</span> Polished</li>
                  <li><span className="font-medium">Stamps:</span> 14K, 18K or PT950 (Depending on selection)</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="space-y-6">
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
            
            {product.reviews.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map(review => (
                  <div key={review.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{review.author}</h4>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star 
                          key={star}
                          size={16}
                          fill={review.rating >= star ? "currentColor" : "none"}
                          className="text-gold"
                        />
                      ))}
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No reviews yet. Be the first to review this product!</p>
            )}
            
            <Button>Write a Review</Button>
          </TabsContent>
          
          <TabsContent value="care" className="space-y-4">
            <h3 className="text-lg font-semibold">Care Instructions</h3>
            <p>{product.careInstructions}</p>
            
            <h3 className="text-lg font-semibold mt-6">Warranty Information</h3>
            <p>{product.warrantyInfo}</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
