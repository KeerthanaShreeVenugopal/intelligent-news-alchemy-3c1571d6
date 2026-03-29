import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, User, Sparkles, Send } from "lucide-react";
import { useState } from "react";

import VideoBackground from "../components/VideoBackground";
import Navbar from "@/components/Navbar";
import { newsArticles, categoryColors } from "@/data/newsData";

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = newsArticles.find((a) => a.id === id);

  const [question, setQuestion] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <Link to="/" className="text-gold hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  /* 🔥 SAVE ARTICLE + ID + NAVIGATE */
  const handleVideoClick = () => {
    const fullArticleText = `
Title: ${article.title}

Summary:
${article.summary}

Content:
${article.content}
`;

    // ✅ store content
    localStorage.setItem("selectedArticle", fullArticleText);

    // ✅ store article ID (important for dynamic videos)
    localStorage.setItem("selectedArticleId", article.id);

    // ✅ navigate to video page
    navigate(`/news/${article.id}/video`);
  };

  const handleAsk = () => {
    if (!question.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      {
        role: "ai",
        text: `Based on "${article.title}", here's my analysis: This is a significant development with far-reaching implications for stakeholders. The key takeaway is that market dynamics are shifting, and early movers will benefit most from these changes.`,
      },
    ]);

    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-screen pt-20">
        <VideoBackground />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10">

          {/* 🔥 TABS */}
          <div className="flex gap-4 mb-6">
            <button className="text-gold font-semibold">Article</button>
            <button className="text-muted-foreground">Briefing</button>
            <button className="text-muted-foreground">Story</button>

            {/* 🔥 VIDEO BUTTON */}
            <button
              onClick={handleVideoClick}
              className="text-gold font-semibold hover:underline"
            >
              Video
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* META */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[article.category]}`}
              >
                {article.category}
              </span>

              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>

              <span className="text-xs text-muted-foreground">
                {article.date}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <User className="w-4 h-4" /> {article.author}
            </div>

            {/* SUMMARY */}
            <div className="glass rounded-2xl p-6 mb-8 border-gold/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-gold" />
                <h3 className="text-sm font-semibold text-gold uppercase">
                  AI Summary
                </h3>
              </div>

              <p className="text-sm text-muted-foreground">
                {article.summary}
              </p>
            </div>

            {/* CONTENT */}
            <div className="glass rounded-2xl p-6 mb-8">
              <p>{article.content}</p>
            </div>

            {/* ASK AI */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">
                Ask AI About This Article
              </h3>

              {chatMessages.length > 0 && (
                <div className="space-y-3 mb-4">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className="text-sm p-3 rounded-xl bg-secondary"
                    >
                      <b>{msg.role === "user" ? "You" : "AI"}:</b>{" "}
                      {msg.text}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask something..."
                  className="flex-1 px-4 py-2 rounded-xl bg-secondary"
                />

                <button
                  onClick={handleAsk}
                  className="px-4 py-2 bg-gold rounded-xl"
                >
                  <Send />
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