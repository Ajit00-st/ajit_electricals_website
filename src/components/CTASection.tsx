import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="gradient-hero section-padding">
      <div className="container-custom text-center">
        <h2 className="mb-4 font-heading text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
          Ready to Power Your Next Project?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-secondary/90">
          Let our expert team design and build the perfect electrical control solution for your industrial needs. Get a free consultation today.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-cta text-cta-foreground hover:bg-cta/90"
          >
            <Link to="/contact">
              Send Inquiry
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919967938370"
              className="flex items-center gap-2 text-secondary hover:text-cta transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">+91 99679 38370</span>
            </a>
            <span className="text-secondary/50">|</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@ajitelectricalsindia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-cta transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium hidden sm:inline">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
