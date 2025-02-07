import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// LoL Icons
import assassinIcon from "../images/rolesImages/assassinIcon.png";
import fighterIcon from "../images/rolesImages/fighterIcon.webp";
import mageIcon from "../images/rolesImages/mageIcon.webp";
import marksmanIcon from "../images/rolesImages/marksmanIcon.webp";
import supportIcon from "../images/rolesImages/supportIcon.webp";
import tankIcon from "../images/rolesImages/tankIcon.webp";
// Dota2 Icons
import dotaCarryIcon from "../images/rolesImages/dotaCarryIcon.webp";
import dotaSupportIcon from "../images/rolesImages/dotaSupportIcon.webp";
import dotaNukerIcon from "../images/rolesImages/dotaNukerIcon.webp";
import dotaEscapeIcon from "../images/rolesImages/dotaEscapeIcon.webp";
import dotaDisablerIcon from "../images/rolesImages/dotaDisablerIcon.webp";
import dotaInitiatorIcon from "../images/rolesImages/dotaInitiatorIcon.webp";
import dotaPusherIcon from "../images/rolesImages/dotaPusherIcon.webp";
import dotaDurableIcon from "../images/rolesImages/dotaDurableIcon.webp";
// Characters Attack Icons
import meleeIcon from "../images/rolesImages/swordIcon.webp";
import rangedIcon from "../images/rolesImages/rangedIcon.webp";
// Styling
import "../styling/Characters.css";
// Components
import ComplexityIndicator from "./ComplexityIndicator";
import PrevAndNextFunction from "./HandlePages";

const CharacterDetails = () => {
  // Get the characterId from the URL parameters
  let { characterId } = useParams();

  // State to hold the list of characters and current index
  const [characters, setCharacters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hook for navigation
  const navigate = useNavigate();

  // State to hold the game context
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Fetch character data from the API based on characterId
    fetch("https://hero-database-backend.adaptable.app/Characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);

        // Find the initial index of the characterId in the data
        const initialIndex = data.findIndex(
          (c) => c.id === parseInt(characterId, 10)
        );

        // Set the currentIndex and game context based on the character
        setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
        if (initialIndex >= 0) {
          setGame(data[initialIndex].game);
        }
      })
      .catch((error) => console.error("Error fetching characters", error));
  }, [characterId, navigate]);

  useEffect(() => {
    // When the currentIndex changes, update the URL with the new characterId
    if (characters[currentIndex]) {
      const newCharacterId = characters[currentIndex].id;
      navigate(`/characters/${newCharacterId}`, { replace: true });
    }
  }, [currentIndex, characters, navigate]);

  if (characters.length === 0 || !game) {
    return <div>Loading...</div>;
  }

  // Get the current character
  const character = characters[currentIndex];

  // Define objects to map role and attack type to their respective icons
  const rolesImages = {
    Lol: {
      Assassin: assassinIcon,
      Fighter: fighterIcon,
      Mage: mageIcon,
      Marksman: marksmanIcon,
      Support: supportIcon,
      Tank: tankIcon,
    },
    Dota: {
      Carry: dotaCarryIcon,
      Support: dotaSupportIcon,
      Nuker: dotaNukerIcon,
      Disabler: dotaDisablerIcon,
      Durable: dotaDurableIcon,
      Escape: dotaEscapeIcon,
      Pusher: dotaPusherIcon,
      Initiator: dotaInitiatorIcon,
    },
  };

  const attackTypeImages = {
    Melee: meleeIcon,
    Ranged: rangedIcon,
  };

  // Render roles as icons and text
  const renderRoles = (rolesArray) =>
    rolesArray.map((role, index) => (
      <div key={index} className="role-with-icon">
        <img
          src={rolesImages[game][role]}
          className={`character-role-icon ${
            game === "Dota" ? "dota-icon" : ""
          }`}
          alt={`${role} Icon`}
        />
        <span className="role-text">{role}</span>
      </div>
    ));

  // Function to handle character deletion
  const handleDelete = () => {
    fetch(
      `https://hero-database-backend.adaptable.app/Characters/${characterId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response.ok) {
          console.error("Network response was not ok");
        }
        navigate("/characters");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="charPage">
      <div
        className="character-details character-background"
        style={{ backgroundImage: `url(${character.background})` }}
      >
        <div className="character-blur-overlay"></div>
        <img
          className="character-non-blur-overlay"
          src={character.background}
          alt={`Background of ${character.name}`}
        />

        <div className="character-text-container">
          <h1 className="character-name">{character.name}</h1>
          <div className="description-container">
            <h1 className="description-title">DESCRIPTION</h1>
            <p className="character-description">{character.description}</p>
            <div className="roleComplexity-info">
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
            <div>
              <button onClick={handleDelete}>Delete Character</button>
            </div>
          </div>
        </div>
        <PrevAndNextFunction
          charactersLength={characters.length}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default CharacterDetails;
