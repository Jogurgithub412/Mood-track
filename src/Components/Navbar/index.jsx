import React from 'react';
import logo from '/src/assets/images/greenmoodtracks.png';
import styles from '/src/Components/Styles/styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar_menu">
        <li className="navbar_item"><a href="#" className="navbar_link">Home</a></li>
        <li className="navbar_item"><a href="#" className="navbar_link">About</a></li>

     </ul>

     <button className="login-button">Login</button>
      
    </nav>
  );
}

export default Navbar;