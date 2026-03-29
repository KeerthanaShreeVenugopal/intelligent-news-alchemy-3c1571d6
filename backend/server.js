require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const ffmpeg = require("fluent-ffmpeg");

const app = express();
app.use(cors());
app.use(express.json());

/* ------------------ EXISTING ROUTES ------------------ */
app.use("/news", require("./routes/news"));
app.use("/ai", require("./routes/ai"));

/* ------------------ VIDEO SETUP ------------------ */
const VIDEOS_DIR = path.join(__dirname, "videos");

// Ensure videos directory ALWAYS exists
if (!fs.existsSync(VIDEOS_DIR)) {
  fs.mkdirSync(VIDEOS_DIR, { recursive: true });
}

// Serve videos
app.use("/videos", express.static(VIDEOS_DIR));

/* ------------------ SCRIPT GENERATION ------------------ */
async function generateScript(article) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Convert this into a short engaging video script:\n\n${article}`,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!data.choices) {
      console.warn("⚠️ OpenAI failed, using fallback script");
      throw new Error("Fallback");
    }

    return data.choices[0].message.content;

  } catch (err) {
    console.warn("⚠️ Script fallback triggered");

    return `
Breaking News!

${article}

This story is developing rapidly and experts are closely watching.

Stay tuned for more updates.
`;
  }
}

/* ------------------ TEXT TO SPEECH ------------------ */
async function generateVoice(script) {
  const audioPath = path.join(VIDEOS_DIR, "audio.mp3");

  // Ensure folder exists before writing
  if (!fs.existsSync(VIDEOS_DIR)) {
    fs.mkdirSync(VIDEOS_DIR, { recursive: true });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini-tts",
        voice: "alloy",
        input: script,
      }),
    });

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(audioPath, Buffer.from(buffer));

    return audioPath;

  } catch (err) {
    console.warn("⚠️ TTS failed, creating dummy audio");

    // create minimal dummy file
    fs.writeFileSync(audioPath, Buffer.from([]));

    return audioPath;
  }
}

/* ------------------ VIDEO MERGE ------------------ */
function mergeVideo(audioPath) {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(VIDEOS_DIR, "final.mp4");

    // ✅ Correct path to bg.mp4
    const bgVideoPath = path.join(
      __dirname,
      "..",
      "public",
      "videos",
      "bg.mp4"
    );

    console.log("🎬 Using BG video:", bgVideoPath);

    if (!fs.existsSync(bgVideoPath)) {
      return reject(new Error("❌ bg.mp4 not found at: " + bgVideoPath));
    }

    ffmpeg()
      .input(bgVideoPath)
      .input(audioPath)
      .outputOptions([
        "-c:v libx264",
        "-c:a aac",
        "-shortest",
      ])
      .save(outputPath)
      .on("end", () => {
        console.log("✅ Video created:", outputPath);
        resolve(outputPath);
      })
      .on("error", (err) => {
        console.error("❌ FFmpeg error:", err);
        reject(err);
      });
  });
}

/* ------------------ MAIN ROUTE ------------------ */
app.post("/api/generate-video", async (req, res) => {
  try {
    const { article } = req.body;

    if (!article) {
      return res.status(400).json({ error: "Article is required" });
    }

    console.log("🧠 Generating script...");
    const script = await generateScript(article);

    console.log("🎙️ Generating voice...");
    const audioPath = await generateVoice(script);

    console.log("🎞️ Merging video...");
    await mergeVideo(audioPath);

    res.json({
      videoUrl: "videos/final.mp4",
      script,
    });

  } catch (err) {
    console.error("❌ ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

/* ------------------ START ------------------ */
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});