import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyFooterCTA } from "@/components/StickyFooterCTA";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  // SEO: Title, description, canonical
  useEffect(() => {
    document.title = "Privacy Policy | AdsMet.agency / AI-Driven Meta Ads Agency";

    const metaDescContent = "Discover how AdsMet.agency protects your data while delivering AI-driven Meta Ads that scale your business with precision and performance.";
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    if (metaDesc) metaDesc.content = metaDescContent;

    // Canonical
    const canonicalHref = `${window.location.origin}/privacy-policy/`;
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
            Privacy Policy
          </motion.h1>

          <motion.section
            className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              At AdsMet, an AI-Driven Meta Ads Agency, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
            </p>

            <h2 className="text-2xl font-semibold text-accent">1. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, billing details, and advertising account data to provide and improve our services.
            </p>

            <h2 className="text-2xl font-semibold text-accent">2. How We Use Your Information</h2>
            <p>
              Your data is used to deliver AI-powered advertising solutions, optimize ad campaigns, communicate with you, and comply with legal requirements.
            </p>

            <h2 className="text-2xl font-semibold text-accent">3. Data Security</h2>
            <p>
              We implement industry-standard measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-accent">4. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal data. We may share information with trusted partners or service providers as needed to operate our business and deliver our services.
            </p>

            <h2 className="text-2xl font-semibold text-accent">5. Changes to This Policy</h2>
            <p>
              AdsMet may update this Privacy Policy periodically. Changes will be posted on our website, and continued use of our services constitutes acceptance of the updated policy.
            </p>

            <p>
              If you have questions regarding this Privacy Policy, please contact us at support@adsmet.agency.
            </p>
          </motion.section>
        </article>
        <StickyFooterCTA />
        <Footer />
      </main>
    </div>
  );
};

export default PrivacyPolicy;
