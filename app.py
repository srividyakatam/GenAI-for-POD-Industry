from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
# import google_bard

app = Flask(__name__)
CORS(app, resources={r"/analyze-prompt": {"origins": "*"}})

@app.route('/')
def home():
    return "Welcome to the Prompt Analyzer API!"


@app.route('/analyze-prompt', methods=['POST'])
def analyze_prompt():
    data = request.get_json()

    api_choice = data.get('api_choice')
    api_key = data.get('api_key')
    prompt_text = data.get('prompt')

    # Check if all required parameters are provided
    if not all([api_choice, api_key, prompt_text]):
        return jsonify({'error': 'Missing data'}), 400

    # Perform the analysis based on the API choice
    try:
        if api_choice == 'gpt4':
            openai.api_key = api_key
            response = openai.Completion.create(
                engine="davinci-002", # model
                prompt=prompt_text,
                max_tokens=150 # tokens
            )
            # Return only the text portion of the response
            return jsonify({'response': response.choices[0].text})
        
            # messages = [{"role": "user", "content": prompt_text}]
            # response = openai.ChatCompletion.create(
            #     model="gpt-3.5-turbo-0301",
            #     messages=messages,
            #     temperature=0, 
            #     )
            # return response.choices[0].message["content"]
            
        else:
            # Placeholder for the Google Bard API implementation
            # return call_google_bard(api_key, prompt_text)
            pass
    except Exception as e:
        # If an exception occurred, return the error message
        return jsonify({'error': str(e)}), 500
    


if __name__ == '__main__':
    app.run(debug=True)
