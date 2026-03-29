import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { newsArticles } from "@/data/newsData";
import { useState } from "react";

const StoryArcSection = () => {
  const { id } = useParams();

  // ✅ SAFE MATCH (string/number issue fixed)
  const article = newsArticles.find(
    (a) => String(a.id) === String(id)
  );

  const [story, setStory] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // 🔥 GENERATE STORY
  const generateStory = async () => {
    try {
      if (!article) {
        console.error("❌ Article not found");
        return;
      }

      setLoading(true);

      const res = await fetch("http://localhost:5000/ai-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // ✅ LIMIT INPUT (IMPORTANT FIX)
          article: (article.content || article.title).slice(0, 200),
        }),
      });

      const data = await res.json();

      console.log("API RESPONSE:", data);

      setStory(data.data);
      setLoading(false);
    } catch (err) {
      console.error("❌ ERROR:", err);
      setLoading(false);
    }
  };

  const timeline = story?.timeline || [];

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold">📊 Story Arc</h2>
          <p className="text-muted-foreground mt-2">
            {article?.title}
          </p>
        </motion.div>

        {/* BUTTON */}
        {!story && !loading && (
          <div className="text-center">
            <button
              onClick={generateStory}
              className="bg-gold px-5 py-2 rounded-lg"
            >
              🚀 Generate AI Story
            </button>
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <div className="text-center mt-6">
            <p>🧠 AI analyzing story...</p>
            <p>📊 Building timeline...</p>
            <p>🔮 Predicting future...</p>
          </div>
        )}

        {/* ERROR */}
        {story && timeline.length === 0 && (
          <p className="text-center text-red-400 mt-6">
            {story.prediction}
          </p>
        )}

        {/* TIMELINE */}
        {timeline.length > 0 && (
          <div className="mt-8 space-y-4">
            {timeline.map((event: any, i: number) => (
              <motion.div
                key={i}
                className="p-4 bg-secondary rounded-xl border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{event.date}</span>
                  <span>
                    {event.sentiment === "positive"
                      ? "📈"
                      : event.sentiment === "negative"
                      ? "📉"
                      : "➖"}
                  </span>
                </div>

                <h3 className="font-bold mt-1">{event.title}</h3>
                <p className="text-sm">{event.detail}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* KEY PLAYERS */}
        {story?.keyPlayers?.length > 0 && (
          <div className="mt-8">
            <h3 className="font-bold mb-2">👥 Key Players</h3>
            {story.keyPlayers.map((p: any, i: number) => (
              <div key={i} className="text-sm">
                {p.name} — {p.role}
              </div>
            ))}
          </div>
        )}

        {/* PREDICTION */}
        {story?.prediction && timeline.length > 0 && (
          <div className="mt-8 p-4 border rounded-xl">
            <h3 className="font-bold">🔮 What Next?</h3>
            <p className="text-sm mt-2">{story.prediction}</p>
          </div>
        )}

        {/* 🔥 BONUS FEATURE (WINNER) */}
        {timeline.length > 0 && (
          <div className="mt-6 p-4 bg-secondary rounded-xl">
            <h3 className="font-bold text-gold">💡 Why this matters</h3>
            <p className="text-sm mt-2">
              This news impacts market trends, investment decisions,
              and future growth opportunities.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default StoryArcSection;