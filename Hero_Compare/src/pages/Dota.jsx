import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import FilterComponentDota from "../components/FilterComponentDota";
import "../styling/Characters.css";
import "../styling/Dota.css";

const Dota = () => {
  const [dotaFilters, setFilters] = useState({
    attackType: "",
    complexity: "",
    primaryAttr: "",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  return (
    <div className="dota">
      <FilterComponentDota onFilterChange={handleFilterChange} />
      <CharacterList game="Dota" filters={dotaFilters} />
    </div>
  );
};

export default Dota;
