import React, { useState } from "react";
// Components //
import CharacterList from "../components/CharacterList";
import FilterComponentDota from "../components/FilterComponentDota";
import SearchBar from "./SearchBar";
// Styling //
import "../styling/Characters.css";
import "../styling/Dota.css";

const Dota = () => {
  // State for Dota filters
  const [dotaFilters, setFilters] = useState({
    attackType: "",
    complexity: "",
    primaryAttr: "",
  });

  // Handle filter change
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  // Handle search term change
  const handleSearchChange = (searchTerm) => {
    setFilters((prevFilters) => ({ ...prevFilters, search: searchTerm }));
  };

  return (
    <div className="dota">
      <div className="dota-summary">
        <h2>Dota 2</h2>
        <p>
          <strong>Dota 2</strong> is a multiplayer online battle arena (MOBA)
          game that pits two teams of five players against each other. Each
          player controls a "Hero" with unique abilities and differing styles of
          play. The game is known for its deep strategy, complex team dynamics,
          and challenging gameplay.
        </p>
        <h3>Heroes</h3>
        <p>
          In <strong>Dota 2</strong>, heroes are central to the game's design
          and gameplay. Each hero offers a unique set of abilities and play
          styles, ranging from nukers and supports to carries and initiators.
          Understanding each hero's strengths and weaknesses is key to mastering
          the game.
        </p>
      </div>

      {/* Dota header */}
      <h1 className="characters-header dota-style">PICK YOUR HERO</h1>
      <div>
        <div className="filter-searchbar-ctn">
          {/* Filter component */}
          <FilterComponentDota onFilterChange={handleFilterChange} />
          {/* Search bar */}
          <SearchBar onSearchChange={handleSearchChange} />
        </div>

        {/* Character list */}
        <CharacterList game="Dota" filters={dotaFilters} />
      </div>
    </div>
  );
};

export default Dota;
