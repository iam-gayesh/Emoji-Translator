import EmojiPicker from "emoji-picker-react";
import axios from "axios";

const CustomEmojiPicker = () => {
  const onEmojiClick = (event, emojiObject) => {
    axios.post("http://localhost:3001/translate", {
      emojiSequence: emojiObject.emoji,
    });
  };

  return (
    <div className="d-flex justify-content-center vh-100 align-items-center bg-primary">
      <div className="w-50 bg-light p-5 rounded p-3">
        <h1 className="justify-content-center">Emoji-Translator</h1>
        <div className="d-flex flex-direction-column mt-3">
          <div className="justify-content-center mt-3 d-flex flex-direction-row">
            <EmojiPicker />
          </div>

          <div>
            <div className="d-flex flex-direction-column">
              <h3>Selected Emoji</h3>
              <div className="bg-white p-3 rounded">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary mt-3"
                onClick={() => onEmojiClick()}
              >
                Translate
              </button>
            </div>

            <div className="mt-3">
              <h3>Translated Emoji</h3>
              <div className="bg-white p-3 rounded">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomEmojiPicker;
