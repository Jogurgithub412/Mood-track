import React from "react";
import sounds from "../../../colournoise.json";

function MoodSound({  }) {

  const moodSounds = sounds

  return (
    <div>
      <h2>Listen to some calming sounds from nature and the cosmos to boost your mood </h2>
      {moodSounds?.map((moodSound) => (
        <div key={moodSound.id}>
          <h3>{moodSound.title}</h3>
          <img src={moodSound.imageUrl} alt={moodSound.title} />
          <audio src={moodSound.audioUrl} controls />
        </div>
      ))}
    </div>
  );
}

export default MoodSound;