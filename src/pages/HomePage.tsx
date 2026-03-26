// ✅ ONLY UI ENHANCED VERSION (backend untouched)

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import VideoBackground from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import NewsTicker from "@/components/NewsTicker";
import { newsArticles } from "@/data/newsData";
import { User, TrendingUp, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const userTypes = [
  { id: "student", label: "Student", icon: User, desc: "Explainer-first content & simplified analysis" },
  { id: "investor", label: "Investor", icon: TrendingUp, desc: "Portfolio-relevant stories & market data" },
  { id: "founder", label: "Founder", icon: Rocket, desc: "Funding news & competitor intelligence" },
];

const categories = ["All", "Finance", "Startup", "Tech", "Policy"];

const roleStyles = {
  student: "border-blue-400/20",
  investor: "border-green-400/20",
  founder: "border-purple-400/20",
};

const HomePage = () => {
  const [selectedType, setSelectedType] = useState("investor");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("userType");
    if (saved) setSelectedType(saved);
  }, []);

  const handleRoleChange = (role: string) => {
    setSelectedType(role);
    localStorage.setItem("userType", role);
  };

  const filtered =
    selectedCategory === "All"
      ? newsArticles
      : newsArticles.filter((a) => a.category === selectedCategory);

  // const handleGenerateBriefing = async (topic: string) => {
  //   try {
  //     setLoading(true);

  //     const userType = localStorage.getItem("userType") || "student";

  //     const res = await fetch("http://localhost:5000/ai/briefing", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ topic, userType }),
  //     });

  //     const data = await res.json();

  //     localStorage.setItem("briefing", data.briefing);
  //     navigate("/briefings");

  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //     setLoading(false);
  //   }
  // };
  const handleGenerateBriefing = (article: any) => {
    navigate(`/news/${article.id}/briefing`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-16">
        <VideoBackground variant="hero" />
        <NewsTicker />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center">

          {/* 🔥 NEW BADGE */}
          <span className="inline-block px-4 py-1.5 rounded-full text-xs border border-gold/30 text-gold mb-6">
            AI-Powered News Platform
          </span>

          <motion.h1 className="text-5xl font-bold mb-5">
            News That <span className="text-gradient-gold">Knows You</span>
          </motion.h1>

          {/* 🔥 NEW DESCRIPTION */}
          <p className="text-muted-foreground mb-8">
            AI-powered briefings, interactive insights, and personalized news.
          </p>

          {/* ROLE SELECT */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {userTypes.map((type) => {
              const Icon = type.icon;
              const active = selectedType === type.id;

              return (
                <button
                  key={type.id}
                  onClick={() => handleRoleChange(type.id)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl ${active ? "glass border-gold" : "glass"
                    }`}
                >
                  <Icon className={active ? "text-gold" : ""} />
                  <div>
                    <div>{type.label}</div>
                    <div className="text-xs text-muted-foreground">{type.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* 🔥 VIEWING TEXT */}
          <div className="mt-4 text-sm text-muted-foreground">
            Viewing as <span className="text-gold capitalize">{selectedType}</span>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20">
        <VideoBackground variant="dashboard" />

        <div className="max-w-6xl mx-auto px-4">

          {/* 🔥 TITLE */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              AI News Feed for{" "}
              <span className="text-gold capitalize">{selectedType}</span>
            </h2>

            <span className="px-3 py-1 text-xs rounded-full bg-gold/10 text-gold border mt-2 inline-block">
              ⚡ AI Personalized
            </span>
          </div>

          {/* 🔥 CATEGORY FILTER */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1 rounded-full ${selectedCategory === cat ? "bg-gold text-black" : "glass"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 🔥 LOADING */}
          {loading && (
            <p className="text-center text-gold mb-4">
              ⏳ Generating AI insights...
            </p>
          )}

          {/* NEWS GRID */}
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No news available
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-5">
              {filtered.map((article, i) => (
                <div
                  key={article.id}
                  className={`glass p-4 rounded-xl ${roleStyles[selectedType]}`}
                >
                  <NewsCard article={article} index={i} />

                  <button
                    // onClick={() => handleGenerateBriefing(article.title)}
                    onClick={() => handleGenerateBriefing(article)}
                    className="mt-3 text-gold text-sm"
                  >
                    ✨ Generate AI Briefing
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;