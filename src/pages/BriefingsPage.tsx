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
  if (!article) {
    return <div className="text-center mt-20">Article not found</div>;
  }

  const [followUp, setFollowUp] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 HANDLE AI Q&A
  // const handleAsk = () => {
  //   if (!followUp.trim()) return;

  //   const question = followUp.toLowerCase();
  //   let response = "";

  //   if (question.includes("why")) {
  //     response = article?.qa?.why || "No data available";
  //   } else if (question.includes("impact")) {
  //     response = article?.qa?.impact || "No data available";
  //   } else if (question.includes("future")) {
  //     response = article?.qa?.future || "No data available";
  //   } else {
  //     response =
  //       article?.qa?.default ||
  //       "Try asking about why, impact, or future.";
  //   }

  //   setChatResponse(response);
  // };
  const handleAsk = async () => {
    if (!followUp.trim() || !article) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/ai-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          article: article.content,
          question: followUp,
          userType: "Student",
        }),
      });

      const data = await res.json();

      if (data?.answer) {
        console.log("AI RESPONSE:", data.answer);
        setChatResponse(data.answer);
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 100);
        setFollowUp("");
      } else {
        setChatResponse("⚠️ No response from AI.");
      }

    } catch (err) {
      console.error(err);
      setChatResponse("⚠️ AI failed. Try again.");
    }

    setLoading(false);
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

${article.summary}

📊 Sector Impact:
This affects the ${article.category} sector significantly.

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
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAsk();
                  }}
                  className="flex-1 px-4 py-2 rounded-lg bg-secondary"
                  placeholder="Ask: why, impact, future..."
                />

                {/* <button
                  onClick={handleAsk}
                  className="bg-gold px-4 rounded-lg"
                >
                  <Send size={16} />
                </button> */}
                <button
                  onClick={handleAsk}
                  disabled={loading}
                  // className="bg-gold px-4 rounded-lg disabled:opacity-50"
                  className="bg-gold px-4 rounded-lg disabled:opacity-50 hover:scale-105 transition"
                >
                  <Send size={16} />
                </button>
              </div>

              {/* 🔥 SUGGESTIONS */}
              <p className="text-xs text-muted-foreground mt-2">
                Try: "Why?", "Impact?", "Future?"
              </p>
              {loading && (
                <p className="text-sm text-muted-foreground mt-3">
                  🤖 Thinking...
                </p>
              )}
              {!chatResponse && !loading && (
                <p className="text-xs text-muted-foreground mt-3">
                  Ask something to get AI insights
                </p>
              )}
              {/* RESPONSE */}
              {/* {chatResponse && (
                <motion.div
                  className="mt-4 p-3 rounded-lg bg-secondary/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-sm">{chatResponse}</p>
                </motion.div>
              )} */}
              {chatResponse && (
                <motion.div
                  className="mt-4 p-4 rounded-lg bg-secondary/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {chatResponse.points ? (
                    <ul className="space-y-2 text-sm">
                      {chatResponse.points.map((point: string, index: number) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-gold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm">{JSON.stringify(chatResponse)}</p>
                  )}
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