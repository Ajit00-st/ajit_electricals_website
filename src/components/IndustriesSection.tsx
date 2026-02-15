import { Link } from "react-router-dom";
import {
  Factory,
  Droplets,
  Pill,
  ShoppingCart,
  Hotel,
  Heart,
  Hammer,
  Shirt,
  UtensilsCrossed,
  Wind,
  Building2,
  TrainTrack,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Droplets, name: "Water/STP/WTP" },
  { icon: Pill, name: "Pharmaceutical" },
  { icon: ShoppingCart, name: "FMCG" },
  { icon: Hotel, name: "Hotels" },
  { icon: Heart, name: "Hospitals" },
  { icon: Hammer, name: "Steel" },
  { icon: Shirt, name: "Textile" },
  { icon: UtensilsCrossed, name: "Food & Beverage" },
  { icon: Wind, name: "HVAC" },
  { icon: Building2, name: "Infrastructure" },
  { icon: TrainTrack, name: "Railway" },
];
export default function IndustriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Providing specialized electrical and automation solutions across diverse industry verticals
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <industry.icon className="h-6 w-6 text-accent" />
              </div>
              <span className="w-full text-center text-[11px] font-medium leading-tight text-foreground sm:text-xs break-words">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/industries">Explore All Industries</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
