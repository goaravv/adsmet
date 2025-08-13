import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Header = () => {
  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative bg-background/95 backdrop-blur-sm border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/2e803225-7e5f-48bc-bbd0-2175007a3978.png" 
              alt="AdsMet.com Logo" 
              className="h-10 md:h-12 w-auto"
            />
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