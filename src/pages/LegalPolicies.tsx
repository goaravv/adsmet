import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyFooterCTA } from "@/components/StickyFooterCTA";
import { motion } from "framer-motion";

const LegalPolicies = () => {
  // SEO: Title, description, canonical
  useEffect(() => {
    document.title = "Legal Policies | AdsMet.com / AI-Driven Meta Ads Agency";

    const metaDescContent = "Explore AdsMet.com’s legal policies covering privacy, cookies, disclaimers, and terms for our AI-powered Meta Ads solutions.";
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    if (metaDesc) metaDesc.content = metaDescContent;

    // Canonical
    const canonicalHref = `${window.location.origin}/legal-policies/`;
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
            className="text-4xl font-heading font-semibold mb-8 text-center text-accent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Legal Policies
          </motion.h1>

          <motion.section
            className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-medium">
              These Legal Policies outline the terms, conditions, disclaimers, and privacy commitments of AdsMet ("we," "us," or "our"), an AI-Driven Meta Ads Agency. By accessing or using our services, you agree to be bound by these policies.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-accent">1. Terms and Conditions</h2>
            <p className="font-medium">
              All services provided by AdsMet are subject to our Terms and Conditions, which define your rights and obligations when engaging with our agency. This includes service scope, payment terms, intellectual property rights, and limitations of liability.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-accent">2. Privacy Policy</h2>
            <p className="font-medium">
              We are committed to protecting your privacy. Our Privacy Policy explains how we collect, use, and safeguard your personal information in compliance with applicable laws.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-accent">3. Cookie Policy</h2>
            <p className="font-medium">
              We use cookies to enhance your browsing experience, analyze traffic, and optimize ad performance. You can manage your cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-accent">4. Disclaimer</h2>
            <p className="font-medium">
              All information provided on our website is for general informational purposes only and should not be construed as professional advice. While we strive for accuracy, AdsMet makes no warranties about the completeness or reliability of any content.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-accent">5. Changes to Our Legal Policies</h2>
            <p className="font-medium">
              We may update our Legal Policies periodically. Continued use of our website after changes are posted will constitute your acceptance of the revised policies.
            </p>

            <p className="font-medium">
              For questions regarding our Legal Policies, contact us at support@adsmet.agency.
            </p>
          </motion.section>
        </article>
        <StickyFooterCTA />
        <Footer />
      </main>
    </div>
  );
};

export default LegalPolicies;
