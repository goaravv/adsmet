import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Zap, Target, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  const [budget, setBudget] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would trigger Vapi AI call agent
    console.log("Form submitted - trigger Vapi AI call", { budget, selectedPackage });
  };

  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-tech font-bold leading-tight">
                <span className="text-foreground">Meta Ads</span>{" "}
                <span className="neon-text">AI Agency</span>
                <br />
                <span className="text-xl md:text-3xl lg:text-4xl">100% Lead Generation</span>{" "}
                <span className="neon-text text-xl md:text-3xl lg:text-4xl">Guaranteed</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Unlock Strategic, AI-Driven Meta Ads Campaigns That Drive{" "}
                <span className="text-accent font-semibold">Real Results</span>
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 pt-8">
              <div className="text-center space-y-2">
                <div className="w-10 h-10 lg:w-12 lg:h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <Zap className="w-4 h-4 lg:w-6 lg:h-6 text-accent" />
                </div>
                <p className="text-xs lg:text-sm font-tech">AI-Optimized</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-10 h-10 lg:w-12 lg:h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <Target className="w-4 h-4 lg:w-6 lg:h-6 text-accent" />
                </div>
                <p className="text-xs lg:text-sm font-tech">Instant Response</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-10 h-10 lg:w-12 lg:h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <TrendingUp className="w-4 h-4 lg:w-6 lg:h-6 text-accent" />
                </div>
                <p className="text-xs lg:text-sm font-tech">Results-Driven</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-10 h-10 lg:w-12 lg:h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <Phone className="w-4 h-4 lg:w-6 lg:h-6 text-accent" />
                </div>
                <p className="text-xs lg:text-sm font-tech">Live Call Agent</p>
              </div>
            </div>

            <Button 
              onClick={scrollToForm}
              variant="neon" 
              className="mx-auto lg:mx-0 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
            >
              Select Your Budget
            </Button>
          </div>

          {/* Right Side - Lead Form */}
          <div id="hero-form" className="relative mt-8 lg:mt-0">
            <Card className="neon-border bg-card/95 backdrop-blur-sm">
              <CardContent className="p-6 lg:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl lg:text-2xl font-tech font-bold mb-2">Get Your Free Strategy Call</h3>
                  <p className="text-sm lg:text-base text-muted-foreground">AI will call you instantly after submission</p>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <Input 
                    placeholder="Full Name" 
                    className="neon-border bg-background/50 font-tech"
                    required 
                  />
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="neon-border bg-background/50 font-tech"
                    required 
                  />
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="neon-border bg-background/50 font-tech"
                    required 
                  />
                  <Input 
                    placeholder="Website URL" 
                    className="neon-border bg-background/50 font-tech"
                  />
                  
                  {/* Budget and Package Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-tech text-muted-foreground mb-2">Monthly Budget ($)</label>
                      <Input 
                        type="number"
                        placeholder="e.g. 5000" 
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="neon-border bg-background/50 font-tech"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-tech text-muted-foreground mb-2">Package</label>
                      <Select value={selectedPackage} onValueChange={setSelectedPackage} required>
                        <SelectTrigger className="neon-border bg-background/50 font-tech">
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
                    placeholder="Describe your project and goals..." 
                    className="neon-border bg-background/50 font-tech min-h-[100px]"
                    rows={4}
                  />
                  
                  <Button 
                    type="submit" 
                    variant="neon" 
                    className="w-full py-4 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2 text-black" />
                    Call Me Now - Get Instant AI Analysis
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