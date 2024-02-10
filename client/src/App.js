import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import PromptAnalyzer from './PromptAnalyzer';
import PromptLibrary from './PromptLibrary';
import PromptTemplates from './PromptTemplates';
import Home from './Home';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    Generative AI for Print-On-Demand Industry
                </header>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/prompt-analyzer" element={<PromptAnalyzer />} />
                    <Route path="/prompt-library" element={<PromptLibrary />} />
                    <Route path="/prompt-templates" element={<PromptTemplates />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
