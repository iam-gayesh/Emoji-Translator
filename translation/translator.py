from flask import Flask, request, jsonify

app = Flask(__name__)

# Translation rules
patterns = [
    {
        "pattern": ["🏃", "🌧️"],
        "templates": ["{person} ran from the rain", "Quick dash through the storm"]
    },
    {
        "pattern": ["🐱", "🐟"],
        "templates": ["The cat spotted its favorite meal", "Feline fishing adventures"]
    }
]

def translate_emoji_sequence(sequence):
    for rule in patterns:
        if rule["pattern"] == sequence:
            return rule["templates"][0]
    return "Translation not found"

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    if not data or "emojiSequence" not in data:
        return jsonify({"error": "Invalid input"}), 400

    sequence = data["emojiSequence"]
    translation = translate_emoji_sequence(sequence)
    return jsonify({"translation": translation})

if __name__ == '__main__':
    app.run(port=5001)
