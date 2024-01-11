import React from "react";
// Components //
import CharacterForm from "../components/CharacterForm";
// Styling //
import "../styling/Modal.css";

const AddCharacter = () => {
  // Function to handle adding a new character
  const handleNewCharacter = (newCharacter) => {
    // Send a POST request to the backend to add the new character
    fetch("https://herocompare-backend.adaptable.app/Characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCharacter), // Convert the character data to JSON
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response
        console.log("Success:", data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Add New Character</h1>
      {/* Render the CharacterForm component with the handleNewCharacter function */}
      <CharacterForm onNewCharacter={handleNewCharacter} />
    </div>
  );
};

export default AddCharacter;
