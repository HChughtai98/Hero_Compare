import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Styling //
import "../styling/Navbar.css";
// Images //
import ironhackLogo from "../images/ironhackLogo.png";
import heroCompareLogo from "../images/heroCompare.png";

function Navbar() {
  return (
    <nav className="header">
      <div className="header_contents">
        <a
          href="https://www.ironhack.com/nl-en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ironhackLogo}
            alt="Ironhack Logo"
            className="ironhackLogo"
          />
        </a>
        <NavLink to="/">
          <img
            src={heroCompareLogo}
            alt="HeroCompare Logo"
            className="heroCompareLogo"
          />
        </NavLink>
        <div className="navItems">
          <div className="gameItems">
            Game
            <img className="downArrow" />
            <div className="dropdown">
              <NavLink to="/dota" className="dropdownItem">
                Dota
              </NavLink>
              <NavLink to="/lol" className="dropdownItem">
                Lol
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/characters"
            className={({ isActive }) =>
              isActive ? "characterPage characterPageActive" : "characterPage"
            }
          >
            Heroes
          </NavLink>
          <NavLink
            to="/info"
            className={({ isActive }) =>
              isActive ? "infoPage infoPageActive" : "infoPage"
            }
          >
            Info
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "aboutPage aboutPageActive" : "aboutPage"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
