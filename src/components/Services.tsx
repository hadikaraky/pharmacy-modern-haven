import { Pill, FileText, Truck, Stethoscope, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/ScrollAnimation";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Prescription Services",
      description: "Quick and easy prescription refills with automated reminders and home delivery options.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: FileText,
      title: "Health Consultations",
      description: "Expert pharmacist consultations for medication questions and health concerns.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Fast and reliable prescription delivery right to your doorstep at no extra cost.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Stethoscope,
      title: "Vaccinations",
      description: "Comprehensive immunization services including flu shots and travel vaccines.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Users,
      title: "Family Care",
      description: "Personalized medication management for your entire family's health needs.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for urgent medication questions and refills.",
      color: "bg-secondary/10 text-secondary",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation variant="slideUp" delay={0.1}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive pharmacy services designed to keep you and your family healthy
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation
              key={index}
              variant="slideUp"
              delay={0.1 + index * 0.1}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 cursor-pointer h-full">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
