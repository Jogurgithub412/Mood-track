import React from 'react';
import "./styles.css"

const MoodSound = () => {
  const moodSounds = [
    {
      name: 'Birds',
      imageUrl: '/src/assets/Images/birds.png',
      songUrl: '/src/assets/Sounds/birds.mp3',
    },
    {

      name: 'Camp Fire',
      imageUrl: '/src/assets/Images/camp fire.png',
      songUrl: '/src/assets/Sounds/campfire.mp3',
    },
    // Add more mood sound objects as needed
  ];

  const handleSoundClick = (songUrl) => {
    // Logic to handle the click on the sound item
    // For example, redirect the user to the song URL
    window.location.href = songUrl;
  };

  return (
    <div>
      <h1>Mood Sound Page</h1>
      <MoodSoundGrid moodSounds={moodSounds} onSoundClick={handleSoundClick} />
    </div>
  );
};

export default MoodSound;