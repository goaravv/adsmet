import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Zap, TrendingUp, Phone } from "lucide-react";
export const PricingSection = () => {
  const [budget, setBudget] = useState([10000]);
  const [manualBudget, setManualBudget] = useState("10000");
  const currentBudget = budget[0];
  const handleManualBudgetChange = (value: string) => {
    if (value === '' || parseInt(value) >= 1000) {
      const numValue = parseInt(value) || 1000;
      setManualBudget(value);
      setBudget([numValue]);
    }
  };
  const handleSliderChange = (value: number[]) => {
    setBudget(value);
    setManualBudget(value[0].toString());
  };
  const jumpToBudget = (targetBudget: number, packageType: string) => {
    // Update hero form with selected values
    const heroForm = document.getElementById('hero-form');
    if (heroForm) {
      heroForm.scrollIntoView({
        behavior: 'smooth'
      });
      // Set budget and package in hero form
      setTimeout(() => {
        const budgetInput = document.querySelector('input[placeholder="e.g. 5000"]') as HTMLInputElement;
        if (budgetInput) {
          budgetInput.value = targetBudget.toString();
          budgetInput.dispatchEvent(new Event('input', {
            bubbles: true
          }));
        }

        // Set package dropdown by triggering the Select component
        const selectTrigger = document.querySelector('[role="combobox"]') as HTMLElement;
        if (selectTrigger) {
          selectTrigger.click();
          setTimeout(() => {
            const packageOption = document.querySelector(`[data-value="${packageType.toLowerCase()}"]`) as HTMLElement;
            if (packageOption) {
              packageOption.click();
            }
          }, 100);
        }
      }, 500);
    }
  };
  const calculateFee = (percentage: number) => {
    return Math.round(currentBudget * percentage / 100);
  };
  const plans = [{
    title: "Monthly",
    percentage: 20,
    period: "per month",
    features: ["AI Campaign Optimization", "Real-time Performance Monitoring", "Weekly Strategy Calls", "Basic Reporting Dashboard"],
    popular: false
  }, {
    title: "3 Months",
    percentage: 18,
    period: "per month",
    features: ["Everything in Monthly", "Advanced AI Analytics", "Bi-weekly Strategy Calls", "A/B Testing Suite", "Custom Landing Pages"],
    popular: true
  }, {
    title: "6 Months",
    percentage: 15,
    period: "per month",
    features: ["Everything in 3 Months", "Dedicated Account Manager", "Weekly Strategy Calls", "Advanced Conversion Tracking", "Priority Support", "White-Label Reporting"],
    popular: false
  }];
  const faqs = [{
    question: "What makes your agency different from other Meta Ads agencies?",
    answer: "We combine the speed and precision of AI with the strategic insights of human experts. Our AI handles real-time data analysis, bid adjustments, and performance optimization, while our human team ensures creative direction, campaign alignment, and brand voice remain on point."
  }, {
    question: "How does the AI + Human model work in practice?",
    answer: "Our AI constantly monitors ad performance, adjusts targeting, and tests creatives for maximum ROI. Meanwhile, our human specialists review results, refine strategies, and make judgment calls that AI alone can’t—like understanding cultural nuances or reacting to market trends."
  }, {
    question: "Will AI fully replace human decision-making in my campaigns?",
    answer: "No. AI works as a powerful assistant, but human expertise is always in control. The AI suggests, tests, and optimizes, while our team makes the final strategic decisions to keep campaigns aligned with your business goals."
  }, {
    question: "Is AI safe to use for managing my ad budget?",
    answer: "Yes. Our AI operates with guardrails set by our human experts. This means your budget is always managed responsibly, with AI working only within the limits and strategies we define together."
  }, {
    question: "Can you customize campaigns for my business needs?",
    answer: "Absolutely. Our hybrid model ensures campaigns are not only data-driven but also tailored to your brand identity, target audience, and specific objectives."
  }, {
    question: "How quickly can I see results?",
    answer: "AI begins optimizing your ads from day one, so you’ll often see early improvements within the first few days. That said, sustainable, high-ROI campaigns usually take 2–4 weeks to fully mature."
  }, {
    question: "What kind of businesses do you work with?",
    answer: "We work with e-commerce brands, service providers, startups, and established enterprises—any business that wants smarter, faster, and more profitable Meta ad campaigns."
  }, {
    question: "Will I have access to campaign performance data?",
    answer: "Yes. We provide a live dashboard where you can track real-time performance metrics like CTR, ROAS, conversions, and ad spend—so you’re always in the loop."
  }, {
    question: "Do you handle both creative and technical aspects of campaigns?",
    answer: "Yes. Our AI runs split tests to find high-performing creatives, while our human team designs ad visuals, writes compelling copy, and aligns messaging with your brand."
  }, {
    question: "How do I get started?",
    answer: "Simply book a free strategy call. We’ll discuss your goals, analyze your current campaigns (if any), and propose a custom AI + Human ad strategy for you."
  }];
  return <section data-section="pricing" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-6 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-tech font-bold">
              <span className="text-foreground">Choose Your Budget –</span>
              <br />
              <span className="neon-text">Transparent Pricing</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Flexible plans based on your monthly ad spend
            </p>
          </div>

          {/* Budget Slider */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="neon-border bg-card/90">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-tech font-bold mb-2">Monthly Ad Budget</h3>
                    <div className="text-4xl font-tech font-bold neon-text">
                      ${currentBudget.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="px-4 relative">
                      <Input type="number" value={manualBudget} onChange={e => handleManualBudgetChange(e.target.value)} className="text-center text-2xl font-tech font-bold neon-border bg-background/50 pr-16" min="1000" max="100000" step="500" />
                      <div className="absolute right-4 top-0 h-full flex flex-col">
                        <button type="button" onClick={() => {
                        const current = parseInt(manualBudget) || 1000;
                        const newValue = (current + 500).toString();
                        handleManualBudgetChange(newValue);
                      }} className="h-1/2 px-3 text-sm hover:bg-accent/20 border-l border-b border-border rounded-tr-md">
                          ▲
                        </button>
                        <button type="button" onClick={() => {
                        const current = parseInt(manualBudget) || 1000;
                        if (current > 1000) {
                          const newValue = (current - 500).toString();
                          handleManualBudgetChange(newValue);
                        }
                      }} className="h-1/2 px-3 text-sm hover:bg-accent/20 border-l border-border rounded-br-md">
                          ▼
                        </button>
                      </div>
                    </div>
                    <div className="px-4">
                      <Slider value={budget} onValueChange={handleSliderChange} max={100000} min={1000} step={500} className="w-full" />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>$1,000</span>
                        <span>$100,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => <Card key={index} className={`relative ${plan.popular ? 'neon-border animate-pulse-neon' : 'border-border'} bg-card/90 hover:scale-105 transition-all duration-300`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-tech font-bold">
                      MOST POPULAR
                    </div>
                  </div>}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-tech">{plan.title}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-tech font-bold neon-text">
                      ${calculateFee(plan.percentage).toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.percentage}% of ad spend {plan.period}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full neon-glow"></div>
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                  
                  <Button variant={plan.popular ? "neon" : "neonOutline"} className="w-full" onClick={() => jumpToBudget(currentBudget, plan.title.toLowerCase())}>
                    Select Package
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {/* Guarantee Badge */}
          <div className="text-center">
            <Card className="inline-block neon-border bg-card/90">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Shield className="w-8 h-8 text-accent" />
                  <div>
                    <h3 className="font-tech font-bold">💰 100% Money-Back Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      Only applies if no lead is generated at all
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQs Section */}
          <div className="mt-12 md:mt-16">
            <section aria-labelledby="faq-heading" className="max-w-3xl mx-auto">
              <h3 id="faq-heading" className="text-2xl md:text-3xl font-tech font-bold text-foreground text-center mb-6">Frequently Asked Questions</h3>
              <Card className="neon-border bg-card/90">
                <CardContent className="p-4 md:p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => <AccordionItem key={idx} value={`item-${idx + 1}`}>
                        <AccordionTrigger className="text-left">{`${idx + 1}. ${faq.question}`}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </CardContent>
              </Card>
              <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map(({
                  question,
                  answer
                }) => ({
                  "@type": "Question",
                  name: question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: answer
                  }
                }))
              })
            }} />
            </section>
          </div>
        </div>
      </div>
    </section>;
};