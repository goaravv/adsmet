import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyFooterCTA } from "@/components/StickyFooterCTA";
import { motion } from "framer-motion";

const Disclaimer = () => {
  // SEO: Title, description, canonical
  useEffect(() => {
    document.title = "Disclaimer | AdsMet.com / AI-Driven Meta Ads Agency";

    const metaDescContent = "Understand the terms, responsibilities, and limitations of using AdsMet.com’s AI-driven Meta Ads services for scaling your campaigns.";
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    if (metaDesc) metaDesc.content = metaDescContent;

    // Canonical
    const canonicalHref = `${window.location.origin}/disclaimer/`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <article className="container mx-auto px-4 py-12 md:py-16 text-foreground">
          <motion.h1
            className="text-4xl font-tech font-bold mb-8 text-center text-accent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Website Disclaimer
          </motion.h1>

          <motion.section
            className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              The information provided by AdsMet ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.
            </p>

            <h2 className="text-2xl font-semibold text-accent">1. External Links Disclaimer</h2>
            <p>
              This website may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy or reliability by us.
            </p>

            <h2 className="text-2xl font-semibold text-accent">2. Professional Disclaimer</h2>
            <p>
              AdsMet is an AI-Driven Meta Ads Agency. While we share advertising strategies, campaign tips, and marketing insights, such information is for educational purposes only and should not be considered professional legal, financial, or marketing advice. You should consult with a qualified professional before acting on any information found on this site.
            </p>

            <h2 className="text-2xl font-semibold text-accent">3. Limitation of Liability</h2>
            <p>
              Under no circumstances shall AdsMet be liable for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided. Your use of the site and reliance on any information is solely at your own risk.
            </p>

            <p>
              If you have any questions about this Disclaimer, please contact us at support@adsmet.com.
            </p>
          </motion.section>
        </article>
        <StickyFooterCTA />
        <Footer />
      </main>
    </div>
  );
};

export default Disclaimer;
