import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import Styles from "../MoodTracker/styles.css";
import projectsService from "../../Services/project.services";
import MoodList from "../MoodList/index";
import { useNavigate } from "react-router-dom";

function MoodTracker() {
  const [mood, setMood] = useState("");
  const [comment, setComment] = useState("");
  const [allMoods, setMoods] = useState("");
  const [selectedDate, setSelectedDate] = useState([]);
  const navigate = useNavigate()

  // ... Rest of the component code ...

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleDateChange = () => {
    setSelectedDate(date);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const data = {
      mood,
      comment,
      /*  date: selectedDate.toISOString() // Convert date to ISO string */
    };

    new projectsService()
      .createMood(data)
      .then((response) => {
        console.log("Data saved successfully!", response.data);
        setMood("");
        setComment("");
        navigate("/moodlist")
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  useEffect(() => {
    new projectsService()
      .getAllMoods()
      .then((response) => {
        console.log(response);
        setMoods(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving moods:", error);
      });
  }, []);

  return (
    <div>
      <h3>How are you feeling today? </h3>
      <form onSubmit={handleSave}>
        <label>
          <select value={mood} onChange={handleMoodChange}>
            <option value="">Select Mood</option>
            <option value="Happy">Happy</option>
            <option value="Excited">Excited</option>
            <option value="Relaxed">Relaxed</option>
            <option value="Bored">Bored</option>
            <option value="Apathetic">Apathetic</option>
            <option value="Lonely">Lonely</option>
            <option value="Sad">Sad</option>
            <option value="Frustrated">Frustrated</option>
            <option value="Anxious">Anxious</option>
            <option value="Irritated">Irritated</option>
            <option value="Livid">Livid</option>
            <option value="Fed Up">Fed Up</option>
          </select>
        </label>
        <label>
          Comment:
          <textarea value={comment} onChange={handleCommentChange} />
        </label>
        {/*  <div>
        <label>
          Date:
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
        </label>
      </div> */}

        <button type="submit">Save</button>
      </form>
      
    </div>
    
  );
}

export default MoodTracker;
