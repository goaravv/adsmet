import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ChevronUp, ChevronDown, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const StickyFooterCTA = () => {
  // Hidden by default; open via left-corner arrow. Not sticky unless opened.
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const leadData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: "Sticky Footer CTA",
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch("https://hook.eu2.make.com/lxgvp6776rnthapza5wvurytv8s4hq1g", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });

      toast({
        title: "Request Submitted Successfully!",
        description: "Your information has been sent. We'll call you within 30 seconds!",
      });

      setFormData({ name: "", phone: "", email: "" });
      // Auto-hide after successful submit
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle arrow - always visible, bottom-left */}
      <div className="fixed bottom-4 left-4 z-[100]">
        <Button
          variant={isOpen ? "outline" : "neon"}
          size="icon"
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-full bg-background/80 backdrop-blur-md neon-border"
          aria-label={isOpen ? "Hide lead form" : "Open lead form"}
        >
          {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
        </Button>
      </div>

      {/* Lead form panel - appears above everything when opened (including ElevenLabs) */}
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-300">
          <Card className="relative mx-2 md:mx-4 mb-2 md:mb-4 neon-border bg-card/98 backdrop-blur-md">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close lead form"
              className="absolute top-2 right-2 rounded-full bg-background/80 backdrop-blur-md neon-border"
            >
              <X className="w-4 h-4" />
            </Button>
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
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="text-sm bg-background/50 neon-border font-tech"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="text-sm bg-background/50 neon-border font-tech"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Button type="submit" variant="neon" className="w-full py-3" disabled={isLoading}>
                    <Phone className="w-4 h-4 mr-2 text-black" />
                    {isLoading ? "Submitting..." : "Call Me Now - Free AI Analysis"}
                  </Button>
                </form>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between w-full">
                <form onSubmit={handleSubmit} className="flex-1 flex items-center gap-2 lg:gap-3 w-full">
                  <Input
                    placeholder="Full Name"
                    className="flex-1 min-w-0 bg-background/50 neon-border font-tech"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="flex-1 min-w-0 bg-background/50 neon-border font-tech"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 min-w-0 bg-background/50 neon-border font-tech"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Button type="submit" variant="neon" className="whitespace-nowrap px-4 lg:px-6 py-2 flex-shrink-0" disabled={isLoading}>
                    <Phone className="w-4 h-4 mr-2 text-black" />
                    {isLoading ? "Submitting..." : "Call Me Now"}
                  </Button>
                </form>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-2">
                AI will call you instantly • Free consultation • No commitment required
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};
