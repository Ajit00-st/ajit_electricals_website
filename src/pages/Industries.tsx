import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { industriesKeywords } from "@/seo/keywords";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

// Industry images
import manufacturingImg from "@/assets/industries/manufacturing.jpg";
import waterTreatmentImg from "@/assets/industries/water-treatment.jpg";
import pharmaceuticalImg from "@/assets/industries/pharmaceutical.jpg";
import fmcgImg from "@/assets/industries/fmcg.jpg";
import hotelsImg from "@/assets/industries/hotels.jpg";
import hospitalsImg from "@/assets/industries/hospitals.jpg";
import steelImg from "@/assets/industries/steel.jpg";
import textileImg from "@/assets/industries/textile.jpg";

import foodBeverageImg from "@/assets/industries/food-beverage.jpg";
import hvacImg from "@/assets/industries/hvac.jpg";
import infrastructureImg from "@/assets/industries/infrastructure.jpg";
import railwayImg from "@/assets/industries/railway.jpg";

const industries = [
  {
    name: "Manufacturing",
    image: manufacturingImg,
    description: "Complete electrical and automation panels for manufacturing plants including assembly lines, packaging machines, and process equipment.",
  },
  {
    name: "Water Treatment (STP/WTP/ETP)",
    image: waterTreatmentImg,
    description: "Specialized control systems for sewage treatment plants, water treatment facilities, and effluent treatment with SCADA integration.",
  },
  {
    name: "Pharmaceutical",
    image: pharmaceuticalImg,
    description: "GMP-compliant control panels and clean room automation with 21 CFR Part 11 compliance for pharma manufacturing.",
  },
  {
    name: "FMCG",
    image: fmcgImg,
    description: "High-speed production line automation, packaging systems, and quality control integration for fast-moving consumer goods.",
  },
  {
    name: "Hotels & Hospitality",
    image: hotelsImg,
    description: "Building management systems, HVAC automation, lighting control, and energy management for hotels and resorts.",
  },
  {
    name: "Healthcare & Hospitals",
    image: hospitalsImg,
    description: "Critical power systems, medical gas monitoring, HVAC control, and hospital infrastructure automation.",
  },
  {
    name: "Steel & Metal",
    image: steelImg,
    description: "Heavy-duty panels for steel plants, rolling mills, furnace control, and metallurgical process automation.",
  },
  {
    name: "Textile",
    image: textileImg,
    description: "Control panels for spinning, weaving, dyeing machines, and complete textile plant automation solutions.",
  },
  {
    name: "Food & Beverage",
    image: foodBeverageImg,
    description: "Hygienic control panels, process automation, batch control, and HACCP-compliant solutions for food processing.",
  },
  {
    name: "HVAC",
    image: hvacImg,
    description: "Chiller plant automation, AHU control, BMS integration, and energy-efficient HVAC control systems.",
  },
  {
    name: "Infrastructure",
    image: infrastructureImg,
    description: "Smart building automation, power distribution, street lighting control, and infrastructure management systems.",
  },
  {
    name: "Railway",
    image: railwayImg,
    description: "Integrated electrical control panel solutions for railway electrification, traction systems, signaling networks, station utilities, and railway infrastructure automation.",
  },
];

export default function Industries() {
  return (
    <Layout>
      <SEOHead
        title="Industries We Serve - Industrial Automation & Panel Solutions | Ajit Electricals Dombivli Thane Mumbai"
        description="Ajit Electricals provides electrical panels & automation for Manufacturing, Water Treatment, Pharma, FMCG, Hotels, Hospitals, Steel, Textile, Food & Beverage, HVAC, Infrastructure & Railway across Maharashtra & India."
        keywords={industriesKeywords}
        canonical="/industries"
      />
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            Industries We Serve
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-secondary/90">
            Delivering tailored electrical and automation solutions across diverse industry verticals with domain expertise and proven track record.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="group card-hover overflow-hidden border-border bg-card"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                    {industry.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {industry.description}
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="h-auto p-0 text-accent"
                  >
                    <Link to="/contact">Get Industry-Specific Quote →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
