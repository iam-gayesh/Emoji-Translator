const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://http://127.0.0.1/:27017/emojitranslator", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/translate", async (req, res) => {
  const { emojiSequence } = req.body;
  const translation = emojiSequence.join(" ");
  res.json({ translation });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
