import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import "../App.css";
import "../styling/Characters.css";
import "../styling/SearchBar.css";
import "../styling/Modal.css";

const CharacterList = ({ filters }) => {
  const [characters, setCharacters] = useState([]);
  const [charactersToHide, setCharactersToHide] = useState([]);
  const searchTerm = filters.search?.toLowerCase() || "";
  const [showForm, setShowForm] = useState(false);

  const sortAlphabetically = (chars) => {
    if (filters.alphabetical === "asc") {
      return chars.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.alphabetical === "desc") {
      return chars.sort((a, b) => b.name.localeCompare(a.name));
    }
    return chars;
  };

  const handleNewCharacter = (newCharacter) => {
    setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
  };

  const filterCharacters = (data) => {
    let filteredCharacters = data.filter((character) => {
      const matchesAttackType =
        !filters.attackType ||
        character.attack_type.includes(filters.attackType);
      const matchesComplexity =
        !filters.complexity ||
        character.complexity === parseInt(filters.complexity, 10);

      const matchesClasses =
        filters.classes.length === 0 ||
        filters.classes.some((selectedClass) =>
          character.classes.includes(selectedClass)
        );

      const matchesSearchTerm =
        !searchTerm || character.name.toLowerCase().includes(searchTerm);

      return (
        matchesAttackType &&
        matchesComplexity &&
        matchesClasses &&
        matchesSearchTerm
      );
    });

    return sortAlphabetically(filteredCharacters);
  };

  const fetchCharacters = () => {
    fetch("https://hero-database-backend.adaptable.app/Characters")
      .then((response) => response.json())
      .then((data) => {
        const sortedAndFilteredCharacters = sortAlphabetically(
          filterCharacters(data)
        );
        setCharacters(sortedAndFilteredCharacters);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchCharacters();
  }, [filters]);

  const getCharacterClass = (character) => {
    const isHidden = charactersToHide.some((char) => char.id === character.id);
    const nameMatches = character.name.toLowerCase().includes(searchTerm);

    let className = "character";
    if (isHidden) {
      className += " hide";
    }
    if (searchTerm && !nameMatches) {
      className += " dropped-out";
    }

    return className;
  };

  // Split characters by game
  const dotaCharacters = characters.filter((char) => char.game === "Dota");
  const lolCharacters = characters.filter((char) => char.game === "Lol");

  return (
    <div className="characters-title">
      <div className="games-container">
        {/* Display Dota characters */}
        <div className="game-characters dota-characters">
          <h2>Dota Characters</h2>
          {dotaCharacters.map((character) => (
            <Link
              to={`/characters/${character.id}`}
              key={character.id}
              className={getCharacterClass(character)}
            >
              <img src={character.image} alt={`Character ${character.name}`} />
              <p>{character.name}</p>
            </Link>
          ))}
        </div>
        {/* Display LoL characters */}
        <div className="game-characters lol-characters">
          <h2>LoL Characters</h2>
          {lolCharacters.map((character) => (
            <Link
              to={`/characters/${character.id}`}
              key={character.id}
              className={getCharacterClass(character)}
            >
              <img src={character.image} alt={`Character ${character.name}`} />
              <p>{character.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <button className="Add-char-btn" onClick={() => setShowForm(true)}>
        Add New Character
      </button>
      {showForm && (
        <div className="modal">
          <CharacterForm
            onNewCharacter={handleNewCharacter}
            closeModal={() => setShowForm(false)}
            fetchCharacters={fetchCharacters}
          />
        </div>
      )}
    </div>
  );
};

CharacterList.defaultProps = {
  filters: {
    attackType: "",
    complexity: "",
    primaryAttr: "",
    roles: [],
    classes: [],
    search: "",
  },
};

export default CharacterList;
