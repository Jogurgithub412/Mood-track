import React from "react";
import logo from "/src/assets/Images/greenmoodtracks.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar_menu">
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Home
          </a>
        </li>
        <li className="navbar_item">
          <a href="about" className="navbar_link">
            About
          </a>
        </li>
      </ul>

      <a href="/login" button className="login-button">
        Login
      </a>
      <a onClick={() => localStorage.clear()} button className="login-button">
        Logout
      </a>
    </nav>
  );
}

export default Navbar;
