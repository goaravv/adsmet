import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyFooterCTA } from "@/components/StickyFooterCTA";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  // SEO: Title, description, canonical
  useEffect(() => {
    document.title = "Cookie Policy | AdsMet.agency / AI-Driven Meta Ads Agency";

    const metaDescContent = "Learn how AdsMet.agency uses cookies to enhance your browsing experience and optimize AI-driven Meta Ads performance.";
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    if (metaDesc) metaDesc.content = metaDescContent;

    // Canonical
    const canonicalHref = `${window.location.origin}/cookie-policy/`;
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
            Cookie Policy
          </motion.h1>

          <motion.section
            className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              This Cookie Policy explains how AdsMet ("we," "us," or "our"), an AI-Driven Meta Ads Agency, uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control our use of them.
            </p>

            <h2 className="text-2xl font-semibold text-accent">1. What Are Cookies?</h2>
            <p>
              Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used to make websites work, improve efficiency, and provide reporting information.
            </p>

            <h2 className="text-2xl font-semibold text-accent">2. How We Use Cookies</h2>
            <p>
              We use cookies to improve your browsing experience, analyze site traffic, personalize content, and assist with our AI-powered ad optimization tools.
            </p>

            <h2 className="text-2xl font-semibold text-accent">3. Types of Cookies We Use</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for our website to function properly.</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website.</li>
              <li><strong>Targeting Cookies:</strong> Used to deliver relevant ads and measure campaign performance.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-accent">4. Managing Cookies</h2>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. Disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-semibold text-accent">5. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.
            </p>

            <p>
              If you have questions about our Cookie Policy, please contact us at support@adsmet.agency.
            </p>
          </motion.section>
        </article>
        <StickyFooterCTA />
        <Footer />
      </main>
    </div>
  );
};

export default CookiePolicy;
