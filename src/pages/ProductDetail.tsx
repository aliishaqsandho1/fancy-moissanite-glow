
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, ArrowLeft, Star, ShoppingCart, Share, Info, Shield, Award, RotateCcw, CircleDot } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const product = getProductById(id || "");
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colorVariations[0]?.name || '');
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

  const relatedProducts = getRelatedProducts(product.id, 4);

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

  const averageRating = product.reviews.length > 0
    ? product.reviews.reduce((total, review) => total + review.rating, 0) / product.reviews.length
    : 0;

  return (
    <div className="fancy-container py-12">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-6 group">
        <Link to="/shop" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to Collection</span>
        </Link>
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-6">
          <div className="aspect-square rounded-xl overflow-hidden futuristic-panel p-1">
            <div className="w-full h-full relative">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
              {product.featured && (
                <div className="absolute top-4 right-4 bg-gradient-gold px-3 py-1 rounded-full text-xs font-semibold text-black">
                  Featured
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                className={`w-24 h-24 rounded-md overflow-hidden flex-shrink-0 transition-all snap-start ${
                  selectedImage === idx 
                    ? 'ring-2 ring-gold ring-offset-2 scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={image} alt={`${product.title} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <div className="gold-glass-panel p-8 rounded-xl mb-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
                <span>{product.category}</span>
                <span>•</span>
                <span>SKU: {product.sku}</span>
                {product.inStock !== false ? (
                  <span className="ml-auto text-emerald-600 flex items-center gap-1">
                    <CircleDot size={14} />
                    In Stock
                  </span>
                ) : (
                  <span className="ml-auto text-red-500 flex items-center gap-1">
                    <CircleDot size={14} />
                    Out of Stock
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-2 shimmer-text">{product.title}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      size={16}
                      fill={averageRating >= star ? "#D4AF37" : "none"}
                      className="text-gold"
                    />
                  ))}
                </div>
                <span className="text-sm">{product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'}</span>
              </div>
              
              <p className="text-3xl font-bold text-gold">${product.price.toLocaleString()}</p>
            </div>
            
            <div className="gold-divider" />
            
            <p className="text-muted-foreground my-6">{product.description}</p>
            
            <div className="space-y-6">
              {/* Color Options */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colorVariations.map(color => (
                    <button
                      key={color.name}
                      type="button"
                      className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        selectedColor === color.name 
                          ? 'ring-2 ring-gold ring-offset-2 scale-110' 
                          : 'hover:scale-105'
                      }`}
                      onClick={() => setSelectedColor(color.name)}
                    >
                      <span 
                        className="w-10 h-10 rounded-full" 
                        style={{ backgroundColor: color.color }}
                      ></span>
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Size Options */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-semibold">Size</h3>
                  <Button variant="link" size="sm" className="text-gold p-0 h-auto">
                    Size Guide
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizeOptions.map(size => (
                    <button
                      key={size}
                      type="button"
                      className={`py-2 border rounded-md text-sm transition-all duration-200 ${
                        selectedSize === size 
                          ? 'bg-gold text-black border-gold shadow-md shadow-gold/20'
                          : 'border-gold/30 hover:border-gold/60 hover:bg-gold/10'
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
                <h3 className="text-sm font-semibold mb-3">Quantity</h3>
                <div className="flex w-fit border border-gold/30 rounded-md overflow-hidden">
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center hover:bg-gold/10 transition-colors"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={e => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-16 h-10 text-center bg-transparent border-x border-gold/30"
                  />
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center hover:bg-gold/10 transition-colors"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                className="flex-1 bg-gradient-gold text-black hover:shadow-md hover:shadow-gold/30 transition-all" 
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} className="mr-2" /> Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-gold/40 hover:bg-gold/10" 
                onClick={handleAddToWishlist}
              >
                <Heart size={18} className="mr-2" /> Add to Wishlist
              </Button>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="gold-glass-panel p-4 rounded-lg flex flex-col items-center text-center">
              <Shield className="text-gold mb-2" size={24} />
              <h4 className="font-medium mb-1">Lifetime Warranty</h4>
              <p className="text-xs text-muted-foreground">All our pieces come with a lifetime warranty</p>
            </div>
            <div className="gold-glass-panel p-4 rounded-lg flex flex-col items-center text-center">
              <RotateCcw className="text-gold mb-2" size={24} />
              <h4 className="font-medium mb-1">30-Day Returns</h4>
              <p className="text-xs text-muted-foreground">Not satisfied? Return within 30 days</p>
            </div>
            <div className="gold-glass-panel p-4 rounded-lg flex flex-col items-center text-center">
              <Award className="text-gold mb-2" size={24} />
              <h4 className="font-medium mb-1">Certified Quality</h4>
              <p className="text-xs text-muted-foreground">All stones are certified for quality</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mt-16 futuristic-panel p-8 rounded-xl">
        <Tabs defaultValue="description">
          <TabsList className="w-full grid grid-cols-4 mb-8 bg-transparent border border-gold/20 rounded-lg overflow-hidden">
            <TabsTrigger 
              value="description" 
              className="data-[state=active]:bg-gold data-[state=active]:text-black data-[state=active]:shadow-none"
            >
              Description
            </TabsTrigger>
            <TabsTrigger 
              value="specifications" 
              className="data-[state=active]:bg-gold data-[state=active]:text-black data-[state=active]:shadow-none"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="data-[state=active]:bg-gold data-[state=active]:text-black data-[state=active]:shadow-none"
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger 
              value="care" 
              className="data-[state=active]:bg-gold data-[state=active]:text-black data-[state=active]:shadow-none"
            >
              Care & Warranty
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="space-y-4 animate-fade-in">
            <div className="gold-accent">
              <h3 className="text-lg font-semibold">Product Description</h3>
              <p className="mt-2">{product.description}</p>
              <p className="mt-4">Our moissanite stones are ethically sourced and lab-created to provide exceptional beauty without environmental impact.</p>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Highlights</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Info size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>Superior clarity and brilliance that rivals natural diamonds</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>Ethically created in a controlled laboratory environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>More durable than other diamond alternatives with a hardness of 9.25 on the Mohs scale</span>
                </li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="gold-glass-panel p-6 rounded-lg">
                <h4 className="font-medium mb-4 text-gold">Stone Details</h4>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gold/10">
                      <td className="py-2 font-medium">Type</td>
                      <td className="py-2">{product.moissaniteType}</td>
                    </tr>
                    <tr className="border-b border-gold/10">
                      <td className="py-2 font-medium">Cut</td>
                      <td className="py-2">{product.moissaniteCut}</td>
                    </tr>
                    <tr className="border-b border-gold/10">
                      <td className="py-2 font-medium">Clarity</td>
                      <td className="py-2">VVS1-VVS2 Equivalent</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Hardness</td>
                      <td className="py-2">9.25 on Mohs Scale</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="gold-glass-panel p-6 rounded-lg">
                <h4 className="font-medium mb-4 text-gold">Metal Details</h4>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gold/10">
                      <td className="py-2 font-medium">Type</td>
                      <td className="py-2">{product.metalType}</td>
                    </tr>
                    <tr className="border-b border-gold/10">
                      <td className="py-2 font-medium">Finish</td>
                      <td className="py-2">Polished</td>
                    </tr>
                    <tr className="border-b border-gold/10">
                      <td className="py-2 font-medium">Stamps</td>
                      <td className="py-2">14K, 18K or PT950 (Depending on selection)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Weight</td>
                      <td className="py-2">Varies by size</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Customer Reviews</h3>
              <Button>Write a Review</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="gold-glass-panel p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        size={20}
                        fill={averageRating >= star ? "#D4AF37" : "none"}
                        className="text-gold"
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">
                    {averageRating.toFixed(1)} out of 5
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on {product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'}
                </p>
                
                {/* Rating breakdown */}
                <div className="mt-4 space-y-2">
                  {[5, 4, 3, 2, 1].map(rating => {
                    const count = product.reviews.filter(r => r.rating === rating).length;
                    const percentage = product.reviews.length > 0 ? (count / product.reviews.length) * 100 : 0;
                    return (
                      <div key={rating} className="flex items-center gap-2">
                        <div className="w-8 text-sm">{rating} ★</div>
                        <div className="flex-grow h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gold"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <div className="w-8 text-sm text-right">{count}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="space-y-4">
                {product.reviews.length > 0 ? (
                  product.reviews.map(review => (
                    <div key={review.id} className="gold-glass-panel p-5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{review.author}</h4>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star 
                            key={star}
                            size={14}
                            fill={review.rating >= star ? "#D4AF37" : "none"}
                            className="text-gold"
                          />
                        ))}
                      </div>
                      <p className="text-sm">{review.comment}</p>
                      {review.verified && (
                        <div className="mt-2 inline-flex items-center gap-1 text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full">
                          <Shield size={10} /> Verified Purchase
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="care" className="space-y-6 animate-fade-in">
            <div className="space-y-6">
              <div className="gold-accent">
                <h3 className="text-lg font-semibold">Care Instructions</h3>
                <p className="mt-2">{product.careInstructions}</p>
              </div>
              
              <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Regular Cleaning</p>
                    <p className="text-sm text-muted-foreground">
                      Clean your jewelry with a soft cloth and mild soap in warm water. Gently scrub with a soft toothbrush to remove any buildup in crevices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Proper Storage</p>
                    <p className="text-sm text-muted-foreground">
                      Store your jewelry separately to prevent scratching. Consider using a jewelry box with separate compartments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Avoid Chemicals</p>
                    <p className="text-sm text-muted-foreground">
                      Remove jewelry before swimming, bathing, or using household cleaners and chemicals.
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="gold-accent mt-8">
                <h3 className="text-lg font-semibold">Warranty Information</h3>
                <p className="mt-2">{product.warrantyInfo}</p>
              </div>
              
              <div className="gold-glass-panel p-6 rounded-lg mt-6">
                <h4 className="font-medium mb-3 text-gold">Our Warranty Covers:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CircleDot size={16} className="text-gold flex-shrink-0 mt-1" />
                    <span>Manufacturing defects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleDot size={16} className="text-gold flex-shrink-0 mt-1" />
                    <span>Stone loosening due to normal wear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleDot size={16} className="text-gold flex-shrink-0 mt-1" />
                    <span>Prong repairs and replacements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleDot size={16} className="text-gold flex-shrink-0 mt-1" />
                    <span>Free cleaning and inspection</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
