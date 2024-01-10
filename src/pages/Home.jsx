import React from "react";
import { Link } from "react-router-dom";
// Styles
import "../App.css";
import "../styling/HomePage.css";
// Logo images
import dotaLogo from "../images/dota2Logo.png";
import lolLogo from "../images/lolLogo.png";
import heroCompareLogo from "../images/heroCompare.png";
import hiddenImageSrc from "../images/heroCompareLogo.png";

function Home() {
  const handleLogoHover = (enter) => {
    document.getElementById("dotaImage").style.transform = enter
      ? "scale(1) translateX(-30%)"
      : "scale(1)";
    document.getElementById("lolImage").style.transform = enter
      ? "scale(1) translateX(30%)"
      : "scale(1)";
  };
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
      <Link
        to="/characters"
        className="heroCompareLink"
        onMouseEnter={() => handleLogoHover(true)}
        onMouseLeave={() => handleLogoHover(false)}
      >
        <img
          src={heroCompareLogo}
          alt="HeroCompare Logo"
          className="heroCompareLogo heroCompareLogoHome"
        />
        <img src={hiddenImageSrc} alt="Hidden" className="imageUnderLogo" />
      </Link>
    </div>
  );
}

export default Home;
