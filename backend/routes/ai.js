const express = require("express");
const router = express.Router();
const axios = require("axios");

// Dummy data
const news = [
  {
    topic: "RBI Policy",
    content: "RBI increased repo rate to control inflation."
  },
  {
    topic: "RBI Policy",
    content: "Inflation is rising across sectors."
  },
  {
    topic: "RBI Policy",
    content: "Loan EMIs may increase."
  }
];


// 🔥 BRIEFING API
router.post("/briefing", async (req, res) => {
  try {
    const { topic, userType } = req.body;

    const related = news.filter(n => n.topic === topic);
    const combinedText = related.map(n => n.content).join("\n");

    const prompt = `
Create a structured news briefing for a ${userType}.

ONLY focus on that user.

Give:
Summary
Key Themes
Impact
What Next

Articles:
${combinedText}
`;

    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/...",
      {
        inputs: prompt
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`
        }
      }
    );

    res.json({
      briefing: response.data[0].generated_text
    });

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;