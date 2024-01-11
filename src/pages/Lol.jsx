import React, { useState } from "react";
// Components
import LolCharacterList from "../components/LolCharacterList";
import FilterComponentLol from "../components/FilterComponentLol";
import SearchBar from "./SearchBar";
// Styling
import "../styling/Dota.css";
import "../styling/Lol.css";
import "../styling/SearchBar.css";

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
    <div className="lol">
      <div className="lol-summary">
        <h2>League of Legends Overview</h2>
        <p>
          League of Legends (LoL) is a fast-paced, competitive online game that
          blends the speed and intensity of an RTS with RPG elements. Two teams
          of powerful champions, each with a unique design and playstyle, battle
          head-to-head across multiple battlefields and game modes.
        </p>
        <h3>Champions</h3>
        <p>
          With an ever-expanding roster of champions, frequent updates, and a
          thriving tournament scene, League of Legends offers endless
          replayability for players of every skill level. Master one, or master
          them all.
        </p>
      </div>

      <h1 className="characters-header">PICK YOUR CHAMPION</h1>
      <div>
        <div className="filter-searchbar-ctn">
          <FilterComponentLol onFilterChange={handleFilterChange} />{" "}
          <SearchBar onSearchChange={handleSearchChange} />
        </div>

        <LolCharacterList game="Lol" filters={lolFilters} />
      </div>
    </div>
  );
};

export default Lol;
