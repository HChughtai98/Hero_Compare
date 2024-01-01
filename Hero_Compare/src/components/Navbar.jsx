import React, { useState } from "react";
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
        <div className="navItems">
          <div className="gameItems">
            Game
            <div className="dropdown">
              <Link to="/dota" className="dropdownItem">
                Dota
              </Link>
              <Link to="/lol" className="dropdownItem">
                Lol
              </Link>
            </div>
          </div>
          <div className="characterPage">
            <Link to="/characters">Characters</Link>
          </div>
          <div className="aboutPage">
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
