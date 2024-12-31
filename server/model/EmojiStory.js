// models/EmojiStory.js
const mongoose = require("mongoose");

const EmojiStorySchema = new mongoose.Schema({
  emojiSequence: [String],
  translation: String,
  authorNickname: String,
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("EmojiStory", EmojiStorySchema);
