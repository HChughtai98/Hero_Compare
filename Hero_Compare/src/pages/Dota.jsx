// src/pages/Dota.jsx

import React from "react";
import CharacterList from "../components/CharacterList";
import "../styling/Characters.css";
import "../styling/Dota.css";

const Dota = () => {
  return (
    <div className="dota">
      <CharacterList game="Dota" /> {/* Pass "Dota" as the game prop */}
    </div>
  );
};

export default Dota;
