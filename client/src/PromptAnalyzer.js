import React, { useState } from 'react';
import './PromptAnalyzer.css';

function PromptAnalyzer() {
    // Component state and functions will go here
    const [apiChoice, setApiChoice] = useState('gpt4');
    const [apiKey, setApiKey] = useState('');
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Make API call to your backend
        try {
            const response = await fetch('/analyze-prompt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ apiChoice, apiKey, prompt })
            });
            const data = await response.json();
            setResponse(data.response || data.error);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div className="prompt-analyzer-container">
            <div className="api-selection">
                <label>
                    Select your API of choice:
                    <select value={apiChoice} onChange={e => setApiChoice(e.target.value)}>
                        <option value="gpt4">OpenAI GPT-4</option>
                        <option value="google_bard">Google Bard</option>
                    </select>
                </label>
                <label>
                    API Key:
                    <input type="password" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="Provide your API key here..." />
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
            {response && <div><strong>Analysis Result:</strong> {response}</div>}
        </div>
    );

    
    
}

export default PromptAnalyzer;

