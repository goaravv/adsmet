import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Zap } from "lucide-react";

export const CalendarSection = () => {
  return (
    <section className="py-20 gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-tech font-bold mb-4">
              <span className="text-foreground">Book Your</span>{" "}
              <span className="neon-text">Free Consultation</span>{" "}
              <span className="text-foreground">Now</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a strategic session with our AI and human experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="neon-border bg-card/90">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center neon-border mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-tech font-bold mb-2">AI Analysis</h3>
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
                <h3 className="font-tech font-bold mb-2">30-Min Strategy</h3>
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
                <h3 className="font-tech font-bold mb-2">Implementation Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Custom roadmap with timeline and expected results
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Calendly Widget Placeholder */}
          <Card className="neon-border bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Calendar className="w-16 h-16 mx-auto text-accent" />
                  <h3 className="text-2xl font-tech font-bold">Calendly Widget</h3>
                  <p className="text-muted-foreground max-w-md">
                    Integration point for your Calendly booking widget. 
                    Users can select available times directly here.
                  </p>
                  <Button variant="neon" className="mt-4">
                    Book Free Strategy Call
                  </Button>
                </div>
              </div>
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