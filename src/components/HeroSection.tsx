import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Zap, Target, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const HeroSection = () => {
  const [budget, setBudget] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL to connect to Google Sheets",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const leadData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      website: formData.get('website'),
      budget: budget,
      package: selectedPackage,
      description: formData.get('description'),
      timestamp: new Date().toISOString(),
      triggered_from: window.location.origin,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Add this to handle CORS
        body: JSON.stringify(leadData),
      });

      toast({
        title: "Lead Submitted Successfully!",
        description: "Your information has been sent to Google Sheets. We'll call you within 30 seconds!",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
      setBudget("");
      setSelectedPackage("");
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Error",
        description: "Failed to submit lead. Please check the webhook URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('[data-section="pricing"]');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center min-h-[80vh]">
          
          {/* Left Side - Hero Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-tech font-bold leading-tight">
                <span className="text-foreground">Meta Ads</span>{" "}
                <span className="neon-text">AI Agency</span>
                <br />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">100% Lead Generation</span>{" "}
                <span className="neon-text text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Guaranteed</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Unlock Strategic, AI-Driven Meta Ads Campaigns That Drive{" "}
                <span className="text-accent font-semibold">Real Results</span>
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 pt-4 sm:pt-6 lg:pt-8">
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-accent" />
                </div>
                <p className="text-xs sm:text-xs lg:text-sm font-tech">AI-Optimized</p>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-accent" />
                </div>
                <p className="text-xs sm:text-xs lg:text-sm font-tech">Instant Response</p>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-accent" />
                </div>
                <p className="text-xs sm:text-xs lg:text-sm font-tech">Results-Driven</p>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-accent" />
                </div>
                <p className="text-xs sm:text-xs lg:text-sm font-tech">Live Call Agent</p>
              </div>
            </div>

            <Button 
              onClick={scrollToPricing}
              variant="neon" 
              className="mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4"
            >
              Select Your Budget
            </Button>
          </div>

          {/* Right Side - Lead Form */}
          <div id="hero-form" className="relative order-1 lg:order-2">
            <Card className="neon-border bg-card/95 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-tech font-bold mb-1 sm:mb-2">Get Your Free Strategy Call</h3>
                  <p className="text-xs sm:text-xs lg:text-sm text-muted-foreground">AI will call you instantly after submission</p>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {/* Zapier Webhook URL */}
                  <div>
                    <label className="block text-xs sm:text-xs lg:text-sm font-tech text-muted-foreground mb-1 sm:mb-2">
                      Zapier Webhook URL (to connect to Google Sheets)
                    </label>
                    <Input 
                      type="url"
                      placeholder="https://hooks.zapier.com/hooks/catch/..." 
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      className="neon-border bg-background/50 font-tech text-xs sm:text-sm lg:text-base"
                      required 
                    />
                  </div>
                  
                  <Input 
                    name="name"
                    placeholder="Full Name" 
                    className="neon-border bg-background/50 font-tech text-xs sm:text-sm lg:text-base"
                    required 
                  />
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="Email Address" 
                    className="neon-border bg-background/50 font-tech text-xs sm:text-sm lg:text-base"
                    required 
                  />
                  <Input 
                    name="phone"
                    type="tel" 
                    placeholder="Phone Number" 
                    className="neon-border bg-background/50 font-tech text-xs sm:text-sm lg:text-base"
                    required 
                  />
                  <Input 
                    name="website"
                    placeholder="Website URL" 
                    className="neon-border bg-background/50 font-tech text-xs sm:text-sm lg:text-base"
                  />
                  
                  {/* Budget and Package Row */}
                  <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-2 lg:gap-4">
                    <div>
                      <label className="block text-xs sm:text-xs lg:text-sm font-tech text-muted-foreground mb-1 sm:mb-2">Monthly Budget ($)</label>
                      <Input 
                        type="number"
                        placeholder="e.g. 5000" 
                        value={budget}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '' || parseInt(value) >= 1000) {
                            setBudget(value);
                          }
                        }}
                        className="neon-border bg-background/50 font-tech text-xs sm:text-sm lg:text-base"
                        min="1000"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-xs lg:text-sm font-tech text-muted-foreground mb-1 sm:mb-2">Package</label>
                      <Select value={selectedPackage} onValueChange={setSelectedPackage} required>
                        <SelectTrigger className="neon-border bg-background/50 font-tech text-xs sm:text-sm lg:text-base h-9 sm:h-10 lg:h-11">
                          <SelectValue placeholder="Select package" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-accent">
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="3months">3 Months</SelectItem>
                          <SelectItem value="6months">6 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Textarea 
                    name="description"
                    placeholder="Describe your project and goals..." 
                    className="neon-border bg-background/50 font-tech min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] text-xs sm:text-sm lg:text-base"
                    rows={3}
                  />
                  
                  <Button 
                    type="submit" 
                    variant="neon" 
                    className="w-full py-2 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>Loading...</>
                    ) : (
                      <>
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2 text-black" />
                        Call Me Now - Get Instant AI Analysis
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to receive a call from our AI agent within 30 seconds
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};