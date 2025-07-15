import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Award, Users } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Premium 
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent"> Indian Products</span>
                <br />for Global Markets
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                APM Enterprises - Your trusted partner for exporting authentic Indian products worldwide. 
                From spices to textiles, we deliver quality that speaks for itself.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('products')}
                className="bg-gradient-primary shadow-orange text-lg px-8 py-6 h-auto"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-6 h-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contact Us
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop" 
                alt="Indian Export Products" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-background rounded-xl p-4 shadow-orange border border-border">
              <div className="text-sm font-semibold text-primary">Premium Quality</div>
              <div className="text-xs text-muted-foreground">Certified Products</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-orange border border-border">
              <div className="text-sm font-semibold text-primary">Global Shipping</div>
              <div className="text-xs text-muted-foreground">Worldwide Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;