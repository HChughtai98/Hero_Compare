// About.jsx
import React from "react";
import "../styling/AboutPage.css";
import josipImage from "../images/josip.jpg";
import harisImage from "../images/haris.jpg";

function About() {
  return (
    <div className="about">
      <div className="aboutContent">
        <h1>About Us</h1>
        <p>
          This is the about page for our React application. Here you can learn
          more about the creators.
        </p>
      </div>
      <div className="member" id="haris">
        <img src={harisImage} alt="Haris" />
        <p>Haris is a developer ...</p>
      </div>
      <div className="member" id="josip">
        <img src={josipImage} alt="Josip" />
        <p>Josip is a developer ...</p>
      </div>
    </div>
  );
}

export default About;
