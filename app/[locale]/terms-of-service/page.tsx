import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Have A Seat Labubu",
  description: "Terms of service and usage conditions for Have A Seat Labubu.",
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-base">
        <p className="text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
          <p>
            By accessing or using Have A Seat Labubu at haveaseatlabubu.cc ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Description of Service</h2>
          <p>
            Have A Seat Labubu is a lifestyle brand full of artistic atmosphere, dedicated to bringing unique artistic experiences to people. The Service includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Artistic product design and manufacturing</li>
            <li>Limited edition collections</li>
            <li>Custom series products</li>
            <li>Global shipping and delivery</li>
            <li>Secure payment processing</li>
            <li>Customer support and after-sales service</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
          <p>
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintaining the confidentiality of your account and password</li>
            <li>Restricting access to your computer and account</li>
            <li>All activities that occur under your account or password</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Service Usage and Limitations</h2>
          <h3 className="text-xl font-medium">4.1 Acceptable Use</h3>
          <p>You agree not to use the Service for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Purchasing products for resale without authorization</li>
            <li>Using the service for any illegal purposes</li>
            <li>Attempting to circumvent any service limitations or restrictions</li>
            <li>Reverse engineering or attempting to extract the source code of our software</li>
          </ul>

          <h3 className="text-xl font-medium mt-4">4.2 Service Features and Process</h3>
          <p>Our service operates in three simple steps:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browse Products: Explore our collections and find your favorite items</li>
            <li>Place Order: Select products and complete the checkout process</li>
            <li>Enjoy: Receive your order and enjoy the artistic experience</li>
          </ul>

          <h3 className="text-xl font-medium mt-4">4.3 Service Limitations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Product availability may vary based on stock levels</li>
            <li>Service availability may be affected by maintenance or technical issues</li>
            <li>Shipping times may vary based on location and customs clearance</li>
            <li>Some products may be limited to specific regions</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Payments and Refunds</h2>
          <p>
            Some aspects of the Service may be provided for a fee. You agree to pay all fees associated with your use of the Service.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All prices are in the currency specified on the website</li>
            <li>All fees are exclusive of taxes unless stated otherwise</li>
            <li>Payments are processed securely through our payment providers</li>
            <li>Refunds may be provided at our discretion for product issues</li>
            <li>Pre-orders may require full payment at the time of order</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Intellectual Property Rights</h2>
          <p>
            All product designs and artwork are protected by intellectual property rights. By using our Service, you agree to respect our intellectual property rights.
          </p>
          <p>
            Our brand name, logo, and designs are trademarks of Have A Seat Labubu. Unauthorized reproduction or distribution of our products is prohibited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Shipping and Delivery</h2>
          <p>
            We offer worldwide shipping to most countries. Please note:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Shipping times may vary based on location and customs clearance</li>
            <li>Some products may be restricted in certain regions</li>
            <li>Customers are responsible for any import duties or taxes</li>
            <li>We provide tracking information for all shipments</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Disclaimer of Warranties</h2>
          <p>
            While we strive to provide high-quality products and services, the Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Service will be uninterrupted or error-free</li>
            <li>Products will meet your specific requirements</li>
            <li>Any errors in the Service will be corrected</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this site and updating the "Last updated" date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">11. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            Email: support@haveaseatlabubu.cc
          </p>
          <p>
            Website: haveaseatlabubu.cc
          </p>
        </section>
      </div>
    </div>
  );
} 