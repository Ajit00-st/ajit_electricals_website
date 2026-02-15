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

            <h2 className="font-heading text-xl font-semibold">6. Client & Project References</h2>
            <p>Ajit Electricals has successfully executed projects for a wide range of reputed organizations across various sectors. The client names, logos, and project references displayed on this website represent projects where Ajit Electricals has provided services, expertise, or execution support.

              Certain projects may have been undertaken directly under contract with the respective client, while others may have been executed in collaboration with principal contractors, subcontractors, channel partners, or project management agencies, depending on the nature and structure of the assignment.

              The inclusion of any client name or logo reflects our involvement and contribution to the respective project and does not misrepresent our role in any manner.

              If any organization requires clarification regarding project association or logo usage, they are welcome to contact us for prompt assistance.</p>

            <h2 className="font-heading text-xl font-semibold">7. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Use at any time without prior notice.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}


