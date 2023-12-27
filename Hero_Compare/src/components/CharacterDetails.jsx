import React from "react";

const CharacterDetails = ({ character }) => {
  return (
    <div className="character-details">
      <img src={character.image} alt={character.name} />
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
