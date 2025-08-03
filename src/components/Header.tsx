import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Header = () => {
  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="font-tech font-bold text-xl md:text-2xl neon-text">
            AdsMet.com
          </div>
          
          {/* Call Button */}
          <Button 
            onClick={scrollToForm}
            variant="neon" 
            className="text-sm md:text-base px-4 md:px-6"
          >
            <Phone className="w-4 h-4 mr-2 text-black" />
            Call Me Now
          </Button>
        </div>
      </div>
    </header>
  );
};