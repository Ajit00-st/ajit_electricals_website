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
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Providing specialized electrical and automation solutions across diverse industry verticals
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:gap-6">
          {industries.map((industry, index) => (
            <Link
              key={index}
              to="/industries"
              className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-accent">
                <industry.icon className="h-6 w-6 text-primary transition-colors group-hover:text-accent-foreground" />
              </div>
              <span className="flex flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-border bg-card p-4 text-center transition-colors hover:border-accent">
                {industry.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/industries">Explore All Industries</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
