import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/prompt-analyzer">Prompt Analyzer</Link></li>
                <li><Link to="/prompt-library">Prompt Library</Link></li>
                <li><Link to="/prompt-templates">Prompt Templates</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
