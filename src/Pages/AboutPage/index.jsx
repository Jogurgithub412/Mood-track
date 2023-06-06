import React from 'react';
import styles from "/src/pages/AboutPage/styles.css";
// Assuming you have a CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="centered-content">
       <div className = "team">
       <h1>Meet The Team</h1></div>
        <img src="/src/assets/Images/jo.png" alt="jo" />
        <div className= "name">
        <ul></ul>
        <h3>Joie Hryggur So </h3>
        <ul></ul>
        <h5>Web Development student/Multidisciplinary Artist/Mentalh Health Advocate</h5></div>
        <h5>Loves psychology, plants and travelling. </h5>
        </div>
      </div>
    

  
   
  );
}

export default AboutPage;