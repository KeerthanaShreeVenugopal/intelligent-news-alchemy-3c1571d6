import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";

const BriefingsPage = () => {
  const [briefingText, setBriefingText] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("briefing");
    if (data) setBriefingText(data);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-screen pt-20">
        <VideoBackground variant="dashboard" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-10">

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

            <h1 className="text-4xl font-bold mb-6 text-center">
              🧠 AI Briefing
            </h1>

            {/* 🔥 SUMMARY */}
            <div className="glass p-6 rounded-xl mb-6">
              <h2 className="text-gold font-bold mb-3">Summary</h2>
              <p className="text-sm whitespace-pre-wrap">
                {briefingText}
              </p>
            </div>

            {/* 💬 CHAT */}
            <div className="glass p-6 rounded-xl">
              <h3 className="mb-3">Ask AI</h3>

              <div className="flex gap-2">
                <input
                  value={followUp}
                  onChange={(e) => setFollowUp(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg bg-secondary"
                  placeholder="Ask anything..."
                />

                <button className="bg-gold px-4 rounded-lg">
                  <Send size={16} />
                </button>
              </div>

              {chatResponse && (
                <div className="mt-4">
                  <p>{chatResponse}</p>
                </div>
              )}
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BriefingsPage;