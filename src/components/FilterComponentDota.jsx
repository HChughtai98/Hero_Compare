import React from "react";
// Styling //
import "../styling/option.css";

const FilterComponentDota = ({ onFilterChange }) => {
  // Define available filter options
  const attackTypes = ["Melee", "Ranged"];
  const classes = ["Carry", "Tank", "Support"];

  return (
    <div className="filter-container">
      {/* Dropdown for Attack Type filter */}
      <select
        id="selectId"
        onChange={(e) => onFilterChange("attackType", e.target.value)}
      >
        <option value="">Attack Type</option>
        {attackTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        id="selectId"
        onChange={(e) => onFilterChange("classes", e.target.value)}
      >
        {/* Dropdown for Class filter */}
        <option value="">Class</option>
        {classes.map((clasess) => (
          <option key={clasess} value={clasess}>
            {clasess}
          </option>
        ))}
      </select>
      {/* Dropdown for Complexity filter */}
      <select
        id="selectId"
        onChange={(e) => onFilterChange("complexity", e.target.value)}
      >
        <option value="">Complexity</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
};

export default FilterComponentDota;
