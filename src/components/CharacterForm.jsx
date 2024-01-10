import React, { useState, useEffect } from "react";

const CharacterForm = ({ onNewCharacter, closeModal }) => {
  const [character, setCharacter] = useState({
    name: "",
    game: "Lol",
    image: "",
    background: "",
    description: "",
    primary_attr: "AD",
    attack_type: "Melee",
    classes: "Carry",
    roles: "Marksman",
    complexity: 1,
  });

  const lolRoles = [
    "Marksman",
    "Fighter",
    "Mage",
    "Support",
    "Tank",
    "Assassin",
  ];
  const dotaRoles = [
    "Carry",
    "Support",
    "Nuker",
    "Disabler",
    "Durable",
    "Escape",
    "Pusher",
    "Initiator",
  ];

  useEffect(() => {
    if (character.game === "Lol") {
      setCharacter({
        ...character,
        primary_attr: "AD",
        roles: "Marksman",
      });
    } else {
      setCharacter({
        ...character,
        primary_attr: "str",
        roles: "Carry",
      });
    }
  }, [character.game]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter({ ...character, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedCharacter = {
      ...character,
      attack_type: [character.attack_type],
      classes: [character.classes],
      roles: [character.roles], //
      complexity: Number(character.complexity),
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
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        onNewCharacter(data);
        closeModal();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
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
              className="form-control"
            />
          </div>
          {/* Game */}
          <div className="input-group">
            <label htmlFor="game">Game</label>
            <select
              id="game"
              name="game"
              value={character.game}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Lol">Lol</option>
              <option value="Dota">Dota</option>
            </select>
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
            />
          </div>
          {/* Primary Attribute */}
          <div className="input-group">
            <label htmlFor="primary_attr">Primary Attribute</label>
            <select
              id="primary_attr"
              name="primary_attr"
              value={character.primary_attr}
              onChange={handleChange}
              className="form-control"
            >
              {character.game === "Lol" ? (
                <>
                  <option value="AD">AD</option>
                  <option value="AP">AP</option>
                </>
              ) : (
                <>
                  <option value="str">Strength</option>
                  <option value="int">Inteligence</option>
                  <option value="agi">Agility</option>
                  <option value="uni">Universal</option>
                </>
              )}
            </select>
          </div>
          {/* Attack Type */}
          <div className="input-group">
            <label htmlFor="attack_type">Attack Type</label>
            <select
              id="attack_type"
              name="attack_type"
              value={character.attack_type}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Melee">Melee</option>
              <option value="Ranged">Ranged</option>
              <option value="Melee & Ranged">Melee & Ranged</option>
            </select>
          </div>
          {/* Classes */}
          <div className="input-group">
            <label htmlFor="classes">Classes</label>
            <select
              id="classes"
              name="classes"
              value={character.classes}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Carry">Carry</option>
              <option value="Tank">Tank</option>
              <option value="Support">Support</option>
            </select>
          </div>
          {/* Roles */}
          <div className="input-group">
            <label htmlFor="roles">Roles</label>
            <select
              id="roles"
              name="roles"
              value={character.roles}
              onChange={handleChange}
              className="form-control"
            >
              {character.game === "Lol"
                ? lolRoles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))
                : dotaRoles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
            </select>
          </div>
          {/* Complexity */}
          <div className="input-group">
            <label htmlFor="complexity">Complexity</label>
            <select
              id="complexity"
              name="complexity"
              value={character.complexity}
              onChange={handleChange}
              className="form-control"
            >
              {[...Array(3).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1}
                </option>
              ))}
            </select>
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
