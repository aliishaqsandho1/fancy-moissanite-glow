
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PrivacyPolicy() {
  const lastUpdated = "April 15, 2025";
  
  return (
    <div className="fancy-container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
          <p className="lead">
            At FANCY MOISSANITE, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
          </p>

          <p>
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
          </p>

          <Accordion type="single" collapsible className="w-full my-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Information We Collect</AccordionTrigger>
              <AccordionContent>
                <h3 className="text-base font-medium mt-4 mb-2">Personal Data</h3>
                <p>We may collect personally identifiable information, such as:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Mailing address</li>
                  <li>Phone number</li>
                  <li>Credit card information (processed securely through our payment processor)</li>
                </ul>

                <h3 className="text-base font-medium mt-4 mb-2">Usage Data</h3>
                <p>We may also collect information on how the website is accessed and used, including:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                  <li>IP addresses</li>
                  <li>Browser type</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Links clicked</li>
                  <li>Referring websites</li>
                </ul>

                <h3 className="text-base font-medium mt-4 mb-2">Cookies and Tracking Technologies</h3>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">How We Use Your Information</AccordionTrigger>
              <AccordionContent>
                <p>We use the information we collect in various ways, including to:</p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Process and complete transactions</li>
                  <li>Send administrative information, such as order confirmations and shipping updates</li>
                  <li>Respond to inquiries and customer service requests</li>
                  <li>Send marketing and promotional communications (with consent)</li>
                  <li>Improve our website, products, and customer service</li>
                  <li>Develop new products, services, and features</li>
                  <li>Prevent fraudulent transactions and monitor against theft</li>
                  <li>Analyze usage patterns and trends</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Disclosure of Your Information</AccordionTrigger>
              <AccordionContent>
                <p>We may share information we have collected in certain situations, including:</p>

                <h3 className="text-base font-medium mt-4 mb-2">Business Transfers</h3>
                <p>
                  If the company is involved in a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred as a business asset.
                </p>

                <h3 className="text-base font-medium mt-4 mb-2">Third-Party Service Providers</h3>
                <p>
                  We may share your information with third-party vendors, service providers, and other third parties who perform services on our behalf, such as:
                </p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                  <li>Payment processors</li>
                  <li>Shipping providers</li>
                  <li>Email service providers</li>
                  <li>Analytics services</li>
                  <li>Customer service providers</li>
                </ul>

                <h3 className="text-base font-medium mt-4 mb-2">Legal Requirements</h3>
                <p>
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court or government agency).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Security of Your Information</AccordionTrigger>
              <AccordionContent>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
                
                <p className="mt-4">
                  Our security practices include:
                </p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                  <li>SSL encryption for all transactions</li>
                  <li>PCI DSS compliance for payment processing</li>
                  <li>Regular security assessments</li>
                  <li>Employee training on privacy practices</li>
                  <li>Limited access to personal information</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">Your Choices and Rights</AccordionTrigger>
              <AccordionContent>
                <h3 className="text-base font-medium mt-4 mb-2">Account Information</h3>
                <p>
                  You may review, update, or delete the information in your account by logging into your account settings. If you wish to delete your account entirely, please contact us.
                </p>

                <h3 className="text-base font-medium mt-4 mb-2">Marketing Communications</h3>
                <p>
                  You can opt out of receiving promotional emails by following the unsubscribe instructions in each email or by contacting us directly.
                </p>

                <h3 className="text-base font-medium mt-4 mb-2">Cookies</h3>
                <p>
                  Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject cookies.
                </p>

                <h3 className="text-base font-medium mt-4 mb-2">Your Privacy Rights</h3>
                <p>
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-1 my-4">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to request deletion of your information</li>
                  <li>Right to object to processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p className="mt-4">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="mt-4">
            <p><strong>Email:</strong> privacy@fancymoissanite.com</p>
            <p><strong>Phone:</strong> (800) 555-1234</p>
            <p><strong>Address:</strong> 123 Luxury Lane, Suite 100, New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
}
