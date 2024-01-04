import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Role Icons for Lol //
import assassinIcon from "../images/rolesImages/assassinIcon.png";
import fighterIcon from "../images/rolesImages/fighterIcon.webp";
import mageIcon from "../images/rolesImages/mageIcon.webp";
import marksmanIcon from "../images/rolesImages/marksmanIcon.webp";
import supportIcon from "../images/rolesImages/supportIcon.webp";
import tankIcon from "../images/rolesImages/tankIcon.webp";
// Attack Type //
import meleeIcon from "../images/rolesImages/swordIcon.png";
import rangedIcon from "../images/rolesImages/rangedIcon.png";
// Styling //
import "../styling/Characters.css";
// Components //
import ComplexityIndicator from "./ComplexityIndicator";

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

  // Role Icons //
  const rolesImages = {
    Assassin: assassinIcon,
    Fighter: fighterIcon,
    Mage: mageIcon,
    Marksman: marksmanIcon,
    Support: supportIcon,
    Tank: tankIcon,
  };
  // Attack Types //
  const attackTypeImages = {
    Melee: meleeIcon,
    Ranged: rangedIcon,
  };

  return (
    <div
      className="character-details"
      style={{ backgroundImage: `url(${character.background})` }}
    >
      <div className="character-blur-overlay"></div>
      <img className="character-non-blur-overlay" src={character.background} />
      <div className="character-text-container">
        <h1 className="character-name">{character.name}</h1>
      </div>
      <div className="description-container">
        <h1 className="description-title">DESCRIPTION</h1>
        <p className="character-description">{character.description}</p>
        <div className="roleComplexity-info">
          <img
            src={rolesImages[character.roles]}
            className="character-role-icon"
            alt="Role Icon"
          />
          <p className="role-text">{character.roles}</p>
          <ComplexityIndicator complexity={character.complexity} />
        </div>

        <div className="character-information">
          {/*<p className="character-game">{character.game}</p>
          <p className="character-attribute">{character.primary_attr}</p>*/}
          <img
            src={attackTypeImages[character.attack_type]}
            className="character-attack-icon"
            alt="Attack Type Icon"
          />
          <p className="character-attack">{character.attack_type}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
