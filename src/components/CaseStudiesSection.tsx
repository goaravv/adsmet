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
  return <section id="case-studies" aria-labelledby="case-studies-heading" className="py-12 md:py-20 bg-gradient-to-b from-background to-background/95" style={{ ['--case-line' as any]: '210 81% 51%' }}>
      <div className="container mx-auto px-4">
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 id="case-studies-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold tracking-tight text-foreground mb-4">
            <span className="text-foreground">AI-Optimized Campaign</span>{" "}
            <span className="neon-text">Growth Metrics</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground font-medium">
            Real-time performance data from our AI-powered Google Ads and Meta Ads campaigns
          </p>
        </header>

        <div className="relative max-w-6xl mx-auto rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-[hsl(220,70%,10%)] via-[hsl(220,80%,8%)] to-[hsl(220,90%,6%)] text-card-foreground shadow-[0_0_40px_hsl(210,100%,56%,0.25)] overflow-hidden animate-fade-in backdrop-blur-sm" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-[hsl(280,100%,50%)]/10 pointer-events-none"></div>
          
          {/* Stats */}
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6">
            {current.stats.map((s, i) => <div key={i} className="rounded-xl border-2 border-[hsl(180,100%,56%)] bg-gradient-to-br from-[hsl(220,70%,15%)] to-[hsl(220,80%,12%)] p-4 md:p-5 text-center hover:border-[hsl(180,100%,70%)] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_hsl(180,100%,56%,0.4)]">
                <h3 className="text-xs md:text-sm font-heading font-medium text-[hsl(180,100%,70%)] mb-2">{s.title}</h3>
                <p className="text-2xl md:text-3xl font-heading font-semibold mt-1 text-foreground drop-shadow-[0_0_8px_hsl(180,100%,56%)]">{s.value}</p>
              </div>)}
          </div>

          {/* Main area */}
        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8 p-4 md:p-6">
          {/* Chart */}
          <div className="md:col-span-2 rounded-xl border-2 border-[hsl(180,100%,56%)] bg-gradient-to-br from-[hsl(220,70%,12%)] to-[hsl(220,80%,8%)] p-5 md:p-6 shadow-[0_0_25px_hsl(180,100%,56%,0.4)]">
            <h3 className="text-base md:text-lg font-heading font-semibold mb-4 text-foreground">Performance Overview</h3>
            <div className="h-56 md:h-72 rounded-lg bg-[hsl(220,70%,5%)]/50 p-3 border border-accent/20">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={current.chartData} margin={{
                  left: 4,
                  right: 8,
                  top: 8,
                  bottom: 0
                }}>
                    <defs>
                      <linearGradient id="gradientLeads" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(40, 100%, 60%)" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="hsl(40, 100%, 60%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis dataKey="date" stroke="hsl(180, 100%, 70%)" tickLine={false} axisLine={false} style={{ fontSize: '0.875rem', fontWeight: 600 }} />
                    <YAxis stroke="hsl(180, 100%, 70%)" tickLine={false} axisLine={false} style={{ fontSize: '0.875rem', fontWeight: 600 }} />
                    <Tooltip contentStyle={{
                    background: "hsl(220, 70%, 8%)",
                    border: "2px solid hsl(180, 100%, 50%)",
                    color: "hsl(var(--card-foreground))",
                    borderRadius: '0.5rem',
                    boxShadow: '0 0 20px hsl(180, 100%, 50%, 0.4)'
                  }} labelStyle={{
                    color: 'hsl(180, 100%, 70%)',
                    fontWeight: 600
                  }} itemStyle={{
                    fontWeight: 600
                  }} />
            <Line type="monotone" dataKey="leads" stroke="hsl(40, 100%, 60%)" strokeWidth={3} dot={{ fill: 'hsl(40, 100%, 60%)', r: 5, strokeWidth: 2, stroke: 'hsl(220, 70%, 10%)' }} activeDot={{ r: 7 }} fill="url(#gradientLeads)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Description */}
            <aside className="rounded-xl border-2 border-[hsl(280,100%,56%)] bg-gradient-to-br from-[hsl(220,70%,12%)] to-[hsl(220,80%,8%)] p-5 md:p-6 shadow-[0_0_25px_hsl(280,100%,56%,0.4)]">
              <h3 className="text-base md:text-lg font-heading font-semibold mb-3 text-foreground">Campaign Insights</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium">{current.description}</p>
            </aside>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 pb-6 pt-2">
            {CASE_STUDIES.map((_, i) => <button key={i} aria-label={`Go to case study ${i + 1}`} onClick={() => setIndex(i)} className={`h-3 w-3 rounded-full transition-all duration-300 ${i === index ? "bg-accent scale-125 shadow-[0_0_8px_hsl(var(--accent))]" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default CaseStudiesSection;