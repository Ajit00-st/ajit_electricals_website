import { useState, useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Send, X, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { productsKeywords } from "@/seo/keywords";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CTASection from "@/components/CTASection";

import ltPanel from "@/assets/products/lt-panel.jpg";
import mccPanel from "@/assets/products/mcc-panel.png";
import pccPanel from "@/assets/products/pcc-panel.png";
import apfcPanel from "@/assets/products/apfc-panel.jpg";
import vfdPanel from "@/assets/products/vfd-panel.png";
import plcPanel from "@/assets/products/plc-panel.png";
import dgPanel from "@/assets/products/dg-panel.png";
import mimicPanel from "@/assets/products/mimic-panel.png";
import capacitorPanel from "@/assets/products/capacitor-panel.jpg";
import relayPanel from "@/assets/products/relay-panel.png";
import firePanel from "@/assets/products/fire-panel.jpg";
import scadaPanel from "@/assets/products/scada-panels.png";
import amfPanel from "@/assets/products/amf-control.png";


interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

const productCategories: ProductCategory[] = [
  {
    id: "electrical-panels",
    title: "Electrical Panels",
    description: "Complete range of LT switchgear and control panels for power distribution and motor control",
    products: [
      {
        id: "lt-panels",
        name: "LT Panels",
        description: "Low Tension panels designed for power distribution applications up to 1000V. Features include MCCB/MCB protection, bus bars, metering, and customizable configurations. Built as per IS/IEC standards with IP54/IP55 protection.",
        image: ltPanel,
        features: ["Up to 6300A rating", "ACB/MCCB incoming", "Form 2/3/4 segregation", "Digital metering"],
      },
      {
        id: "mcc-panels",
        name: "MCC Panels",
        description: "Motor Control Centers for centralized control and protection of multiple motors. Includes intelligent motor starters, DOL/Star-Delta/VFD starters, with comprehensive protection and monitoring features.",
        image: mccPanel,
        features: ["Fully draw-out design", "Intelligent motor protection", "Energy monitoring", "Remote control ready"],
      },
      {
        id: "pcc-panels",
        name: "PCC Panels",
        description: "Power Control Centers for main power distribution with ACB incomer and multiple MCCB outgoing feeders. Designed for industrial applications requiring high reliability and safety.",
        image: pccPanel,
        features: ["ACB incoming up to 6300A", "Capacitor bank integration", "Power monitoring", "Arc flash protection"],
      },
      {
        id: "apfc-panels",
        name: "APFC Panels",
        description: "Automatic Power Factor Correction panels with intelligent controllers for maintaining power factor close to unity. Reduces electricity bills and improves system efficiency.",
        image: apfcPanel,
        features: ["Auto/Manual switching", "Capacitor bank stages", "Harmonic filtering", "Real-time PF display"],
      },
      {
        id: "vfd-panels",
        name: "VFD Panels",
        description: "Variable Frequency Drive panels for precise motor speed control. Enables energy savings, soft starting, and process optimization across various applications.",
        image: vfdPanel,
        features: ["0.75 kW to 500 kW", "Siemens/ABB/Schneider drives", "Bypass provision", "Harmonic filters"],
      },
      {
        id: "dg-panels",
        name: "DG Control Panels",
        description: "Diesel Generator control panels with AMF (Auto Mains Failure) functionality. Provides seamless power backup with automatic changeover and synchronization capabilities.",
        image: dgPanel,
        features: ["AMF controller", "Load sharing", "DG synchronization", "Remote monitoring"],
      },
      {
        id: "capacitor-panels",
        name: "Capacitor Panels",
        description: "Standalone capacitor bank panels for power factor improvement. Designed with high-quality capacitors for industrial and commercial installations.",
        image: capacitorPanel,
        features: ["MPP capacitors", "Discharge resistors", "Fuse protection", "Stage switching"],
      },
      {
        id: "relay-panels",
        name: "Relay & Protection Panels",
        description: "Comprehensive relay protection panels for transformers, motors, and feeders. Includes numerical and electromechanical relay options.",
        image: relayPanel,
        features: ["Overcurrent protection", "Earth fault relays", "Differential protection", "Trip circuit"],
      },
      {
        id: "fire-panels",
        name: "Fire Alarm Panels",
        description: "Advanced fire detection and alarm control panels for building safety and compliance. Designed with addressable and conventional zone configurations for industrial, commercial, and residential installations. Meets IS/NBC fire safety standards.",
        image: firePanel,
        features: ["Addressable/Conventional", "Multi-zone monitoring", "Hooter & flasher output", "BMS integration"],
      },

    ],
  },
  {
    id: "automation-scada",
    title: "Automation & SCADA",
    description: "Advanced PLC and SCADA solutions for process automation and monitoring",
    products: [
      {
        id: "plc-panels",
        name: "PLC Automation Panels",
        description: "Programmable Logic Controller panels for industrial automation. Designed with Siemens S7, Allen Bradley, Schneider PLCs for process control, sequencing, and interlocking applications.",
        image: plcPanel,
        features: ["Siemens/ABB/Schneider", "Remote I/O support", "Ethernet/Profibus", "Redundancy options"],
      },
      {
        id: "scada",
        name: "SCADA Systems",
        description: "Supervisory Control and Data Acquisition systems for centralized monitoring and control. Provides real-time data visualization, trending, alarming, and historical data logging.",
        image: scadaPanel,
        features: ["WinCC/Ignition/Wonderware", "Web-based access", "Report generation", "OPC connectivity"],
      },
      {
        id: "hmi",
        name: "HMI Solutions",
        description: "Human Machine Interface solutions ranging from compact operator panels to large touchscreen displays. Intuitive graphics for easy operation and monitoring.",
        image: plcPanel,
        features: ["7\" to 22\" displays", "Multi-touch support", "Recipe management", "Data logging"],
      },
    ],
  },
  {
    id: "specialized-systems",
    title: "Specialized Systems",
    description: "Application-specific control solutions for specialized industrial requirements",
    products: [
      {
        id: "mimic-panels",
        name: "Control Desks",
        description: "Ergonomic operator control desks designed for control rooms. Integrates HMI, SCADA, control switches, and monitoring equipment in a comfortable workspace.",
        image: mimicPanel,
        features: ["Ergonomic design", "Multi-monitor support", "Integrated controls", "Cable management"],
      },
      {
        id: "amf-panels",
        name: "AMF Panels",
        description: "Automatic Mains Failure panels for seamless power changeover between mains and generator. Ensures uninterrupted power supply with fast transfer times.",
        image: amfPanel,
        features: ["Auto changeover", "Adjustable delays", "DG start/stop", "Load management"],
      },
    ],
  },
];

// Flatten all products for easy lookup
const allProducts = productCategories.flatMap(cat =>
  cat.products.map(p => ({ ...p, categoryId: cat.id, categoryTitle: cat.title }))
);

export default function Products() {
  const location = useLocation();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Get selected product details
  const selectedProduct = useMemo(() => {
    if (!selectedProductId) return null;
    return allProducts.find(p => p.id === selectedProductId) || null;
  }, [selectedProductId]);

  useEffect(() => {
    // Set selected product from hash
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const product = allProducts.find(p => p.id === id);
      if (product) {
        setSelectedProductId(id);
        // Scroll to top to show selected product
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Update URL hash
    window.history.pushState(null, "", `/products#${productId}`);
  };

  const clearSelection = () => {
    setSelectedProductId(null);
    window.history.pushState(null, "", "/products");
  };

  return (
    <Layout>
      <SEOHead
        title="Electrical Control Panels Manufacturer in Dombivli Thane Mumbai | LT MCC PCC APFC VFD Panels - Ajit Electricals"
        description="Buy LT Panels, MCC Panels, PCC Panels, APFC Panels, VFD Panels, PLC Automation & SCADA systems from Ajit Electricals, Dombivli, Thane. Best panel manufacturer in Mumbai, Navi Mumbai, Kalyan & all Maharashtra. ISO certified. Get free quote!"
        keywords={productsKeywords}
        canonical="/products"
      />
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            Products & Solutions
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-secondary/90">
            Comprehensive range of electrical control panels and automation solutions engineered for reliability, efficiency, and safety. All panels are designed and manufactured as per client specifications and international standards.
          </p>
        </div>
      </section>

      {/* Selected Product Detail View */}
      {selectedProduct && (
        <section className="section-padding bg-card border-b border-border">
          <div className="container-custom">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {selectedProduct.categoryTitle}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSelection}
                className="gap-2"
              >
                <X className="h-4 w-4" />
                Close
              </Button>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={`${selectedProduct.name} - Industrial electrical control panel by Ajit Electricals`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {selectedProduct.name}
                </h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="mb-6">
                  <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground break-words min-w-0"
                      >
                        <ArrowRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-fit bg-cta text-cta-foreground hover:bg-cta/90"
                >
                  <Link to="/contact">
                    <Send className="mr-2 h-4 w-4" />
                    Send Inquiry for {selectedProduct.name}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Browse More Products Header */}
      {selectedProduct && (
        <div className="bg-muted py-4 border-b border-border">
          <div className="container-custom flex items-center gap-2">
            <ChevronDown className="h-5 w-5 text-primary" />
            <span className="font-heading font-semibold text-foreground">
              Browse All Products
            </span>
          </div>
        </div>
      )}

      {/* Product Categories Accordion */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <Accordion type="multiple" defaultValue={[]} className="space-y-4">
            {productCategories.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="rounded-lg border border-border bg-card px-6"
              >
                <AccordionTrigger className="py-6 hover:no-underline">
                  <div className="flex flex-col items-start gap-1 text-left">
                    <span className="font-heading text-xl font-bold text-foreground md:text-2xl">
                      {category.title}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {category.description}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-6 pb-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.products.map((product) => (
                      <Card
                        key={product.id}
                        id={product.id}
                        className={`group overflow-hidden border-border scroll-mt-24 cursor-pointer transition-all ${selectedProductId === product.id
                          ? "ring-2 ring-primary shadow-lg"
                          : "hover:shadow-md"
                          }`}
                        onClick={() => handleProductClick(product.id)}
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={product.image}
                            alt={`${product.name} - Industrial control panel manufactured by Ajit Electricals`}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <CardContent className="p-5">
                          <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                            {product.name}
                          </h3>
                          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-accent font-medium">
                              Click to view details
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleProductClick(product.id);
                              }}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Customization Note */}
      <section className="bg-muted py-8">
        <div className="container-custom text-center">
          <p className="text-lg text-foreground">
            <strong>Custom Solutions:</strong> All panels are designed and manufactured as per client specifications and approved drawings. (Standards IS, IEC, IEEE)
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
