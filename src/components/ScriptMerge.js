import React, { useState } from 'react';
import './ScriptMerge.css';
import { story1, story2 } from './stories'; // Assuming the stories file is in the same directory

function ScriptMerge() {
  const [script1, setScript1] = useState('');
  const [script2, setScript2] = useState('');
  const [combinedStory, setCombinedStory] = useState(
    `**The Duel of Destiny**\n\nIn the heart of the ancient ruins, Elena and Ryn, the destined guardians of an ancient artifact, confront the shadows of their past. As they delve deeper into the labyrinthine corridors, memories of a midnight duel resurface, reminding them of the price of their newfound alliance. Suddenly, they encounter Kaito and Akira, former rivals turned allies, who seek redemption amidst the ruins. Together, they face a common enemy, a shadowy figure intent on claiming the artifact for sinister purposes. With swords drawn and hearts united, they stand against the encroaching darkness, echoing the echoes of destiny as they forge a new path forward.`
  );
  const [isMerged, setIsMerged] = useState(false);

  const handleScriptChange1 = (event) => {
    setScript1(event.target.value);
  };

  const handleScriptChange2 = (event) => {
    setScript2(event.target.value);
  };

  const handleMerge = () => {
    setScript1(story1); 
    setScript2(story2); 
    setIsMerged(true);
  };

  return (
    <div className="script-merge">
      <h2>Merge Anime Scripts</h2>
      <div className="script-boxes">
        <textarea
          value={script1}
          onChange={handleScriptChange1}
          placeholder="Script 1"
          className="script-box"
        />
        <textarea
          value={script2}
          onChange={handleScriptChange2}
          placeholder="Script 2"
          className="script-box"
        />
      </div>
      <button onClick={handleMerge}>Merge Scripts</button>
      {isMerged && (
        <div className="combined-story">
          <h2>Merged Story: The Duel of Destiny</h2>
          <textarea value={combinedStory} className="script-box" readOnly />
        </div>
      )}
    </div>
  );
}

export default ScriptMerge;
