import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import medicineLogo from "@/assets/medicine.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "BMI Calculator", href: "#bmi" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a
            href="#home"
            className="flex items-center space-x-3 group"
            onClick={() => setActiveSection("home")}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
              <img
                src={medicineLogo}
                alt="MedCare Pharmacy Logo"
                className="w-12 h-12 relative z-10 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MedCare Pharmacy
              </span>
              <p className="text-xs text-muted-foreground -mt-1">
                Your Health, Our Priority
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.href.substring(1))}
                  className={`relative px-4 py-2 font-medium text-sm lg:text-base rounded-lg transition-all duration-300 group ${
                    isActive
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.name}

                  {/* Hover background */}
                  <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-primary rounded-full"></span>
                  )}

                  {/* Hover underline */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/50 rounded-full group-hover:w-1/2 transition-all duration-300"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Phone */}
          <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-subtle rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Call Us</p>
              <p className="text-sm font-semibold text-foreground">
                (555) 123-4567
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.href.substring(1));
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-primary text-white shadow-md"
                        : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              {/* Mobile Phone Section */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center space-x-3 px-4 py-3 bg-gradient-subtle rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Call Us</p>
                    <p className="text-sm font-semibold text-foreground">
                      (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
