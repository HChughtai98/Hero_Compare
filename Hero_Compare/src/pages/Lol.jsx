// src/pages/Lol.jsx

import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import FilterComponentLol from "../components/FilterComponentLol"; // Make sure to create this component
import "../styling/Characters.css";
import "../styling/Lol.css";
import "../styling/SearchBar.css";
import SearchBar from "./SearchBar";

const Lol = () => {
  const [lolFilters, setFilters] = useState({
    attackType: "",
    complexity: "",
    role: "",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const handleSearchChange = (searchTerm) => {
    setFilters((prevFilters) => ({ ...prevFilters, search: searchTerm }));
  };

  return (
    <div>
      <h1 className="characters-header">SELECT YOUR CHAMPION</h1>
      <div>
        <div className="filter-searchbar-ctn">
          <FilterComponentLol onFilterChange={handleFilterChange} />{" "}
          <SearchBar onSearchChange={handleSearchChange} />
        </div>

        <CharacterList game="Lol" filters={lolFilters} />
      </div>
    </div>
  );
};

export default Lol;
