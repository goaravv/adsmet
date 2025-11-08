import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-darker py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-heading font-semibold neon-text mb-4">
                About AdsMet
              </h3>
              <p className="text-muted-foreground mb-4 font-medium">
                AI-driven Performance Marketing agency delivering guaranteed results 
                with transparent pricing and instant response through Google Ads and Meta Ads.
              </p>
              <div className="space-y-2 text-sm font-medium">
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
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about-us" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/terms-and-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
                <li><Link to="/legal-policies" className="hover:text-accent transition-colors">Legal Policies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Connect</h4>
              <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                <a href="https://www.instagram.com/adsmet_agency/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={18} /></a>
                <a href="https://www.facebook.com/adsmet.agency" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook size={18} /></a>
                <a href="https://www.youtube.com/@adsmet_agency" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-accent transition-colors"><Youtube size={18} /></a>
                <a href="https://x.com/AdsMet_Agency" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-accent transition-colors"><Twitter size={18} /></a>
                <a href="https://www.linkedin.com/company/108145734/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin size={18} /></a>
              </div>
              <Link to="/#free-consultation">
                <Button variant="call" className="w-full">Call me now</Button>
              </Link>
            </div>
          </div>
          
          <Separator className="bg-border mb-8" />
          
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 AdsMet.agency – All Rights Reserved
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-end">
              <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-accent transition-colors">Terms & Conditions</Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/disclaimer" className="text-muted-foreground hover:text-accent transition-colors">Disclaimer</Link>
              <Link to="/cookie-policy" className="text-muted-foreground hover:text-accent transition-colors">Cookie Policy</Link>
              <Link to="/legal-policies" className="text-muted-foreground hover:text-accent transition-colors">Legal Policies</Link>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              Results may vary. Money-back guarantee applies only if zero leads are generated within the first 30 days. 
              AdsMet is not affiliated with Meta Platforms, Inc. or Google LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};