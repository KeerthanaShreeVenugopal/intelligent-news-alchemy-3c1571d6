import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Sparkles, Send } from "lucide-react";
import { useState } from "react";
import VideoBackground from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";
import { newsArticles, categoryColors } from "@/data/newsData";

const ArticlePage = () => {
  const { id } = useParams();
  const article = newsArticles.find((a) => a.id === id);
  const [question, setQuestion] = useState("");
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <Link to="/" className="text-gold hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const handleAsk = () => {
    if (!question.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "ai", text: `Based on "${article.title}", here's my analysis: This is a significant development with far-reaching implications for stakeholders. The key takeaway is that market dynamics are shifting, and early movers will benefit most from these changes.` },
    ]);
    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative min-h-screen pt-20">
        <VideoBackground variant="article" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Feed
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[article.category]}`}>
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
              <span className="text-xs text-muted-foreground">{article.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <User className="w-4 h-4" /> {article.author}
            </div>

            {/* AI Summary */}
            <div className="glass rounded-2xl p-6 mb-8 border-gold/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-gold" />
                <h3 className="text-sm font-semibold text-gold uppercase tracking-wider">AI Summary</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.summary} This article explores the broader implications for India's business landscape, examining how stakeholders from retail investors to institutional players are positioning themselves in response to these developments.
              </p>
            </div>

            {/* Full content */}
            <div className="glass rounded-2xl p-6 mb-8">
              <p className="text-foreground/90 leading-relaxed">{article.content}</p>
            </div>

            {/* Key Insights */}
            <div className="glass rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold font-['Space_Grotesk'] mb-4">Key Insights</h3>
              <ul className="space-y-3">
                {[
                  "Market sentiment has shifted significantly following this announcement",
                  "Institutional investors are recalibrating their positions",
                  "Regulatory frameworks may need updating to accommodate changes",
                  "Long-term growth trajectory remains positive despite short-term volatility",
                ].map((insight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ask AI */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold font-['Space_Grotesk'] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-electric" />
                Ask AI About This Article
              </h3>

              {/* Chat messages */}
              {chatMessages.length > 0 && (
                <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`text-sm p-3 rounded-xl ${msg.role === "user" ? "bg-gold/10 text-foreground ml-8" : "bg-electric/10 text-foreground/90 mr-8"}`}>
                      <span className="text-xs font-semibold block mb-1 text-muted-foreground">{msg.role === "user" ? "You" : "AI"}</span>
                      {msg.text}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                  placeholder="Ask a follow-up question..."
                  className="flex-1 px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric/50"
                />
                <button
                  onClick={handleAsk}
                  className="px-4 py-3 rounded-xl font-medium text-sm text-primary-foreground"
                  style={{ background: "var(--gradient-electric)" }}
                >
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

export default ArticlePage;
