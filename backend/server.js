import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Check API Key
if (!process.env.GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is missing in .env");
    process.exit(1);
}

// 🔥 Gemini setup (NEW SDK)
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

// ==============================
// 🚀 AI AGENT ROUTE
// ==============================
app.post("/ai-agent", async (req, res) => {
    try {
        const { article, question, userType } = req.body;

        if (!article || !question) {
            return res.status(400).json({
                error: "Article and question are required",
            });
        }

        const prompt = `
You are an AI news analyst.

User Type: ${userType || "General"}

Article:
${article}

User Question:
${question}
Return the answer in STRICT JSON format.

Format:
{
  "points": [
    "point 1",
    "point 2",
    "point 3"
  ]
}

Rules:
- No markdown
- No **bold**
- No paragraphs
- Only clean JSON

Give a clear, structured answer in points.
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,

            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "object",
                    properties: {
                        points: {
                            type: "array",
                            items: { type: "string" },
                        },
                    },
                },
            },
        });

        // ✅ Parse JSON
        // let parsed;
        // try {
        //     parsed = JSON.parse(response.text);
        // } catch {
        //     console.error("❌ JSON failed:", response.text);
        //     parsed = { points: ["Error parsing AI response"] };
        // }
        let parsed;

        try {
            const raw = response.candidates[0].content.parts[0].text;
            parsed = JSON.parse(raw);
        } catch (err) {
            console.error("❌ JSON failed:", response);
            parsed = { points: ["Error parsing AI response"] };
        }

        res.json({ answer: parsed });

    } catch (err) {
        console.error("🔥 AI AGENT ERROR:", err);
        res.status(500).json({
            error: err.message || "AI failed",
        });
    }
});

// ==============================
// 🚀 STORY ARC GENERATION
// ==============================
app.post("/ai-story", async (req, res) => {
    try {
        const { article } = req.body;

        if (!article) {
            return res.status(400).json({
                error: "Article is required",
            });
        }

        const prompt = `
Analyze this news article and generate:

        1. Timeline(5 - 7 events with dates)
        2. Key Players(name, role, impact)
        3. Prediction

Return STRICT JSON only.No explanation, no markdown.

            Format:
        {
            "timeline": [
                {
                    "date": "",
                    "title": "",
                    "sentiment": "positive | negative | neutral",
                    "detail": ""
                }
            ],
                "keyPlayers": [
                    {
                        "name": "",
                        "role": "",
                        "impact": ""
                    }
                ],
                    "prediction": ""
        }

        Article:
${article}
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,

            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "object",
                    properties: {
                        timeline: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    date: { type: "string" },
                                    title: { type: "string" },
                                    sentiment: { type: "string" },
                                    detail: { type: "string" },
                                },
                            },
                        },
                        keyPlayers: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    name: { type: "string" },
                                    role: { type: "string" },
                                    impact: { type: "string" },
                                },
                            },
                        },
                        prediction: { type: "string" },
                    },
                },
            },
        });

        // ✅ Safe JSON parsing
        let parsed;
        try {
            // parsed = JSON.parse(response.text);
            parsed = response.candidates[0].content.parts[0].text;
            parsed = JSON.parse(parsed);
        } catch {
            console.warn("⚠️ JSON parse failed, returning raw text");
            parsed = { raw: response.text };
        }

        res.json({ data: parsed });

    } catch (err) {
        console.error("🔥 STORY ERROR:", err);
        res.status(500).json({
            error: err.message || "Story AI failed",
        });
    }
});

// ==============================
// 🧪 HEALTH CHECK
// ==============================
app.get("/", (req, res) => {
    res.send("✅ AI Server is running...");
});

// ==============================
// 🚀 START SERVER
// ==============================
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});