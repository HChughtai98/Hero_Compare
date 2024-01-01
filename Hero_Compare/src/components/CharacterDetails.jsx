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

  return (
    <div
      className="character-details"
      style={{ backgroundImage: `url(${character.background})` }}
    >
      <div className="character-blur-overlay"></div>{" "}
      <img className="character-non-blur-overlay" src={character.background} />
      <div className="character-text-container">
        <h1 className="character-name">{character.name}</h1>
      </div>
      <div className="description-container">
        <h1 className="description-title">DESCRIPTION</h1>
        <p className="character-description">{character.description}</p>
        <div className="roleComplexity-info">
          {" "}
          <img src={character.roles_img} className="character-role" />
          <p>{character.roles}</p>
          <p className="character-complexity">
            Complexity: {character.complexity}
          </p>{" "}
        </div>
      </div>
      {
        <div className="character-information">
          <p className="character-game">{character.game}</p>
          <p className="character-attribute">{character.primary_attr}</p>
          <p className="character-attack">{character.attack_type}</p>
        </div>
      }
    </div>
  );
};

export default CharacterDetails;
