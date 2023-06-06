import './App.css';
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

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/signup" element={<IsAnon><SignUpPage/></IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage/></IsAnon>} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<IsAnon><MoodTracker/></IsAnon>} />
        <Route path="/sound" element={<IsAnon><MoodSound/></IsAnon>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
  );
}

export default App;