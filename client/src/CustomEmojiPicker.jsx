import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import axios from "axios";

const CustomEmojiPicker = () => {
  const [selectedEmojis, setSelectedEmojis] = useState([]); // State for multiple emojis
  const [translation, setTranslation] = useState(""); // State for translated text

  const onEmojiClick = (event, emojiObject) => {
    setSelectedEmojis((prev) => [...prev, emojiObject]); // Append new emoji object to the array
  };

  const clearEmojis = () => {
    setSelectedEmojis([]); // Clear all selected emojis
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace" && selectedEmojis.length > 0) {
      setSelectedEmojis((prev) => prev.slice(0, -1)); // Remove the last emoji
    }
  };

  // Handle Translate button click
  const handleTranslate = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/translate", {
        emojiSequence: selectedEmojis,
      });
      setTranslation(response.data.translation); // Set the translation from the backend
    } catch (error) {
      console.error("Translation failed:", error);
      setTranslation("Failed to translate. Try again.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center vh-100 align-items-center bg-primary"
      onKeyDown={handleKeyDown} // Attach keydown listener to the parent container
      tabIndex="0" // Make the div focusable to capture keydown events
      style={{ outline: "none" }} // Remove focus outline
    >
      <div className="container bg-light p-4 rounded">
        <h1 className="text-center">Emoji-Translator</h1>
        <div className="row mt-4">
          {/* Left Column: Emoji Picker */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>

          {/* Right Column: Selected Emoji and Translated Emoji Section */}
          <div className="col-12 col-md-6">
            {/* Selected Emojis */}
            <div className="mb-3">
              <h5>Selected Emojis</h5>
              <div
                className="bg-white p-3 rounded d-flex justify-content-between align-items-center flex-wrap gap-2"
                style={{ minHeight: "48px" }}
              >
                {/* Selected Emojis Container */}
                <div
                  className="form-control"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: selectedEmojis ? "20px" : "10px",
                    border: "1px solid #ced4da",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                    height: "38px", // Match standard input height
                    flex: 1, // Take up remaining space
                  }}
                >
                  {selectedEmojis.map((emoji, index) => (
                    <img
                      key={index}
                      src={emoji.target.src}
                      alt={emoji.emoji}
                      style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "8px",
                      }}
                    />
                  ))}
                  <span style={{ flex: 1 }} />
                </div>

                {/* Clear Button */}
                <button
                  className="btn btn-danger"
                  onClick={clearEmojis}
                  disabled={selectedEmojis.length === 0} // Disable button if no emojis selected
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Translate Button (Optional) */}
            <div className="d-grid gap-2 m-3">
              <button className="btn btn-success" onClick={handleTranslate}>
                Translate
              </button>
            </div>

            {/* Translated Emoji */}
            <div>
              <h5>Translated Emoji</h5>
              <div className="bg-white p-3 rounded">
                <input
                  type="text"
                  className="form-control"
                  readOnly // Make it read-only
                  value={translation}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomEmojiPicker;
