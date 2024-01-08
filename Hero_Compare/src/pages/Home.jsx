import React from "react";
import { Link } from "react-router-dom";
// Styles
import "../App.css";
import "../styling/HomePage.css";
// Logo images
import dotaLogo from "../images/dota2Logo.png";
import lolLogo from "../images/lolLogo.png";

function Home() {
  return (
    <div className="homePage">
      <Link to="/dota" className="homeImage" id="dotaImage">
        <img src={dotaLogo} alt="Dota Logo" className="gameLogo" />

        {/* ... */}
      </Link>
      <Link to="/lol" className="homeImage" id="lolImage">
        <img src={lolLogo} alt="LoL Logo" className="gameLogo" />

        {/* ... */}
      </Link>
    </div>
  );
}

export default Home;
