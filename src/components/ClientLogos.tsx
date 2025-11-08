import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.png";
import event3 from "@/assets/event-3.png";
import event4 from "@/assets/event-4.png";
import event5 from "@/assets/event-5.png";
import event6 from "@/assets/event-6.png";
import event7 from "@/assets/event-7.png";
import event8 from "@/assets/event-8.png";
import event9 from "@/assets/event-9.png";

export const ClientLogos = () => {
  const logos = [
    "The Wild Verve", "Digvijay Architect", "Maya Biotech India", "Pari Match", 
    "Devika Foods", "Fastocart", "Fashna", "Edunial Infotech Group", 
    "Gamp", "Smart AC Solutions", "Nature Roar Hotel", "The Morning Crypto"
  ];

  const eventImages = [
    event1, event2, event3, event4, event5, event6, event7, event8, event9
  ];

  return (
    <section className="py-16 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-heading font-semibold text-center neon-text">
          Brands That Trust Us
        </h2>
        <p className="text-center text-muted-foreground mt-2 font-medium">
          Join industry leaders who trust AdsMet for their growth
        </p>
      </div>
      
      <div className="relative">
        {/* First Row - Brands */}
        <div className="flex animate-slide-logo mb-4">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-4 bg-card/80 rounded-lg neon-border min-w-[200px] text-center"
            >
              <span className="font-tech font-bold text-lg text-foreground">
                {logo}
              </span>
            </div>
          ))}
        </div>
        
        {/* Second Row - Event Images */}
        <div className="flex animate-slide-logo" style={{animationDirection: 'reverse'}}>
          {[...eventImages, ...eventImages, ...eventImages].map((image, index) => (
            <div
              key={`event-${index}`}
              className="flex-shrink-0 mx-4 md:mx-8 min-w-[150px] w-[150px] h-[150px] md:min-w-[200px] md:w-[200px] md:h-[200px] rounded-lg overflow-hidden neon-border"
            >
              <img 
                src={image} 
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
                style={{
                  filter: 'grayscale(100%) sepia(1) hue-rotate(200deg) saturate(2) brightness(0.8)',
                  border: '2px solid hsl(var(--accent))'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};