import './App.css'
import {Routes, Route} from 'react-router-dom';
import NavbarComponent from './Components/Navbar';
import IsPrivate from './Components/IsPrivate';
import IsAnon from './Components/IsAnon';
import SignUpPage from './Pages/SignUp';
import LoginPage from './Pages/Login';

function App() {
 

  return (
    <div className="App">
    <NavbarComponent/>
    <Routes>
    <Route path="/signup" element={<IsAnon><SignUpPage/></IsAnon>}/>
    <Route path="/login" element={<IsAnon><LoginPage/></IsAnon>}/>
    </Routes>

    </div>
  )
}

export default App
