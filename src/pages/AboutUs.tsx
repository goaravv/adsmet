import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyFooterCTA } from "@/components/StickyFooterCTA";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";

const AboutUs = () => {
  const metrics = [
    { label: "ROAS", value: 5.8, suffix: "x" },
    { label: "CTR", value: 3.4, suffix: "%" },
    { label: "Spend", value: 1250, prefix: "$" },
  ];

  // SEO: Title, description, canonical
  useEffect(() => {
    document.title = "About AdsMet.com / Meta Ads AI Driven Agency";

    const metaDescContent = "Let’s explore the world of AdsMet Backend Team and how your ads get multiple X growth with AI-driven Meta Ads.";
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    if (metaDesc) metaDesc.content = metaDescContent;

    // Canonical
    const canonicalHref = `${window.location.origin}/about-us/`;
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
        <article className="container mx-auto px-4 space-y-16">
          {/* Hero Section */}
          <motion.section
            className="text-center py-12 md:py-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-tech font-bold text-foreground">
              <span className="text-accent">About Us</span>
            </h1>
          </motion.section>

          {/* About AdsMet Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl bg-transparent">
            {/* Left Column */}
            <motion.div
              className="flex flex-col justify-center space-y-4 text-foreground"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-tech font-bold">About AdsMet</h2>
              <p className="leading-relaxed text-muted-foreground">
                AdsMet is revolutionizing digital advertising with AI-driven insights, optimizing ad spend, and delivering unmatched Return on Ad Spend (ROAS). Our platform seamlessly integrates with your campaigns, ensuring you get the most value for every dollar spent.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="p-6 rounded-xl flex flex-col space-y-6 border bg-card/90 border-accent"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between text-foreground">
                <span className="font-medium">Meta Ads Manager Clone</span>
                <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                  <Sparkles size={14} />
                  <span>AI Integrated</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-lg text-center border bg-background/60 border-accent text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="text-2xl font-tech font-bold">{m.prefix || ''}{m.value}{m.suffix || ''}</div>
                    <div className="text-xs text-accent">{m.label}</div>
                  </motion.div>
                ))}
              </div>

              <div>
                <div className="flex items-center mb-2 text-sm font-medium text-foreground">
                  Growth
                  <TrendingUp className="ml-1" size={16} />
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden border border-accent bg-background/60">
                  <motion.div
                    className="h-3 bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* About the Founder Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl">
            {/* Left Column with Image */}
            <motion.div
              className="rounded-xl overflow-hidden border border-accent"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://rankeey.com/wp-content/uploads/2024/06/Digital-Marketing-Professionals-at-Google-central-Live-event.jpg"
                alt="Founder at event speaking about AI-driven Meta Ads"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Right Column with Founder Info */}
            <motion.div
              className="flex flex-col justify-center space-y-4 p-6 rounded-xl border bg-card/90 border-accent text-foreground"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-tech font-bold text-accent">About the Founder</h2>
              <p className="text-muted-foreground">
                Hi, I'm Gaurav Sharma — the driving force behind AdsMet.com, an AI-powered Meta Ads Agency. With over 6 years in the digital marketing arena, I’ve scaled multiple projects to achieve triple their revenue and maintain a consistent 2–3x ROAS. My mission is to blend human creativity with AI precision for exceptional advertising results.
              </p>
            </motion.div>
          </section>
        </article>
        <StickyFooterCTA />
        <Footer />
      </main>
    </div>
  );
};

export default AboutUs;
