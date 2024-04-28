import React, { useState } from 'react';
import styled from 'styled-components';

const TitleInput = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const GenerateButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const OutputArea = styled.textarea`
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
  resize: none; /* Prevent resizing of output area */
`;

function generateStory(title) {
  const stories = {
    "Shadows of Destiny": `
      Elena and Ryn stood resolute in the moonlit clearing... (story content)
    `,
    "The Midnight Duel": `
      Beneath the watchful eye of a pale moon... (story content)
    `,
    // Add more stories here
  };

  return stories[title] || "Story not found. Please provide a valid title.";
}

function App() {
  const [title, setTitle] = useState('');
  const [storyContent, setStoryContent] = useState('');

  const handleGenerateStory = () => {
    const generatedStory = generateStory(title);
    setStoryContent(generatedStory);
  };

  return (
    <div className="container">
      <h1>Story Generator</h1>
      <label htmlFor="title">Enter Title:</label>
      <TitleInput
        type="text"
        id="title"
        placeholder="Enter your story title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <GenerateButton onClick={handleGenerateStory}>Generate Story</GenerateButton>
      <label htmlFor="output">Story:</label>
      <OutputArea id="output" readOnly value={storyContent} />
    </div>
  );
}

export default App;
