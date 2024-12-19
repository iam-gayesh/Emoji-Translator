const mongoose = require("mongoose");

const TranslationSchema = new mongoose.Schema({
  storyId: "string",
  translation: "string",
  votes: "number",
});

const Translation = mongoose.model("Translation", TranslationSchema);

module.exports = Translation;
