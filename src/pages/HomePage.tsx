import { motion } from "framer-motion";
import { useState } from "react";
import VideoBackground from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import NewsTicker from "@/components/NewsTicker";
import { newsArticles } from "@/data/newsData";
import { User, TrendingUp, Rocket } from "lucide-react";

const userTypes = [
  { id: "student", label: "Student", icon: User, desc: "Explainer-first content & simplified analysis" },
  { id: "investor", label: "Investor", icon: TrendingUp, desc: "Portfolio-relevant stories & market data" },
  { id: "founder", label: "Founder", icon: Rocket, desc: "Funding news & competitor intelligence" },
];

const categories = ["All", "Finance", "Startup", "Tech", "Policy"];

const HomePage = () => {
  const [selectedType, setSelectedType] = useState("investor");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? newsArticles
      : newsArticles.filter((a) => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative w-full min-h-screen overflow-hidden">
        <VideoBackground variant="hero" />

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col justify-center pt-16 min-h-[70vh] sm:min-h-[75vh]">
          <NewsTicker />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-gold/40 text-gold mb-4 sm:mb-6" style={{ background: "hsl(var(--gold) / 0.12)" }}>
                AI-Powered News Platform
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-4 sm:mb-5 font-['Space_Grotesk'] text-foreground"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              News That <span className="text-gradient-gold">Knows</span>
              <br />
              <span className="text-gradient-electric">You</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              A fundamentally different news experience — AI briefings, interactive story arcs, and broadcast-quality video, all personalized for you.
            </motion.p>

            {/* User type selector */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {userTypes.map((type) => {
                const Icon = type.icon;
                const active = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-left transition-all ${
                      active
                        ? "glass border-gold/50 shadow-[0_0_24px_-4px_hsl(var(--gold)_/_0.25)]"
                        : "glass hover:border-muted-foreground/30"
                    }`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${active ? "text-gold" : "text-muted-foreground"}`} />
                    <div className="min-w-0">
                      <div className={`text-sm font-semibold ${active ? "text-gold" : "text-foreground"}`}>
                        {type.label}
                      </div>
                      <div className="text-xs text-foreground/60 truncate">{type.desc}</div>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* FEED CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 mt-6 sm:mt-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-2 sm:mb-3 text-foreground">
              Your <span className="text-gradient-gold">Personalized</span> Feed
            </h2>
            <p className="text-foreground/60 text-sm sm:text-base">
              Curated for your interests as a {selectedType}
            </p>
          </motion.div>

          {/* Category filter */}
          <div className="flex justify-center gap-2 mb-8 sm:mb-10 flex-wrap px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gold text-primary-foreground shadow-lg"
                    : "glass text-foreground/60 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filtered.map((article, i) => (
              <NewsCard key={article.id} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
