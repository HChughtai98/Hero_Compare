import React from "react";
import "../styling/option.css";

const FilterComponentLol = ({ onFilterChange }) => {
  // Add more options based on the possible roles in your JSON data
  const roles = ["Fighter", "Mage", "Assassin", "Tank", "Marksman", "Support"];

  return (
    <div className="filter-container">
      <select
        id="selectId"
        onChange={(e) => onFilterChange("attackType", e.target.value)}
      >
        <option value="">Attack Type</option>
        <option value="Melee">Melee</option>
        <option value="Ranged">Ranged</option>
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

      <select
        id="selectId"
        onChange={(e) => onFilterChange("role", e.target.value)}
      >
        <option value="">Role</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponentLol;
