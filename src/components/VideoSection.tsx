export const VideoSection = () => {
  return (
    <section className="py-20 gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Caption */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-tech font-bold">
              <span className="text-foreground">Launching the</span>
              <br />
              <span className="neon-text">Future of Meta Ads</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch how our AI-powered system revolutionizes Meta advertising 
              with real-time optimization, predictive analytics, and automated 
              campaign management.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full neon-glow"></div>
                <span className="font-tech">AI Campaign Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full neon-glow"></div>
                <span className="font-tech">Real-time Performance Tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full neon-glow"></div>
                <span className="font-tech">Automated Lead Qualification</span>
              </div>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative">
            <div className="aspect-video bg-secondary rounded-lg neon-border overflow-hidden animate-pulse-neon">
              {/* Placeholder for video */}
              <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center neon-border">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-tech text-sm text-muted-foreground">
                    Watch Our AI in Action
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/30 rounded-full blur-sm animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full blur-sm animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};