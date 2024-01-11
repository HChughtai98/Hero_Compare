import React, { useState } from "react";
import CharacterList from "./CharacterList";
import "../styling/Characters.css";
import "../styling/SearchBar.css";

const FilteredCharacterList = () => {
  const [filters, setFilters] = useState({
    roles: [],
    alphabetical: "asc",
    complexity: "",
    search: "",
    classes: [], 
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const handleClassChange = (e) => {
    const selectedClasses = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFilters((prevFilters) => ({
      ...prevFilters,
      classes: selectedClasses,
    }));
  };

  return (
    <div className="charPage">
      <div className="filters-container">
        {/* Class filter */}
        <label htmlFor="classes-select">Classes:</label>
        <select
          multiple={true}
          id="classes-select"
          value={filters.classes}
          onChange={(e) => handleFilterChange("classes", e.target.value)}
        >
          <option value="Carry">Carry</option>
          <option value="Tank">Tank</option>
          <option value="Support">Support</option>
        </select>

        <select
          onChange={(e) => handleFilterChange("complexity", e.target.value)}
        >
          <option value="">All Complexities</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>

        <select
          onChange={(e) => handleFilterChange("alphabetical", e.target.value)}
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <input
          type="text"
          placeholder="Search characters..."
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
      </div>

      <CharacterList filters={filters} />
    </div>
  );
};

export default FilteredCharacterList;
