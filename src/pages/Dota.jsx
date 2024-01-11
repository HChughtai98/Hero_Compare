import React, { useState } from "react";
import DotaList from "../components/DotaList";
import FilterComponentDota from "../components/FilterComponentDota";
import SearchBar from "./SearchBar";
import "../styling/Dota.css";

const Dota = () => {
  const [dotaFilters, setFilters] = useState({
    attackType: "",
    complexity: "",
    primaryAttr: "",
  });

  const [classFilter, setClassFilter] = useState(""); // Declare classFilter here
  const [roleFilter, setRoleFilter] = useState(""); // Declare roleFilter here

  const handleFilterChange = (filterType, value) => {
    if (filterType === "classes") {
      setClassFilter(value);
    } else if (filterType === "role") {
      setRoleFilter(value);
    } else {
      setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
    }
  };

  const handleSearchChange = (searchTerm) => {
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
          <FilterComponentDota onFilterChange={handleFilterChange} />{" "}
          <SearchBar onSearchChange={handleSearchChange} />
        </div>

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
