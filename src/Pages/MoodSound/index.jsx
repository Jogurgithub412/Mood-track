import React, { useEffect, useState } from "react";
import ProjectsService from "../../Services/project.services";

function MoodSound({  }) {

  const [moodSounds, setMood] = useState(null);

  const getMoodSounds = () =>{
    new ProjectsService().getSounds()
    .then((response)=>{
        const oneProject = response.data; 
        setMood(oneProject);
    })
    .catch((error)=>console.log(error));
  }

  useEffect(()=>{
    getMoodSounds();
    console.log(moodSounds)
  })

  return (
    <div>
      <h2>Listen to some calming sounds from nature and the cosmos to boost your mood </h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, paddingLeft: 280, paddingRight: 280}}>
      {moodSounds?.map((moodSound) => (
        <div key={moodSound.id} style={{display: 'flex', flexDirection: 'column', gap: 5}}>
          <h3>{moodSound.title}</h3>
          <img src={moodSound.imageUrl} alt={moodSound.title} width={300} />
          <audio src={moodSound.sound} controls />
        </div>
      ))}
      </div>
    </div>
  );
}

export default MoodSound;