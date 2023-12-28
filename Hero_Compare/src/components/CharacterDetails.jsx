import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div className="character-details">
      <img src={character.background} alt={character.name} />
      <h2>{character.name}</h2>
      <p>
        <strong>Game:</strong> {character.game}
      </p>
      <p>
        <strong>Description:</strong> {character.description}
      </p>
      <p>
        <strong>Primary Attribute:</strong> {character.primary_attr}
      </p>
      <p>
        <strong>Attack Type:</strong> {character.attack_type}
      </p>
      <p>
        <strong>Roles:</strong> {character.roles.join(", ")}
      </p>
      <p>
        <strong>Complexity:</strong> {character.complexity}
      </p>
    </div>
  );
};

export default CharacterDetails;
