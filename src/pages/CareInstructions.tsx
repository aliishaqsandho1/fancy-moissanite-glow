
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CareInstructions() {
  return (
    <div className="fancy-container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Care Instructions</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Proper care and maintenance will ensure that your FANCY MOISSANITE jewelry continues to shine beautifully for years to come. Follow these guidelines to keep your pieces in pristine condition.
        </p>

        <div className="grid gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Daily Care</h2>
            <p>
              Moissanite is one of the hardest gemstones, second only to diamonds on the Mohs scale of hardness. This makes it highly resistant to scratches, but proper care is still essential to maintain its brilliance.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Gentle Cleaning at Home</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mix mild dish soap with warm water to create a solution.</li>
                    <li>Soak your jewelry for 20-30 minutes.</li>
                    <li>Gently brush with a soft-bristled toothbrush, paying attention to the underside of the stones where dirt accumulates.</li>
                    <li>Rinse thoroughly with clean water.</li>
                    <li>Pat dry with a lint-free cloth or allow to air dry.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Storage Recommendations</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Store each piece separately to prevent scratches.</li>
                    <li>Use the original box or a jewelry box with separate compartments.</li>
                    <li>For rings, consider a ring holder or individual pouches.</li>
                    <li>Keep in a cool, dry place away from direct sunlight.</li>
                    <li>For long-term storage, place in an airtight container with anti-tarnish strips.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>When to Remove Your Jewelry</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Though moissanite is durable, remove your jewelry when:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Applying lotions, perfumes, or cosmetics</li>
                    <li>Showering or swimming</li>
                    <li>Cleaning with harsh chemicals</li>
                    <li>Engaging in physical activities like sports or gardening</li>
                    <li>Sleeping, as this can cause wear on prongs</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Professional Maintenance</h2>
            <p>
              While regular home care is essential, professional maintenance ensures the longevity of your fine jewelry.
            </p>

            <div className="bg-secondary/20 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-medium">We recommend professional servicing:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Every 6-12 months for regularly worn pieces</li>
                <li>When you notice loose stones or damage to settings</li>
                <li>If prongs become bent or worn</li>
                <li>When the piece loses its luster despite regular cleaning</li>
              </ul>
              <p>Our professional service includes thorough cleaning, polishing, prong inspection, and repairing any damages.</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">Book a Professional Cleaning</h3>
              <p className="mb-4">
                Schedule an appointment for professional cleaning and inspection at one of our store locations or by mail-in service.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-primary rounded-md text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  Find a Store
                </a>
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors">
                  Mail-in Service
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Metal-Specific Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">White Gold</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>May require rhodium plating every 12-18 months</li>
                  <li>Clean with mild soap and water</li>
                  <li>Use a jewelry polishing cloth designed for gold</li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Yellow & Rose Gold</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use a gold-specific jewelry cleaning solution</li>
                  <li>Avoid harsh chemicals that can discolor the metal</li>
                  <li>Polish with a soft cloth to maintain shine</li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Platinum</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Develops a natural patina over time</li>
                  <li>Professional polishing can restore original luster</li>
                  <li>Most durable of precious metals</li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Sterling Silver</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use a silver polishing cloth to prevent tarnish</li>
                  <li>Store in anti-tarnish bags</li>
                  <li>Clean with silver-specific solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
