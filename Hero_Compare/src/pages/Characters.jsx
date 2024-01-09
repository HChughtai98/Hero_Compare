import React from "react";
import "../styling/Characters.css";
import CharacterList from "../components/FilteredCharacterList";

function Characters() {
  return (
    <div className="charPage">
      <CharacterList />
    </div>
  );
}

export default Characters;
