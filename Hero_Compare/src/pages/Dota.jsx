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
    <div>
      <h1 className="characters-header">SELECT YOUR HERO</h1>
      <div>
        <div className="filter-searchbar-ctn">
          <FilterComponentDota onFilterChange={handleFilterChange} />{" "}
          <SearchBar onSearchChange={handleSearchChange} />
        </div>

        <CharacterList game="Dota" filters={lolFilters} />
      </div>
    </div>
  );
};

export default Dota;
