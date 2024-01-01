import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styling/Navbar.css";
import ironhackLogo from "../images/ironhackLogo.png";

function Navbar() {
  return (
    <nav className="header">
      <div className="header_contents">
        <NavLink to="/">
          <img
            src={ironhackLogo}
            alt="Ironhack Logo"
            className="ironhackLogo"
          />
        </NavLink>
        <h1>Hero Database</h1>
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
