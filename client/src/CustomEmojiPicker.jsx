import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const CustomEmojiPicker = () => {
  const [selectedEmojis, setSelectedEmojis] = useState([]); // State for multiple emojis

  const onEmojiClick = (event, emojiObject) => {
    setSelectedEmojis((prev) => [...prev, emojiObject]); // Append new emoji object to the array
  };

  return (
    <div className="d-flex justify-content-center vh-100 align-items-center bg-primary">
      <div className="container bg-light p-4 rounded">
        <h1 className="text-center">Emoji-Translator</h1>
        <div className="row mt-4">
          {/* Left Column: Emoji Picker */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>

          {/* Right Column: Selected Emoji and Translated Emoji Section */}
          <div className="col-12 col-md-6">
            {/* Selected Emojis */}
            <div className="mb-3">
              <h5>Selected Emojis</h5>
              <div
                className="bg-white p-3 rounded d-flex align-items-center flex-wrap gap-2"
                style={{ minHeight: "48px" }}
              >
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
                  <span style={{ flex: 1 }}>
                    {/* Placeholder for input text if needed */}
                  </span>
                </div>
              </div>
            </div>

            {/* Translate Button (Optional) */}
            <div className="d-grid gap-2 m-3">
              <button className="btn btn-success">Translate</button>
            </div>

            {/* Translated Emoji */}
            <div>
              <h5>Translated Emoji</h5>
              <div className="bg-white p-3 rounded">
                <input
                  type="text"
                  className="form-control"
                  readOnly // Make it read-only
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
