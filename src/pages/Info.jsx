import React from "react";
import "../styling/InfoPage.css";

function Info() {
  return (
    <div className="info">
      <div className="info-page">
        <div className="header">
          <h1>Information Page</h1>
        </div>

        {/* Dota Information */}
        <section className="game-info">
          <h2>Dota</h2>
          <p>Info about the Dota game...</p>
        </section>
        <section>
          <h3>Roles in Dota</h3>
          <p>Describe the roles in Dota...</p>
        </section>
        <section>
          <h3>Classes in Dota</h3>
          <p>Information about classes in Dota...</p>
        </section>
        <section>
          <h3>Hero Complexity in Dota</h3>
          <p>Explaining the complexity of Dota heroes...</p>
        </section>

        {/* LoL Information */}
        <section className="game-info">
          <h2>LoL</h2>
          <p>Info about the LoL game...</p>
        </section>
        <section>
          <h3>Roles in LoL</h3>
          <p>Describe the roles in LoL...</p>
        </section>
        <section>
          <h3>Classes in LoL</h3>
          <p>Information about classes in LoL...</p>
        </section>
        <section>
          <h3>Hero Complexity in LoL</h3>
          <p>Explaining the complexity of LoL heroes...</p>
        </section>
      </div>
    </div>
  );
}

export default Info;
