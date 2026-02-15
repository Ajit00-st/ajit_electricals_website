import { FileText, Download, Shield, Eye } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const downloads = [
  {
    icon: FileText,
    title: "Company Profile / Brochure",
    description: "Complete overview of Ajit Electricals, our capabilities, manufacturing facilities, and product range",
    fileName: "Ajit_Electricals_Company_Profile.pdf",
    size: "1.1 MB",
  },
  {
    icon: Shield,
    title: "ISO 9001:2015 Certificate",
    description: "Our quality management system certification demonstrating our commitment to quality standards",
    fileName: "ISO_9001_Certificate.pdf",
    size: "1.0 MB",
  },
  {
    icon: Shield,
    title: "Other Certificates",
    description: "Additional certifications including test reports, compliance certificates, and quality approvals",
    fileName: "Other_Certificates.pdf",
    size: "1.2 MB",
  },
];

export default function Downloads() {
  const handleDownload = (fileName: string) => {
    const link = document.createElement("a");
    link.href = `/downloads/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (fileName: string) => {
    window.open(`/downloads/${fileName}`, "_blank", "noopener,noreferrer");
  };

  return (
    <Layout>
      <SEOHead
        title="Downloads - Company Profile & Certificates | Ajit Electricals"
        description="Download Ajit Electricals company profile, ISO 9001:2015 certificate & other documents. Leading panel manufacturer in Dombivli, Thane, Mumbai, Maharashtra."
        keywords="Ajit Electricals brochure, company profile download, ISO certificate, panel manufacturer documents"
        canonical="/downloads"
      />
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            Downloads
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-secondary/90">
            Access our company profile, certificates, and documentation
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {downloads.map((item, index) => (
              <Card
                key={index}
                className="group card-hover border-border bg-card"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground">
                      PDF • {item.size}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1"
                        onClick={() => handleView(item.fileName)}
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1"
                        onClick={() => handleDownload(item.fileName)}
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request Custom Documents */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Need Additional Documents?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            If you require specific technical documents, product datasheets, or detailed quotations for your project, our team is ready to help.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-cta text-cta-foreground hover:bg-cta/90"
          >
            <a href="/contact">Request Documents</a>
          </Button>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
