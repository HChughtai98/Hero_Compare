import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import assassinIcon from "../images/rolesImages/assassinIcon.png";
import fighterIcon from "../images/rolesImages/fighterIcon.webp";
import mageIcon from "../images/rolesImages/mageIcon.webp";
import marksmanIcon from "../images/rolesImages/marksmanIcon.webp";
import supportIcon from "../images/rolesImages/supportIcon.webp";
import tankIcon from "../images/rolesImages/tankIcon.webp";
import meleeIcon from "../images/rolesImages/swordIcon.png";
import rangedIcon from "../images/rolesImages/rangedIcon.png";
import "../styling/Characters.css";
import ComplexityIndicator from "./ComplexityIndicator";
import PrevAndNextFunction from "./HandlePages";

const CharacterDetails = () => {
  let { characterId } = useParams();
  const [characters, setCharacters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5005/Characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        const initialIndex = data.findIndex(
          (c) => c.id === parseInt(characterId, 10)
        );
        setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
      })
      .catch((error) => console.error("Error fetching characters", error));
  }, [characterId, navigate]);

  useEffect(() => {
    if (characters[currentIndex]) {
      const newCharacterId = characters[currentIndex].id;
      navigate(`/characters/${newCharacterId}`, { replace: true });
    }
  }, [currentIndex, characters, navigate]);

  if (characters.length === 0) {
    return <div>Loading...</div>;
  }

  const character = characters[currentIndex];

  const rolesImages = {
    Assassin: assassinIcon,
    Fighter: fighterIcon,
    Mage: mageIcon,
    Marksman: marksmanIcon,
    Support: supportIcon,
    Tank: tankIcon,
  };

  const attackTypeImages = {
    Melee: meleeIcon,
    Ranged: rangedIcon,
  };

  const renderRoles = (rolesArray) =>
    rolesArray.map((role, index) => (
      <span key={index} className="role-text">
        {role}
        {index < rolesArray.length - 1 ? " " : ""}
      </span>
    ));

  return (
    <div
      className="character-details"
      style={{ backgroundImage: `url(${character.background})` }}
    >
      <div className="character-blur-overlay"></div>
      <img
        className="character-non-blur-overlay"
        src={character.background}
        alt={`Background of ${character.name}`}
      />
      <button onClick={() => console.log("Button clicked")}>Test Button</button>

      <div className="character-text-container">
        <h1 className="character-name">{character.name}</h1>
        <div className="description-container">
          <h1 className="description-title">DESCRIPTION</h1>
          <p className="character-description">{character.description}</p>
          <div className="roleComplexity-info">
            {character.roles.map((role, index) => (
              <img
                key={index}
                src={rolesImages[role]}
                className="character-role-icon"
                alt={`${role} Icon`}
              />
            ))}
            <div className="roles-container">
              {renderRoles(character.roles)}
            </div>
            <ComplexityIndicator complexity={character.complexity} />
          </div>
          <div className="character-information">
            <img
              src={attackTypeImages[character.attack_type]}
              className="character-attack-icon"
              alt={`${character.attack_type} Icon`}
            />
            <p className="character-attack">{character.attack_type}</p>
          </div>
        </div>
      </div>
      <PrevAndNextFunction
        charactersLength={characters.length}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default CharacterDetails;
