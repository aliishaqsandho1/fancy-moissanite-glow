
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import products from '@/data/products';

// Sample cart items (in a real app, this would be stored in state management)
type CartItem = {
  productId: string;
  quantity: number;
  size?: string;
  color?: string;
};

export default function Cart() {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { productId: "1", quantity: 1, size: "6.5", color: "White Gold" },
    { productId: "2", quantity: 1, color: "White Gold" }
  ]);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  // Get product details from product ID
  const getProductFromId = (id: string) => {
    return products.find(product => product.id === id);
  };
  
  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductFromId(item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };
  
  // Calculate shipping (free over $150)
  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 150 ? 0 : 10;
  };
  
  // Calculate discount
  const calculateDiscount = () => {
    return promoApplied ? calculateSubtotal() * 0.1 : 0;
  };
  
  // Calculate total
  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping() - calculateDiscount();
  };
  
  // Update quantity
  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Direct quantity update
  const handleQuantityChange = (productId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      updateQuantity(productId, value);
    }
  };
  
  // Remove item from cart
  const removeItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
      duration: 3000,
    });
  };
  
  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setPromoApplied(true);
      toast({
        title: "Promo code applied!",
        description: "10% discount has been applied to your order.",
        duration: 3000,
      });
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please try a different code.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };
  
  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  return (
    <div className="fancy-container py-12">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary/50 border-b border-border">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-center p-4 hidden md:table-cell">Price</th>
                    <th className="text-center p-4">Quantity</th>
                    <th className="text-right p-4 hidden md:table-cell">Subtotal</th>
                    <th className="text-right p-4"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {cartItems.map(item => {
                    const product = getProductFromId(item.productId);
                    if (!product) return null;
                    
                    return (
                      <tr key={item.productId} className="bg-background">
                        <td className="p-4">
                          <div 
                            className="flex items-center gap-4 relative"
                            onMouseEnter={() => setHoveredProduct(item.productId)}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            <div className="w-16 h-16 rounded-md overflow-hidden hidden sm:block">
                              <img 
                                src={product.images[0]} 
                                alt={product.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">
                                <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                                  {product.title}
                                </Link>
                              </h3>
                              <div className="text-sm text-muted-foreground">
                                {item.color && <p>Color: {item.color}</p>}
                                {item.size && <p>Size: {item.size}</p>}
                              </div>
                              <p className="text-sm font-medium md:hidden mt-1">
                                {formatPrice(product.price)}
                              </p>
                            </div>
                            
                            {/* Product details on hover */}
                            {hoveredProduct === item.productId && (
                              <div className="absolute left-0 top-full mt-2 z-30 bg-card/95 backdrop-blur-md p-4 rounded-lg shadow-lg border border-primary/10 w-64">
                                <div className="flex gap-3">
                                  <div className="w-20 h-20 rounded-md overflow-hidden">
                                    <img 
                                      src={product.images.length > 1 ? product.images[1] : product.images[0]} 
                                      alt={product.title} 
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-sm">{product.title}</h4>
                                    <p className="text-xs text-primary font-medium mt-1">{formatPrice(product.price)}</p>
                                    <div className="text-xs text-muted-foreground mt-2">
                                      {product.description && (
                                        <p className="line-clamp-2">{product.description}</p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Product variations */}
                                <div className="mt-3 border-t border-border pt-2">
                                  {product.colorOptions && product.colorOptions.length > 0 && (
                                    <div className="mb-2">
                                      <p className="text-xs font-medium mb-1">Colors:</p>
                                      <div className="flex flex-wrap gap-1">
                                        {product.colorOptions.map((color, index) => (
                                          <div 
                                            key={index} 
                                            className={`w-5 h-5 rounded-full border ${
                                              item.color === color ? 'border-primary ring-1 ring-primary' : 'border-border'
                                            }`}
                                            style={{ backgroundColor: color.toLowerCase().replace(' gold', '') }}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  
                                  {product.sizeOptions && product.sizeOptions.length > 0 && (
                                    <div>
                                      <p className="text-xs font-medium mb-1">Sizes:</p>
                                      <div className="flex flex-wrap gap-1">
                                        {product.sizeOptions.map((size, index) => (
                                          <div 
                                            key={index} 
                                            className={`px-2 py-1 text-xs rounded border ${
                                              item.size === size ? 'bg-primary/10 border-primary text-primary' : 'border-border'
                                            }`}
                                          >
                                            {size}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-center hidden md:table-cell">
                          {formatPrice(product.price)}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-center gap-2">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            >
                              <Minus size={14} />
                            </Button>
                            <Input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.productId, e)}
                              className="w-14 text-center h-8 p-0"
                            />
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            >
                              <Plus size={14} />
                            </Button>
                          </div>
                        </td>
                        <td className="p-4 text-right hidden md:table-cell font-medium">
                          {formatPrice(product.price * item.quantity)}
                        </td>
                        <td className="p-4 text-right">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removeItem(item.productId)}
                          >
                            <Trash2 size={18} />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link to="/shop" className="flex items-center gap-2">
                  <ShoppingBag size={16} /> Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-secondary/30 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(calculateSubtotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {calculateShipping() === 0 ? (
                      <span className="text-primary">Free</span>
                    ) : (
                      formatPrice(calculateShipping())
                    )}
                  </span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-primary">
                    <span>Discount (10%)</span>
                    <span>-{formatPrice(calculateDiscount())}</span>
                  </div>
                )}
                <div className="border-t border-border pt-3 flex justify-between font-medium">
                  <span>Total</span>
                  <span className="text-lg">{formatPrice(calculateTotal())}</span>
                </div>
              </div>
              
              {/* Promo Code */}
              <div className="mb-6">
                <label htmlFor="promo" className="block text-sm font-medium mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <Input 
                    id="promo" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    disabled={promoApplied}
                  />
                  <Button 
                    variant="outline" 
                    onClick={applyPromoCode}
                    disabled={promoApplied || !promoCode}
                  >
                    Apply
                  </Button>
                </div>
                {promoApplied && (
                  <p className="text-primary text-sm mt-2">WELCOME10 applied!</p>
                )}
              </div>
              
              {/* Checkout Button */}
              <Button className="w-full" asChild size="lg">
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              
              {/* Info */}
              <p className="text-sm text-muted-foreground mt-4">
                Shipping costs calculated at checkout. Free shipping on all orders over $150.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-secondary/20 rounded-lg">
          <ShoppingBag size={64} className="mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button asChild>
            <Link to="/shop">Start Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
