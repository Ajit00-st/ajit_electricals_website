import { Shield } from "lucide-react";
import honeywellLogo from "@/assets/brands/honeywell.png";
import flexemLogo from "@/assets/brands/flexem.png";
import connectwellLogo from "@/assets/brands/connectwell.png";
import allenBradleyLogo from "@/assets/brands/allen-bradley.png";
import lauritzKnudsenLogo from "@/assets/brands/lauritz-knudsen.png";
import polycabLogo from "@/assets/brands/polycab.png";
import selecLogo from "@/assets/brands/selec.png";

const brands = [
  {
    name: "Siemens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg",
  },
  {
    name: "ABB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg",
  },
  {
    name: "Schneider Electric",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Schneider_Electric_2007.svg",
  },
  {
    name: "Lauritz Knudsen",
    logo: lauritzKnudsenLogo,
  },
  {
    name: "Allen-Bradley",
    logo: allenBradleyLogo,
  },
  {
    name: "Honeywell",
    logo: honeywellLogo,
  },
  {
    name: "Connectwell",
    logo: connectwellLogo,
  },
  {
    name: "Flexem",
    logo: flexemLogo,
  },
  {
    name: "Polycab",
    logo: polycabLogo,
  },
  {
    name: "Selec",
    logo: selecLogo,
  },

];

export default function BrandsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="mb-10 flex flex-col items-center gap-4 text-center md:flex-row md:justify-center md:gap-8">
          <div className="flex items-center gap-3 rounded-full bg-industrial-green/10 px-6 py-3">
            <Shield className="h-6 w-6 text-industrial-green" />
            <span className="font-heading text-lg font-semibold text-industrial-green">
              ISO 9001:2015 Certified
            </span>
          </div>
          <span className="hidden text-muted-foreground md:block">|</span>
          <p className="text-muted-foreground">
            Using world-class components from leading brands
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-12 w-28 items-center justify-center grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100 md:h-16 md:w-36"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo - Industrial electrical components partner`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="font-heading text-lg font-bold text-primary">${brand.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-muted-foreground">
          ...and Many More
        </p>
      </div>
    </section>
  );
}
