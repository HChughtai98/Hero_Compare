import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styling/Characters.css";

const CharacterDetails = () => {
  let { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5005/Characters/${characterId}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) =>
        console.error("Error fetching character details", error)
      );
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }

  // Render character details
  return (
    <div
      className="character-details"
      style={{ backgroundImage: `url(${character.background})` }}
    >
      <div className="character-blur-overlay"></div>{" "}
      {/* This div creates the blur effect */}
      <div
        className="character-non-blur-overlay"
        style={{ backgroundImage: `url(${character.background})` }}
      ></div>
      <div className="character-text-container">
        <h1 className="character-name">{character.name}</h1>
        <p className="character-description">{character.description}</p>

        {/*<div>
          <p className="character-game">{character.game}</p>
          <p className="character-attribute">{character.primary_attr}</p>
          <p className="character-attack">{character.attack_type}</p>
          <p className="character-role">{character.roles.join(", ")}</p>
          <p className="character-complexity">{character.complexity}</p>
  </div>*/}
      </div>
    </div>
  );
};

export default CharacterDetails;
