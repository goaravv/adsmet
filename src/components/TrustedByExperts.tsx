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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold">
            <span className="text-foreground">AI Optimized</span>{" "}
            <span className="neon-text">Campaign Growth</span>
            <br />
            <span className="text-muted-foreground text-lg md:text-xl font-medium">Campaign Workflow</span>
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Live Campaign Performance */}
          <article className="relative rounded-xl border border-border/50 bg-card backdrop-blur-sm p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-heading font-semibold mb-4 text-foreground">
              Live Campaign Performance
            </h3>
            <div className="h-72 rounded-lg bg-background/50 p-3 border border-border/30">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <defs>
                    <linearGradient id="colorCTR" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(82, 85%, 60%)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(82, 85%, 60%)" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorROAS" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(40, 100%, 60%)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(40, 100%, 60%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px', fontWeight: 600 }} />
                  <YAxis stroke="hsl(var(--muted-foreground))" domain={[0, "dataMax + 1"]} style={{ fontSize: '12px', fontWeight: 600 }} />
                  <Tooltip contentStyle={{
                  background: 'hsl(var(--card))',
                  borderColor: 'hsl(82, 85%, 60%)',
                  color: 'hsl(var(--foreground))',
                  borderRadius: '8px',
                  border: '2px solid'
                }} labelStyle={{
                  color: 'hsl(82, 85%, 60%)',
                  fontWeight: 600
                }} itemStyle={{
                  color: 'hsl(var(--foreground))',
                  fontWeight: 600
                }} formatter={(value, name) => [`${value}${name === 'CTR' ? '%' : ''}`, name]} />
                  <Line type="monotone" dataKey="CTR" stroke="hsl(82, 85%, 60%)" strokeWidth={3} dot={{
                  r: 5,
                  fill: 'hsl(82, 85%, 60%)',
                  strokeWidth: 2,
                  stroke: 'hsl(var(--card))'
                }} fill="url(#colorCTR)" />
                  <Line type="monotone" dataKey="ROAS" stroke="hsl(40, 100%, 60%)" strokeWidth={3} dot={{
                  r: 5,
                  fill: 'hsl(40, 100%, 60%)',
                  strokeWidth: 2,
                  stroke: 'hsl(var(--card))'
                }} fill="url(#colorROAS)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm md:text-base text-muted-foreground font-heading font-medium">
              Average CTR This Week: {" "}
              <span className="text-[hsl(82,85%,60%)] font-heading font-semibold">{avgCTR}% ↑</span>
            </p>
          </article>

          {/* Right Column - AI Workflow Visualizer */}
          <article className="relative rounded-xl border border-border/50 bg-card backdrop-blur-sm p-4 md:p-6 flex flex-col">
            <h3 className="text-lg md:text-xl font-heading font-semibold mb-4 text-foreground">
              AI Workflow Visualizer
            </h3>
            <div className="flex-1 flex flex-col items-center gap-4 md:gap-6 mt-2">
              {workflowSteps.map((step, i) => <div key={step} className="bg-card/50 text-foreground px-5 py-3 rounded-md border-2 border-[hsl(82,85%,60%)] animate-enter w-full max-w-xs text-center" style={{
              animationDelay: `${i * 150}ms`
            }}>
                  <span className="font-heading font-medium text-sm md:text-base">{step}</span>
                  {i < workflowSteps.length - 1 && <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-gradient-to-b from-[hsl(82,85%,60%)] to-accent animate-fade-in" style={{
                animationDelay: `${i * 150 + 120}ms`
              }} />}
                </div>)}
            </div>
          </article>
        </div>
      </div>
    </section>;
};
