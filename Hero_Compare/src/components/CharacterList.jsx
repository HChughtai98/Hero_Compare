import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styling/Characters.css";

const CharacterList = ({ game }) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/Characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let filteredCharacters = data;
        if (game) {
          filteredCharacters = data.filter(
            (character) => character.game === game
          );
        }
        setCharacters(filteredCharacters);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [game]);
  return (
    <div className="characters-title">
      <h1>Pick your Hero</h1>
      <div className="charContainer">
        {characters.map((character) => (
          <Link
            to={`/characters/${character.id}`}
            key={character.id}
            className="character"
          >
            <img src={character.image} alt={`Character ${character.name}`} />
            <p>{character.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CharacterList;
