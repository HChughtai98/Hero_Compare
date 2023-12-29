import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";
import ironhackLogo from "../images/ironhackLogo.png";

function Navbar() {
  return (
    <nav className="header">
      <div className="header_contents">
        <Link to="/">
          <img
            src={ironhackLogo}
            alt="Ironhack Logo"
            className="ironhackLogo"
          />
        </Link>
        <h1>Hero Compare</h1>
        <div className="aboutPage">
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
