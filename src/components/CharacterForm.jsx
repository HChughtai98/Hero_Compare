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
    "Placeholder1",
    "Placeholder2",
    "Placeholder3",
    "Placeholder4",
    "Placeholder5",
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
        primary_attr: "X",
        roles: "Placeholder1",
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
      roles: character.game === "Lol" ? [character.roles] : dotaRoles,
    };

    // API call here...
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit} className="character-form">
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
          <div className="input-group">
            <label htmlFor="game">Game</label>
            <select
              id="game"
              name="game"
              value={character.game}
              onChange={handleChange}
            >
              <option value="Lol">Lol</option>
              <option value="Dota">Dota</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="primary_attr">Primary Attribute</label>
            <select
              id="primary_attr"
              name="primary_attr"
              value={character.primary_attr}
              onChange={handleChange}
            >
              {character.game === "Lol" ? (
                <>
                  <option value="AD">AD</option>
                  <option value="AP">AP</option>
                </>
              ) : (
                <>
                  <option value="X">X</option>
                  <option value="Y">Y</option>
                  <option value="Z">Z</option>
                </>
              )}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="attack_type">Attack Type</label>
            <select
              id="attack_type"
              name="attack_type"
              value={character.attack_type}
              onChange={handleChange}
            >
              <option value="Melee">Melee</option>
              <option value="Ranged">Ranged</option>
              <option value="Melee & Ranged">Melee & Ranged</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="classes">Classes</label>
            <select
              id="classes"
              name="classes"
              value={character.classes}
              onChange={handleChange}
            >
              <option value="Carry">Carry</option>
              <option value="Tank">Tank</option>
              <option value="Support">Support</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="roles">Roles</label>
            <select
              id="roles"
              name="roles"
              value={character.roles}
              onChange={handleChange}
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
          <div className="input-group">
            <label htmlFor="complexity">Complexity</label>
            <input
              type="number"
              id="complexity"
              name="complexity"
              value={character.complexity}
              onChange={handleChange}
              min="1"
              max="3"
            />
          </div>
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
