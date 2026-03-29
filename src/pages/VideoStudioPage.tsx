import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Video, Sparkles } from "lucide-react";

import VideoBackground from "../components/VideoBackground";
import Navbar from "@/components/Navbar";
import ArticleTabs from "@/components/ArticleTabs";

const VideoStudioPage = () => {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  // 🔥 Get selected article ID
  const articleId = localStorage.getItem("selectedArticleId");

  // 🔥 Map article → video file
  const videoMap: Record<string, string> = {
    "1": "/videos/news_video1.mp4",
    "2": "/videos/news_video2.mp4",
    "3": "/videos/news_video3.mp4",
  };

  // 🔥 Select video (fallback to "1")
  const selectedVideo = videoMap[articleId || "1"];

  // 🔥 Simulate generation
  const handleGenerate = () => {
    setGenerating(true);

    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20">
        <ArticleTabs />

        <section className="relative min-h-screen pt-20">
          <VideoBackground />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* HEADER */}
              <div className="text-center mb-8 sm:mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-gold/40 text-gold mb-4">
                  AI Video Studio
                </span>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  AI News <span className="text-gradient-gold">Video</span>
                </h1>

                <p className="text-foreground/65 mt-2 text-sm sm:text-base">
                  Transform any article into a broadcast-quality video
                </p>
              </div>

              {/* VIDEO PLAYER */}
              <div className="glass rounded-2xl overflow-hidden mb-6 sm:mb-8 aspect-video flex items-center justify-center relative">
                
                {/* ✅ FINAL VIDEO */}
                {generated ? (
                  <video
                    src={selectedVideo}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : generating ? (
                  
                  /* 🔄 LOADING STATE */
                  <div className="text-center px-6 sm:px-10 w-full">
                    <Loader2 className="w-12 h-12 text-gold mx-auto mb-4 animate-spin" />
                    <p className="text-sm text-foreground/65">
                      Generating AI video...
                    </p>
                  </div>
                ) : (
                  
                  /* 💤 EMPTY STATE */
                  <div className="text-center">
                    <Video className="w-16 h-16 text-foreground/25 mx-auto mb-3" />
                    <p className="text-sm text-foreground/55">
                      Click generate to view video
                    </p>
                  </div>
                )}
              </div>

              {/* GENERATE BUTTON */}
              <div className="text-center mb-8 sm:mb-10">
                <button
                  onClick={handleGenerate}
                  disabled={generating}
                  className="px-8 py-3 rounded-xl font-semibold text-primary-foreground inline-flex items-center gap-2 disabled:opacity-50"
                  style={{
                    background: "var(--gradient-gold)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                  {generating ? "Generating..." : "Generate Video"}
                </button>
              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "AI Narration",
                    desc: "Natural-sounding voiceover",
                  },
                  {
                    title: "Data Visuals",
                    desc: "Charts and infographics",
                  },
                  {
                    title: "60-120 Seconds",
                    desc: "Optimized for quick viewing",
                  },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-2xl p-4 text-center"
                  >
                    <h4 className="text-sm font-semibold text-gold mb-1">
                      {f.title}
                    </h4>
                    <p className="text-xs text-foreground/60">
                      {f.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default VideoStudioPage;