import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/ScrollAnimation";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "(555) 765-4321"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@medcarepharmacy.com", "support@medcarepharmacy.com"],
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Healthcare Ave", "Medical District, MD 12345"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8AM - 8PM", "Sat-Sun: 9AM - 6PM"],
      color: "bg-secondary/10 text-secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <ScrollAnimation variant="slideUp" delay={0.1}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reach out to us anytime. We're here to help with all your pharmacy needs.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <ScrollAnimation
              key={index}
              variant="slideUp"
              delay={0.1 + index * 0.1}
            >
              <Card className="hover:shadow-xl transition-all duration-300 h-full border-border hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
