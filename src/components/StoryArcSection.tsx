import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { GitBranch, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { useParams } from "react-router-dom";
import { newsArticles } from "@/data/newsData";

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
  const { id } = useParams();
  const article = newsArticles.find((a) => a.id === id);

  // ✅ FETCH FROM newsData.ts
  const timelineEvents = article?.story?.timeline || [];

  return (
    // <section id="tracker" className="relative py-32 px-6">
    <section className="relative py-12 px-6">
      {/* <AnimatedBackground variant="storyarc" /> */}

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* HEADER */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs border border-electric/30 text-electric mb-6">
            Story Arc Tracker
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Track Any <span className="text-gradient-electric">Story</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Interactive timeline powered by AI insights
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          className="rounded-2xl glass-strong p-6 md:p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* TITLE */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-electric" />
              <h3 className="text-lg font-bold">
                {article?.title}
              </h3>
            </div>

            <span className="text-xs px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400">
              AI Analysis
            </span>
          </div>

          {/* 🔥 EMPTY STATE */}
          {timelineEvents.length === 0 && (
            <p className="text-center text-muted-foreground">
              No story data available
            </p>
          )}

          {/* TIMELINE */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50" />

            <div className="space-y-6">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={i}
                  className="relative pl-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* DOT */}
                  <div
                    className={`absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full ${
                      sentimentDot[event.sentiment]
                    }`}
                  />

                  {/* CARD */}
                  <div
                    className={`p-4 rounded-xl bg-secondary/30 border ${
                      sentimentColor[event.sentiment]
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground">
                        {event.date}
                      </span>
                      {sentimentIcon[event.sentiment]}
                    </div>

                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {event.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 🔮 PREDICTION */}
          <div className="mt-8 p-4 rounded-xl border border-gold/20">
            <p className="text-xs text-gold mb-2">🔮 What to Watch Next</p>

            <p className="text-sm text-muted-foreground">
              {article?.story?.prediction || "No prediction available"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryArcSection;