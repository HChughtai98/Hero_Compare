// src/pages/Lol.jsx

import React from "react";
import CharacterList from "../components/CharacterList";
import "../styling/Characters.css";
import "../styling/Lol.css";

const Lol = () => {
  return (
    <div className="lol">
      <CharacterList game="Lol" /> {/* Pass "Lol" as the game prop */}
    </div>
  );
};

export default Lol;
