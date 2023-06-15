import './Components/Styles/styles.css';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/Navbar';
import IsPrivate from './Components/IsPrivate';
import IsAnon from './Components/IsAnon';
import SignUpPage from './Pages/SignUp';
import LoginPage from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import MoodTracker from './Pages/MoodTracker';
import MoodSound from './Pages/MoodSound';
import AboutPage from './Pages/AboutPage';
import Logout from './Pages/Logout';
import DatePicker from "react-datepicker";
import MoodList from "./Pages/MoodList";


function App() {
  //check localstorage for an access token
  return (
    <div className="App">
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignUpPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route path="/home" 
        element={<MoodTracker/>} />
        
        
        <Route
          path="/sound"
          element={
            <IsPrivate>
              <MoodSound />
            </IsPrivate>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/"
          element={
            <IsPrivate>
              <Logout />
            </IsPrivate>
          }
        />
        <Route
          path="/moodlist"
          element={
              <IsPrivate>
              <MoodList />
              </IsPrivate>
          
          }
          />
          {/* <Route
          path="/edit-mood"
          element={
              <IsPrivate>
              <EditMood />
              </IsPrivate>
          
          }

        />
  */}



      </Routes>
    </div>
  );
}

export default App;
