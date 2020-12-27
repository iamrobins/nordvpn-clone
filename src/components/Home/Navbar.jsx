import React from "react";
import "./styles/navbar.css";
import logo from "./images/nordvpn.png";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <img id="logo-img" src={logo} alt="vpn-logo" />
        <h1>NordVPN</h1>
      </div>
      <ul>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#privacy">Privacy</a>
        </li>
        <li>
          <a href="#performance">Performance</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#sponsors">Sponsors</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
