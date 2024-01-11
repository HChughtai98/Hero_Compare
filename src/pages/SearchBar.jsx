import React from "react";
import "../styling/SearchBar.css";

const SearchBar = ({ onSearchChange }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    onSearchChange(searchTerm); // Pass the lowercase search term to the parent component
  };

  return (
    <input
      type="text"
      placeholder="Search characters..."
      onChange={handleInputChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
