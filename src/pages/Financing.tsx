
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle, CreditCard, AlertCircle, Calculator, Shield, ArrowRight } from 'lucide-react';

const Financing = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="fancy-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Flexible Financing Options</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Make your dream jewelry a reality with our range of financing solutions designed to fit your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="gold-glass-panel">
            <CardContent className="pt-6 px-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Fancy Pay</h2>
              <div className="gold-accent mb-4">
                <p className="font-medium">0% APR for 12 months</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Quick application process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>No hidden fees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Equal monthly payments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Available for purchases over $1,000</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-6 pb-6">
              <Button className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>

          <Card className="gold-glass-panel">
            <CardContent className="pt-6 px-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Flexible Financing</h2>
              <div className="gold-accent mb-4">
                <p className="font-medium">Plans up to 36 months</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Competitive interest rates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Choose your term length</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>No prepayment penalties</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Available for all purchase amounts</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-6 pb-6">
              <Button className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>

          <Card className="gold-glass-panel">
            <CardContent className="pt-6 px-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Layaway Program</h2>
              <div className="gold-accent mb-4">
                <p className="font-medium">No credit check required</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>25% initial deposit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>3 to 6 month plans available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>No interest charged</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Item reserved for you</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-6 pb-6">
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="futuristic-panel p-6 md:p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-bold mb-2">Choose Your Plan</h3>
              <p className="text-sm text-muted-foreground">
                Select the financing option that best meets your needs and budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-bold mb-2">Apply Online</h3>
              <p className="text-sm text-muted-foreground">
                Complete our simple application form in minutes. Quick decisions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-bold mb-2">Get Approved</h3>
              <p className="text-sm text-muted-foreground">
                Receive your approval notification and credit limit via email.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-bold mb-2">Make Your Purchase</h3>
              <p className="text-sm text-muted-foreground">
                Complete your purchase and enjoy your new jewelry while paying over time.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="gold-glass-panel p-6 md:p-8">
            <div className="flex items-start mb-6">
              <div className="mr-4">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Payment Calculator</h2>
                <p className="text-muted-foreground">
                  Estimate your monthly payments based on your purchase amount, term length, and chosen financing plan.
                </p>
              </div>
            </div>
            <Button className="w-full" variant="outline">Use Payment Calculator</Button>
          </div>
          
          <div className="gold-glass-panel p-6 md:p-8">
            <div className="flex items-start mb-6">
              <div className="mr-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Secure Application</h2>
                <p className="text-muted-foreground">
                  Your information is protected with bank-level security. Applications are encrypted and processed securely.
                </p>
              </div>
            </div>
            <Button className="w-full" variant="outline">View Security Practices</Button>
          </div>
        </div>

        <div className="futuristic-panel p-6 md:p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <h3 className="font-bold mb-2">What credit score do I need to qualify?</h3>
              <p className="text-muted-foreground">
                For our primary financing options, a credit score of 640 or higher is typically required. Our layaway program has no credit requirements.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How long does approval take?</h3>
              <p className="text-muted-foreground">
                Most applications receive an immediate decision. In some cases, additional verification may be required, which can take 1-2 business days.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I pay off my financing early?</h3>
              <p className="text-muted-foreground">
                Yes, all of our financing options allow for early payoff with no prepayment penalties.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What happens if I miss a payment?</h3>
              <p className="text-muted-foreground">
                Late payment fees may apply, and promotional rates may be forfeited. Please contact our customer service team immediately if you anticipate payment difficulties.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Is there a minimum purchase for financing?</h3>
              <p className="text-muted-foreground">
                Our 0% APR option requires a minimum purchase of $1,000. Other financing options are available for purchases of any amount.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I combine financing with discounts or promotions?</h3>
              <p className="text-muted-foreground">
                In most cases, yes. However, some special promotions may exclude financing options. See specific offer details for any restrictions.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block gold-border p-8 rounded-xl">
            <AlertCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4">Need Help Deciding?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our jewelry consultants can help explain financing options and work with you to find the best solution for your budget and needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button>Contact Us</Button>
              <Link to="/faq">
                <Button variant="outline" className="group">
                  View More FAQs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financing;
