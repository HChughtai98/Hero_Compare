import React from "react";

const FilterComponent = ({ onFilterChange }) => {
  return (
    <div className="filter-container">
      {/* You can use select elements or buttons for filters, here's an example with selects */}
      <select onChange={(e) => onFilterChange("attackType", e.target.value)}>
        <option value="">All Attack Types</option>
        <option value="Melee">Melee</option>
        <option value="Ranged">Ranged</option>
      </select>

      <select onChange={(e) => onFilterChange("complexity", e.target.value)}>
        <option value="">All Complexities</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <select onChange={(e) => onFilterChange("primaryAttr", e.target.value)}>
        <option value="">All Attributes</option>
        <option value="Strength">Strength</option>
        <option value="Agility">Agility</option>
        <option value="Intelligence">Intelligence</option>
      </select>
    </div>
  );
};

export default FilterComponent;
