import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, User, Sparkles, Send } from "lucide-react";
<<<<<<< HEAD
import { useState } from "react";

import VideoBackground from "../components/VideoBackground";
=======
import { useState, useEffect } from "react";
import ArticleTabs from "@/components/ArticleTabs";
>>>>>>> main
import Navbar from "@/components/Navbar";
import { newsArticles, categoryColors } from "@/data/newsData";

// ✅ GLOBAL LANGUAGE
import { useLanguage } from "@/components/Language";
import { translateText } from "@/hooks/translate";

const ArticlePage = () => {
  const { id } = useParams();
<<<<<<< HEAD
  const navigate = useNavigate();

  const article = newsArticles.find((a) => a.id === id);
=======
  const { lang } = useLanguage();

  const article = newsArticles.find(
    (a) => String(a.id) === String(id)
  );
>>>>>>> main

  const [question, setQuestion] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
<<<<<<< HEAD
=======

  const [translatedData, setTranslatedData] = useState({
    title: "",
    summary: "",
    content: "",
  });

  const [loadingLang, setLoadingLang] = useState(false);
>>>>>>> main

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navbar />
<<<<<<< HEAD
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <Link to="/" className="text-gold hover:underline">
            Go back home
          </Link>
=======
        <div>
          <h2>Article not found</h2>
          <Link to="/">Go home</Link>
>>>>>>> main
        </div>
      </div>
    );
  }

<<<<<<< HEAD
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

=======
  // 🔥 GLOBAL TRANSLATION
  useEffect(() => {
    const run = async () => {
      if (lang === "en") {
        setTranslatedData({
          title: "",
          summary: "",
          content: "",
        });
        return;
      }

      setLoadingLang(true);

      try {
        const [t1, t2, t3] = await Promise.all([
          translateText(article.title, lang),
          translateText(article.summary, lang),
          translateText(article.content, lang),
        ]);

        setTranslatedData({
          title: t1,
          summary: t2,
          content: t3,
        });
      } catch (err) {
        console.error("❌ Translation error:", err);
      } finally {
        setLoadingLang(false);
      }
    };

    run();
  }, [lang, id]);

  // ✅ AI CHAT
>>>>>>> main
  const handleAsk = () => {
    if (!question.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      {
        role: "ai",
<<<<<<< HEAD
        text: `Based on "${article.title}", here's my analysis: This is a significant development with far-reaching implications for stakeholders. The key takeaway is that market dynamics are shifting, and early movers will benefit most from these changes.`,
=======
        text: `Based on "${article.title}", here's insight.`,
>>>>>>> main
      },
    ]);

    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
<<<<<<< HEAD

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
=======

      <section className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <ArticleTabs />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

            {/* CATEGORY */}
            <div className="flex gap-3 mb-4">
              <span className={`px-3 py-1 text-xs border ${categoryColors[article.category]}`}>
                {article.category}
              </span>
              <span className="text-xs flex items-center gap-1">
                <Clock size={12} /> {article.readTime}
              </span>
              <span className="text-xs">{article.date}</span>
            </div>

            {/* 🔥 IMAGE (ADDED) */}
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}

            {/* TITLE */}
            <h1 className="text-3xl font-bold mb-4">
              {translatedData.title || article.title}
>>>>>>> main
            </h1>

            {/* AUTHOR */}
            <div className="flex gap-2 text-sm mb-6">
              <User size={14} /> {article.author}
            </div>

            {/* SUMMARY */}
<<<<<<< HEAD
            <div className="glass rounded-2xl p-6 mb-8 border-gold/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-gold" />
                <h3 className="text-sm font-semibold text-gold uppercase">
                  AI Summary
                </h3>
              </div>

              <p className="text-sm text-muted-foreground">
                {article.summary}
=======
            <div className="border p-4 rounded mb-6">
              <b className="flex items-center gap-2 mb-2">
                <Sparkles size={14} /> Summary
              </b>

              <p>
                {translatedData.summary || article.summary}
>>>>>>> main
              </p>
            </div>

            {/* CONTENT */}
<<<<<<< HEAD
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
=======
            <div className="border p-4 rounded mb-6">
              <p>
                {loadingLang
                  ? "🌐 Translating..."
                  : translatedData.content || article.content}
              </p>
            </div>

            {/* AI CHAT */}
            <div className="border p-4 rounded">
              <h3 className="mb-3 flex gap-2 items-center">
                <Sparkles size={14} /> Ask AI
              </h3>

              {chatMessages.map((msg, i) => (
                <div key={i}>
                  <b>{msg.role === "user" ? "You" : "AI"}:</b> {msg.text}
>>>>>>> main
                </div>
              ))}

              <div className="flex gap-2 mt-3">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
<<<<<<< HEAD
                  placeholder="Ask something..."
                  className="flex-1 px-4 py-2 rounded-xl bg-secondary"
=======
                  onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                  className="flex-1 border px-2 py-1"
                  placeholder="Ask..."
>>>>>>> main
                />

                <button
                  onClick={handleAsk}
<<<<<<< HEAD
                  className="px-4 py-2 bg-gold rounded-xl"
                >
                  <Send />
=======
                  className="bg-blue-500 text-white px-3"
                >
                  <Send size={14} />
>>>>>>> main
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