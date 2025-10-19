import { Award, Users2, MapPin, CheckCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "1", label: "Central Location" },
    { number: "24/7", label: "Support" },
  ];

  const values = [
    "Licensed and certified pharmacists",
    "Quality medications from trusted brands",
    "Personalized customer service",
    "Privacy and security guaranteed",
    "Competitive pricing and insurance accepted",
    "Community health education programs",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <ScrollAnimation variant="slideRight" delay={0.1}>
              <div>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  About Us
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="slideRight" delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Trusted Healthcare Partner for Your Community
              </h2>
            </ScrollAnimation>

            <ScrollAnimation variant="slideRight" delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of dedicated service, MedCare Pharmacy has been at the forefront
                of community healthcare. Our team of licensed pharmacists and healthcare professionals
                is committed to providing exceptional care and personalized service.
              </p>
            </ScrollAnimation>

            <ScrollAnimation variant="slideRight" delay={0.4}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine the latest pharmaceutical technology with compassionate care to ensure
                you receive the best possible health outcomes. Your wellness is our mission.
              </p>
            </ScrollAnimation>

            {/* Values */}
            <ScrollAnimation variant="slideUp" delay={0.5}>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Right stats */}
          <div className="space-y-6">
            {/* Stats grid */}
            <ScrollAnimation variant="slideLeft" delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            {/* Feature cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Award,
                  title: "Award-Winning Service",
                  description: "Recognized for excellence in community healthcare",
                },
                {
                  icon: Users2,
                  title: "Expert Team",
                  description: "Licensed pharmacists with decades of combined experience",
                },
                {
                  icon: MapPin,
                  title: "Central Location",
                  description: "One accessible location serving our community",
                },
              ].map((feature, index) => (
                <ScrollAnimation
                  key={index}
                  variant="slideLeft"
                  delay={0.3 + index * 0.1}
                >
                  <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-md">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
