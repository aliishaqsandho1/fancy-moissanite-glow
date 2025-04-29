
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Warranty() {
  return (
    <div className="fancy-container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Warranty Information</h1>
        <p className="text-lg text-muted-foreground mb-8">
          At FANCY MOISSANITE, we stand behind the quality and craftsmanship of our products with comprehensive warranty coverage.
        </p>

        <div className="grid gap-12">
          <Card className="p-6 border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">Lifetime Warranty</h2>
            <p className="mb-6">
              We are proud to offer a lifetime warranty on all our moissanite gemstones. This warranty covers:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Chipping, cracking, or breaking under normal wear conditions</li>
              <li>Loss of brilliance or color changes not caused by damage</li>
              <li>Manufacturing defects in the stone</li>
            </ul>
            <p className="text-sm text-muted-foreground italic">
              *Warranty is valid for the original purchaser with proof of purchase and registration.
            </p>
          </Card>

          <Card className="p-6 border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">Craftsmanship Warranty</h2>
            <p className="mb-4">
              Our craftsmanship warranty covers the setting and metalwork of your jewelry for a period of 5 years from the date of purchase.
            </p>
            <div className="bg-secondary/20 rounded-lg p-4 mb-6">
              <h3 className="font-medium mb-2">Coverage includes:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prong repairs and tightening</li>
                <li>Stone resetting due to manufacturing defects</li>
                <li>Rhodium plating for white gold (first application)</li>
                <li>Repair of defective clasps and closures</li>
                <li>Repair of defective soldering</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              Regular maintenance and inspections are recommended every 6 months to maintain warranty validity.
            </p>
          </Card>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What's Not Covered</h2>
            <p className="mb-4">
              Our warranties do not cover damage resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Normal wear and tear beyond manufacturing defects</li>
              <li>Accidental damage or impact</li>
              <li>Improper use, care, or storage</li>
              <li>Repairs or modifications performed by unauthorized parties</li>
              <li>Theft or loss</li>
              <li>Environmental damage (chemicals, extreme heat)</li>
              <li>Resizing by third parties</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Making a Warranty Claim</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">Step 1: Contact Customer Service</h3>
                <p>
                  Contact our customer service team via email or phone to initiate the warranty claim process. You'll need to provide your proof of purchase and warranty registration information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Step 2: Evaluation</h3>
                <p>
                  Once received, our jewelry experts will evaluate your piece to determine if the issue is covered under warranty. This process typically takes 3-5 business days.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Step 3: Repair or Replacement</h3>
                <p>
                  If your claim is approved, we will repair or replace the item as appropriate. Repairs typically take 2-3 weeks, depending on the complexity.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Extended Protection Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-medium mb-3">Premium Care Plan</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Annual professional cleaning</li>
                  <li>Unlimited prong tightening</li>
                  <li>50% off repair services not covered by warranty</li>
                  <li>Complimentary ring sizing (once per year)</li>
                </ul>
                <div className="font-semibold text-xl mb-4">$99 per year</div>
                <Button className="w-full">Learn More</Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-medium mb-3">Jewelry Insurance</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Coverage for loss, theft, and damage</li>
                  <li>No deductible on claims</li>
                  <li>Worldwide coverage</li>
                  <li>Replacement at full retail value</li>
                </ul>
                <div className="font-semibold text-xl mb-4">Starting at $5/month</div>
                <Button className="w-full">Get Quote</Button>
              </Card>
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Register Your Warranty</h2>
            <p className="mb-6">
              Complete your warranty registration to activate your coverage and receive special care instructions.
            </p>
            <Button size="lg">Register Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
