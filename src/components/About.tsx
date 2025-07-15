import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Award } from "lucide-react";

const About = () => {
  const moaPoints = [
    "Manufacturing, processing, trading, importing, exporting, wholesaling, retailing, marketing, distribution, and dealing in Food products, Handicrafts, Garments, Agricultural products, Cosmetics, and Electronics",
    "Acting as importers, exporters, commission agents, representatives, consultants, distributors, and franchisees in India and abroad",
    "Providing consultancy, advisory, and support services related to trading, marketing, logistics, warehousing, and supply chain management",
    "E-commerce activities, online sales, digital marketing, and digital platform development for product promotion and sales",
    "Establishing warehouses, cold storage, and storage facilities for perishable and non-perishable goods",
    "Setting up manufacturing units, processing units, showrooms, retail outlets, and distribution centers"
  ];

  const achievements = [
    { icon: Target, title: "Quality Focus", description: "ISO certified processes ensuring premium quality" },
    { icon: Award, title: "Global Reach", description: "Serving customers across 50+ countries worldwide" },
    { icon: Eye, title: "Transparency", description: "Complete supply chain visibility and traceability" },
    { icon: CheckCircle, title: "Reliability", description: "99.5% on-time delivery rate with customer satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About APM Enterprises
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                APM Enterprises stands as a premier export company, dedicated to bringing the finest Indian products to global markets. 
                With our comprehensive approach to international trade, we bridge the gap between traditional Indian craftsmanship and modern global demands.
              </p>
              <p className="text-muted-foreground">
                Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner for businesses worldwide. 
                We specialize in a diverse range of products, ensuring that every item meets international standards while maintaining its authentic Indian essence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-4">
                    <achievement.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Business Objectives
            </h3>
            <div className="space-y-4">
              {moaPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-primary border-none">
              <CardContent className="p-6 text-primary-foreground">
                <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
                <p className="text-primary-foreground/90">
                  To be the leading export company that showcases India's rich heritage and quality products to the world, 
                  while building lasting partnerships and contributing to global trade excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;