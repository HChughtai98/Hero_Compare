import React, { useState } from "react";

const CharacterForm = ({ onNewCharacter, closeModal }) => {
  const [character, setCharacter] = useState({
    name: "",
    game: "",
    image: "",
    background: "",
    description: "",
    primary_attr: "",
    attack_type: "",
    classes: "",
    roles: "",
    complexity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter({ ...character, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedCharacter = {
      ...character,
      attack_type: character.attack_type.split(",").map((s) => s.trim()),
      classes: character.classes.split(",").map((s) => s.trim()),
      roles: character.roles.split(",").map((s) => s.trim()),
      complexity: parseInt(character.complexity, 10),
    };

    fetch("https://hero-database-backend.adaptable.app/Characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedCharacter),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        onNewCharacter(data);
        closeModal();
        fetch("https://herocompare-backend.adaptable.app/Characters");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setCharacter({
      name: "",
      game: "",
      image: "",
      background: "",
      description: "",
      primary_attr: "",
      attack_type: "",
      classes: "",
      roles: "",
      complexity: 1,
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit} className="character-form">
          {/* Name */}
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={character.name}
              onChange={handleChange}
            />
          </div>
          {/* Game */}
          <div className="input-group">
            <label htmlFor="game">Game</label>
            <input
              type="text"
              id="game"
              name="game"
              value={character.game}
              onChange={handleChange}
            />
          </div>
          {/* Image URL */}
          <div className="input-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={character.image}
              onChange={handleChange}
            />
          </div>
          {/* Background URL */}
          <div className="input-group">
            <label htmlFor="background">Background URL</label>
            <input
              type="text"
              id="background"
              name="background"
              value={character.background}
              onChange={handleChange}
            />
          </div>
          {/* Description */}
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={character.description}
              onChange={handleChange}
            />
          </div>
          {/* Primary Attribute */}
          <div className="input-group">
            <label htmlFor="primary_attr">Primary Attribute</label>
            <input
              type="text"
              id="primary_attr"
              name="primary_attr"
              value={character.primary_attr}
              onChange={handleChange}
            />
          </div>
          {/* Attack Type */}
          <div className="input-group">
            <label htmlFor="attack_type">Attack Type (comma-separated)</label>
            <input
              type="text"
              id="attack_type"
              name="attack_type"
              value={character.attack_type}
              onChange={handleChange}
            />
          </div>
          {/* Classes */}
          <div className="input-group">
            <label htmlFor="classes">Classes (comma-separated)</label>
            <input
              type="text"
              id="classes"
              name="classes"
              value={character.classes}
              onChange={handleChange}
            />
          </div>
          {/* Roles */}
          <div className="input-group">
            <label htmlFor="roles">Roles (comma-separated)</label>
            <input
              type="text"
              id="roles"
              name="roles"
              value={character.roles}
              onChange={handleChange}
            />
          </div>
          {/* Complexity */}
          <div className="input-group">
            <label htmlFor="complexity">Complexity</label>
            <input
              type="number"
              id="complexity"
              name="complexity"
              value={character.complexity}
              onChange={handleChange}
              min="1"
              max="10"
            />
          </div>
          {/* Submit and Close Buttons */}
          <div className="input-group full-width">
            <button type="submit" className="submit-btn">
              Add Character
            </button>
            <button type="button" onClick={closeModal} className="close-btn">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CharacterForm;
