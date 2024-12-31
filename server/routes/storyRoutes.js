const express = require("express");
const axios = require("axios");
const router = express.Router();

// Create a new story
router.post("/", async (req, res) => {
  const { emojiSequence, authorNickname } = req.body;
  if (!emojiSequence || !authorNickname) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    // Request translation from Python service
    const response = await axios.post("http://localhost:5001/translate", {
      emojiSequence,
    });
    const translation = response.data.translation;

    const story = await EmojiStory.create({
      emojiSequence,
      translation,
      authorNickname,
    });
    res.status(201).json(story);
  } catch (error) {
    res.status(500).json({ error: "Failed to create story" });
  }
});

// Get all stories
router.get("/", async (req, res) => {
  try {
    const stories = await EmojiStory.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stories" });
  }
});

// Like a story
router.post("/:id/like", async (req, res) => {
  const { id } = req.params;
  try {
    const story = await EmojiStory.findById(id);
    if (!story) return res.status(404).json({ error: "Story not found" });

    story.likes += 1;
    await story.save();
    res.json({ id: story.id, likes: story.likes });
  } catch (error) {
    res.status(500).json({ error: "Failed to like story" });
  }
});

module.exports = router;
