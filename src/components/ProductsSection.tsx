import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import ltPanel from "@/assets/products/lt-panel.jpg";
import mccPanel from "@/assets/products/mcc-panel.png";
import pccPanel from "@/assets/products/pcc-panel.png";
import apfcPanel from "@/assets/products/apfc-panel.jpg";
import vfdPanel from "@/assets/products/vfd-panel.png";
import plcPanel from "@/assets/products/plc-panel.png";
import dgPanel from "@/assets/products/dg-panel.png";
import mimicPanel from "@/assets/products/mimic-panel.png";
import firePanel from "@/assets/products/fire-panel.jpg";

const products = [
  {
    id: "lt-panels",
    name: "LT Panels",
    description: "Low tension panels for power distribution up to 1000V with comprehensive protection features.",
    image: ltPanel,
  },
  {
    id: "mcc-panels",
    name: "MCC Panels",
    description: "Motor Control Centers for centralized control of multiple motors with intelligent starters.",
    image: mccPanel,
  },
  {
    id: "pcc-panels",
    name: "PCC Panels",
    description: "Power Control Centers for main power distribution with ACB/MCCB configurations.",
    image: pccPanel,
  },
  {
    id: "apfc-panels",
    name: "APFC Panels",
    description: "Automatic Power Factor Correction panels for energy efficiency and reduced power bills.",
    image: apfcPanel,
  },
  {
    id: "vfd-panels",
    name: "VFD Panels",
    description: "Variable Frequency Drive panels for precise motor speed control and energy savings.",
    image: vfdPanel,
  },
  {
    id: "plc-panels",
    name: "PLC Automation Panels",
    description: "Programmable Logic Controller panels with HMI integration for process automation.",
    image: plcPanel,
  },
  {
    id: "dg-panels",
    name: "DG Control Panels",
    description: "Diesel Generator control and synchronization panels with AMF functionality.",
    image: dgPanel,
  },
  {
    id: "mimic-panels",
    name: "Mimic & Control Desks",
    description: "Custom mimic panels and operator desks for centralized monitoring and control.",
    image: mimicPanel,
  },
  {
    id: "fire-panels",
    name: "Fire Alarm Panels",
    description: "Fire detection and alarm control panels for building safety with addressable and conventional configurations.",
    image: firePanel,
  },
];

export default function ProductsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title">Key Products</h2>
          <p className="section-subtitle">
            Wide range of electrical panels and automation solutions for diverse industrial applications
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group card-hover overflow-hidden border-border bg-card"
            >
              <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <Link
                  to={`/products#${product.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
