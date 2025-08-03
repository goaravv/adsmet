import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, X } from "lucide-react";

export const StickyFooterCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-reopen after 1 minute when minimized
  useEffect(() => {
    if (isMinimized) {
      const timer = setTimeout(() => {
        setIsMinimized(false);
      }, 60000); // 1 minute

      return () => clearTimeout(timer);
    }
  }, [isMinimized]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger Vapi AI call
    console.log("Sticky form submitted - trigger Vapi AI call");
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${isMinimized ? 'translate-y-full' : 'translate-y-0'}`}>
      <Card className="mx-2 md:mx-4 mb-2 md:mb-4 neon-border bg-card/98 backdrop-blur-md">
        <CardContent className="p-3 md:p-4">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="text-center mb-3">
              <h3 className="text-sm font-tech font-bold neon-text">Get Instant AI Call</h3>
              <p className="text-xs text-muted-foreground">Free consultation • No commitment</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Input 
                  placeholder="Your Name" 
                  className="text-sm bg-background/50 neon-border font-tech"
                  required 
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="text-sm bg-background/50 neon-border font-tech"
                  required 
                />
              </div>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="text-sm bg-background/50 neon-border font-tech"
                required 
              />
              <Button type="submit" variant="neon" className="w-full py-3">
                <Phone className="w-4 h-4 mr-2 text-black" />
                Call Me Now - Free AI Analysis
              </Button>
            </form>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(true)}
              className="absolute top-2 right-2 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <form onSubmit={handleSubmit} className="flex-1 flex items-center space-x-4 max-w-4xl">
              <Input 
                placeholder="Full Name" 
                className="min-w-[160px] bg-background/50 neon-border font-tech"
                required 
              />
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="min-w-[160px] bg-background/50 neon-border font-tech"
                required 
              />
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="min-w-[180px] bg-background/50 neon-border font-tech"
                required 
              />
              <Button type="submit" variant="neon" className="whitespace-nowrap px-6">
                <Phone className="w-4 h-4 mr-2 text-black" />
                Call Me Now
              </Button>
            </form>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(true)}
              className="ml-3"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-xs text-center text-muted-foreground mt-2">
            AI will call you instantly • Free consultation • No commitment required
          </p>
        </CardContent>
      </Card>
      
      {/* Reopener when minimized */}
      {isMinimized && (
        <div className="fixed bottom-4 right-4">
          <Button
            variant="neon"
            onClick={() => setIsMinimized(false)}
            className="rounded-full w-14 h-14 p-0 animate-pulse-neon"
          >
            <Phone className="w-6 h-6" />
          </Button>
        </div>
      )}
    </div>
  );
};