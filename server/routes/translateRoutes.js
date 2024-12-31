const express = require("express");
const axios = require("axios");
const router = express.Router();

// Translate an emoji sequence
router.post("/", async (req, res) => {
  const { emojiSequence } = req.body;
  if (!emojiSequence) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    // Request translation from Python service
    const response = await axios.post("http://localhost:5001/translate", {
      emojiSequence,
    });
    res.json({ translation: response.data.translation });
  } catch (error) {
    res.status(500).json({ error: "Failed to translate emoji sequence" });
  }
});

module.exports = router;
