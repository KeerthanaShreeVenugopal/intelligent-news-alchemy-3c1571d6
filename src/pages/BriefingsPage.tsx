import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Send, Brain, Zap, Users } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";
import { briefingTopics, briefingData } from "@/data/newsData";

const BriefingsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("budget");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [followUp, setFollowUp] = useState("");
  const data = briefingData[selectedTopic];

  const sectionIcons: Record<string, typeof Brain> = {
    "Economic Impact": Zap,
    "Industry Impact": Brain,
    "Key Players": Users,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative min-h-screen pt-20">
        <VideoBackground variant="dashboard" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-electric/30 text-electric mb-4" style={{ background: "hsl(var(--electric) / 0.08)" }}>
                Intelligence Briefing
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk']">
                AI <span className="text-gradient-electric">Briefing</span>
              </h1>
              <p className="text-muted-foreground mt-2">Deep analysis synthesized from multiple sources</p>
            </div>

            {/* Topic selector */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {briefingTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTopic === topic.id
                      ? "bg-electric text-accent-foreground"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>

            {/* Summary */}
            <div className="glass rounded-2xl p-6 mb-6 border-electric/20">
              <h3 className="text-sm font-semibold text-electric uppercase tracking-wider mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4" /> Executive Summary
              </h3>
              <p className="text-foreground/90 leading-relaxed">{data.summary}</p>
            </div>

            {/* Highlights */}
            <div className="glass rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold font-['Space_Grotesk'] mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                {data.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-electric/10 text-electric flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion sections */}
            <div className="space-y-3 mb-8">
              {data.sections.map((section) => {
                const Icon = sectionIcons[section.title] || Brain;
                const isOpen = expandedSection === section.title;
                return (
                  <div key={section.title} className="glass rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setExpandedSection(isOpen ? null : section.title)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-electric" />
                        <span className="font-semibold font-['Space_Grotesk']">{section.title}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="px-5 pb-5"
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                          {section.content}
                        </p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Follow-up */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold mb-3">Ask a follow-up question</h3>
              <div className="flex gap-2">
                <input
                  value={followUp}
                  onChange={(e) => setFollowUp(e.target.value)}
                  placeholder="What are the implications for small-cap stocks?"
                  className="flex-1 px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric/50"
                />
                <button className="px-4 py-3 rounded-xl text-sm font-medium text-accent-foreground" style={{ background: "var(--gradient-electric)" }}>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BriefingsPage;
