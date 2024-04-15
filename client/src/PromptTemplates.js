import React, { useState } from 'react';

function PromptTemplates() {
    // Hardcoded options for dropdowns
    const [industry] = useState(['Apparel', 'Accessories', 'Home Goods', 'Tech Accessories', 'Outdoor Gear']);
    const [seasonaltiming] = useState(['Spring Equinox', 'Summer Solstice', 'Autumnal Equinox', 'Winter Solstice']);
    const [trendinspiration] = useState(['Viral Social Media', 'Celebrity Endorsements', 'Industry Innovations', 'Cultural Movements']);
    const [designstyle] = useState(['Abstract', 'Geometric', 'Organic', 'Photorealistic', 'Surreal']);
    const [colorpalette] = useState(['Vibrant', 'Muted', 'Complementary', 'Analogous', 'Triadic']);
    const [emotionalappeal] = useState(['Joy', 'Serenity', 'Excitement', 'Curiosity', 'Comfort']);
    const [targetdemographic] = useState(['Gen Z', 'Millennials', 'Gen X', 'Baby Boomers', 'Luxury Shoppers', 'Budget Consumers']);
    const [culturalelements] = useState(['Urban', 'Rural', 'Coastal', 'Mountainous', 'Traditional', 'Contemporary']);
    const [languagepreference] = useState(['Visual', 'Verbal', 'Symbolic', 'Abstract', 'Narrative']);
    const [creativedirection] = useState(['Forward-Thinking', 'Heritage-Inspired', 'Fusion', 'Avant-Garde', 'Eco-Friendly']);

    const [selectedIndustry, setselectedIndustry] = useState(industry[0]);
    const [selectedSeason, setselectedSeason] = useState(seasonaltiming[0]);
    const [selectedTrend, setselectedTrend] = useState(trendinspiration[0]);

    const [selectedDesignStyle, setselectedDesignStyle] = useState(designstyle[0]);
    const [selectedColorPalette, setselectedColorPalette] = useState(colorpalette[0]);
    const [selectedEmotionalAppeal, setselectedEmotionalAppeal] = useState(emotionalappeal[0]);
    const [selectedTargetDemographic, setselectedTargetDemographic] = useState(targetdemographic[0]);
    const [selectedCulturalElements, setselectedCulturalElements] = useState(culturalelements[0]);
    const [selectedLanguagePreference, setselectedLanguagePreference] = useState(languagepreference[0]);
    const [selectedCreativeDirection, setselectedCreativeDirection] = useState(creativedirection[0]);
    

    const [promptTemplate, setPromptTemplate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission with the selected values and text inputs
        console.log({
            selectedIndustry,
            selectedSeason,
            selectedTrend,
            selectedDesignStyle,
            selectedColorPalette,
            selectedEmotionalAppeal,
            selectedTargetDemographic,
            selectedCulturalElements,
            selectedLanguagePreference,
            selectedCreativeDirection,
            promptTemplate
        });
    };

    return (
        <div className="prompt-templates-container">
            {/* <h2>Prompt Templates</h2> */}
            <form onSubmit={handleSubmit}>
                <div className="dropdown-container">
                    <label>
                        Industry Focus:
                        <select value={selectedIndustry} onChange={e => setselectedIndustry(e.target.value)}>
                            {industry.map(industry => <option key={industry} value={industry}>{industry}</option>)}
                        </select>
                    </label>

                    <label>
                        Seasonal Timing:
                        <select value={selectedSeason} onChange={e => setselectedSeason(e.target.value)}>
                            {seasonaltiming.map(season => <option key={season} value={season}>{season}</option>)}
                        </select>
                    </label>

                    <label>
                        Industry Trends:
                        <select value={selectedTrend} onChange={e => setselectedTrend(e.target.value)}>
                            {trendinspiration.map(trend => <option key={trend} value={trend}>{trend}</option>)}
                        </select>
                    </label>

                    <label>
                        Design Style:
                        <select value={selectedDesignStyle} onChange={e => setselectedDesignStyle(e.target.value)}>
                            {designstyle.map(style => <option key={style} value={style}>{style}</option>)}
                        </select>
                    </label>

                    <label>
                        Color Palette:
                        <select value={selectedColorPalette} onChange={e => setselectedColorPalette(e.target.value)}>
                            {colorpalette.map(color => <option key={color} value={color}>{color}</option>)}
                        </select>
                    </label>

                    <label>
                        Emotional Appeal:
                        <select value={selectedEmotionalAppeal} onChange={e => setselectedEmotionalAppeal(e.target.value)}>
                            {emotionalappeal.map(emo => <option key={emo} value={emo}>{emo}</option>)}
                        </select>
                    </label>

                    <label>
                        Target Demographic:
                        <select value={selectedTargetDemographic} onChange={e => setselectedTargetDemographic(e.target.value)}>
                            {targetdemographic.map(demographic => <option key={demographic} value={demographic}>{demographic}</option>)}
                        </select>
                    </label>

                    <label>
                        Cultural Elements:
                        <select value={selectedCulturalElements} onChange={e => setselectedCulturalElements(e.target.value)}>
                            {culturalelements.map(elements => <option key={elements} value={elements}>{elements}</option>)}
                        </select>
                    </label>

                    <label>
                        Language Preference:
                        <select value={selectedLanguagePreference} onChange={e => setselectedLanguagePreference(e.target.value)}>
                            {languagepreference.map(language => <option key={language} value={language}>{language}</option>)}
                        </select>
                    </label>

                    <label>
                        Creative Direction:
                        <select value={selectedCreativeDirection} onChange={e => setselectedCreativeDirection(e.target.value)}>
                            {creativedirection.map(creative => <option key={creative} value={creative}>{creative}</option>)}
                        </select>
                    </label>
                </div>

                <div className="input-container">
                    <label>
                        Prompt Template:
                        <textarea
                            // value={promptTemplate}
                            value = {"Generate a series of design concepts for " + selectedIndustry 
                            +" that encapsulate the spirit of "+ selectedSeason +". Draw on "+selectedTrend
                            +" for a fresh perspective, incorporating "+selectedDesignStyle+" elements. Utilize a "+selectedColorPalette
                            +" that resonates with the current mood and trends. Aim to evoke "+selectedEmotionalAppeal
                            +" in the target "+selectedTargetDemographic+". Integrate "+selectedCulturalElements
                            +" to ensure relevance and connection. The concepts should communicate through a "+selectedLanguagePreference
                            +" medium, embodying a "+selectedCreativeDirection+" approach to innovation and design."
                            }
                            onChange={e => setPromptTemplate(e.target.value)}
                            placeholder="Write your prompt template..."
                        />
                    </label>
                </div>

                {/* <button type="submit">Create Prompt</button> */}
            </form>
        </div>
    );
}

export default PromptTemplates;
