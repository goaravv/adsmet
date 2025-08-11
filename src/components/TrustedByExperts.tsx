import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
export const TrustedByExperts = () => {
  type Point = {
    name: string;
    CTR: number;
    ROAS: number;
  };
  const initialData: Point[] = [{
    name: "Mon",
    CTR: 2.8,
    ROAS: 2.1
  }, {
    name: "Tue",
    CTR: 3.0,
    ROAS: 2.5
  }, {
    name: "Wed",
    CTR: 3.1,
    ROAS: 2.3
  }, {
    name: "Thu",
    CTR: 3.2,
    ROAS: 2.6
  }, {
    name: "Fri",
    CTR: 3.0,
    ROAS: 2.4
  }];
  const [data, setData] = useState<Point[]>(initialData);

  // Simulated live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(d => ({
        ...d,
        CTR: Math.max(0, +(d.CTR + (Math.random() - 0.5) * 0.2).toFixed(2)),
        ROAS: Math.max(0, +(d.ROAS + (Math.random() - 0.5) * 0.3).toFixed(2))
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const workflowSteps = ["Ad Creative", "AI Analysis", "Target Optimization", "A/B Testing", "Scaling"];
  const avgCTR = (data.reduce((s, d) => s + d.CTR, 0) / data.length).toFixed(2);
  return <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-tech font-bold">
            <span className="text-foreground">AI Optimized</span>{" "}
            <span className="neon-text">Campaign Growth</span>
            <br />
            <span className="text-muted-foreground text-lg md:text-xl">Campaign Workflow</span>
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Live Campaign Performance */}
          <article className="neon-border bg-card/90 backdrop-blur-sm rounded-lg border border-accent/30 p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-tech font-semibold mb-4 text-foreground">
              Live Campaign Performance
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" domain={[0, "dataMax + 1"]} />
                  <Tooltip contentStyle={{
                  background: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  color: 'hsl(var(--foreground))'
                }} labelStyle={{
                  color: 'hsl(var(--muted-foreground))'
                }} itemStyle={{
                  color: 'hsl(var(--foreground))'
                }} formatter={(value, name) => [`${value}${name === 'CTR' ? '%' : ''}`, name]} />
                  <Line type="monotone" dataKey="CTR" stroke="hsl(var(--foreground))" strokeWidth={2} dot={{
                  r: 4
                }} />
                  <Line type="monotone" dataKey="ROAS" stroke="hsl(var(--accent))" strokeWidth={2} dot={{
                  r: 4
                }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              Average CTR This Week: {" "}
              <span className="text-accent font-semibold">{avgCTR}% ↑</span>
            </p>
          </article>

          {/* Right Column - AI Workflow Visualizer */}
          <article className="neon-border bg-card/90 backdrop-blur-sm rounded-lg border border-accent/30 p-4 md:p-6 flex flex-col">
            <h3 className="text-lg md:text-xl font-tech font-semibold mb-4 text-foreground">
              AI Workflow Visualizer
            </h3>
            <div className="flex-1 flex flex-col items-center gap-4 md:gap-6 mt-2">
              {workflowSteps.map((step, i) => <div key={step} className="relative bg-muted/30 text-foreground px-5 py-3 rounded-md border border-[hsl(210,100%,56%)] animate-enter" style={{
              animationDelay: `${i * 150}ms`
            }}>
                  <span className="font-medium">{step}</span>
                  {i < workflowSteps.length - 1 && <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-px h-5 bg-foreground animate-fade-in" style={{
                animationDelay: `${i * 150 + 120}ms`
              }} />}
                </div>)}
            </div>
          </article>
        </div>
      </div>
    </section>;
};