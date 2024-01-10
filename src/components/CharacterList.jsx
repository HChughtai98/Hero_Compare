import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import "../App.css";
import "../styling/Characters.css";
import "../styling/SearchBar.css";
import "../styling/Modal.css";

const CharacterList = ({ game, filters }) => {
  const [characters, setCharacters] = useState([]);
  const [charactersToHide, setCharactersToHide] = useState([]);
  const searchTerm = filters.search?.toLowerCase() || "";
  const [showForm, setShowForm] = useState(false);

  const sortAlphabetically = (characters) => {
    if (filters.alphabetical === "asc") {
      return characters.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.alphabetical === "desc") {
      return characters.sort((a, b) => b.name.localeCompare(a.name));
    }
    return characters;
  };

  const handleNewCharacter = (newCharacter) => {
    setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
  };

  const filterCharacters = (data) => {
    let filteredCharacters = data.filter((character) => {
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
        !searchTerm || character.name.toLowerCase().includes(searchTerm);

      return (
        matchesGame &&
        matchesAttackType &&
        matchesComplexity &&
        matchesRole &&
        matchesPrimaryAttr &&
        matchesSearchTerm
      );
    });

    return sortAlphabetically(filteredCharacters);
  };

  const fetchCharacters = () => {
    fetch("https://hero-database-backend.adaptable.app/Characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); 
      })
      .then((text) => {
        console.log("Received text:", text); 
        return JSON.parse(text); 
      })
      .then((data) => {
        const sortedAndFilteredCharacters = sortAlphabetically(
          filterCharacters(data)
        );
        setCharacters(sortedAndFilteredCharacters);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, [game, filters]);

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

  return (
    <div className="characters-title">
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

      {characters.length > 0 ? (
        <div className="charContainer">
          {characters.map((character) => (
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
      ) : (
        <p className="characters-noFilter">
          No characters match the selected filters.
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
