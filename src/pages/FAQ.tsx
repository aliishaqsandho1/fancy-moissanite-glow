
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

// FAQ data
const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    questions: [
      {
        id: "q1",
        question: "What is moissanite?",
        answer: "Moissanite is a lab-created gemstone that was first discovered in 1893 by Nobel Prize-winning scientist Dr. Henri Moissan. While examining rock samples from a meteor crater, Dr. Moissan discovered microscopic particles of SiC that were later named 'moissanite' in his honor. Today's moissanite is created in controlled laboratory environments using advanced technological processes to ensure the highest quality and brilliance."
      },
      {
        id: "q2",
        question: "How does moissanite compare to diamonds?",
        answer: "Moissanite actually outperforms diamonds in several ways. It has a higher refractive index (2.65 vs. 2.42 for diamonds), giving it more brilliance and fire. It's nearly as hard as a diamond (9.25 vs. 10 on the Mohs scale), making it extremely durable for everyday wear. Visually, only trained gemologists can distinguish between high-quality moissanite and diamonds without specialized equipment. And moissanite is significantly more affordable and ethically sourced compared to mined diamonds."
      },
      {
        id: "q3",
        question: "Is moissanite a 'fake diamond'?",
        answer: "No, moissanite is not a diamond simulant or a 'fake diamond.' It's its own unique gemstone with distinct properties. While it shares visual characteristics with diamonds, moissanite has higher brilliance, different crystal structure, and unique optical properties. We believe in celebrating moissanite for what it is—an extraordinary gemstone in its own right."
      }
    ]
  },
  {
    id: "orders",
    name: "Orders & Shipping",
    questions: [
      {
        id: "q4",
        question: "How long will it take to receive my order?",
        answer: "Standard shipping typically takes 3-5 business days within the continental United States. International shipping times vary by location, typically taking 7-14 business days. Custom pieces have their own timeline, which will be discussed during the consultation process. Rush shipping options are available at checkout for an additional fee."
      },
      {
        id: "q5",
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. International orders may be subject to import duties, taxes, and customs processing fees depending on your country's regulations. These fees are the responsibility of the recipient and are not included in our shipping charges."
      },
      {
        id: "q6",
        question: "Can I track my order?",
        answer: "Yes, once your order ships, you'll receive a confirmation email with tracking information. You can also log into your account on our website to track your package's progress."
      }
    ]
  },
  {
    id: "returns",
    name: "Returns & Warranties",
    questions: [
      {
        id: "q7",
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for unworn items in their original condition with all packaging. Custom-designed pieces are not eligible for returns but may be covered under our warranty for manufacturing defects. Please contact our customer service team before initiating a return."
      },
      {
        id: "q8",
        question: "Do your products come with a warranty?",
        answer: "Yes, all of our jewelry comes with a lifetime warranty against manufacturing defects. This covers issues like prong repair, stone tightening, and rhodium plating (for white gold). Normal wear and tear, accidental damage, or loss are not covered under the warranty."
      },
      {
        id: "q9",
        question: "What if my ring size is wrong?",
        answer: "We offer one complimentary ring resizing within 60 days of purchase. Beyond that period, resizing services are available for a nominal fee. Some ring designs, particularly eternity bands, cannot be resized due to their construction. These will be noted in the product description."
      }
    ]
  },
  {
    id: "care",
    name: "Product Care",
    questions: [
      {
        id: "q10",
        question: "How should I clean my moissanite jewelry?",
        answer: "Clean your moissanite jewelry with mild dish soap and warm water using a soft toothbrush to gently scrub around the setting and stone. Rinse thoroughly and pat dry with a lint-free cloth. We recommend cleaning your jewelry every 2-4 weeks to maintain its brilliance. Avoid ultrasonic cleaners unless specifically recommended for your piece."
      },
      {
        id: "q11",
        question: "Will moissanite scratch or lose its brilliance over time?",
        answer: "Moissanite is extremely durable with a hardness of 9.25 on the Mohs scale (diamonds are 10), making it highly resistant to scratching. Unlike many gemstones, moissanite will not cloud or lose its brilliance over time. With proper care, your moissanite jewelry will maintain its spectacular sparkle for generations."
      },
      {
        id: "q12",
        question: "When should I remove my jewelry?",
        answer: "While moissanite is very durable, we recommend removing your jewelry during activities like heavy lifting, swimming in chlorinated pools, applying lotions or perfumes, and household cleaning with harsh chemicals. This helps prevent potential damage to the setting and maintain the metal's finish."
      }
    ]
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredCategories = activeCategory === "all" 
    ? faqCategories 
    : faqCategories.filter(category => category.id === activeCategory);
    
  const filteredQuestions = filteredCategories.flatMap(category => 
    category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  
  return (
    <div className="fancy-container py-12">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Find answers to common questions about our products, shipping, returns, and more.
      </p>
      
      {/* Search */}
      <div className="relative max-w-2xl mx-auto mb-12">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search questions..."
          className="pl-10 bg-background"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <Button
          variant={activeCategory === "all" ? "default" : "outline"}
          onClick={() => setActiveCategory("all")}
        >
          All Questions
        </Button>
        
        {faqCategories.map(category => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      
      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto">
        {filteredQuestions.length > 0 ? (
          <Accordion type="single" collapsible className="mb-8">
            {filteredQuestions.map((question) => (
              <AccordionItem key={question.id} value={question.id}>
                <AccordionTrigger className="text-left">
                  {question.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{question.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="text-center py-12 bg-secondary/30 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No Results Found</h3>
            <p className="text-muted-foreground mb-4">
              We couldn't find any FAQ matching your search query.
            </p>
            <Button onClick={() => {setSearchQuery(""); setActiveCategory("all");}}>
              Reset Search
            </Button>
          </div>
        )}
      </div>
      
      {/* Contact CTA */}
      <div className="text-center bg-secondary/30 p-8 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          Our customer support team is here to help with any additional questions you may have.
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
