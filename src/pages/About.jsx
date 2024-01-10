// About.jsx
import React from "react";
import "../styling/AboutPage.css";
import josipImage from "../images/josip.jpg";
import harisImage from "../images/haris.jpg";

function About() {
  return (
    <div className="about">
      <article className="aboutContent">
        <section>
          <h1>About Our Heroes Page</h1>
          <h2>Bringing Together Two Worlds of Strategy and Fantasy</h2>
          <p>
            Welcome to our dedicated space where the exhilarating universes of
            <strong className="dota-color"> Dota2</strong> and{" "}
            <strong className="lol-color">League of Legends</strong> converge!
            Our unique platform celebrates the rich and diverse rosters of two
            of the most iconic multiplayer online battle arena (MOBA) games in
            the world: <strong className="dota-color">Dota2</strong> and{" "}
            <strong strong className="lol-color">
              LoL
            </strong>
            .
          </p>
        </section>
        <section>
          <h2>Join Us in Celebrating the Richness of MOBA Gaming</h2>
          <p>
            We are more than just a resource; we are a celebration of the art,
            strategy, and storytelling that make{" "}
            <strong className="dota-color">Dota2</strong> and{" "}
            <strong strong className="lol-color">
              LoL
            </strong>{" "}
            the titans of the MOBA genre. Join us in exploring these fantastic
            realms, learn more about your favorite heroes, and maybe even
            discover a few new ones along the way!
          </p>
        </section>
      </article>
      <div className="memberContainer">
        <h2>Meet our team members!</h2>

        {/* LoL-themed member */}
        <div className="member lol-player" id="haris">
          <div className="image-box">
            <img src={harisImage} alt="Haris" />
          </div>
          <div className="text-link-wrapper">
            <div className="text-content">
              <p>
                <strong>Haris</strong> ...
              </p>
            </div>
            <div className="link-content">
              <br />
              You can check my{" "}
              <a
                href="https://github.com/HChughtai98"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                GitHub profile{" "}
              </a>{" "}
              , and my{" "}
              <a
                href="https://www.linkedin.com/in/haris-chughtai-b692ab183/"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                LinkedIn profile{" "}
              </a>
              .
            </div>
          </div>
        </div>
        {/* Dota-themed member */}
        <div className="member dota-player" id="josip">
          <div className="image-box dota-player">
            <img src={josipImage} alt="Josip" />
          </div>
          <div className="text-link-wrapper">
            <div className="text-content">
              <p>
                <strong>Josip Milan</strong> A 32-year-old Croatian currently
                residing in the Netherlands, I have transitioned from a previous
                career as a executive chef to embark on a new journey in the
                field of IT. Embracing the challenges of this career switch, I
                am thoroughly enjoying the learning process and the
                opportunities it brings.
              </p>
            </div>
            <div className="link-content">
              <br />
              You can check my{" "}
              <a
                href="https://github.com/gudwalMJ"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                GitHub profile{" "}
              </a>{" "}
              , and my{" "}
              <a
                href="https://www.linkedin.com/in/josip-milan-4738a9183/"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                LinkedIn profile{" "}
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
