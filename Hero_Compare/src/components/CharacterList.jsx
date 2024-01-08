import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styling/Characters.css";

const CharacterList = ({ game, filters }) => {
  const [characters, setCharacters] = useState([]);

  // Function to handle filtering of characters based on the game and filters
  const filterCharacters = (data) => {
    return data.filter((character) => {
      const matchesAttackType =
        !filters.attackType ||
        character.attack_type.includes(filters.attackType);
      const matchesComplexity =
        !filters.complexity ||
        character.complexity === parseInt(filters.complexity, 10);

      // Additional filtering logic specific for "Lol"
      const matchesRole =
        game === "Lol"
          ? !filters.role || character.roles.includes(filters.role)
          : true;

      // Additional filtering logic specific for "Dota" for primary attribute
      const matchesPrimaryAttr =
        game === "Dota"
          ? !filters.primaryAttr ||
            character.primary_attr === filters.primaryAttr
          : true;

      // General filtering logic
      return (
        (game ? character.game === game : true) &&
        matchesAttackType &&
        matchesComplexity &&
        matchesRole &&
        matchesPrimaryAttr
      );
    });
  };

  useEffect(() => {
    fetch("http://localhost:5005/Characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const filteredCharacters = filterCharacters(data);
        setCharacters(filteredCharacters);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [game, filters]); // Rerun when game or filters change

  return (
    <div className="characters-title">
      {characters.length > 0 ? (
        <>
          <div className="charContainer">
            {characters.map((character) => (
              <Link
                to={`/characters/${character.id}`}
                key={character.id}
                className="character"
              >
                <img
                  src={character.image}
                  alt={`Character ${character.name}`}
                />
                <p>{character.name}</p>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <p className="characters-noFilter">
          No heroes match the selected filters.
        </p> // Message when no characters match
      )}
    </div>
  );
};

// Define default props for CharacterList
CharacterList.defaultProps = {
  game: "",
  filters: {
    attackType: "",
    complexity: "",
    primaryAttr: "",
    role: "",
  },
};
export default CharacterList;
