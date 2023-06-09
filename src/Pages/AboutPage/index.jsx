import React from "react";
import "/src/pages/AboutPage/styles.css";
// Assuming you have a CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="centered-content">
        <div className="team">
          <h1>Meet The Team</h1>
          <img src="/src/assets/Images/jo.png" alt="jo" />
        </div>
        <div className="name">
          <ul></ul>
          <h3>Joie Hryggur So </h3>
          <ul></ul>
          <h5>
            Web Developer/ Multidisciplinary Artist/ Mental Health Awareness
            Advocate
          </h5>
        </div>
        <h5>Loves psychology, plants, travelling and Techno </h5>
      </div>
    </div>
  );
};

export default AboutPage;
