import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import FilterComponent from "../components/FilterComponent";
import "../styling/Characters.css";
import "../styling/Dota.css";

const Dota = () => {
  const [filters, setFilters] = useState({
    attackType: "",
    complexity: "",
    primaryAttr: "",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  return (
    <div className="dota">
      <FilterComponent onFilterChange={handleFilterChange} />
      <CharacterList game="Dota" filters={filters} />
    </div>
  );
};

export default Dota;
