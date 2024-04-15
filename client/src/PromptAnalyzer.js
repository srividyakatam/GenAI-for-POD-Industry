import React, { useState } from 'react';
import './PromptAnalyzer.css';

function PromptAnalyzer() {
    // Component state and functions will go here
    const [api_choice, setApiChoice] = useState('gpt4');
    const [api_key, setApiKey] = useState('');
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResponse(null); 
        // Make API call to your backend        
        try {
            const response = await fetch('http://127.0.0.1:5000/analyze-prompt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ api_choice, api_key, prompt })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();
            //setResponse(formatResponseText(responseData.response));
            setResponse(responseData.response.replace(/\\n/g, '\n'));
            
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div className="prompt-analyzer-container">
            <div className="api-selection">
                <label>
                    Select your API of choice:
                    <select value={api_choice} onChange={e => setApiChoice(e.target.value)}>
                        <option value="gpt4">OpenAI GPT-4</option>
                        <option value="google_bard">Google Bard</option>
                    </select>
                </label>
                <label>
                    API Key:
                    <input type="password" value={api_key} onChange={e => setApiKey(e.target.value)} placeholder="Provide your API key here..." />
                </label>
            </div>
            <div className="prompt-input">
                <label htmlFor="prompt-textarea">
                    Prompt
                </label>
                <textarea
                id="prompt-textarea"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="Provide your prompt here..."
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Analyze Prompt</button>
            {response && (
                <div className="response-container">
                    <h3>Response from the AI:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre> {/* Format the response */}
                </div>
            )}
        </div>
    );

    
    
}

export default PromptAnalyzer;

