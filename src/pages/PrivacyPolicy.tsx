import Layout from "@/components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="bg-muted py-12 md:py-16">
        <div className="container-custom max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: February 7, 2025</p>

          <div className="prose prose-sm max-w-none text-foreground space-y-6">
            <p>Welcome to Ajit Electricals. We respect your privacy and are committed to protecting any information you share with us through our website.</p>

            <h2 className="font-heading text-xl font-semibold">1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email</li>
              <li>Phone</li>
            </ul>
            <p>This information is collected when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fill out contact or inquiry forms</li>
              <li>Communicate with us via email or phone</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to inquiries and provide quotations</li>
              <li>Improve our products and services</li>
              <li>Communicate regarding projects or business requirements</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold">3. Data Protection</h2>
            <p>We take reasonable steps to protect your personal information from unauthorized access, misuse, or disclosure.</p>

            <h2 className="font-heading text-xl font-semibold">4. Sharing of Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. Information may be shared only if required by law.</p>

            <h2 className="font-heading text-xl font-semibold">5. Cookies</h2>
            <p>Our website may use cookies to improve user experience. You can choose to disable cookies through your browser settings.</p>

            <h2 className="font-heading text-xl font-semibold">6. Third-Party Links</h2>
            <p>Our website may contain links to other websites. We are not responsible for the privacy practices of those sites.</p>

            <h2 className="font-heading text-xl font-semibold">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>

            <h2 className="font-heading text-xl font-semibold">8. Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
            <p>📧 Email: <a href="mailto:sales@ajitelectricalsindia.in" className="text-accent hover:underline">sales@ajitelectricalsindia.in</a></p>
            <p>📞 Phone: <a href="tel:+919967938370" className="text-accent hover:underline">+91 99679 38370</a></p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
