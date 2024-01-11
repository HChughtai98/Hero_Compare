import React from "react";
import "../styling/option.css";

const FilterComponentDota = ({ onFilterChange }) => {
  const roles = ["Carry", "Support", "Nuker", "Initiator"];
  const attackTypes = ["Melee", "Ranged"];
  const classes = ["Carry", "Tank", "Support"];

  return (
    <div className="filter-container">
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
        <option value="">Class</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

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
