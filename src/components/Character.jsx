import React from "react";
import "./Character.css";
function Character({ character }) {
  return (
    <div className="character__container">
      <img src={character.image} alt="" />
      <h3>{character.name}</h3>
      <p>{character.origin.name}</p>
    </div>
  );
}

export { Character };
