import { ArrowRight, Clock, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pharmacy.jpg";
import ScrollAnimation from "@/components/ScrollAnimation";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <ScrollAnimation variant="fadeInSlow" delay={0}>
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Trusted Healthcare Partner
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeInSlow" delay={0.2}>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Health,{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeInSlow" delay={0.4}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience professional pharmacy care with expert advice, fast prescription refills,
                and personalized health support at our in-store location.
              </p>
            </ScrollAnimation>

            {/* Features */}
            <ScrollAnimation variant="fadeInSlow" delay={0.6}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Clock, text: "24/7 Service" },
                  { icon: Shield, text: "Licensed Experts" },
                  { icon: Heart, text: "Care You Trust" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            {/* CTA Buttons */}
            <ScrollAnimation variant="fadeInSlow" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="outline" size="lg">
                  Find Location
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right image */}
          <ScrollAnimation variant="fadeInSlow" delay={0.4}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Modern pharmacy interior with healthcare professional"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
