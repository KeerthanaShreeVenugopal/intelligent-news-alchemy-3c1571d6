import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, Eye, Users } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";
import { storyArcData } from "@/data/newsData";

const sentimentConfig = {
  positive: { color: "text-emerald-400", bg: "bg-emerald-500/15 border-emerald-500/30", icon: TrendingUp, label: "Positive" },
  negative: { color: "text-red-400", bg: "bg-red-500/15 border-red-500/30", icon: TrendingDown, label: "Negative" },
  neutral: { color: "text-amber-400", bg: "bg-amber-500/15 border-amber-500/30", icon: Minus, label: "Neutral" },
};

const StoryTrackerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative min-h-screen pt-20">
        <VideoBackground variant="article" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-gold/30 text-gold mb-4" style={{ background: "hsl(var(--gold) / 0.08)" }}>
                Story Arc Tracker
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk']">
                {storyArcData.title}
              </h1>
            </div>

            {/* Timeline */}
            <div className="glass rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold font-['Space_Grotesk'] mb-6">Timeline</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                <div className="space-y-6">
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
                        className="flex items-start gap-4 pl-0"
                      >
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border ${config.bg}`}>
                          <Icon className={`w-4 h-4 ${config.color}`} />
                        </div>
                        <div className="flex-1 glass rounded-xl p-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground font-medium">{event.date}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${config.bg} ${config.color}`}>
                              {config.label}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/90">{event.event}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Key Players */}
            <div className="glass rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold font-['Space_Grotesk'] mb-4 flex items-center gap-2">
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
                    className="glass rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-sm shrink-0">
                      {player.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{player.name}</div>
                      <div className="text-xs text-muted-foreground">{player.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Predictions */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold font-['Space_Grotesk'] mb-4 flex items-center gap-2">
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
                    className="glass rounded-xl p-4 border-electric/10 hover:border-electric/30 transition-colors"
                  >
                    <p className="text-sm text-muted-foreground">{pred}</p>
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
