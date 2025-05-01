
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, CreditCard, CheckCircle, Shield, Truck, CalendarClock, CircleDot } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import products from '@/data/products';

// Sample cart items (in a real app, this would be stored in state management)
const cartItems = [
  { productId: "1", quantity: 1, size: "6.5", color: "White Gold" },
  { productId: "2", quantity: 1, color: "White Gold" }
];

// Get product details from product ID
const getProductFromId = (id: string) => {
  return products.find(product => product.id === id);
};

// Format price
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

// Calculate totals
const calculateSubtotal = () => {
  return cartItems.reduce((total, item) => {
    const product = getProductFromId(item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);
};

const calculateShipping = (method: string) => {
  if (method === "standard") return 0;
  if (method === "express") return 15;
  if (method === "overnight") return 25;
  return 0;
};

const calculateTax = (subtotal: number) => {
  return subtotal * 0.08; // 8% tax rate
};

const calculateTotal = (shippingMethod: string) => {
  const subtotal = calculateSubtotal();
  const shipping = calculateShipping(shippingMethod);
  const tax = calculateTax(subtotal);
  return subtotal + shipping + tax;
};

export default function Checkout() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [formStep, setFormStep] = useState<'shipping' | 'payment' | 'review'>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US"
  });
  
  const [billingInfo, setBillingInfo] = useState({
    sameAsShipping: true,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US"
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: ""
  });
  
  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep('payment');
    window.scrollTo(0, 0);
  };
  
  const handleContinueToReview = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep('review');
    window.scrollTo(0, 0);
  };
  
  const handlePlaceOrder = () => {
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
        duration: 5000,
      });
      
      // Redirect to thank you page
      navigate("/thank-you");
    }, 2000);
  };
  
  return (
    <div className="fancy-container py-12 bg-gradient-to-b from-background to-secondary/20">
      <h1 className="text-3xl font-bold mb-4 text-center shimmer-text">Complete Your Order</h1>
      
      {/* Checkout Steps */}
      <div className="mb-12 max-w-3xl mx-auto">
        <div className="relative flex items-center justify-between">
          {/* Progress bar */}
          <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-gold/10">
            <div 
              className="h-full bg-gold transition-all duration-500"
              style={{ 
                width: formStep === 'shipping' ? '0%' : formStep === 'payment' ? '50%' : '100%'
              }}
            ></div>
          </div>
          
          {/* Step 1 */}
          <div className="relative z-10 text-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${
              formStep === 'shipping' 
                ? 'bg-gold text-black ring-4 ring-gold/30' 
                : 'bg-gold/20 text-gold'
            }`}>
              1
            </div>
            <span className={`text-sm font-medium ${formStep === 'shipping' ? 'text-gold' : ''}`}>Shipping</span>
          </div>
          
          {/* Step 2 */}
          <div className="relative z-10 text-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${
              formStep === 'payment' 
                ? 'bg-gold text-black ring-4 ring-gold/30' 
                : formStep === 'review' ? 'bg-gold/20 text-gold' : 'bg-secondary/80 text-muted-foreground'
            }`}>
              2
            </div>
            <span className={`text-sm font-medium ${formStep === 'payment' ? 'text-gold' : ''}`}>Payment</span>
          </div>
          
          {/* Step 3 */}
          <div className="relative z-10 text-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${
              formStep === 'review' 
                ? 'bg-gold text-black ring-4 ring-gold/30' 
                : 'bg-secondary/80 text-muted-foreground'
            }`}>
              3
            </div>
            <span className={`text-sm font-medium ${formStep === 'review' ? 'text-gold' : ''}`}>Review</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          {/* Back Button */}
          <div className="mb-6">
            {formStep === 'shipping' ? (
              <Button asChild variant="ghost" size="sm" className="group text-muted-foreground hover:text-gold hover:bg-gold/5">
                <Link to="/cart" className="flex items-center gap-2">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Cart
                </Link>
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setFormStep(formStep === 'payment' ? 'shipping' : 'payment')} 
                className="group text-muted-foreground hover:text-gold hover:bg-gold/5 flex items-center gap-2"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
              </Button>
            )}
          </div>
          
          {/* Shipping Information */}
          {formStep === 'shipping' && (
            <form onSubmit={handleContinueToPayment} className="space-y-8 animate-fade-in">
              <div className="futuristic-panel p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gold">
                  <Shield size={18} />
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email address"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                      required
                      className="futuristic-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Your phone number"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                      required
                      className="futuristic-input"
                    />
                  </div>
                </div>
              </div>
              
              <div className="futuristic-panel p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gold">
                  <Truck size={18} />
                  Shipping Address
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="First name"
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                        required
                        className="futuristic-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Last name"
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                        required
                        className="futuristic-input"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm">Address</Label>
                    <Input 
                      id="address" 
                      placeholder="Street address"
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      required
                      className="futuristic-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="apartment" className="text-sm">Apartment, suite, etc. (optional)</Label>
                    <Input 
                      id="apartment" 
                      placeholder="Apartment, suite, etc."
                      value={shippingInfo.apartment}
                      onChange={(e) => setShippingInfo({...shippingInfo, apartment: e.target.value})}
                      className="futuristic-input"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm">City</Label>
                      <Input 
                        id="city" 
                        placeholder="City"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                        required
                        className="futuristic-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm">State / Province</Label>
                      <Input 
                        id="state" 
                        placeholder="State"
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                        required
                        className="futuristic-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode" className="text-sm">ZIP / Postal Code</Label>
                      <Input 
                        id="zipCode" 
                        placeholder="ZIP code"
                        value={shippingInfo.zipCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                        required
                        className="futuristic-input"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm">Country</Label>
                    <Select
                      value={shippingInfo.country}
                      onValueChange={(value) => setShippingInfo({...shippingInfo, country: value})}
                    >
                      <SelectTrigger id="country" className="border-gold/30 focus:ring-gold">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                        <SelectItem value="AU">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="futuristic-panel p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gold">
                  <CalendarClock size={18} />
                  Shipping Method
                </h2>
                <div className="space-y-4">
                  <div className={`flex items-center justify-between p-4 border rounded-md transition-all ${
                    shippingMethod === 'standard' 
                      ? 'border-gold bg-gold/5 shadow-md' 
                      : 'border-gold/20 bg-background hover:border-gold/40'
                  }`}>
                    <label className="flex items-center gap-3 flex-1 cursor-pointer">
                      <div className={`w-5 h-5 border border-gold rounded-full flex items-center justify-center ${
                        shippingMethod === 'standard' ? 'bg-gold/10' : 'bg-transparent'
                      }`}>
                        {shippingMethod === 'standard' && <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>}
                      </div>
                      <input 
                        type="radio" 
                        name="shipping" 
                        value="standard"
                        checked={shippingMethod === 'standard'}
                        onChange={() => setShippingMethod('standard')}
                        className="sr-only"
                      />
                      <div>
                        <p className="font-medium">Standard Shipping</p>
                        <p className="text-sm text-muted-foreground">3-5 business days</p>
                      </div>
                    </label>
                    <span className="font-medium text-gold">Free</span>
                  </div>
                  
                  <div className={`flex items-center justify-between p-4 border rounded-md transition-all ${
                    shippingMethod === 'express' 
                      ? 'border-gold bg-gold/5 shadow-md' 
                      : 'border-gold/20 bg-background hover:border-gold/40'
                  }`}>
                    <label className="flex items-center gap-3 flex-1 cursor-pointer">
                      <div className={`w-5 h-5 border border-gold rounded-full flex items-center justify-center ${
                        shippingMethod === 'express' ? 'bg-gold/10' : 'bg-transparent'
                      }`}>
                        {shippingMethod === 'express' && <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>}
                      </div>
                      <input 
                        type="radio" 
                        name="shipping" 
                        value="express"
                        checked={shippingMethod === 'express'}
                        onChange={() => setShippingMethod('express')}
                        className="sr-only"
                      />
                      <div>
                        <p className="font-medium">Express Shipping</p>
                        <p className="text-sm text-muted-foreground">2-3 business days</p>
                      </div>
                    </label>
                    <span className="font-medium">$15.00</span>
                  </div>
                  
                  <div className={`flex items-center justify-between p-4 border rounded-md transition-all ${
                    shippingMethod === 'overnight' 
                      ? 'border-gold bg-gold/5 shadow-md' 
                      : 'border-gold/20 bg-background hover:border-gold/40'
                  }`}>
                    <label className="flex items-center gap-3 flex-1 cursor-pointer">
                      <div className={`w-5 h-5 border border-gold rounded-full flex items-center justify-center ${
                        shippingMethod === 'overnight' ? 'bg-gold/10' : 'bg-transparent'
                      }`}>
                        {shippingMethod === 'overnight' && <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>}
                      </div>
                      <input 
                        type="radio" 
                        name="shipping" 
                        value="overnight"
                        checked={shippingMethod === 'overnight'}
                        onChange={() => setShippingMethod('overnight')}
                        className="sr-only"
                      />
                      <div>
                        <p className="font-medium">Overnight Shipping</p>
                        <p className="text-sm text-muted-foreground">Next business day</p>
                      </div>
                    </label>
                    <span className="font-medium">$25.00</span>
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full futuristic-button">
                Continue to Payment
              </Button>
            </form>
          )}
          
          {/* Payment Information */}
          {formStep === 'payment' && (
            <form onSubmit={handleContinueToReview} className="space-y-8 animate-fade-in">
              <div className="futuristic-panel p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gold">
                  <Shield size={18} />
                  Billing Address
                </h2>
                
                <div className="flex items-center gap-3 mb-6 p-3 border border-gold/20 rounded-md bg-gold/5">
                  <Checkbox 
                    id="billing-same" 
                    checked={billingInfo.sameAsShipping}
                    onCheckedChange={(checked) => setBillingInfo({
                      ...billingInfo, 
                      sameAsShipping: checked as boolean,
                      firstName: checked ? shippingInfo.firstName : '',
                      lastName: checked ? shippingInfo.lastName : '',
                      address: checked ? shippingInfo.address : '',
                      apartment: checked ? shippingInfo.apartment : '',
                      city: checked ? shippingInfo.city : '',
                      state: checked ? shippingInfo.state : '',
                      zipCode: checked ? shippingInfo.zipCode : '',
                      country: checked ? shippingInfo.country : 'US',
                    })}
                    className="data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                  />
                  <Label htmlFor="billing-same" className="text-sm font-medium">Same as shipping address</Label>
                </div>
                
                {!billingInfo.sameAsShipping && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="billingFirstName" className="text-sm">First Name</Label>
                        <Input 
                          id="billingFirstName" 
                          placeholder="First name"
                          value={billingInfo.firstName}
                          onChange={(e) => setBillingInfo({...billingInfo, firstName: e.target.value})}
                          required
                          className="futuristic-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingLastName" className="text-sm">Last Name</Label>
                        <Input 
                          id="billingLastName" 
                          placeholder="Last name"
                          value={billingInfo.lastName}
                          onChange={(e) => setBillingInfo({...billingInfo, lastName: e.target.value})}
                          required
                          className="futuristic-input"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="billingAddress" className="text-sm">Address</Label>
                      <Input 
                        id="billingAddress" 
                        placeholder="Street address"
                        value={billingInfo.address}
                        onChange={(e) => setBillingInfo({...billingInfo, address: e.target.value})}
                        required
                        className="futuristic-input"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="billingApartment" className="text-sm">Apartment, suite, etc. (optional)</Label>
                      <Input 
                        id="billingApartment" 
                        placeholder="Apartment, suite, etc."
                        value={billingInfo.apartment}
                        onChange={(e) => setBillingInfo({...billingInfo, apartment: e.target.value})}
                        className="futuristic-input"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="billingCity" className="text-sm">City</Label>
                        <Input 
                          id="billingCity" 
                          placeholder="City"
                          value={billingInfo.city}
                          onChange={(e) => setBillingInfo({...billingInfo, city: e.target.value})}
                          required
                          className="futuristic-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingState" className="text-sm">State / Province</Label>
                        <Input 
                          id="billingState" 
                          placeholder="State"
                          value={billingInfo.state}
                          onChange={(e) => setBillingInfo({...billingInfo, state: e.target.value})}
                          required
                          className="futuristic-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingZipCode" className="text-sm">ZIP / Postal Code</Label>
                        <Input 
                          id="billingZipCode" 
                          placeholder="ZIP code"
                          value={billingInfo.zipCode}
                          onChange={(e) => setBillingInfo({...billingInfo, zipCode: e.target.value})}
                          required
                          className="futuristic-input"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="billingCountry" className="text-sm">Country</Label>
                      <Select
                        value={billingInfo.country}
                        onValueChange={(value) => setBillingInfo({...billingInfo, country: value})}
                      >
                        <SelectTrigger id="billingCountry" className="border-gold/30 focus:ring-gold">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="US">United States</SelectItem>
                          <SelectItem value="CA">Canada</SelectItem>
                          <SelectItem value="UK">United Kingdom</SelectItem>
                          <SelectItem value="AU">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="futuristic-panel p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gold">
                  <CreditCard size={18} />
                  Payment Method
                </h2>
                <div className="space-y-4 mb-8">
                  <div className={`flex items-center justify-between p-4 border rounded-md transition-all ${
                    paymentMethod === 'credit-card' 
                      ? 'border-gold bg-gold/5 shadow-md' 
                      : 'border-gold/20 bg-background hover:border-gold/40'
                  }`}>
                    <label className="flex items-center gap-3 flex-1 cursor-pointer">
                      <div className={`w-5 h-5 border border-gold rounded-full flex items-center justify-center ${
                        paymentMethod === 'credit-card' ? 'bg-gold/10' : 'bg-transparent'
                      }`}>
                        {paymentMethod === 'credit-card' && <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>}
                      </div>
                      <input 
                        type="radio" 
                        name="payment" 
                        value="credit-card"
                        checked={paymentMethod === 'credit-card'}
                        onChange={() => setPaymentMethod('credit-card')}
                        className="sr-only"
                      />
                      <div className="flex items-center gap-2">
                        <CreditCard size={20} className="text-gold" />
                        <p className="font-medium">Credit Card</p>
                      </div>
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-6 rounded bg-secondary/80 flex items-center justify-center text-[10px] font-bold">VISA</div>
                      <div className="w-8 h-6 rounded bg-secondary/80 flex items-center justify-center text-[10px] font-bold">MC</div>
                      <div className="w-8 h-6 rounded bg-secondary/80 flex items-center justify-center text-[10px] font-bold">AMEX</div>
                    </div>
                  </div>
                  
                  {/* More payment methods would go here in a real app */}
                </div>
                
                {paymentMethod === 'credit-card' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-sm">Card Number</Label>
                      <div className="relative">
                        <Input 
                          id="cardNumber" 
                          placeholder="1234 5678 9012 3456"
                          value={paymentInfo.cardNumber}
                          onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                          required
                          className="futuristic-input pl-10"
                        />
                        <CreditCard size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardName" className="text-sm">Name on Card</Label>
                      <Input 
                        id="cardName" 
                        placeholder="Name on card"
                        value={paymentInfo.cardName}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value})}
                        required
                        className="futuristic-input"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="text-sm">Expiration Date (MM/YY)</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/YY"
                          value={paymentInfo.expiry}
                          onChange={(e) => setPaymentInfo({...paymentInfo, expiry: e.target.value})}
                          required
                          className="futuristic-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="text-sm">CVV</Label>
                        <div className="relative">
                          <Input 
                            id="cvv" 
                            placeholder="123"
                            value={paymentInfo.cvv}
                            onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                            required
                            className="futuristic-input"
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                            <Shield size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Button type="submit" className="w-full futuristic-button">
                Review Order
              </Button>
            </form>
          )}
          
          {/* Order Review */}
          {formStep === 'review' && (
            <div className="space-y-8 animate-fade-in">
              <div className="futuristic-panel p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gold">Review Your Order</h2>
                  <p className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                    Order #FM-{Math.floor(Math.random() * 10000)}
                  </p>
                </div>
                
                <Accordion type="multiple" defaultValue={['shipping-info', 'payment-info']} className="space-y-4">
                  {/* Shipping Information */}
                  <AccordionItem value="shipping-info" className="border border-gold/20 rounded-md overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gold/5 group">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-gold" />
                        <span className="font-medium group-hover:text-gold transition-colors">Shipping Information</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-0 pb-3 bg-gold/5">
                      <div className="pl-6 border-l-2 border-gold/30 space-y-2 pt-2">
                        <p>
                          <span className="font-medium">Contact:</span> {shippingInfo.email} | {shippingInfo.phone}
                        </p>
                        <p>
                          <span className="font-medium">Ship to:</span> {shippingInfo.firstName} {shippingInfo.lastName}
                        </p>
                        <p>
                          {shippingInfo.address} {shippingInfo.apartment && `, ${shippingInfo.apartment}`}<br />
                          {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}<br />
                          {shippingInfo.country === "US" ? "United States" : shippingInfo.country}
                        </p>
                        <p>
                          <span className="font-medium">Method:</span> {shippingMethod === "standard" 
                            ? "Standard Shipping (3-5 business days)" 
                            : shippingMethod === "express"
                              ? "Express Shipping (2-3 business days)"
                              : "Overnight Shipping (Next business day)"}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Payment Information */}
                  <AccordionItem value="payment-info" className="border border-gold/20 rounded-md overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gold/5 group">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-gold" />
                        <span className="font-medium group-hover:text-gold transition-colors">Payment Information</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-0 pb-3 bg-gold/5">
                      <div className="pl-6 border-l-2 border-gold/30 space-y-2 pt-2">
                        <p>
                          <span className="font-medium">Payment Method:</span> Credit Card
                        </p>
                        <p>
                          <span className="font-medium">Card:</span> **** **** **** {paymentInfo.cardNumber.slice(-4)}
                        </p>
                        <p>
                          <span className="font-medium">Billing Address:</span>
                        </p>
                        <p>
                          {billingInfo.sameAsShipping ? (
                            <>
                              {shippingInfo.firstName} {shippingInfo.lastName}<br />
                              {shippingInfo.address} {shippingInfo.apartment && `, ${shippingInfo.apartment}`}<br />
                              {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}<br />
                              {shippingInfo.country === "US" ? "United States" : shippingInfo.country}
                            </>
                          ) : (
                            <>
                              {billingInfo.firstName} {billingInfo.lastName}<br />
                              {billingInfo.address} {billingInfo.apartment && `, ${billingInfo.apartment}`}<br />
                              {billingInfo.city}, {billingInfo.state} {billingInfo.zipCode}<br />
                              {billingInfo.country === "US" ? "United States" : billingInfo.country}
                            </>
                          )}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <Button 
                onClick={handlePlaceOrder} 
                className="w-full futuristic-button"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-transparent border-t-black border-l-black rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  "Place Order"
                )}
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  By placing your order, you agree to our <Link to="/terms" className="text-gold hover:underline">Terms of Service</Link> and acknowledge our <Link to="/privacy" className="text-gold hover:underline">Privacy Policy</Link>.
                </p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Shield size={16} className="text-gold" />
                  <p className="text-xs">Your payment information is secure and encrypted</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="gold-glass-panel rounded-xl p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4 text-gold">Order Summary</h2>
            
            {/* Items */}
            <div className="space-y-4 mb-6 max-h-[300px] overflow-auto">
              {cartItems.map(item => {
                const product = getProductFromId(item.productId);
                if (!product) return null;
                
                return (
                  <div key={item.productId} className="flex gap-4 p-3 rounded-lg border border-gold/10 bg-gold/5 animate-fade-in">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-gold/30 gold-glow">
                      <img 
                        src={product.images[0]} 
                        alt={product.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-sm">{product.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {item.color && `Color: ${item.color}`}
                        {item.color && item.size && " | "}
                        {item.size && `Size: ${item.size}`}
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm font-medium text-gold">{formatPrice(product.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Discount Code */}
            <div className="flex gap-2 mb-6">
              <Input placeholder="Discount code" className="futuristic-input" />
              <Button variant="outline" size="sm" className="border-gold/30 hover:bg-gold/5 text-gold">Apply</Button>
            </div>
            
            <div className="gold-divider" />
            
            {/* Totals */}
            <div className="space-y-2 pt-4 mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(calculateSubtotal())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {calculateShipping(shippingMethod) === 0 ? (
                    <span className="text-gold">Free</span>
                  ) : (
                    formatPrice(calculateShipping(shippingMethod))
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Tax</span>
                <span>{formatPrice(calculateTax(calculateSubtotal()))}</span>
              </div>
            </div>
            
            <div className="gold-divider" />
            
            {/* Total */}
            <div className="flex justify-between items-center pt-4 font-medium">
              <span>Total</span>
              <span className="text-xl text-gold shimmer-text">{formatPrice(calculateTotal(shippingMethod))}</span>
            </div>
            
            {/* Security badges */}
            <div className="mt-6 border-t border-gold/10 pt-4">
              <div className="flex justify-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                  <Shield size={20} className="text-gold/70" />
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                  <CircleDot size={20} className="text-gold/70" />
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                  <CheckCircle size={20} className="text-gold/70" />
                </div>
              </div>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Secure Checkout | All prices shown in USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
