import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Truck, 
  Shield, 
  Globe, 
  Package, 
  FileText, 
  HeadphonesIcon,
  Warehouse,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Global Export Services",
      description: "Comprehensive export solutions to 50+ countries with complete documentation and compliance support.",
      features: ["Custom documentation", "Export licensing", "International shipping", "Regulatory compliance"]
    },
    {
      icon: Package,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every product meets international standards and certifications.",
      features: ["ISO certified processes", "Third-party testing", "Quality documentation", "Batch tracking"]
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "End-to-end logistics management with real-time tracking and efficient delivery solutions.",
      features: ["Door-to-door delivery", "Real-time tracking", "Multiple shipping modes", "Insurance coverage"]
    },
    {
      icon: Warehouse,
      title: "Warehousing Solutions",
      description: "State-of-the-art storage facilities including cold storage for perishable goods.",
      features: ["Climate-controlled storage", "Inventory management", "Pick & pack services", "Security systems"]
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete assistance with export documentation, certificates, and regulatory requirements.",
      features: ["Export permits", "Certificates of origin", "Phytosanitary certificates", "Commercial invoicing"]
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "Dedicated customer service team providing 24/7 support throughout the export process.",
      features: ["24/7 support", "Multi-language assistance", "Order tracking", "Technical support"]
    }
  ];

  const processSteps = [
    { number: "01", title: "Inquiry", description: "Share your requirements and get detailed quotation" },
    { number: "02", title: "Planning", description: "Product sourcing, quality checks, and logistics planning" },
    { number: "03", title: "Processing", description: "Documentation, packaging, and export clearance" },
    { number: "04", title: "Delivery", description: "Shipment tracking and safe delivery to destination" }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive export services designed to make global trade seamless, efficient, and reliable for our clients worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-orange transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-secondary rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Our Export Process
            </h3>
            <p className="text-muted-foreground">
              A streamlined 4-step process ensuring smooth and efficient export operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-primary/30 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary/30 rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;