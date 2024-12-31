// models/TranslationRule.js
const mongoose = require("mongoose");

const TranslationRuleSchema = new mongoose.Schema({
  storyId: mongoose.Schema.Types.ObjectId,
  translation: String,
  votes: { type: Number, default: 0 },
});

module.exports = mongoose.model("TranslationRule", TranslationRuleSchema);
