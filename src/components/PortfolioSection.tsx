import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import googleAds1 from "@/assets/google-ads-1.png";
import googleAds2 from "@/assets/google-ads-2.png";
import googleAds3 from "@/assets/google-ads-3.png";
import googleAds4 from "@/assets/google-ads-4.png";
import googleAds5 from "@/assets/google-ads-5.png";
import googleAds6 from "@/assets/google-ads-6.png";
import metaAds1 from "@/assets/meta-ads-1.png";
import metaAds2 from "@/assets/meta-ads-2.png";

import { Badge } from "@/components/ui/badge";

interface PortfolioItem {
  image: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const googleAdsPortfolio: PortfolioItem[] = [
  {
    image: googleAds1,
    title: "Retail Performance Campaign",
    description: "Delivered 139 conversions with a 0.24% conversion rate at ₹367 cost per conversion, optimizing ₹51.1K ad spend for maximum ROI.",
    metrics: [
      { label: "Conversions", value: "139" },
      { label: "Cost", value: "₹51.1K" },
      { label: "Conv. Rate", value: "0.24%" },
    ],
  },
  {
    image: googleAds2,
    title: "E-commerce Conversion Campaign",
    description: "Achieved 6.67K conversions across multiple ad sets with optimized spend of ₹801K, delivering strong performance metrics.",
    metrics: [
      { label: "Conversions", value: "6.67K" },
      { label: "Ad Spend", value: "₹801K" },
      { label: "Impressions", value: "15.2M" },
    ],
  },
  {
    image: googleAds3,
    title: "Lead Generation Campaign",
    description: "Generated 97 qualified leads with efficient budget allocation, maintaining excellent cost per conversion at $4.78K total spend.",
    metrics: [
      { label: "Leads", value: "97" },
      { label: "Total Cost", value: "$4.78K" },
      { label: "Clicks", value: "873" },
    ],
  },
  {
    image: googleAds4,
    title: "High-Volume Conversion Campaign",
    description: "Delivered 438 conversions with strategic bidding and optimized ad spend of $5.67K across multiple impression streams.",
    metrics: [
      { label: "Conversions", value: "438" },
      { label: "Ad Spend", value: "$5.67K" },
      { label: "Impressions", value: "135K" },
    ],
  },
];

const metaAdsPortfolio: PortfolioItem[] = [
  {
    image: metaAds1,
    title: "Insurance Lead Generation",
    description: "Generated 12,303 on-Facebook leads at just ₹7.81 per lead with a total spend of ₹96,032.38, achieving exceptional ROI for insurance campaigns.",
    metrics: [
      { label: "Leads", value: "12,303" },
      { label: "Cost/Lead", value: "₹7.81" },
      { label: "Total Spend", value: "₹96K" },
    ],
  },
  {
    image: metaAds2,
    title: "Messaging Conversations Campaign",
    description: "Started 2,555 messaging conversations at ₹21.71 per conversation with ₹55,472.35 total spend, driving direct customer engagement.",
    metrics: [
      { label: "Conversations", value: "2,555" },
      { label: "Cost/Conversation", value: "₹21.71" },
      { label: "Total Spend", value: "₹55.5K" },
    ],
  },
  {
    image: googleAds5,
    title: "Multi-Campaign Sales Strategy",
    description: "Managed 21 active campaigns with optimized bidding strategies, achieving consistent results across website purchases with detailed performance tracking.",
    metrics: [
      { label: "Active Campaigns", value: "21" },
      { label: "Campaign Type", value: "Website Purchase" },
      { label: "Strategy", value: "Highest Volume" },
    ],
  },
  {
    image: googleAds6,
    title: "Car Detailing & PPF Campaigns",
    description: "Generated 47 high-quality leads for ceramic & PPF video ads at ₹153.91 per lead, with strong reach of 52,169 impressions.",
    metrics: [
      { label: "Leads", value: "47" },
      { label: "Cost/Lead", value: "₹153.91" },
      { label: "Impressions", value: "52.2K" },
    ],
  },
];

export const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("google");

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold">
              <span className="text-foreground">Our Client</span>{" "}
              <span className="neon-text">Success Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
              Real campaign results from our Google Ads and Meta Ads performance marketing strategies
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 h-12">
              <TabsTrigger value="google" className="text-base font-medium">
                Google Ads
              </TabsTrigger>
              <TabsTrigger value="meta" className="text-base font-medium">
                Meta Ads
              </TabsTrigger>
            </TabsList>

            {/* Google Ads Content */}
            <TabsContent value="google" className="space-y-8">
              {googleAdsPortfolio.map((item, index) => (
                <Card key={index} className="neon-border bg-card/90 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Screenshot */}
                      <div className="relative bg-muted/20 p-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Details */}
                      <div className="p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-heading font-semibold mb-3 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 font-medium leading-relaxed">
                          {item.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          {item.metrics.map((metric, idx) => (
                            <div key={idx} className="space-y-1">
                              <p className="text-xs text-muted-foreground font-medium">
                                {metric.label}
                              </p>
                              <p className="text-xl font-heading font-semibold neon-text">
                                {metric.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Meta Ads Content */}
            <TabsContent value="meta" className="space-y-8">
              {metaAdsPortfolio.map((item, index) => (
                <Card key={index} className="neon-border bg-card/90 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Screenshot */}
                      <div className="relative bg-muted/20 p-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Details */}
                      <div className="p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-heading font-semibold mb-3 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 font-medium leading-relaxed">
                          {item.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          {item.metrics.map((metric, idx) => (
                            <div key={idx} className="space-y-1">
                              <p className="text-xs text-muted-foreground font-medium">
                                {metric.label}
                              </p>
                              <p className="text-xl font-heading font-semibold neon-text">
                                {metric.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
