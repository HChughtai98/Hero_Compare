import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styling/Characters.css";

const CharacterList = ({ game, filters }) => {
  const [characters, setCharacters] = useState([]);
  const [charactersToHide, setCharactersToHide] = useState([]);

  const filterCharacters = (data) => {
    return data.filter((character) => {
      const matchesGame = game ? character.game === game : true;
      const matchesAttackType =
        !filters.attackType ||
        character.attack_type.includes(filters.attackType);
      const matchesComplexity =
        !filters.complexity ||
        character.complexity === parseInt(filters.complexity, 10);
      const matchesRole =
        game === "Lol"
          ? !filters.role || character.roles.includes(filters.role)
          : true;
      const matchesPrimaryAttr =
        game === "Dota"
          ? !filters.primaryAttr ||
            character.primary_attr === filters.primaryAttr
          : true;
      const matchesSearchTerm =
        !filters.search ||
        character.name.toLowerCase().includes(filters.search.toLowerCase());

      return (
        matchesGame &&
        matchesAttackType &&
        matchesComplexity &&
        matchesRole &&
        matchesPrimaryAttr &&
        matchesSearchTerm
      );
    });
  };

  useEffect(() => {
    fetch("http://localhost:5005/Characters")
      .then((response) => response.json())
      .then((data) => {
        const newFilteredCharacters = filterCharacters(data);
        const charactersToBeHidden = characters.filter(
          (char) =>
            !newFilteredCharacters.some((newChar) => newChar.id === char.id)
        );

        setCharactersToHide(charactersToBeHidden);

        const timeoutId = setTimeout(() => {
          setCharacters(newFilteredCharacters);
          setCharactersToHide([]);
        }, 500); // 500ms matches the CSS animation duration

        return () => clearTimeout(timeoutId);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [game, filters]);

  return (
    <div className="characters-title">
      {characters.length > 0 ? (
        <div className="charContainer">
          {characters.map((character) => (
            <Link
              to={`/characters/${character.id}`}
              key={character.id}
              className={`character ${
                charactersToHide.some((char) => char.id === character.id)
                  ? "hide"
                  : ""
              }`}
            >
              <img src={character.image} alt={`Character ${character.name}`} />
              <p>{character.name}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="characters-noFilter">
          No heroes match the selected filters.
        </p>
      )}
    </div>
  );
};

CharacterList.defaultProps = {
  game: "",
  filters: {
    attackType: "",
    complexity: "",
    primaryAttr: "",
    role: "",
    search: "",
  },
};

export default CharacterList;
