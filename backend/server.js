import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ==============================
// 🔑 CHECK API KEY
// ==============================
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY missing in .env");
  process.exit(1);
}

// ==============================
// 🤖 GEMINI SETUP
// ==============================
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ==============================
// 🤖 AI AGENT (Q&A)
// ==============================
app.post("/ai-agent", async (req, res) => {
  try {
    const { article, question, userType } = req.body;

    if (!article || !question) {
      return res.status(400).json({ error: "Missing inputs" });
    }

    const prompt = `
You are an AI news analyst.

User Type: ${userType || "General"}

Article:
${article}

Question:
${question}

Return STRICT JSON:

{
  "points": ["point 1", "point 2", "point 3"]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    let parsed;

    try {
      const raw = response.candidates[0].content.parts[0].text;
      parsed = JSON.parse(raw);
    } catch {
      parsed = { points: ["⚠️ AI parsing failed"] };
    }

    res.json({ answer: parsed });

  } catch (err) {
    console.error("❌ AI ERROR:", err);
    res.status(500).json({ error: "AI failed" });
  }
});

// ==============================
// 📊 STORY GENERATION
// ==============================
app.post("/ai-story", async (req, res) => {
  try {
    const { article } = req.body;

    if (!article) {
      return res.status(400).json({ error: "Missing article" });
    }

    const prompt = `
Generate SHORT story arc in JSON.

{
  "timeline": [],
  "keyPlayers": [],
  "prediction": ""
}

Article:
${article}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let parsed;

    try {
      let raw = response.candidates[0].content.parts[0].text;

      raw = raw.replace(/```json/g, "").replace(/```/g, "").trim();

      const start = raw.indexOf("{");
      const end = raw.lastIndexOf("}");

      if (start !== -1 && end !== -1) {
        raw = raw.substring(start, end + 1);
      }

      parsed = JSON.parse(raw);
    } catch {
      parsed = {
        timeline: [],
        keyPlayers: [],
        prediction: "⚠️ Failed to generate story",
      };
    }

    res.json({ data: parsed });

  } catch (err) {
    console.error("❌ STORY ERROR:", err);
    res.status(500).json({ error: "Story failed" });
  }
});

// ==============================
// 🌐 TRANSLATION (FIXED)
// ==============================
app.post("/translate", async (req, res) => {
  try {
    const { text, target } = req.body;

    if (!text || !target) {
      return res.status(400).json({ translatedText: "" });
    }

    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" +
      target +
      "&dt=t&q=" +
      encodeURIComponent(text);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Translate API failed");
    }

    const data = await response.json();

    const translatedText = data[0]
      .map((item) => item[0])
      .join("");

    console.log("🌐 Translated:", translatedText);

    res.json({ translatedText });

  } catch (err) {
    console.error("❌ TRANSLATE ERROR:", err);
    res.status(500).json({ translatedText: "" });
  }
});

// ==============================
// 🧪 HEALTH CHECK
// ==============================
app.get("/", (req, res) => {
  res.send("✅ Server running");
});

// ==============================
// 🚀 START SERVER
// ==============================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});