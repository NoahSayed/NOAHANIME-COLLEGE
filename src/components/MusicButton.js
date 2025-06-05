import React, { useState } from "react";

const songs = [
  "/music/unravel.mp3",
  "/music/bluebird.mp3",
  "/music/silhouette.mp3",
  "/music/guren.mp3",
  "/music/again.mp3",
];

const MusicButton = () => {
  const [audio, setAudio] = useState(null);

  const playRandomSong = () => {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(randomSong);
    newAudio.play();
    setAudio(newAudio);
  };

  return (
    <button onClick={playRandomSong} style={buttonStyle}>
      🎵 Play Random Anime Song
    </button>
  );
};

const buttonStyle = {
  background: "#1f80e0",
  color: "white",
  border: "none",
  padding: "10px 16px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  marginLeft: "10px"
};

export default MusicButton;
