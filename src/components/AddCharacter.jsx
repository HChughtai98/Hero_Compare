import React from "react";
import CharacterForm from "../components/CharacterForm";
import "../styling/Modal.css";

const AddCharacter = () => {
  const handleNewCharacter = (newCharacter) => {
    fetch("https://herocompare-backend.adaptable.app/Characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCharacter),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Add New Character</h1>
      <CharacterForm onNewCharacter={handleNewCharacter} />
    </div>
  );
};

export default AddCharacter;
