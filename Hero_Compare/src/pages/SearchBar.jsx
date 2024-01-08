import React from "react";
import "../styling/SearchBar.css";

const SearchBar = ({ onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search characters..."
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
