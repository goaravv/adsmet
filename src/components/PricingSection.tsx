import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Shield, Zap, TrendingUp, Phone } from "lucide-react";

export const PricingSection = () => {
  const [budget, setBudget] = useState([10000]);
  const [manualBudget, setManualBudget] = useState("10000");
  const currentBudget = budget[0];

  const handleManualBudgetChange = (value: string) => {
    const numValue = parseInt(value) || 1000;
    setManualBudget(value);
    setBudget([numValue]);
  };

  const handleSliderChange = (value: number[]) => {
    setBudget(value);
    setManualBudget(value[0].toString());
  };

  const jumpToBudget = (targetBudget: number, packageType: string) => {
    // Update hero form with selected values
    const heroForm = document.getElementById('hero-form');
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: 'smooth' });
      // Set budget in hero form (this would need state management in real app)
      setTimeout(() => {
        const budgetInput = document.querySelector('input[placeholder="e.g. 5000"]') as HTMLInputElement;
        if (budgetInput) {
          budgetInput.value = targetBudget.toString();
          budgetInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 500);
    }
  };

  const calculateFee = (percentage: number) => {
    return Math.round((currentBudget * percentage) / 100);
  };

  const plans = [
    {
      title: "Monthly",
      percentage: 20,
      period: "per month",
      features: [
        "AI Campaign Optimization",
        "Real-time Performance Monitoring", 
        "Weekly Strategy Calls",
        "Basic Reporting Dashboard"
      ],
      popular: false
    },
    {
      title: "3 Months",
      percentage: 18,
      period: "per month",
      features: [
        "Everything in Monthly",
        "Advanced AI Analytics",
        "Bi-weekly Strategy Calls",
        "A/B Testing Suite",
        "Custom Landing Pages"
      ],
      popular: true
    },
    {
      title: "6 Months",
      percentage: 15,
      period: "per month", 
      features: [
        "Everything in 3 Months",
        "Dedicated Account Manager",
        "Weekly Strategy Calls",
        "Advanced Conversion Tracking",
        "Priority Support",
        "White-Label Reporting"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-6 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-tech font-bold">
              <span className="text-foreground">Choose Your Budget –</span>
              <br />
              <span className="neon-text">Transparent Pricing</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Flexible plans based on your monthly ad spend
            </p>
          </div>

          {/* Budget Slider */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="neon-border bg-card/90">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-tech font-bold mb-2">Monthly Ad Budget</h3>
                    <div className="text-4xl font-tech font-bold neon-text">
                      ${currentBudget.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="px-4">
                      <Input
                        type="number"
                        value={manualBudget}
                        onChange={(e) => handleManualBudgetChange(e.target.value)}
                        className="text-center text-2xl font-tech font-bold neon-border bg-background/50"
                        min="1000"
                        max="100000"
                        step="500"
                      />
                    </div>
                    <div className="px-4">
                      <Slider
                        value={budget}
                        onValueChange={handleSliderChange}
                        max={100000}
                        min={1000}
                        step={500}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>$1,000</span>
                        <span>$100,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${plan.popular ? 'neon-border animate-pulse-neon' : 'border-border'} bg-card/90 hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-tech font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-tech">{plan.title}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-tech font-bold neon-text">
                      ${calculateFee(plan.percentage).toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.percentage}% of ad spend {plan.period}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full neon-glow"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "neon" : "neonOutline"} 
                    className="w-full"
                    onClick={() => jumpToBudget(currentBudget, plan.title.toLowerCase())}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guarantee Badge */}
          <div className="text-center">
            <Card className="inline-block neon-border bg-card/90">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Shield className="w-8 h-8 text-accent" />
                  <div>
                    <h3 className="font-tech font-bold">💰 100% Money-Back Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      Only applies if no lead is generated at all
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};