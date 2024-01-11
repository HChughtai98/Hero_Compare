import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import "../App.css";
import "../styling/Dota.css";
import "../styling/SearchBar.css";
import "../styling/Modal.css";

const DotaList = ({ filters, classFilter }) => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

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

  // Split characters by game
  const DotaCharacters = characters.filter((char) => char.game === "Dota");

  return (
    <div className="characters-title-dota">
      <div className="games-container-dota">
        {/* Display Dota characters */}
        {DotaCharacters.map((character) => {
          const matchesSearchTerm =
            !searchTerm ||
            character.name.toLowerCase().includes(searchTerm.toLowerCase());
          return (
            <Link
              to={`/characters/${character.id}`}
              key={character.id}
              className={`dotaChar${matchesSearchTerm ? "" : " hide"}`}
            >
              <img src={character.image} alt={`Character ${character.name}`} />
              <p>{character.name}</p>
            </Link>
          );
        })}
      </div>
      <button className="Add-char-btn-" onClick={() => setShowForm(true)}>
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

DotaList.defaultProps = {
  filters: {
    attackType: "",
    complexity: "",
    primaryAttr: "",
    roles: [],
    classes: [],
    search: "",
  },
};

export default DotaList;
