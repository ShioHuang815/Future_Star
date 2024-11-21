import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = os.environ.get("openai_api")

@app.route('/generate_suggestion', methods=['POST'])
def generate_suggestion():
    data = request.json
    player_name = data.get('player_name')
    player_stats = data.get('player_stats')  # Include any relevant player data

    # Construct the prompt for OpenAI API
    prompt = f"Provide a personalized suggestion for the NCAA basketball player {player_name} based on the following stats: {player_stats}."

    try:
        # Call the OpenAI API
        response = openai.Completion.create(
            engine='text-davinci-003',  # You can choose a different model if desired
            prompt=prompt,
            max_tokens=150,
            n=1,
            stop=None,
            temperature=0.7,
        )

        suggestion = response.choices[0].text.strip()

        return jsonify({'suggestion': suggestion})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)