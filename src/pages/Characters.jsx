import React from "react";
// Components //
import CharacterList from "../components/FilteredCharacterList";
// Styling //
import "../styling/Characters.css";

function Characters() {
  return (
    <div className="charPage">
      <CharacterList />
    </div>
  );
}

export default Characters;
