import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { contactKeywords } from "@/seo/keywords";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdalgekb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Inquiry Submitted!",
          description: "Thank you for your inquiry. We will get back to you within 24 hours.",
        });
        setFormData({ name: "", company: "", email: "", phone: "", requirement: "" });
      } else {
        toast({
          title: "Submission Failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network Error",
        description: "Could not send your inquiry. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I am interested in your electrical panel solutions. Please provide more information."
    );
    window.open(`https://wa.me/919967938370?text=${message}`, "_blank");
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Ajit Electricals - Get Free Quote for Electrical Panels | Dombivli Thane Mumbai Maharashtra"
        description="Contact Ajit Electricals for electrical control panel inquiry & free quotation. Call +91 99679 38370. Panel manufacturer in Dombivli, Thane, Mumbai, Navi Mumbai, Kalyan & all Maharashtra. WhatsApp available."
        keywords={contactKeywords}
        canonical="/contact"
      />
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-secondary/90">
            Get in touch with our team for inquiries, quotations, or technical support
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
                Get in Touch
              </h2>
              <p className="mb-8 text-muted-foreground">
                Have a project in mind? Need a quotation or technical consultation? Our team is ready to assist you with all your electrical panel and automation requirements.
              </p>

              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        Gala no.A-6, Bhardwaj Compound, Saraswati Nagar, Dawdi- Regency Rd, Golavali, Dombivli East, Maharashtra 421203
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a
                        href="tel:+919967938370"
                        className="text-sm text-accent hover:underline"
                      >
                        +91 99679 38370
                      </a> <br />
                      <a
                        href="tel:+918108072344"
                        className="text-sm text-accent hover:underline"
                      >
                        +91 81080 72344
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a
                        href="mailto:sales@ajitelectricalsindia.in"
                        className="text-sm text-accent hover:underline"
                      >
                        sales@ajitelectricalsindia.in
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Business Hours
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday: 9:30 AM - 7:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp Button */}
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="mt-8 w-full bg-industrial-green text-primary-foreground hover:bg-industrial-green/90 sm:w-auto"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </Button>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
                    Send an Inquiry
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirement">Your Requirement *</Label>
                      <Textarea
                        id="requirement"
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        placeholder="Describe your project requirements, panel specifications, or any questions you have..."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="drawing">Upload Drawing (Optional)</Label>
                      <Input
                        id="drawing"
                        type="file"
                        accept=".pdf,.dwg,.dxf,.jpg,.png"
                        className="cursor-pointer"
                      />
                      <p className="text-xs text-muted-foreground">
                        Supported formats: PDF, DWG, DXF, JPG, PNG (Max 10MB)
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-cta text-cta-foreground hover:bg-cta/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7536517340513!2d73.10557797930421!3d19.20595923567965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795764dc16c09%3A0xd32fe0a538eb4058!2sAJIT%20ELECTRICALS!5e0!3m2!1sen!2sin!4v1770546232213!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ajit Electricals Location"
        />
      </section>
    </Layout>
  );
}
