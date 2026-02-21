import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import BrandsSection from "@/components/BrandsSection";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { homepageKeywords } from "@/seo/keywords";

export default function Index() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ajit Electricals",
    "url": "https://www.ajitelectricalsindia.in",
    "logo": "https://www.ajitelectricalsindia.in/logo.png",
    "description": "ISO 9001:2015 certified electrical control panel manufacturer in Dombivli, Thane, Mumbai, Maharashtra, India.",
    "telephone": "+919967938370",
    "email": " sales@ajitelectricalsindia.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dombivli",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Control Panels",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LT Panel" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MCC Panel" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PCC Panel" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "APFC Panel" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VFD Panel" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PLC Automation Panel" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SCADA System" } },
      ]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ajit Electricals",
    "image": "https://www.ajitelectricalsindia.in/logo.png",
    "telephone": "+919967938370",
    "email": " sales@ajitelectricalsindia.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dombivli",
      "addressRegion": "Maharashtra",
      "postalCode": "421201",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.2183",
      "longitude": "73.0867"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "19:00"
    },
    "priceRange": "₹₹₹",
    "areaServed": ["Mumbai", "Thane", "Navi Mumbai", "Dombivli", "Kalyan", "Pune", "Maharashtra", "India"]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ajit Electricals",
    "url": "https://www.ajitelectricalsindia.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.ajitelectricalsindia.in/products?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const combinedJsonLd = [organizationSchema, localBusinessSchema, websiteSchema];

  return (
    <Layout>
      <SEOHead
        title="Ajit Electricals - Control Panel Manufacturer in Dombivli, Thane, Mumbai | LT MCC PCC VFD PLC SCADA"
        description="Ajit Electricals is the leading ISO 9001:2015 certified electrical control panel manufacturer in Dombivli, Thane, Mumbai & Maharashtra. We manufacture LT Panels, MCC, PCC, APFC, VFD, PLC & SCADA automation panels for industries across India. Trusted by Reliance, L&T, Lodha, Bisleri & 150+ clients. Call +91 99679 38370."
        keywords={homepageKeywords}
        canonical="/"
        jsonLd={combinedJsonLd}
      />
      <HeroSlider />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <BrandsSection />
      <CTASection />
    </Layout>
  );
}
