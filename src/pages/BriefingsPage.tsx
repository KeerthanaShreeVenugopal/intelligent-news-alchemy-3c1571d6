import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";
// import { useParams, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { newsArticles } from "@/data/newsData";
import ArticleTabs from "@/components/ArticleTabs";

const BriefingsPage = () => {
  const { id } = useParams();
  const article = newsArticles.find((a) => a.id === id);

  const [followUp, setFollowUp] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  // 🔥 HANDLE AI Q&A
  const handleAsk = () => {
    if (!followUp.trim()) return;

    const question = followUp.toLowerCase();
    let response = "";

    if (question.includes("why")) {
      response = article?.qa?.why || "No data available";
    } else if (question.includes("impact")) {
      response = article?.qa?.impact || "No data available";
    } else if (question.includes("future")) {
      response = article?.qa?.future || "No data available";
    } else {
      response =
        article?.qa?.default ||
        "Try asking about why, impact, or future.";
    }

    setChatResponse(response);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-screen pt-20">
        <VideoBackground variant="dashboard" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

           

            {/* NAV TABS */}
            <ArticleTabs />
            {/* 🔥 AI SUMMARY */}

             {/* TITLE */}
             <h1 className="text-4xl font-bold mb-6 text-center">
              🧠 AI Briefing
            </h1>
            
            <div className="glass p-6 rounded-xl mb-6">
              <h2 className="text-gold font-bold mb-3">Summary</h2>

              <p className="text-sm whitespace-pre-wrap">
                {`🧠 AI Insight:

${article?.summary}

📊 Sector Impact:
This affects the ${article?.category} sector significantly.

⚡ Key Takeaway:
This is an important trend to watch closely.`}
              </p>
            </div>

            {/* 💬 AI CHAT */}
            <div className="glass p-6 rounded-xl">
              <h3 className="mb-3">Ask AI</h3>

              <div className="flex gap-2">
                <input
                  value={followUp}
                  onChange={(e) => setFollowUp(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg bg-secondary"
                  placeholder="Ask: why, impact, future..."
                />

                <button
                  onClick={handleAsk}
                  className="bg-gold px-4 rounded-lg"
                >
                  <Send size={16} />
                </button>
              </div>

              {/* 🔥 SUGGESTIONS */}
              <p className="text-xs text-muted-foreground mt-2">
                Try: "Why?", "Impact?", "Future?"
              </p>

              {/* RESPONSE */}
              {chatResponse && (
                <motion.div
                  className="mt-4 p-3 rounded-lg bg-secondary/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-sm">{chatResponse}</p>
                </motion.div>
              )}
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BriefingsPage;