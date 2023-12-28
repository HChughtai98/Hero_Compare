import React from "react";
import "../styling/Characters.css";
import CharacterList from "../components/CharacterList";

function Characters() {
  return (
    <div className="charPage">
      <div>Character Page Content</div>
      <CharacterList />
    </div>
  );
}

export default Characters;
