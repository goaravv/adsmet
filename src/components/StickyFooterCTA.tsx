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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger Vapi AI call
    console.log("Sticky form submitted - trigger Vapi AI call");
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${isMinimized ? 'translate-y-full' : 'translate-y-0'}`}>
      <Card className="mx-4 mb-4 neon-border bg-card/95 backdrop-blur-md">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <form onSubmit={handleSubmit} className="flex-1 flex items-center space-x-3">
              <Input 
                placeholder="Name" 
                className="max-w-[120px] bg-background/50 neon-border"
                required 
              />
              <Input 
                type="tel" 
                placeholder="Phone" 
                className="max-w-[140px] bg-background/50 neon-border"
                required 
              />
              <Input 
                type="email" 
                placeholder="Email" 
                className="max-w-[160px] bg-background/50 neon-border"
                required 
              />
              <Button type="submit" variant="neon" className="whitespace-nowrap">
                <Phone className="w-4 h-4 mr-2" />
                📞 Call Me Now
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