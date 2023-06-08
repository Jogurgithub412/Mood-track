import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from '/src/Pages/MoodTracker/styles.css'


const MoodTracker = () => {
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [comment, setComment] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

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

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any desired actions with the comment data, such as sending it to a server
    console.log(comment);
    // Reset the form after submission
    setComment("");
  };

  return (
    <div className="mood-tracker">
      <h3>How are you feeling</h3>
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
              <Link to="/src/Pages/MoodSound">
                <h3>{mood.mood}</h3>
                <p>{mood.comment}</p>
              </Link>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
          
        )}
        
        </div>
        <div className="comment-section">
        <h3></h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
     
  
  );
};

export default MoodTracker;
