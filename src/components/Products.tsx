import { HeartPulse, Baby, Sparkles, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const categories = [
    {
      icon: HeartPulse,
      title: "Wellness & Vitamins",
      description: "High-quality supplements and vitamins for your daily health needs",
      items: ["Multivitamins", "Omega-3", "Probiotics", "Vitamin D"],
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      icon: Baby,
      title: "Mother & Baby Care",
      description: "Safe and trusted products for mothers and their little ones",
      items: ["Baby Formula", "Diapers", "Skincare", "Prenatal Vitamins"],
      gradient: "from-secondary/20 to-primary/20",
    },
    {
      icon: Sparkles,
      title: "Beauty & Personal Care",
      description: "Premium skincare and personal care products for your wellness",
      items: ["Skincare", "Haircare", "Cosmetics", "Hygiene"],
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Essential devices to track and maintain your health",
      items: ["Blood Pressure", "Glucose Meters", "Thermometers", "First Aid"],
      gradient: "from-secondary/20 to-primary/20",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of healthcare and wellness products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{category.title}</CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">{category.description}</p>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-card rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Browse Category
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
