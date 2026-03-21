require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/news", require("./routes/news"));
app.use("/ai", require("./routes/ai"));

app.listen(5000, () => console.log("Server running on port 5000"));