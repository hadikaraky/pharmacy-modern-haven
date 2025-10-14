import { Award, Users2, MapPin, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "10+", label: "Locations" },
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
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                About Us
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Trusted Healthcare Partner for Your Community
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years of dedicated service, MedCare Pharmacy has been at the forefront 
              of community healthcare. Our team of licensed pharmacists and healthcare professionals 
              is committed to providing exceptional care and personalized service.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine the latest pharmaceutical technology with compassionate care to ensure 
              you receive the best possible health outcomes. Your wellness is our mission.
            </p>

            {/* Values */}
            <div className="space-y-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right stats */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Stats grid */}
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
                  title: "Convenient Locations",
                  description: "Multiple branches across the city for easy access",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
