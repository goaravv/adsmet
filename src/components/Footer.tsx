import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-darker py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-tech font-bold neon-text mb-4">
                AdsMet.com
              </h3>
              <p className="text-muted-foreground mb-4">
                AI-driven Meta Ads agency delivering guaranteed results 
                with transparent pricing and instant response.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full neon-glow"></div>
                  <span>100% Lead Generation Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full neon-glow"></div>
                  <span>AI + Human Collaboration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full neon-glow"></div>
                  <span>Instant AI Call Agent</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-tech font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Meta Ads Management</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">AI Campaign Optimization</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Lead Generation</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Performance Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-tech font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-border mb-8" />
          
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 AdsMet.com – All Rights Reserved
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              Results may vary. Money-back guarantee applies only if zero leads are generated within the first 30 days. 
              AdsMet is not affiliated with Meta Platforms, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};