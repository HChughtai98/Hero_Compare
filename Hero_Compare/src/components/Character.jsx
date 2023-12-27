import React, { useState, useEffect } from "react";
import "../App.css";

const Character = () => {
  const [characters, setCharacters] = useState([]); // This state will hold the data
  useEffect(() => {
    // Fetch the data when the component mounts
    fetch("http://localhost:5005/Characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data); // Set the data to the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty array ensures this effect only runs once
  return (
    <div className="characters">
      <h1>Characters</h1>
      <div className="charContainer">
        {characters.map((character) => (
          // Update this part to display images
          <div key={character.id} className="character">
            <img src={character.image} alt={`Character ${character.name}`} />
            <p>{character.name}</p>{" "}
            {/* Assuming you also want to display the character's name */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Character;
