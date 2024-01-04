// src/pages/Lol.jsx

import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import FilterComponentLol from "../components/FilterComponentLol"; // Make sure to create this component
import "../styling/Characters.css";
import "../styling/Lol.css";

const Lol = () => {
  const [lolFilters, setFilters] = useState({
    attackType: "",
    complexity: "",
    role: "",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  return (
    <div className="lol">
      <FilterComponentLol onFilterChange={handleFilterChange} />
      <CharacterList game="Lol" filters={lolFilters} />
    </div>
  );
};

export default Lol;
