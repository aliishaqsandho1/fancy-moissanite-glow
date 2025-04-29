
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingBag, Mail, ChevronRight } from "lucide-react";

export default function ThankYou() {
  // Generate a random order number
  const orderNumber = "FM-" + Math.floor(Math.random() * 100000);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="fancy-container py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-primary" size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
          <p className="text-lg text-muted-foreground">
            Your order has been received and is now being processed.
          </p>
        </div>
        
        <div className="bg-secondary/30 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center">Order Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-background p-4 rounded-md">
              <p className="text-sm text-muted-foreground mb-1">Order Number</p>
              <p className="font-semibold">{orderNumber}</p>
            </div>
            <div className="bg-background p-4 rounded-md">
              <p className="text-sm text-muted-foreground mb-1">Date</p>
              <p className="font-semibold">{new Date().toLocaleDateString()}</p>
            </div>
            <div className="bg-background p-4 rounded-md">
              <p className="text-sm text-muted-foreground mb-1">Total</p>
              <p className="font-semibold">$2,398.00</p>
            </div>
            <div className="bg-background p-4 rounded-md">
              <p className="text-sm text-muted-foreground mb-1">Payment Method</p>
              <p className="font-semibold">Credit Card</p>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary/30 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-4">What Happens Next?</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-medium">1</span>
              </div>
              <div>
                <p className="font-medium">Order Confirmation</p>
                <p className="text-muted-foreground">
                  You'll receive an email confirmation with your order details shortly.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-medium">2</span>
              </div>
              <div>
                <p className="font-medium">Processing</p>
                <p className="text-muted-foreground">
                  Your order will be prepared and quality checked by our team.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-medium">3</span>
              </div>
              <div>
                <p className="font-medium">Shipping</p>
                <p className="text-muted-foreground">
                  You'll receive a shipping confirmation email with tracking details once your order is on its way.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-medium">4</span>
              </div>
              <div>
                <p className="font-medium">Delivery</p>
                <p className="text-muted-foreground">
                  Your beautiful jewelry will be delivered to your doorstep.
                </p>
              </div>
            </li>
          </ol>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-secondary/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={20} className="text-primary" />
              <h3 className="font-semibold">Check Your Email</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              We've sent a receipt and order details to the email address you provided.
            </p>
            <p className="text-sm">
              If you don't see the email in your inbox, please check your spam folder.
            </p>
          </div>
          
          <div className="bg-secondary/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag size={20} className="text-primary" />
              <h3 className="font-semibold">Need Help?</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have any questions about your order, our customer support team is here to help.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/contact" className="flex items-center justify-center gap-2">
                Contact Support <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
