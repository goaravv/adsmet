import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  company: string;
  review: string;
  rating: number;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    review: "The AI-driven campaigns transformed our marketing ROI. We saw a 320% increase in qualified leads within the first month. Their team is incredibly responsive and data-driven.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "GrowthScale Solutions",
    review: "Outstanding results! The performance marketing strategies they implemented reduced our cost per acquisition by 65% while doubling our conversion rate. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Digital Ventures Ltd.",
    review: "Professional, efficient, and results-oriented. Their AI optimization helped us scale our campaigns profitably. Best marketing agency we've worked with.",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Innovate Marketing Co.",
    review: "The team's expertise in both Google Ads and Meta Ads is unmatched. They helped us achieve a 4.2x ROAS consistently. Game changer for our business!",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Anderson",
    company: "E-Commerce Plus",
    review: "Incredible attention to detail and transparent reporting. We finally found a partner who actually cares about our success. Our revenue has tripled since partnering with them.",
    rating: 5
  }
];

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop: auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold tracking-tight text-foreground mb-4">
            <span className="text-foreground">What Our Clients</span>{" "}
            <span className="neon-text">Say About Us</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground font-medium">
            Real reviews from businesses we've helped grow
          </p>
        </header>

        {/* Desktop: Sliding carousel */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {REVIEWS.map((review) => (
                <div key={review.id} className="min-w-full px-4">
                  <Card className="relative border-2 border-accent/40 bg-gradient-to-br from-[hsl(220,70%,10%)] via-[hsl(220,80%,8%)] to-[hsl(220,90%,6%)] p-8 md:p-10 shadow-[0_0_30px_hsl(210,100%,56%,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-[hsl(280,100%,50%)]/5 pointer-events-none rounded-2xl"></div>
                    
                    <div className="relative">
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[hsl(40,100%,60%)] text-[hsl(40,100%,60%)]" />
                        ))}
                      </div>
                      
                      <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-6">
                        "{review.review}"
                      </p>
                      
                      <div className="border-t border-accent/20 pt-4">
                        <p className="font-heading font-semibold text-foreground text-lg">{review.name}</p>
                        <p className="text-muted-foreground font-medium">{review.company}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? "bg-accent scale-125 shadow-[0_0_8px_hsl(var(--accent))]" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Stacked with fade animation */}
        <div className="md:hidden space-y-6 max-w-xl mx-auto">
          {REVIEWS.map((review, index) => (
            <Card 
              key={review.id} 
              className="border-2 border-accent/40 bg-gradient-to-br from-[hsl(220,70%,10%)] via-[hsl(220,80%,8%)] to-[hsl(220,90%,6%)] p-6 shadow-[0_0_20px_hsl(210,100%,56%,0.2)] animate-fade-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-[hsl(280,100%,50%)]/5 pointer-events-none rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(40,100%,60%)] text-[hsl(40,100%,60%)]" />
                  ))}
                </div>
                
                <p className="text-base text-foreground font-medium leading-relaxed mb-4">
                  "{review.review}"
                </p>
                
                <div className="border-t border-accent/20 pt-3">
                  <p className="font-heading font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground font-medium">{review.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};