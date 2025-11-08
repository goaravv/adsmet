import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Zap } from "lucide-react";

export const CalendarSection = () => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="free-consultation" className="py-12 md:py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold mb-4">
              <span className="text-foreground">Book Your</span>{" "}
              <span className="neon-text">Free Consultation</span>{" "}
              <span className="text-foreground">Now</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Schedule a strategic session with our AI and human experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="neon-border bg-card/90">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">AI Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Instant campaign audit and optimization recommendations
                </p>
              </CardContent>
            </Card>

            <Card className="neon-border bg-card/90">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">30-Min Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Personalized growth strategy session with our experts
                </p>
              </CardContent>
            </Card>

            <Card className="neon-border bg-card/90">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Implementation Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Custom roadmap with timeline and expected results
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Calendly Widget */}
          <Card className="neon-border bg-card/90">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-lg md:text-xl font-heading font-semibold">Select Your Preferred Time</h3>
              </div>
              
              <div 
                className="calendly-inline-widget bg-background/50 border border-accent/30 rounded-lg overflow-hidden mx-auto" 
                data-url="https://calendly.com/hm-gaurav2001/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{
                  minWidth: '320px',
                  height: '700px',
                  width: '100%',
                  maxWidth: '900px'
                }}
              />
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            No commitment required • 100% Free consultation • Instant AI analysis included
          </p>
        </div>
      </div>
    </section>
  );
};