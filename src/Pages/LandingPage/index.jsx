import React from "react";
import Navbar from "../../Components/Navbar";
import styles from "/src/Components/Styles/styles.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <div className="header">
          <h1>Welcome to Mood Tracks</h1>
        </div>
        <div className="paragraph">
          <p>
            Keep track of your mental well-being with our mood tracking tool and
            we will match you with a mindfully curated playlist, relaxing sounds
            from nature and beyond
          </p>
        </div>
      </header>

      <a href="/signup " className="get-started">
        Get Started
      </a>
      <main>
        {/* Main content */}
        <section id="about" class="about"></section>

        <div class="about">
          <h1>What is Mood Tracking?</h1>
        </div>

        <div className="container">
          <div className="description">
            <p>
              Mood tracking can be a useful tool for self-reflection and
              understanding one's emotional patterns. By keeping track of your
              moods over time, you can gain insights into what factors may be
              influencing your well-being and make positive changes accordingly.
            </p>
          </div>
          <img
            src="/src/assets/Images/moodtracker.jpg"
            alt="Image"
            className="image"
          />
        </div>
        <div className="container">
          <div className="moodtrack">
            <h2>
              Tell us how you feel and we will match you with a selection of
              relaxing tunes, nature and cosmic sounds, guided meditation and
              even motivation videos. Let us take you to a world of immersive
              deep relaxation like nowhere else.{" "}
            </h2>
          </div>
          <div className="image-row">
            <img src="/src/assets/Images/tunes.png" alt="tunes" />
            <img src="/src/assets/Images/jupiter.png" alt="jupiter" />
            <img src="/src/assets/Images/rain.jpg" alt="rain" />
          </div>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wkse4PPxkk4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </main>
      <footer>
        <h4>© 2023 by Mood Tracks</h4>
      </footer>
    </div>
  );
}

export default LandingPage;
