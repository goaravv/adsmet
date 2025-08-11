export const VideoSection = () => {
  return <section className="py-12 md:py-20 gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Caption */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-tech font-bold">
              <span className="text-foreground">Launching the</span>
              <br />
              <span className="neon-text">Future of Meta Ads</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">Watch how our AI-powered system revolutionizes Meta advertising with real-time suggestions, predictive analytics, and automated campaign management and reporting.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full neon-glow"></div>
                <span className="font-tech">AI Campaign Optimization Suggestions</span>
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
            <div className="aspect-video bg-secondary rounded-lg neon-border overflow-hidden">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6qZA5ZT-9IM?si=H9CKVaAwiTGKsGuK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/30 rounded-full blur-sm animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full blur-sm animate-float" style={{
            animationDelay: '1s'
          }}></div>
          </div>
        </div>
      </div>
    </section>;
};