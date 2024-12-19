const mongoose = require("mongoose");

const TranslationRuleSchema = new mongoose.Schema({
  pattern: ["string"],
  templates: ["string"],
});

const TranslationRule = mongoose.model(
  "TranslationRule",
  TranslationRuleSchema
);

module.exports = TranslationRule;
