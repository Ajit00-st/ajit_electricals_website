import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
const clients = [
  { name: "Lloyds Steels Industries", industry: "Steel & Manufacturing", logo: "/clients/lloyds.png" },
  { name: "Rustomjee", industry: "Real Estate", logo: "/clients/rustomjee.png" },
  { name: "Palava", industry: "Smart City Development", logo: "/clients/palava.png" },
  { name: "Reliance Industries", industry: "Petrochemical", logo: "/clients/reliance.png" },
  { name: "L & T", industry: "Engineering & Construction", logo: "/clients/lt.png" },
  { name: "Cloud9", industry: "Bevarages", logo: "/clients/cloud9.png" },
  { name: "Indian Railways", industry: "Railway", logo: "/clients/indianrailways.png" },
  { name: "Thakur Infraprojects Pvt Ltd (TIPL)", industry: " Infrastructure Development", logo: "/clients/tipl.png" },
  { name: "büchiglasuster", industry: "Pilot Plant and Reactor Systems", logo: "/clients/büchiglasuster®.png" },
  { name: "Neo Enterprises", industry: "Fire Safety", logo: "/clients/neofire.png" },
  { name: "Platinum Group of Hospitals", industry: "Healthcare and Hospital", logo: "/clients/platinum.png" },
  { name: "Cidco", industry: "Industrial Development", logo: "/clients/cidco.png" },
  { name: "Lodha Group", industry: "Real Estate & Infrastructure", logo: "/clients/lodha.png" },
  { name: "Bisleri", industry: "Beverages", logo: "/clients/bisleri.png" },
];

export default function Clients() {
  return (
    <Layout>
      <SEOHead
        title="Our Clients - Trusted by Industry Leaders | Ajit Electricals Dombivli Thane Mumbai"
        description="Ajit Electricals is trusted by Reliance, L&T, Lodha, Bisleri & 150+ clients for electrical panels & automation across Maharashtra & India. View our client list."
        keywords="Ajit Electricals clients, panel manufacturer clients Mumbai, electrical panel supplier Thane, industrial automation clients Maharashtra"
        canonical="/clients"
      />
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Our Valued Clients
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/90">
            Trusted by leading corporations and industry leaders across India for reliable
            electrical and automation solutions.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="section-title">Companies We Partner With</h2>
            <p className="section-subtitle">
              Building long-term relationships with industry leaders through quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:border-accent hover:shadow-lg md:p-6"
              >
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-muted transition-all duration-300 group-hover:bg-primary/10 md:h-20 md:w-20">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain p-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('span')) {
                        const span = document.createElement('span');
                        span.className = 'font-heading text-xs font-bold text-primary text-center';
                        span.textContent = client.name;
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
                <h3 className="text-center text-sm font-semibold text-foreground md:text-base">
                  {client.name}
                </h3>
                <span className="mt-1 text-center text-xs text-muted-foreground">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>

          {/* And many more text */}
          <div className="mt-10 flex items-center justify-center gap-2 text-center">
            <span className="h-px w-12 bg-border" />
            <p className="text-base font-medium text-muted-foreground">
              ...and many more private & government clients across India
            </p>
            <span className="h-px w-12 bg-border" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-12">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg bg-card p-6 text-center shadow-sm">
              <p className="font-heading text-3xl font-bold text-primary md:text-4xl">100+</p>
              <p className="mt-1 text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="rounded-lg bg-card p-6 text-center shadow-sm">
              <p className="font-heading text-3xl font-bold text-primary md:text-4xl">150+</p>
              <p className="mt-1 text-sm text-muted-foreground">Active Clients</p>
            </div>
            <div className="rounded-lg bg-card p-6 text-center shadow-sm">
              <p className="font-heading text-3xl font-bold text-primary md:text-4xl">15+</p>
              <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="rounded-lg bg-card p-6 text-center shadow-sm">
              <p className="font-heading text-3xl font-bold text-primary md:text-4xl">12</p>
              <p className="mt-1 text-sm text-muted-foreground">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-border bg-muted/50 p-6 md:p-8">
            <p className="text-base italic text-muted-foreground md:text-lg">
              "Ajit Electricals has been our trusted partner for over 5 years. Their panels are
              reliable and their after-sales support is exceptional."
            </p>
          </div>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-cta text-cta-foreground hover:bg-cta/90"
            >
              <Link to="/contact">Join Our Client List</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}