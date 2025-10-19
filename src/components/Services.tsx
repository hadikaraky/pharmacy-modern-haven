import { Pill, FileText, Stethoscope, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ScrollAnimation from "@/components/ScrollAnimation";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Prescription Services",
      description: "Quick and easy prescription refills with automated reminders for your convenience.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: FileText,
      title: "Health Consultations",
      description: "Expert pharmacist consultations for medication questions and health concerns.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Stethoscope,
      title: "Vaccinations",
      description: "Comprehensive immunization services including flu shots and travel vaccines.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Users,
      title: "Family Care",
      description: "Personalized medication management for your entire family's health needs.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for urgent medication questions and refills.",
      color: "bg-primary/10 text-primary",
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

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <ScrollAnimation
                    variant="slideUp"
                    delay={0.1 + index * 0.05}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 cursor-pointer h-full">
                      <CardContent className="p-6 space-y-4">
                        <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="w-8 h-8" />
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Mobile: Show dots indicator */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {services.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
