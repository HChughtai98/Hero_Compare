import React, { useState } from "react";
import CharacterList from "./CharacterList";
import "../styling/Characters.css";
import "../styling/SearchBar.css";

const FilteredCharacterList = () => {
  const [filters, setFilters] = useState({
    game: "", // For filtering by game
    alphabetical: "asc", // For alphabetical order, 'asc' or 'desc'
    complexity: "", // For filtering by complexity
    search: "",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const sortAlphabetically = (a, b) => {
    if (filters.alphabetical === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  };

  return (
    <div className="charPage">
      {/* Filters UI */}
      <div className="filters-container">
        <select onChange={(e) => handleFilterChange("game", e.target.value)}>
          <option value="">All Games</option>
          <option value="Dota">Dota</option>
          <option value="Lol">LoL</option>
        </select>
        <select
          onChange={(e) => handleFilterChange("complexity", e.target.value)}
        >
          <option value="">All Complexities</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
        <select
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, alphabetical: e.target.value }))
          }
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <input
          type="text"
          placeholder="Search characters..."
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
      </div>

      <CharacterList game={filters.game} filters={filters} />
    </div>
  );
};

export default FilteredCharacterList;
