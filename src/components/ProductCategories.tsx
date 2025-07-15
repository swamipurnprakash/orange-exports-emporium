import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import foodImage from "@/assets/food-products.jpg";
import handicraftsImage from "@/assets/handicrafts.jpg";
import textilesImage from "@/assets/textiles.jpg";
import agricultureImage from "@/assets/agriculture.jpg";
import cosmeticsImage from "@/assets/cosmetics.jpg";
import electronicsImage from "@/assets/electronics.jpg";

const ProductCategories = () => {
  const categories = [
    {
      title: "Food Products",
      description: "Spices, pulses, seeds, grains, frozen foods, organic foods, and beverages",
      image: foodImage,
      items: ["Spices & Condiments", "Basmati Rice", "Lentils & Pulses", "Tea & Coffee"]
    },
    {
      title: "Handicrafts",
      description: "Traditional handicrafts, gift items, decorative products, and home decor",
      image: handicraftsImage,
      items: ["Wooden Crafts", "Brass Items", "Decorative Pottery", "Gift Articles"]
    },
    {
      title: "Textiles & Garments",
      description: "Traditional textiles, readymade clothing, handloom products, and accessories",
      image: textilesImage,
      items: ["Cotton Fabrics", "Silk Products", "Readymade Garments", "Fashion Accessories"]
    },
    {
      title: "Agricultural Products",
      description: "Fertilizers, pesticides, gardening tools, and agro-based commodities",
      image: agricultureImage,
      items: ["Seeds & Fertilizers", "Farm Tools", "Organic Products", "Plant Nutrients"]
    },
    {
      title: "Cosmetics & Personal Care",
      description: "Natural cosmetics, personal care products, herbal and ayurvedic items",
      image: cosmeticsImage,
      items: ["Herbal Products", "Ayurvedic Items", "Beauty Care", "Natural Cosmetics"]
    },
    {
      title: "Electronics",
      description: "Electronic goods, mobile accessories, home appliances, and spare parts",
      image: electronicsImage,
      items: ["Mobile Accessories", "Home Appliances", "Electronic Goods", "Spare Parts"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of premium Indian products, carefully selected and quality-tested for global markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-orange transition-all duration-300 hover:-translate-y-2 border-border overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;