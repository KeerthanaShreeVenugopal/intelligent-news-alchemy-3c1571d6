import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, Eye, Users } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";
import { storyArcData } from "@/data/newsData";

const sentimentConfig = {
  positive: { color: "text-emerald-400", bg: "bg-emerald-500/20 border-emerald-500/40", icon: TrendingUp, label: "Positive" },
  negative: { color: "text-red-400", bg: "bg-red-500/20 border-red-500/40", icon: TrendingDown, label: "Negative" },
  neutral: { color: "text-amber-400", bg: "bg-amber-500/20 border-amber-500/40", icon: Minus, label: "Neutral" },
};

const StoryTrackerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative min-h-screen pt-20">
        <VideoBackground variant="article" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-center mb-8 sm:mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-gold/40 text-gold mb-4" style={{ background: "hsl(var(--gold) / 0.12)" }}>
                Story Arc Tracker
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
                {storyArcData.title}
              </h1>
            </div>

            {/* Timeline */}
            <div className="glass rounded-2xl p-5 sm:p-6 mb-5 sm:mb-6">
              <h3 className="text-lg font-semibold font-['Space_Grotesk'] mb-5 sm:mb-6 text-foreground">Timeline</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border/60" />
                <div className="space-y-4 sm:space-y-6">
                  {storyArcData.timeline.map((event, i) => {
                    const config = sentimentConfig[event.sentiment];
                    const Icon = config.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 sm:gap-4 pl-0"
                      >
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border ${config.bg}`}>
                          <Icon className={`w-4 h-4 ${config.color}`} />
                        </div>
                        <div className="flex-1 glass rounded-xl p-3 sm:p-4">
                          <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                            <span className="text-xs text-foreground/55 font-medium">{event.date}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${config.bg} ${config.color}`}>
                              {config.label}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/85">{event.event}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Key Players */}
            <div className="glass rounded-2xl p-5 sm:p-6 mb-5 sm:mb-6">
              <h3 className="text-lg font-semibold font-['Space_Grotesk'] mb-4 flex items-center gap-2 text-foreground">
                <Users className="w-5 h-5 text-gold" /> Key Players
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {storyArcData.keyPlayers.map((player, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-xl p-3 sm:p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold font-bold text-sm shrink-0">
                      {player.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground">{player.name}</div>
                      <div className="text-xs text-foreground/55 truncate">{player.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Predictions */}
            <div className="glass rounded-2xl p-5 sm:p-6">
              <h3 className="text-lg font-semibold font-['Space_Grotesk'] mb-4 flex items-center gap-2 text-foreground">
                <Eye className="w-5 h-5 text-electric" /> What to Watch Next
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {storyArcData.predictions.map((pred, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-xl p-3 sm:p-4 border-electric/15 hover:border-electric/40 transition-colors"
                  >
                    <p className="text-sm text-foreground/70">{pred}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StoryTrackerPage;
