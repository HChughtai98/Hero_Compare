import React from "react";
// Styling
import "../styling/AboutPage.css";
// Images and Icons
import josipImage from "../images/josip.jpg";
import harisImage from "../images/haris.jpg";
import githubIcon from "../images/githubIcon.png";
import linkedinIcon from "../images/linkedinIcon.png";

function About() {
  return (
    <div className="about">
      {/* About Content */}
      <article className="aboutContent">
        <section>
          <h1>About Our Hero Compare Page</h1>
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
      {/* Member Container */}
      <div className="memberContainer">
        <h2>Meet our team members!</h2>

        {/* LoL-themed member */}
        <div className="member lol-player" id="haris">
          <div className="image-box">
            <img className="harisImg" src={harisImage} alt="Haris" />
          </div>
          <div className="text-link-wrapper">
            <div className="text-content">
              <p>
                <strong>
                  <u>HARIS CHUGHTAI</u>
                </strong>
                {/* About Haris */}
                <p></p>
                Hey👋🏽, I'm a 25-year-old currently based in North
                Rhine-Westphalia, Germany.
                <p className="divider">_____________________________________</p>
                {/* More about Haris */}
                <p>
                  I've recently made the switch from Business Management &
                  Marketing to the exciting world of Software Development. I'm
                  all about the learning process, even when the content gets a
                  bit tricky. It's the challenge that keeps me hooked as a
                  developer.
                </p>
                <p className="divider">_____________________________________</p>
                {/* Even more about Haris */}
                <p>
                  Besides coding, I'm a big fan of gaming and esports. Exploring
                  new things and traveling are my go-to hobbies.
                </p>
                <p className="divider">_____________________________________</p>
                {/* Haris's goals */}
                <p>
                  My goals are simple: I want to be a successful and efficient
                  developer, working on projects that truly matter, and making
                  the most of life without regrets.
                </p>
              </p>
            </div>
            <div className="link-content">
              <br />
              {/* Links to Haris's profiles */}
              You can check my profiles:
              <a
                href="https://github.com/HChughtai98"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                <img src={githubIcon} alt="GitHub Icon" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/haris-chughtai-b692ab183/"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" />
                LinkedIn
              </a>
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
                <strong>
                  <u>JOSIP MILAN</u>
                </strong>
                {/* About Josip */}
                <p>
                  Hi 👋🏽, 32-year-old Croatian based in The Netherlands,
                  Amsterdam for the past 5 years.
                </p>
                <p className="divider">_____________________________________</p>
                {/* More about Josip */}
                <p>
                  👨‍💼 <strong>Previous Career:</strong> I excelled as an
                  Executive Sous Chef, overseeing operations in a prestigious
                  24-story hotel. My culinary journey reached its peak,
                  prompting me to explore new horizons.
                </p>
                <p className="divider">_____________________________________</p>
                {/* Even more about Josip */}
                <p>
                  🚀 <strong>Career Transition:</strong> I've embarked on an
                  exciting journey into web development. It's a world where
                  innovation and problem-solving take center stage. The learning
                  curve is exhilarating, and it allows me to channel my
                  creativity and think outside the box for solutions.
                </p>
                <p className="divider">_____________________________________</p>
                {/* Josip's diverse interests */}
                <p>
                  🍳✈️🎵🍿🎮 <strong>Diverse Interests:</strong> I'm passionate
                  about exploring diverse tastes, cultures, and entertainment.
                  From experimenting in the kitchen to traveling to far-flung
                  destinations, indulging in live music, enjoying movies, and
                  embracing the challenges of gaming, I find inspiration and
                  excitement in a wide range of experiences.
                </p>
                <p className="divider">_____________________________________</p>
                {/* Josip's goals */}
                <p>
                  🌟 <strong>Goals:</strong> My aspiration is to continually
                  strive for excellence, to learn, and to enhance my skills in
                  the dynamic realm of web development. I'm dedicated to
                  personal and professional growth, and I'm eager to contribute
                  to innovative projects in the IT field.
                </p>
              </p>
            </div>
            <div className="link-content">
              <br />
              {/* Links to Josip's profiles */}
              You can check my profiles:
              <a
                href="https://github.com/gudwalMJ"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                <img src={githubIcon} alt="GitHub Icon" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/josip-milan-4738a9183/"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
