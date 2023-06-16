import React, { useState, useEffect } from "react";
import projectsService from "../../Services/project.services";
import { useNavigate } from "react-router-dom";

function MoodList() {
  const [allMoods, setMoods] = useState([]);

  useEffect(() => {
    new projectsService()
      .getAllMoods()
      .then((response) => {
        console.log(response);
        setMoods(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const deleteMood = (params) => {
    new projectsService().deleteMood(moodId)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const navigate = useNavigate();

  return (
    <div>
      <h1>Mood List</h1>
      {
        allMoods.map((mood) => (
          <div key={mood._id} onClick={() => { navigate(`/mood-details/${mood._id}/${mood.comment}`) }}>
            <h2>{mood.mood[0]}
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
              <span class="material-symbols-outlined ">
                edit
              </span>
            </h2>
            <p>{mood.comment}</p>
          </div>
        ))}
    </div>
  );
}

export default MoodList;