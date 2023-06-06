import React from 'react';

const MoodSound = ({ mood, soundUrl }) => {
  return (
    <div>
      <h2>{mood}</h2>
      <audio controls loop>
        <source src={soundUrl} type="audio/mpeg" />
        
      </audio>
    </div>
  );
};

export default MoodSound;