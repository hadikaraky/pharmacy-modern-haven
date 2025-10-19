import { useState } from "react";
import { Calculator, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollAnimation from "@/components/ScrollAnimation";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      // Determine category
      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "Underweight":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "Normal Weight":
        return "text-green-600 bg-green-50 border-green-200";
      case "Overweight":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "Obese":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const handleReset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <section id="bmi" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <ScrollAnimation variant="slideUp" delay={0.1}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              BMI Calculator
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate your Body Mass Index to understand your health status
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-2xl mx-auto">
          <ScrollAnimation variant="scale" delay={0.2}>
            <Card className="shadow-xl border-border">
              <CardHeader>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Calculator className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    Check Your BMI
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Input Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="height"
                      className="text-sm font-medium text-foreground flex items-center"
                    >
                      <Activity className="w-4 h-4 mr-2 text-primary" />
                      Height (cm)
                    </label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="175"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="weight"
                      className="text-sm font-medium text-foreground flex items-center"
                    >
                      <Activity className="w-4 h-4 mr-2 text-primary" />
                      Weight (kg)
                    </label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={calculateBMI}
                    className="flex-1"
                    disabled={!height || !weight}
                  >
                    Calculate BMI
                  </Button>
                  {bmi !== null && (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  )}
                </div>

                {/* Result Display */}
                {bmi !== null && (
                  <div className="mt-8 p-6 bg-card rounded-xl border-2 border-primary/20 animate-fade-in">
                    <div className="text-center space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground font-medium">
                          Your BMI
                        </p>
                        <p className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                          {bmi}
                        </p>
                      </div>

                      <div
                        className={`inline-block px-6 py-3 rounded-full border-2 font-semibold ${getCategoryColor()}`}
                      >
                        {category}
                      </div>

                      {/* BMI Guide */}
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-3 font-medium">
                          BMI Categories:
                        </p>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="font-medium text-blue-900">
                              &lt; 18.5
                            </p>
                            <p className="text-blue-600">Underweight</p>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <p className="font-medium text-green-900">
                              18.5 - 24.9
                            </p>
                            <p className="text-green-600">Normal</p>
                          </div>
                          <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                            <p className="font-medium text-orange-900">
                              25 - 29.9
                            </p>
                            <p className="text-orange-600">Overweight</p>
                          </div>
                          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                            <p className="font-medium text-red-900">≥ 30</p>
                            <p className="text-red-600">Obese</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Info Note */}
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-foreground">Note:</strong> BMI is a
                    general indicator. Please consult our pharmacists for
                    personalized health advice.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;
