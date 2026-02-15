import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const productCategories = [
  {
    title: "Electrical Panels",
    items: [
      { name: "LT Panels", href: "/products#lt-panels" },
      { name: "MCC Panels", href: "/products#mcc-panels" },
      { name: "PCC Panels", href: "/products#pcc-panels" },
      { name: "APFC Panels", href: "/products#apfc-panels" },
      { name: "VFD Panels", href: "/products#vfd-panels" },
      { name: "DG Control Panels", href: "/products#dg-panels" },
      { name: "Capacitor Panels", href: "/products#capacitor-panels" },
      { name: "Relay Panels", href: "/products#relay-panels" },
      { name: "Fire Panels", href: "/products#fire-panels" },
    ],
  },
  {
    title: "Automation & SCADA",
    items: [
      { name: "PLC Panels", href: "/products#plc-panels" },
      { name: "SCADA Systems", href: "/products#scada" },
      { name: "HMI Solutions", href: "/products#hmi" },
    ],
  },
  {
    title: "Specialized Systems",
    items: [
      { name: "Control Desks", href: "/products#control-desks" },
      { name: "AMF Panels", href: "/products#amf-panels" },
    ],
  },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", hasSubmenu: true },
  { name: "Industries", href: "/industries" },
  { name: "Clients", href: "/clients" },
  { name: "About", href: "/about" },
  { name: "Downloads", href: "/downloads" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Ajit Electricals - Powering Progress"
              className="h-12 w-auto lg:h-14"
            />
            <span className="hidden text-xs font-medium text-muted-foreground lg:block leading-tight">
              Control Panel<br />Manufacturer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) =>
                  item.hasSubmenu ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger
                        className={cn(
                          "h-10 px-4 font-medium",
                          isActive(item.href) && "text-accent"
                        )}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[600px] gap-3 p-4 md:grid-cols-3 bg-popover">
                          {productCategories.map((category) => (
                            <div key={category.title}>
                              <h4 className="mb-2 font-heading text-sm font-semibold text-primary">
                                {category.title}
                              </h4>
                              <ul className="space-y-1">
                                {category.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={subItem.href}
                                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="border-t p-3 bg-muted">
                          <Link
                            to="/products"
                            className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                          >
                            View All Products
                          </Link>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        to={item.href}
                        className={cn(
                          "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground focus:outline-none",
                          isActive(item.href)
                            ? "text-accent"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button & Contact */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+919967938370"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              <span>+91 99679 38370</span>
            </a>
            <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 overflow-y-auto bg-card lg:hidden">
            <nav className="divide-y divide-border">
              {navItems.map((item) =>
                item.hasSubmenu ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex w-full items-center justify-between px-4 py-4 text-base font-medium text-foreground"
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          mobileProductsOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileProductsOpen && (
                      <div className="bg-muted px-4 pb-4 max-h-[60vh] overflow-y-auto">
                        {productCategories.map((category) => (
                          <div key={category.title} className="mb-4">
                            <h4 className="mb-2 font-heading text-sm font-semibold text-primary">
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.href}
                                    className="block py-2 text-sm text-muted-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link
                          to="/products"
                          className="block rounded-md bg-primary py-3 text-center text-sm font-medium text-primary-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Products
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-4 text-base font-medium text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="p-4">
                <Button asChild className="w-full bg-cta text-cta-foreground hover:bg-cta/90">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Request a Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
