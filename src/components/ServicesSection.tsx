import { Cpu, Settings, CheckCircle, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Settings,
    title: "Panel Manufacturing",
    description:
      "Custom-designed electrical control panels including LT, MCC, PCC, APFC, VFD, and specialized panels built to international standards.",
  },
  {
    icon: Cpu,
    title: "PLC & SCADA Automation",
    description:
      "Complete automation solutions using Siemens, Allen Bradley, Schneider PLCs with SCADA/HMI integration for process control.",
  },
  {
    icon: CheckCircle,
    title: "Testing & Commissioning",
    description:
      "Comprehensive FAT, SAT, and on-site commissioning services with detailed test reports and documentation.",
  },
  {
    icon: Wrench,
    title: "Customized Solutions",
    description:
      "Tailor-made industrial solutions designed as per client specifications, drawings, and industry-specific requirements.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Delivering comprehensive electrical and automation solutions for industrial excellence
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group card-hover border-border bg-card"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                  <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
