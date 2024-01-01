import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styling/HomePage.css";

function Home() {
  return (
    <div className="homePage">
      <Link to="/dota" className="homeImage" id="dotaImage">
        {/* ... */}
      </Link>
      <Link to="/lol" className="homeImage" id="lolImage">
        {/* ... */}
      </Link>
    </div>
  );
}

export default Home;
