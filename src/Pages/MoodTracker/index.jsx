import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "/src/Pages/MoodTracker/styles.css";

const MoodTracker = () => {
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/get-mood")
      .then((response) => {
        setMoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="mood-tracker">
      <h3>How are you feeling </h3>
      <div className="mood-options">
        {moods ? (
          moods.map((mood, index) => (
            <div
              key={index}
              className={`mood-option ${
                selectedMood === mood ? "selected" : ""
              }`}
              style={{ backgroundColor: mood.color }}
              onClick={() => handleMoodSelection(mood)}
            >
            <Link to=''>
              <h3>{mood.mood}</h3>
              <p>{mood.comment}</p>
              </Link>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
