import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Linkedin, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "About Us", href: "/about" },
  { name: "Downloads", href: "/downloads" },
  { name: "Contact", href: "/contact" },
];

const productLinks = [
  { name: "LT Panels", href: "/products#lt-panels" },
  { name: "MCC Panels", href: "/products#mcc-panels" },
  { name: "PCC Panels", href: "/products#pcc-panels" },
  { name: "VFD Panels", href: "/products#vfd-panels" },
  { name: "PLC Automation", href: "/products#plc-panels" },
  { name: "SCADA Systems", href: "/products#scada" },
];

export default function Footer() {
  return (
    <footer className="bg-industrial-dark text-secondary">
      <div className="container-custom py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Link to="/">
                <img src={logo} alt="Ajit Electricals - Control Panel Manufacturer" className="h-12 w-auto rounded-md" />
              </Link>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Manufacturer of electrical control panels, PLC & SCADA automation solutions for industrial applications across India.
            </p>
            <p className="text-sm text-industrial-orange font-semibold">
              ISO 9001:2015 Certified
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-secondary">Our Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-secondary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Gala no.A-6, Bhardwaj Compound, Saraswati Nagar, Dawdi- Regency Rd, Golavali, Dombivli East, Maharashtra 421203
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                <a
                  href="tel:+919967938370"
                  className="text-sm text-muted-foreground hover:text-accent"
                >
                  +91 99679 38370
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                <a
                  href="mailto:sales@ajitelectricalsindia.in"
                  className="text-sm text-muted-foreground hover:text-accent"
                >
                  sales@ajitelectricalsindia.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Mon - Sat: 9:30 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8 overflow-hidden rounded-lg border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7536517340513!2d73.10557797930421!3d19.20595923567965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795764dc16c09%3A0xd32fe0a538eb4058!2sAJIT%20ELECTRICALS!5e0!3m2!1sen!2sin!4v1770546232213!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ajit Electricals Location"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ajit Electricals. All rights reserved.
            </p>
            <div className="flex gap-4 mt-2">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-accent">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-sm text-muted-foreground hover:text-accent">
                Terms of Use
              </Link>
            </div>
            {/* After the Terms of Use div, add: */}
            <div className="flex gap-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/ajitelectricals_official/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
