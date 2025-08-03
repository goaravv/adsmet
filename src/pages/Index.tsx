import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ClientLogos } from "@/components/ClientLogos";
import { VideoSection } from "@/components/VideoSection";
import { TrustedByExperts } from "@/components/TrustedByExperts";
import { CalendarSection } from "@/components/CalendarSection";
import { PricingSection } from "@/components/PricingSection";
import { StickyFooterCTA } from "@/components/StickyFooterCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 md:pt-20">
        <HeroSection />
        <ClientLogos />
        <VideoSection />
        <TrustedByExperts />
        <CalendarSection />
        <PricingSection />
        <StickyFooterCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
