import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { GitBranch, TrendingUp, TrendingDown, Minus } from "lucide-react";

const timelineEvents = [
  { date: "Jan 2026", title: "Adani Group announces $10B green energy investment", sentiment: "positive", detail: "Markets rally 2.3%" },
  { date: "Feb 2026", title: "Hindenburg releases follow-up report", sentiment: "negative", detail: "Stock drops 8% intraday" },
  { date: "Feb 2026", title: "SEBI clears Adani of major charges", sentiment: "positive", detail: "Recovery begins, +5% in 2 days" },
  { date: "Mar 2026", title: "Q4 results beat estimates by 15%", sentiment: "positive", detail: "Institutional buying surge" },
  { date: "Mar 2026", title: "New airport contract awarded", sentiment: "neutral", detail: "Long-term growth catalyst" },
];

const sentimentIcon = {
  positive: <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />,
  negative: <TrendingDown className="w-3.5 h-3.5 text-red-400" />,
  neutral: <Minus className="w-3.5 h-3.5 text-muted-foreground" />,
};

const sentimentColor = {
  positive: "border-emerald-400/30",
  negative: "border-red-400/30",
  neutral: "border-muted-foreground/20",
};

const sentimentDot = {
  positive: "bg-emerald-400",
  negative: "bg-red-400",
  neutral: "bg-muted-foreground",
};

const StoryArcSection = () => {
  return (
    <section id="tracker" className="relative py-32 px-6">
      <AnimatedBackground variant="storyarc" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-electric/30 text-electric mb-6" style={{ background: "hsl(210 100% 55% / 0.08)" }}>
            Story Arc Tracker
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-['Space_Grotesk'] mb-4">
            Track Any{" "}
            <span className="text-gradient-electric">Story</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Visual narratives with timelines, key players, sentiment shifts, and predictions.
          </p>
        </motion.div>

        {/* Story arc card */}
        <motion.div
          className="rounded-2xl glass-strong p-6 md:p-8"
          style={{ boxShadow: "0 25px 80px -20px hsl(0 0% 0% / 0.5)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-electric" />
              <h3 className="text-lg font-bold font-['Space_Grotesk']">Adani Group: 2026 Trajectory</h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 font-medium">
              Overall: Bullish
            </span>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50" />
            <div className="space-y-6">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={i}
                  className={`relative pl-10 group`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={`absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full ${sentimentDot[event.sentiment]} ring-4 ring-background`} />
                  <div className={`p-4 rounded-xl bg-secondary/30 border ${sentimentColor[event.sentiment]} hover:bg-secondary/50 transition-colors cursor-pointer`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] text-muted-foreground font-mono">{event.date}</span>
                      {sentimentIcon[event.sentiment]}
                    </div>
                    <p className="text-sm font-medium mb-1">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Prediction */}
          <div className="mt-8 p-4 rounded-xl border border-gold/20" style={{ background: "hsl(38 92% 55% / 0.05)" }}>
            <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-2">🔮 What to Watch Next</p>
            <p className="text-sm text-muted-foreground">
              Q1 FY27 results expected in April. Analysts project <span className="text-foreground font-medium">22% revenue growth</span>. 
              Watch for green energy subsidiary IPO announcement — could unlock significant value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryArcSection;
