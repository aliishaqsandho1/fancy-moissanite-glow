
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
import { ArrowLeft, CreditCard, CheckCircle } from "lucide-react";
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
    <div className="fancy-container py-12">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      
      {/* Checkout Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="text-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1 ${formStep === 'shipping' ? 'bg-primary text-primary-foreground' : 'bg-primary/20 text-primary'}`}>
              1
            </div>
            <span className="text-sm">Shipping</span>
          </div>
          <div className="h-0.5 flex-1 bg-border mx-2"></div>
          <div className="text-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1 ${formStep === 'payment' ? 'bg-primary text-primary-foreground' : formStep === 'review' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
              2
            </div>
            <span className="text-sm">Payment</span>
          </div>
          <div className="h-0.5 flex-1 bg-border mx-2"></div>
          <div className="text-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1 ${formStep === 'review' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              3
            </div>
            <span className="text-sm">Review</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          {/* Back Button */}
          <div className="mb-6">
            {formStep === 'shipping' ? (
              <Button asChild variant="outline" size="sm">
                <Link to="/cart" className="flex items-center gap-2">
                  <ArrowLeft size={16} /> Back to Cart
                </Link>
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setFormStep(formStep === 'payment' ? 'shipping' : 'payment')} 
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} /> Back
              </Button>
            )}
          </div>
          
          {/* Shipping Information */}
          {formStep === 'shipping' && (
            <form onSubmit={handleContinueToPayment} className="space-y-8">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email address"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Your phone number"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="First name"
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Last name"
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address" 
                      placeholder="Street address"
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                    <Input 
                      id="apartment" 
                      placeholder="Apartment, suite, etc."
                      value={shippingInfo.apartment}
                      onChange={(e) => setShippingInfo({...shippingInfo, apartment: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        placeholder="City"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State / Province</Label>
                      <Input 
                        id="state" 
                        placeholder="State"
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP / Postal Code</Label>
                      <Input 
                        id="zipCode" 
                        placeholder="ZIP code"
                        value={shippingInfo.zipCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select
                      value={shippingInfo.country}
                      onValueChange={(value) => setShippingInfo({...shippingInfo, country: value})}
                    >
                      <SelectTrigger id="country">
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
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-md bg-background hover:bg-secondary/50">
                    <label className="flex items-center gap-3 flex-1 cursor-pointer">
                      <input 
                        type="radio" 
                        name="shipping" 
                        value="standard"
                        checked={shippingMethod === 'standard'}
                        onChange={() => setShippingMethod('standard')}
                        className="form-radio text-primary"
                      />
                      <div>
                        <p className="font-medium">Standard Shipping</p>
                        <p className="text-sm text-muted-foreground">3-5 business days</p>
                      </div>
                    </label>
                    <span className="font-medium">Free</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-border rounded-md bg-background hover:bg-secondary/50">
                    <label className="flex items-center gap-3 flex-1 cursor-pointer">
                      <input 
                        type="radio" 
                        name="shipping" 
                        value="express"
                        checked={shippingMethod === 'express'}
                        onChange={() => setShippingMethod('express')}
                        className="form-radio text-primary"
                      />
                      <div>
                        <p className="font-medium">Express Shipping</p>
                        <p className="text-sm text-muted-foreground">2-3 business days</p>
                      </div>
                    </label>
                    <span className="font-medium">$15.00</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-border rounded-md bg-background hover:bg-secondary/50">
                    <label className="flex items-center gap-3 flex-1 cursor-pointer">
                      <input 
                        type="radio" 
                        name="shipping" 
                        value="overnight"
                        checked={shippingMethod === 'overnight'}
                        onChange={() => setShippingMethod('overnight')}
                        className="form-radio text-primary"
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
              
              <Button type="submit" className="w-full" size="lg">
                Continue to Payment
              </Button>
            </form>
          )}
          
          {/* Payment Information */}
          {formStep === 'payment' && (
            <form onSubmit={handleContinueToReview} className="space-y-8">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                
                <div className="flex items-center gap-2 mb-6">
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
                  />
                  <Label htmlFor="billing-same">Same as shipping address</Label>
                </div>
                
                {!billingInfo.sameAsShipping && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="billingFirstName">First Name</Label>
                        <Input 
                          id="billingFirstName" 
                          placeholder="First name"
                          value={billingInfo.firstName}
                          onChange={(e) => setBillingInfo({...billingInfo, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingLastName">Last Name</Label>
                        <Input 
                          id="billingLastName" 
                          placeholder="Last name"
                          value={billingInfo.lastName}
                          onChange={(e) => setBillingInfo({...billingInfo, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="billingAddress">Address</Label>
                      <Input 
                        id="billingAddress" 
                        placeholder="Street address"
                        value={billingInfo.address}
                        onChange={(e) => setBillingInfo({...billingInfo, address: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="billingApartment">Apartment, suite, etc. (optional)</Label>
                      <Input 
                        id="billingApartment" 
                        placeholder="Apartment, suite, etc."
                        value={billingInfo.apartment}
                        onChange={(e) => setBillingInfo({...billingInfo, apartment: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="billingCity">City</Label>
                        <Input 
                          id="billingCity" 
                          placeholder="City"
                          value={billingInfo.city}
                          onChange={(e) => setBillingInfo({...billingInfo, city: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingState">State / Province</Label>
                        <Input 
                          id="billingState" 
                          placeholder="State"
                          value={billingInfo.state}
                          onChange={(e) => setBillingInfo({...billingInfo, state: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingZipCode">ZIP / Postal Code</Label>
                        <Input 
                          id="billingZipCode" 
                          placeholder="ZIP code"
                          value={billingInfo.zipCode}
                          onChange={(e) => setBillingInfo({...billingInfo, zipCode: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="billingCountry">Country</Label>
                      <Select
                        value={billingInfo.country}
                        onValueChange={(value) => setBillingInfo({...billingInfo, country: value})}
                      >
                        <SelectTrigger id="billingCountry">
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
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 border border-border rounded-md bg-background hover:bg-secondary/50">
                    <label className="flex items-center gap-3 flex-1 cursor-pointer">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="credit-card"
                        checked={paymentMethod === 'credit-card'}
                        onChange={() => setPaymentMethod('credit-card')}
                        className="form-radio text-primary"
                      />
                      <div className="flex items-center gap-2">
                        <CreditCard size={20} />
                        <p className="font-medium">Credit Card</p>
                      </div>
                    </label>
                  </div>
                  
                  {/* More payment methods would go here in a real app */}
                </div>
                
                {paymentMethod === 'credit-card' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        placeholder="1234 5678 9012 3456"
                        value={paymentInfo.cardNumber}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input 
                        id="cardName" 
                        placeholder="Name on card"
                        value={paymentInfo.cardName}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiration Date (MM/YY)</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/YY"
                          value={paymentInfo.expiry}
                          onChange={(e) => setPaymentInfo({...paymentInfo, expiry: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv" 
                          placeholder="123"
                          value={paymentInfo.cvv}
                          onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Review Order
              </Button>
            </form>
          )}
          
          {/* Order Review */}
          {formStep === 'review' && (
            <div className="space-y-8">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Review Your Order</h2>
                  <p className="text-sm text-muted-foreground">Order #FM-{Math.floor(Math.random() * 10000)}</p>
                </div>
                
                <Accordion type="multiple" className="space-y-4">
                  {/* Shipping Information */}
                  <AccordionItem value="shipping-info" className="border border-border rounded-md overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-secondary/50">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-primary" />
                        <span className="font-medium">Shipping Information</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-0 pb-3">
                      <div className="pl-6 border-l-2 border-primary/30 space-y-2 pt-2">
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
                  <AccordionItem value="payment-info" className="border border-border rounded-md overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-secondary/50">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-primary" />
                        <span className="font-medium">Payment Information</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-0 pb-3">
                      <div className="pl-6 border-l-2 border-primary/30 space-y-2 pt-2">
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
                className="w-full" 
                size="lg" 
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                By placing your order, you agree to our <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and acknowledge our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          )}
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-secondary/30 rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            {/* Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map(item => {
                const product = getProductFromId(item.productId);
                if (!product) return null;
                
                return (
                  <div key={item.productId} className="flex gap-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
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
                        <p className="text-sm font-medium">{formatPrice(product.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Totals */}
            <div className="space-y-2 border-t border-border pt-4 mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(calculateSubtotal())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {calculateShipping(shippingMethod) === 0 ? (
                    <span className="text-primary">Free</span>
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
            
            {/* Total */}
            <div className="flex justify-between items-center border-t border-border pt-4 font-medium">
              <span>Total</span>
              <span className="text-lg">{formatPrice(calculateTotal(shippingMethod))}</span>
            </div>
            
            {/* Info */}
            <p className="text-xs text-muted-foreground mt-4 text-center">
              All prices shown in USD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
