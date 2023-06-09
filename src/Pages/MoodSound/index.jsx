import React from 'react';

const MoodSound = () => {
  const moodSounds = [
    {
      id: 1,
      name: 'Birds',
      imageUrl: '/src/assets/Images/birds.png',
      songUrl: '/src/assets/Sounds/birds.mp3',
    },
    {
      id: 2,
      name: 'Sound 2',
      imageUrl: 'sound2.jpg',
      songUrl: 'song2.mp3',
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