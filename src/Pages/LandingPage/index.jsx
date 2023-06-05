import React from 'react'
import Navbar from '../../Components/Navbar';
import styles from '/src/Components/Styles/styles.css';
import videoBg from '/src/assets/Images/background.mp4'

    function LandingPage() {
        return (
          <div className="landing-page">
           
          <header>
            <div className = "header">
             <h1>Welcome to Mood Tracks</h1></div>
             <div className="paragraph">
             <p>Keep track of your mental well-being with our mood tracking tool 
             and we will match you with a mindfully curated playlist, relaxing 
             sounds from nature and beyond</p>

            </div>
            </header>

            <button className='get-started'>Get Started</button>
             <main>
              {/* Main content */}
              
                <div class= "about">
                <h1>What is Mood Tracking?</h1></div>
                
                <div className="container">
                <div className ="description">
                <p>Mood tracking can be a useful tool for self-reflection and 
                understanding one's emotional patterns.
                  By keeping track of your moods over time, you can gain insights into 
            what factors may be influencing your well-being and make positive changes accordingly.</p></div>
            <img src="/src/assets/Images/moodtracker.jpg" alt="Image" className="image" />
            </div>
            
            <div className = "moodtrack">
            <h2>Tell us how you feel and get matched with mindfully curated selection of relaxing tunes, sounds from nature and the outer space, guided meditation, evenn motivation videos!  </h2></div>
            <div className = "tunes">
            <img src="/s"></>
            </div>
            </main>
            <footer>
              {/* Footer content */}
            </footer>
</div>
        );
      }
      
      export default LandingPage;