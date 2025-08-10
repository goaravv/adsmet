import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyFooterCTA } from "@/components/StickyFooterCTA";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  // SEO: Title, description, canonical
  useEffect(() => {
    document.title = "Terms & Conditions | AdsMet.com / AI-Driven Meta Ads Agency";

    const metaDescContent = "Read AdsMet.com’s Terms & Conditions to know your rights, responsibilities, and guidelines when using our AI-powered Meta Ads services.";
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    if (metaDesc) metaDesc.content = metaDescContent;

    // Canonical
    const canonicalHref = `${window.location.origin}/terms-and-conditions/`;
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
            Terms and Conditions
          </motion.h1>

          <motion.section
            className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Welcome to AdsMet, an AI-Driven Meta Ads Agency. By accessing or using our services, you agree to be bound by the following terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold text-accent">1. Services</h2>
            <p>
              AdsMet provides AI-enhanced advertising services that help you optimize your Meta ad campaigns for better performance, ROAS, and audience engagement.
            </p>

            <h2 className="text-2xl font-semibold text-accent">2. User Responsibilities</h2>
            <p>
              You agree to provide accurate account details, respect intellectual property rights, and comply with applicable advertising laws and Meta platform policies.
            </p>

            <h2 className="text-2xl font-semibold text-accent">3. Payment and Billing</h2>
            <p>
              All service fees will be clearly outlined in your agreement. Late payments may result in suspension or termination of services.
            </p>

            <h2 className="text-2xl font-semibold text-accent">4. Limitation of Liability</h2>
            <p>
              While AdsMet uses AI to enhance performance, results may vary. We are not liable for any losses beyond the scope of our service agreement.
            </p>

            <h2 className="text-2xl font-semibold text-accent">5. Changes to Terms</h2>
            <p>
              We may update these Terms and Conditions from time to time. Continued use of our services means you accept the updated terms.
            </p>

            <p>
              If you have questions about these terms, please contact us at support@adsmet.com.
            </p>
          </motion.section>
        </article>
        <StickyFooterCTA />
        <Footer />
      </main>
    </div>
  );
};

export default TermsAndConditions;
