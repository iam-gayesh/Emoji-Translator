// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const storyRoutes = require("./routes/storyRoutes");
const translateRoutes = require("./routes/translateRoutes");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database Setup
mongoose
  .connect("mongodb://127.0.0.1:27017/emojitranslator", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"));

// Routes
app.use("/api/stories", storyRoutes);
app.use("/api/translate", translateRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
