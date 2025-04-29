
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger
} from "@/components/ui/tabs";
import { useEffect } from "react";

// Policy data
const policies = {
  shipping: {
    title: "Shipping Policy",
    sections: [
      {
        title: "Processing Time",
        content: "In-stock items typically process within 1-2 business days. Custom and made-to-order pieces require 2-4 weeks production time before shipping, as noted on product pages."
      },
      {
        title: "Shipping Methods",
        content: "We offer several shipping options:\n\n• Standard Shipping (3-5 business days): Free on all orders over $150\n• Expedited Shipping (2 business days): $15\n• Overnight Shipping (1 business day): $25\n\nAll orders include tracking information and insurance up to the full value of your purchase."
      },
      {
        title: "International Shipping",
        content: "We ship to most countries worldwide. International orders typically arrive within 7-14 business days, depending on the destination and customs processing. Please note that any customs fees, import duties, or taxes are the responsibility of the recipient and are not included in our shipping charges."
      },
      {
        title: "Shipping Restrictions",
        content: "Due to shipping regulations, we cannot ship to P.O. boxes or APO/FPO addresses. A physical street address is required for all deliveries."
      },
      {
        title: "Order Tracking",
        content: "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your package by logging into your account on our website."
      }
    ]
  },
  returns: {
    title: "Returns & Exchanges",
    sections: [
      {
        title: "Return Policy",
        content: "We offer a 30-day return policy for unworn items in their original condition with all packaging and documentation. Custom-designed pieces and engraved items are not eligible for return unless there is a manufacturing defect."
      },
      {
        title: "How to Initiate a Return",
        content: "To initiate a return or exchange, please contact our customer service team at returns@fancymoissanite.com with your order number and reason for return. We'll provide you with a return authorization number and detailed instructions for sending your item back to us."
      },
      {
        title: "Refund Process",
        content: "After we receive and inspect your return, we'll process your refund to the original payment method within 5 business days. Please allow an additional 2-7 business days for the refund to appear on your account, depending on your financial institution."
      },
      {
        title: "Exchanges",
        content: "If you wish to exchange your item for a different size or metal type, please contact our customer service team. Exchanges are subject to availability. Any price difference will be charged or refunded accordingly."
      },
      {
        title: "Damaged or Incorrect Items",
        content: "If you receive a damaged, defective, or incorrect item, please contact us immediately at support@fancymoissanite.com. We'll arrange for a return and replacement at our expense."
      }
    ]
  },
  warranty: {
    title: "Warranty Information",
    sections: [
      {
        title: "Lifetime Warranty",
        content: "All FANCY MOISSANITE jewelry comes with a lifetime warranty against manufacturing defects. This includes prong repair, stone tightening, and rhodium plating for white gold pieces."
      },
      {
        title: "What's Covered",
        content: "Our warranty covers:\n\n• Prong repair and tightening\n• Stone replacement if it falls out due to setting defects\n• Repair of broken clasps or chains due to manufacturing defects\n• Re-polishing and rhodium plating (for white gold items)"
      },
      {
        title: "What's Not Covered",
        content: "The following are not covered under our warranty:\n\n• Normal wear and tear\n• Accidental damage\n• Loss or theft\n• Damage caused by improper care or use\n• Damage caused by third-party jewelers\n• Natural discoloration of silver or gold over time"
      },
      {
        title: "How to Use Your Warranty",
        content: "To use your warranty, please contact our customer service team at warranty@fancymoissanite.com with your order number and a description of the issue. We'll provide instructions for sending your piece to our service center. Shipping to our service center for warranty work is at the customer's expense, but return shipping is covered by us."
      },
      {
        title: "Recommended Care",
        content: "To maintain your jewelry and ensure warranty coverage, we recommend:\n\n• Regular cleaning with mild soap and warm water\n• Avoiding exposure to harsh chemicals, including chlorine and cleaning products\n• Removing jewelry before swimming, showering, or engaging in physical activities\n• Having your jewelry inspected by us every 12-18 months"
      }
    ]
  }
};

export default function Policies() {
  const { type = "shipping" } = useParams<{ type?: string }>();
  const validTypes = ["shipping", "returns", "warranty"];
  const currentType = validTypes.includes(type) ? type : "shipping";
  
  useEffect(() => {
    // Scroll to top when policy type changes
    window.scrollTo(0, 0);
  }, [type]);
  
  return (
    <div className="fancy-container py-12">
      <h1 className="text-3xl font-bold mb-4">Policies</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Learn about our shipping, returns, and warranty policies to ensure a seamless shopping experience.
      </p>
      
      <Tabs defaultValue={currentType} className="mb-8">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger 
            value="shipping" 
            asChild
          >
            <Link to="/policies/shipping">Shipping</Link>
          </TabsTrigger>
          <TabsTrigger 
            value="returns"
            asChild
          >
            <Link to="/policies/returns">Returns & Exchanges</Link>
          </TabsTrigger>
          <TabsTrigger 
            value="warranty"
            asChild
          >
            <Link to="/policies/warranty">Warranty</Link>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="shipping" className="space-y-8">
          <h2 className="text-2xl font-semibold">{policies.shipping.title}</h2>
          {policies.shipping.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium mb-3">{section.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="returns" className="space-y-8">
          <h2 className="text-2xl font-semibold">{policies.returns.title}</h2>
          {policies.returns.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium mb-3">{section.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="warranty" className="space-y-8">
          <h2 className="text-2xl font-semibold">{policies.warranty.title}</h2>
          {policies.warranty.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium mb-3">{section.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </TabsContent>
      </Tabs>
      
      {/* Contact CTA */}
      <div className="bg-secondary/30 p-8 rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Have Questions About Our Policies?</h2>
        <p className="text-muted-foreground mb-6">
          Our customer support team is available to assist you with any questions or concerns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:support@fancymoissanite.com">Email Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
