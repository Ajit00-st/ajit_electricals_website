import Layout from "@/components/Layout";

export default function TermsOfUse() {
  return (
    <Layout>
      <section className="bg-muted py-12 md:py-16">
        <div className="container-custom max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-8">Terms of Use</h1>

          <div className="prose prose-sm max-w-none text-foreground space-y-6">
            <p>By accessing or using the website of Ajit Electricals, you agree to comply with the following Terms of Use.</p>

            <h2 className="font-heading text-xl font-semibold">1. Website Usage</h2>
            <p>This website is intended to provide information about our electrical control panels and services. Unauthorized use of this website may give rise to a claim for damages.</p>

            <h2 className="font-heading text-xl font-semibold">2. Intellectual Property</h2>
            <p>Contents on this website, including text, logos, and designs, is the property of Ajit Electricals and may not be copied or used without written permission.</p>

            <h2 className="font-heading text-xl font-semibold">3. Product Information</h2>
            <p>Product specifications, designs, and details shown on the website are for general information only and may change without prior notice.</p>

            <h2 className="font-heading text-xl font-semibold">4. Limitation of Liability</h2>
            <p>We shall not be liable for any loss or damage arising from the use of this website or reliance on the information provided.</p>

            <h2 className="font-heading text-xl font-semibold">5. External Links</h2>
            <p>Our website may include links to external websites. We do not have control over their content and are not responsible for them.</p>

            <h2 className="font-heading text-xl font-semibold">6. Governing Law</h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of India.</p>

            <h2 className="font-heading text-xl font-semibold">7. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Use at any time without prior notice.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
