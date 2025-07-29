import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TrustedByExperts = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CMO, TechFlow",
      image: "👩‍💼",
      quote: "AdsMet's AI increased our lead quality by 340% in just 30 days. The ROI is incredible.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      role: "Founder, GrowthLab",
      image: "👨‍💻",
      quote: "The instant AI call feature converted 85% more leads than our previous system.",
      rating: 5
    },
    {
      name: "Emily Zhang",
      role: "VP Marketing, InnovateCorp", 
      image: "👩‍🚀",
      quote: "Finally, an agency that delivers on their promises. 100% transparency, 100% results.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Title */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-tech font-bold">
              <span className="text-foreground">Trusted by</span>
              <br />
              <span className="neon-text">Industry Experts</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              See why businesses rely on AdsMet's AI performance and 
              human expertise to scale their revenue.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-tech font-bold neon-text">340%</div>
                <div>
                  <p className="font-semibold">Average Lead Quality Increase</p>
                  <p className="text-sm text-muted-foreground">Within first 30 days</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-tech font-bold neon-text">85%</div>
                <div>
                  <p className="font-semibold">Higher Conversion Rate</p>
                  <p className="text-sm text-muted-foreground">With AI call integration</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-tech font-bold neon-text">100%</div>
                <div>
                  <p className="font-semibold">Money-Back Guarantee</p>
                  <p className="text-sm text-muted-foreground">If no leads generated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div className="relative">
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="neon-border bg-card/90 backdrop-blur-sm hover:animate-pulse-neon transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <Quote className="w-5 h-5 text-accent mb-2" />
                        <p className="text-foreground mb-3 italic">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-tech font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};