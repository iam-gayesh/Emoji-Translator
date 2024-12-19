const mongoose = require("mongoose");

const EmojiStorySchema = new mongoose.Schema({
  id: "string",
  emojiSequence: ["string"],
  translation: "string",
  authorNickname: "string",
  likes: "number",
  createdAt: "Date",
});

const EmojiStory = mongoose.model("EmojiStory", EmojiStorySchema);

module.exports = EmojiStory;
