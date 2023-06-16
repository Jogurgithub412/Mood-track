import React from "react";
import "./styles.css";
// Assuming you have a CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="centered-content">
        <div className="team">
          <h1>Meet The Team</h1>
          <img src="/public/Images/jo.png" alt="jo"/>
        </div>
        <div className="name">
          <ul></ul>
          <h3>Joie So Hryggur </h3>
          <ul></ul>
          <h5>
            Web Developer/ Multidisciplinary Artist/ Mental Health Awareness
            Advocate/ World citizen.
          </h5>
        </div>
        <h5>I love to learn about how the mind worlds, astronomy/astrology and electronic music.</h5>
      </div>
    </div>
  );
};

export default AboutPage;
