import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productCategories = [
    "Food Products",
    "Handicrafts",
    "Textiles & Garments",
    "Agricultural Products",
    "Cosmetics & Personal Care",
    "Electronics"
  ];

  const services = [
    "Global Export Services",
    "Quality Assurance",
    "Logistics & Supply Chain",
    "Warehousing Solutions",
    "Documentation Support",
    "Customer Support"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg" alt="APM Enterprises" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold text-primary">APM Enterprises</h3>
                <p className="text-sm text-background/80">Global Export Solutions</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted partner for exporting premium Indian products worldwide. 
              Quality, reliability, and excellence in every shipment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Ambarnath West, Thane, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">+91 88 77 99 88 90</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">apmenterprises2024@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((product, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>

            <div className="mt-8">
              <h5 className="font-semibold text-background mb-3">Global Reach</h5>
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <Globe className="h-4 w-4 text-primary" />
                <span>Serving 50+ Countries Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/80">
              © 2024 APM Enterprises. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-background/80">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Export Guidelines</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;