import React, { useState } from "react";
// Components //
import CharacterList from "./CharacterList";
// Styling //
import "../styling/Characters.css";
import "../styling/SearchBar.css";

const FilteredCharacterList = () => {
  const [filters, setFilters] = useState({
    classes: [],
    complexity: "",
    alphabetical: "asc",
    search: "",
  });

  const [classFilter, setClassFilter] = useState(""); // Add class filter state

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const handleClassFilter = (value) => {
    setClassFilter(value); // Set the class filter
  };

  return (
    <div className="charPage">
      <div className="filters-container">
        {/* Classes filter */}
        <select onChange={(e) => handleClassFilter(e.target.value)}>
          <option value="">Classes</option>
          <option value="Carry">Carry</option>
          <option value="Tank">Tank</option>
          <option value="Support">Support</option>
        </select>

        {/* Complexity filter */}
        <select
          onChange={(e) => handleFilterChange("complexity", e.target.value)}
        >
          <option value="">Complexity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        {/* Alphabetical filter */}
        <select
          onChange={(e) => handleFilterChange("alphabetical", e.target.value)}
        >
          <option value="asc">Alphabetical</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        {/* Search filter */}
        <input
          type="text"
          placeholder="Search characters..."
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
      </div>
      <CharacterList filters={filters} classFilter={classFilter} />
    </div>
  );
};

export default FilteredCharacterList;
