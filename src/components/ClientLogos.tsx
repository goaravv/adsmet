export const ClientLogos = () => {
  const logos = [
    "Netflix", "Spotify", "Tesla", "Airbnb", "Uber", "Nike", "Apple", "Google",
    "Microsoft", "Amazon", "Meta", "Twitter", "LinkedIn", "Slack", "Zoom"
  ];

  return (
    <section className="py-16 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-tech font-bold text-center neon-text">
          Brands That Trust Us
        </h2>
        <p className="text-center text-muted-foreground mt-2">
          Join industry leaders who trust AdsMet for their growth
        </p>
      </div>
      
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="flex animate-slide-logo mb-4">
          {[...logos, ...logos].map((logo, index) => (
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
        
        {/* Second Row - Right to Left */}
        <div className="flex animate-slide-logo" style={{animationDirection: 'reverse'}}>
          {[...logos.reverse(), ...logos].map((logo, index) => (
            <div
              key={`${logo}-rev-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-4 bg-card/80 rounded-lg neon-border min-w-[200px] text-center"
            >
              <span className="font-tech font-bold text-lg text-foreground">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};