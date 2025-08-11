import React, { useEffect, useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Data types
interface StatItem {
  title: string;
  value: string;
}
interface ChartPoint {
  date: string;
  leads: number;
}
interface CaseStudyItem {
  stats: StatItem[];
  chartData: ChartPoint[];
  description: string;
}
const CASE_STUDIES: CaseStudyItem[] = [{
  stats: [{
    title: "Results (Leads)",
    value: "12,303"
  }, {
    title: "CTR",
    value: "3.25%"
  }, {
    title: "Cost Per Lead",
    value: "₹7.81"
  }],
  chartData: [{
    date: "Jan 29",
    leads: 30
  }, {
    date: "Feb 5",
    leads: 45
  }, {
    date: "Feb 12",
    leads: 55
  }, {
    date: "Feb 19",
    leads: 70
  }, {
    date: "Feb 26",
    leads: 40
  }, {
    date: "Mar 5",
    leads: 60
  }, {
    date: "Mar 12",
    leads: 80
  }],
  description: "Our insurance campaign generated over 12k leads at just ₹7.81 per lead, using precise audience targeting and engaging creatives for maximum ROI."
}, {
  stats: [{
    title: "On-Facebook Leads",
    value: "3,164"
  }, {
    title: "Per Lead Cost",
    value: "$3.44"
  }, {
    title: "Amount Spent",
    value: "$10,884.16"
  }],
  chartData: [{
    date: "Oct 8",
    leads: 10
  }, {
    date: "Jul 17",
    leads: 20
  }, {
    date: "Apr 25",
    leads: 35
  }, {
    date: "Feb 1",
    leads: 25
  }, {
    date: "Nov 8",
    leads: 40
  }],
  description: "This Facebook campaign achieved 3,164 leads with a cost per lead 12% lower than similar ad sets."
}, {
  stats: [{
    title: "Page Likes",
    value: "56,532"
  }, {
    title: "Reach",
    value: "3,742,712"
  }, {
    title: "Impressions",
    value: "7,696,578"
  }],
  chartData: [{
    date: "Sep 30",
    leads: 500
  }, {
    date: "Jan 21",
    leads: 1200
  }, {
    date: "May 13",
    leads: 1500
  }, {
    date: "Sep 3",
    leads: 1700
  }, {
    date: "Mar 22",
    leads: 2000
  }],
  description: "This promotional campaign drove over 56k page likes and reached 3.7 million users, generating nearly 7.7 million impressions."
}, {
  stats: [{
    title: "Video Views",
    value: "1,234,567"
  }, {
    title: "Engagement",
    value: "890,123"
  }, {
    title: "Shares",
    value: "45,678"
  }],
  chartData: [{
    date: "Week 1",
    leads: 200000
  }, {
    date: "Week 2",
    leads: 300000
  }, {
    date: "Week 3",
    leads: 250000
  }, {
    date: "Week 4",
    leads: 350000
  }],
  description: "Our video campaign achieved over 1.2M views with strong engagement and share metrics, boosting brand awareness significantly."
}];
export const CaseStudiesSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate every 3s, pause on hover
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex(i => (i + 1) % CASE_STUDIES.length), 3000);
    return () => clearInterval(t);
  }, [paused]);
  const current = useMemo(() => CASE_STUDIES[index], [index]);
  return <section id="case-studies" aria-labelledby="case-studies-heading" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 id="case-studies-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Client Campaign <span className="text-[#1f8fff]">Case Studies</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real results from AI-optimized Meta Ads campaigns across lead gen, engagement, and awareness.
          </p>
        </header>

        <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden animate-fade-in" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 p-4 md:p-6">
            {current.stats.map((s, i) => <div key={i} className="rounded-lg border border-border/60 bg-card/50 p-4 text-center">
                <h3 className="text-xs md:text-sm font-medium text-foreground/80">{s.title}</h3>
                <p className="text-xl md:text-2xl font-bold mt-1 text-slate-50">{s.value}</p>
              </div>)}
          </div>

          {/* Main area */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6">
            {/* Chart */}
            <div className="md:col-span-2 rounded-lg border border-border/60 p-4 bg-[#1e1e1e]/50">
              <h3 className="text-base md:text-lg font-semibold mb-3">Performance Overview</h3>
              <div className="h-56 md:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={current.chartData} margin={{
                  left: 4,
                  right: 8,
                  top: 8,
                  bottom: 0
                }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.25)" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    color: "hsl(var(--card-foreground))"
                  }} />
                    <Line type="monotone" dataKey="leads" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Description */}
            <aside className="rounded-lg border border-border/60 bg-card/50 p-4">
              <h3 className="text-base md:text-lg font-semibold mb-2">Case Study</h3>
              <p className="text-sm text-muted-foreground">{current.description}</p>
            </aside>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 pb-5">
            {CASE_STUDIES.map((_, i) => <button key={i} aria-label={`Go to case study ${i + 1}`} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-muted"}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default CaseStudiesSection;