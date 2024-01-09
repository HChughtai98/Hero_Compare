import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import FilterComponentDota from "../components/FilterComponentDota";
import "../styling/Characters.css";
import "../styling/Dota.css";
import SearchBar from "./SearchBar";

const Dota = () => {
  const [dotaFilters, setFilters] = useState({
    attackType: "",
    complexity: "",
    primaryAttr: "",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const handleSearchChange = (searchTerm) => {
    setFilters((prevFilters) => ({ ...prevFilters, search: searchTerm }));
  };

  return (
    <div className="dota">
      <div className="dota-summary">
        <h2>Dota 2 Overview</h2>
        <p>
          Dota 2 is a multiplayer online battle arena (MOBA) game that pits two
          teams of five players against each other. Each player controls a
          "Hero" with unique abilities and differing styles of play. The game is
          known for its deep strategy, complex team dynamics, and challenging
          gameplay.
        </p>
        <h3>Heroes</h3>
        <p>
          In Dota 2, heroes are central to the game's design and gameplay. Each
          hero offers a unique set of abilities and play styles, ranging from
          nukers and supports to carries and initiators. Understanding each
          hero's strengths and weaknesses is key to mastering the game.
        </p>
      </div>

      <h1 className="characters-header">PICK YOUR HERO</h1>
      <div>
        <div className="filter-searchbar-ctn">
          <FilterComponentDota onFilterChange={handleFilterChange} />{" "}
          <SearchBar onSearchChange={handleSearchChange} />
        </div>

        <CharacterList game="Dota" filters={dotaFilters} />
      </div>
    </div>
  );
};

export default Dota;
