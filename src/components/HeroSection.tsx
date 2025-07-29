import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Zap, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would trigger Vapi AI call agent
    console.log("Form submitted - trigger Vapi AI call");
  };

  return (
    <section className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-tech font-bold leading-tight">
                <span className="text-foreground">Meta Ads</span>{" "}
                <span className="neon-text">AI Agency</span>
                <br />
                <span className="text-3xl lg:text-4xl">100% Lead Generation</span>{" "}
                <span className="neon-text text-3xl lg:text-4xl">Guaranteed</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Unlock Strategic, AI-Driven Meta Ads Campaigns That Drive{" "}
                <span className="text-accent font-semibold">Real Results</span>
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-tech">AI-Optimized</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-tech">Instant Response</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-tech">Results-Driven</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-tech">Live Call Agent</p>
              </div>
            </div>

            <Button variant="call" className="mx-auto lg:mx-0">
              <Phone className="w-5 h-5" />
              📞 Call Now
            </Button>
          </div>

          {/* Right Side - Lead Form */}
          <div className="relative">
            <Card className="neon-border bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-tech font-bold mb-2">Get Your Free Strategy Call</h3>
                  <p className="text-muted-foreground">AI will call you instantly after submission</p>
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
                    📞 Call Me Now - Get Instant AI Analysis
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