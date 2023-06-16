import React from "react";
import logo from "/src/assets/Images/greenmoodtracks.png";

function Navbar() {
  return (
    <nav className="navbar" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <div className="navbar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar_menu" style={{marginLeft: "auto"}}>
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
        {
          localStorage.getItem("authToken") && (
        <li className="navbar_item">
          <a href="/sound" className="navbar_link">
            Sounds
          </a>
        </li>
          )
        }
      </ul>
        {
          !localStorage.getItem("authToken") && (
      <a href="/login" button className="login-button">
        Login
      </a>
          )
        }

        {
          localStorage.getItem("authToken") && (
            <a onClick={() => localStorage.clear()} button className="login-button">
            <a href="/" button className="logout-button">
              Logout
            </a>
            <a onClick={() => localStorage.clear()} button className="logout-button">
            </a></a>
          )
      }
    </nav>
  );
}

export default Navbar;
