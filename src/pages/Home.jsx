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
  // Function to handle logo hover effect
  const handleLogoHover = (enter) => {
    const dotaImage = document.getElementById("dotaImage");
    const lolImage = document.getElementById("lolImage");

    // Apply transform effect on Dota image
    dotaImage.style.transform = enter
      ? "scale(1) translateX(-30%)"
      : "scale(1)";

    // Apply transform effect on LoL image
    lolImage.style.transform = enter ? "scale(1) translateX(30%)" : "scale(1)";
  };

  return (
    <div className="homePage">
      {/* Link to Dota page */}
      <Link to="/dota" className="homeImage" id="dotaImage">
        <img src={dotaLogo} alt="Dota Logo" className="gameLogo" />
        {/* Add any other content */}
      </Link>

      {/* Link to LoL page */}
      <Link to="/lol" className="homeImage" id="lolImage">
        <img src={lolLogo} alt="LoL Logo" className="gameLogo" />
        {/* Add any other content */}
      </Link>

      {/* Link to the character comparison page */}
      <Link
        to="/characters"
        className="heroCompareLink"
        onMouseEnter={() => handleLogoHover(true)}
        onMouseLeave={() => handleLogoHover(false)}
      >
        {/* HeroCompare Logo */}
        <img
          src={heroCompareLogo}
          alt="HeroCompare Logo"
          className="heroCompareLogo heroCompareLogoHome"
        />
        {/* Hidden image */}
        <img src={hiddenImageSrc} alt="Hidden" className="imageUnderLogo" />
      </Link>
    </div>
  );
}

export default Home;
