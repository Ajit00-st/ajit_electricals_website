import { CheckCircle, Target, Award, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { aboutKeywords } from "@/seo/keywords";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

import heroScada from "@/assets/hero-scada.jpg";
import heroPanels from "@/assets/hero-panels.jpg";

const scopeItems = [
  "Design & Engineering of Control Panels",
  "Panel Manufacturing & Assembly",
  "PLC Programming & Configuration",
  "SCADA Development & Integration",
  "HMI Design & Development",
  "Factory Acceptance Testing (FAT)",
  "Site Installation & Commissioning",
  "After-Sales Support & AMC",
];

const qualityPoints = [
  "ISO 9001:2015 Certified Manufacturing",
  "Rigorous quality checks at every stage",
  "Traceability of components",
  "Comprehensive documentation",
  "CE Marking compliance",
];

export default function About() {
  return (
    <Layout>
      <SEOHead
        title="About Ajit Electricals - ISO 9001:2015 Certified Panel Manufacturer in Dombivli Thane Mumbai Maharashtra"
        description="Ajit Electricals is an ISO 9001:2015 certified electrical control panel manufacturer in Dombivli, Thane. Years of experience manufacturing LT, MCC, PCC, VFD panels & PLC/SCADA automation for industries across Maharashtra & India."
        keywords={aboutKeywords}
        canonical="/about"
      />
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            About Ajit Electricals
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-secondary/90">
            Your trusted partner for industrial electrical solutions, automation, and control panel manufacturing
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
                Company Overview
              </h2>
              <p className="mb-4 text-muted-foreground">
                Ajit Electricals is a manufacturer of industrial electrical control panels and automation solutions based in Dombivli, India. With years of experience in the electrical industry, we have established ourselves as a reliable partner for businesses seeking high-quality, customized electrical solutions.
              </p>
              <p className="mb-4 text-muted-foreground">
                Our state-of-the-art manufacturing facility is equipped with modern machinery and staffed by skilled engineers and technicians who are committed to delivering excellence in every project. We specialize in designing and manufacturing a wide range of electrical panels including LT Panels, MCC, PCC, APFC, VFD Panels, and automation solutions.
              </p>
              <p className="text-muted-foreground">
                We pride ourselves on our customer-centric approach, technical expertise, and commitment to quality. Our team works closely with clients to understand their unique requirements and deliver solutions that exceed expectations.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={heroPanels}
                alt="Manufacturing facility"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 overflow-hidden rounded-lg shadow-xl lg:order-1">
              <img
                src={heroScada}
                alt="Control panel manufacturing"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
                Scope of Work
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {scopeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-industrial-green" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Standards */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-industrial-green">
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Quality & Standards
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We are committed to maintaining the highest quality standards in all our products and services
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {qualityPoints.map((point, index) => (
              <Card key={index} className="border-border bg-muted">
                <CardContent className="flex items-center gap-3 p-4">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-industrial-green" />
                  <span className="font-medium text-foreground">{point}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
            <MapPin className="h-6 w-6 text-accent-foreground" />
          </div>
          <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Service Area
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We serve clients across <strong>India</strong> and have successfully executed projects in <strong>international markets</strong>. Our team is equipped to handle projects of any scale, from local installations to large export orders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {["Dombivli", "Thane", "Mumbai", "Navi Mumbai", "Kalyan", "Pune", "Nashik", "Nagpur", "Chandigarh", "Delhi", "Bangalore", "Chennai", "Ahmedabad", "Coimbatore", "International"].map((city) => (
              <span
                key={city}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
