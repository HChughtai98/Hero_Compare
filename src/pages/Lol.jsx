import React, { useState } from "react";
// Components //
import LolCharacterList from "../components/LolCharacterList";
import FilterComponentLol from "../components/FilterComponentLol";
import SearchBar from "./SearchBar";
// Styling //
import "../styling/Dota.css";
import "../styling/SearchBar.css";

const Lol = () => {
  // State for LoL filters
  const [lolFilters, setFilters] = useState({
    attackType: "",
    complexity: "",
    role: "",
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

  // Handle search term change
  const handleSearchChange = (searchTerm) => {
    setFilters((prevFilters) => ({ ...prevFilters, search: searchTerm }));
  };

  return (
    <div className="lol">
      <div className="lol-summary">
        <h2>League of Legends</h2>
        <p>
          <strong>League of Legends (LoL)</strong> is a fast-paced, competitive
          online game that blends the speed and intensity of an RTS with RPG
          elements. Two teams of powerful champions, each with a unique design
          and playstyle, battle head-to-head across multiple battlefields and
          game modes.
        </p>
        <h3>Champions</h3>
        <p>
          With an ever-expanding roster of champions, frequent updates, and a
          thriving tournament scene, <strong>League of Legends (LoL)</strong>{" "}
          offers endless replayability for players of every skill level. Master
          one, or master them all.
        </p>
      </div>

      {/* LoL header */}
      <h1 className="characters-header lol-style">PICK YOUR CHAMPION</h1>
      <div>
        <div className="filter-searchbar-ctn">
          {/* Filter component */}
          <FilterComponentLol onFilterChange={handleFilterChange} />
          {/* Search bar */}
          <SearchBar onSearchChange={handleSearchChange} />
        </div>

        <LolCharacterList
          game="Lol"
          filters={lolFilters}
          classFilter={classFilter}
          roleFilter={roleFilter}
        />
      </div>
    </div>
  );
};

export default Lol;
