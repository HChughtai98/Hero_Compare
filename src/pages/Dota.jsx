import React, { useState } from "react";
// Components //
import DotaList from "../components/DotaList";
import FilterComponentDota from "../components/FilterComponentDota";
import SearchBar from "./SearchBar";
// Styling //
import "../styling/Dota.css";

const Dota = () => {
  // State for Dota hero filters
  const [dotaFilters, setFilters] = useState({
    attackType: "",
    complexity: "",
    primaryAttr: "",
  });

  // State for class filter
  const [classFilter, setClassFilter] = useState("");

  // State for role filter
  const [roleFilter, setRoleFilter] = useState("");

  // Function to handle filter changes
  const handleFilterChange = (filterType, value) => {
    if (filterType === "classes") {
      // Update class filter
      setClassFilter(value);
    } else if (filterType === "role") {
      // Update role filter
      setRoleFilter(value);
    } else {
      // Update Dota hero filters
      setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
    }
  };

  // Function to handle search input change
  const handleSearchChange = (searchTerm) => {
    // Update Dota hero filters with search term
    setFilters((prevFilters) => ({ ...prevFilters, search: searchTerm }));
  };

  return (
    <div className="dota">
      <div className="dota-summary">
        <h2 className="dota-style">Dota 2</h2>

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

      <h1 className="characters-header dota-style">PICK YOUR HERO</h1>
      <div>
        <div className="filter-searchbar-ctn">
          {/* Filter component for Dota heroes */}
          <FilterComponentDota onFilterChange={handleFilterChange} />{" "}
          {/* Search bar for filtering heroes by name */}
          <SearchBar onSearchChange={handleSearchChange} />
        </div>

        {/* Dota hero list */}
        <DotaList
          game="Dota"
          filters={dotaFilters}
          classFilter={classFilter}
          roleFilter={roleFilter}
        />
      </div>
    </div>
  );
};

export default Dota;
