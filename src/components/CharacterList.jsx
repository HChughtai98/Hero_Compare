import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Components //
import CharacterForm from "./CharacterForm";
// Styling //
import "../App.css";
import "../styling/Characters.css";
import "../styling/SearchBar.css";
import "../styling/Modal.css";

const CharacterList = ({ filters, classFilter }) => {
  // State to manage characters
  const [characters, setCharacters] = useState([]);
  const [charactersToHide, setCharactersToHide] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Function to handle search input change
  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm); // Update the search term state
  };

  // Function to sort characters alphabetically
  const sortAlphabetically = (chars) => {
    if (filters.alphabetical === "asc") {
      return chars.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.alphabetical === "desc") {
      return chars.sort((a, b) => b.name.localeCompare(a.name));
    }
    return chars;
  };

  // Function to handle adding a new character
  const handleNewCharacter = (newCharacter) => {
    setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
  };

  // Function to filter characters based on various criteria
  const filterCharacters = (data) => {
    let filteredCharacters = data.filter((character) => {
      const matchesAttackType =
        !filters.attackType ||
        character.attack_type.includes(filters.attackType);
      const matchesComplexity =
        !filters.complexity ||
        character.complexity === parseInt(filters.complexity, 10);

      // Add class filter logic
      const matchesClassFilter =
        !classFilter || character.classes.includes(classFilter);

      const matchesSearchTerm =
        !filters.search ||
        character.name.toLowerCase().includes(filters.search);

      return (
        matchesAttackType &&
        matchesComplexity &&
        matchesClassFilter && // Include class filter in the filter logic
        matchesSearchTerm
      );
    });

    return sortAlphabetically(filteredCharacters);
  };

  // Function to fetch characters from the API
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
  }, [filters, classFilter]);

  // Function to determine the CSS class for a character
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
      <div className="games-container">
        {/* Display Dota characters */}
        <div className="game-characters dota-characters">
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
