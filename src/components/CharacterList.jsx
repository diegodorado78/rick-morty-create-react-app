import React, { useState, useEffect } from "react";
import { Character } from "./Character";
import "./CharacterList.css";
function Pages({ page, setPage }) {
  return (
    <div className="button__container">
      <button
        className="btn btn-outline-info"
        onClick={() => setPage(page - 1)}
      >
        Back
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
function CharacterList() {
  const [page, setPage] = useState(1);
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const { results } = await response.json(); //desestructuro el array results que necesito del api
        setcharacters(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [page]);

  return (
    <>
      <Pages page={page} setPage={setPage} />
      <div className="characters__container">
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
      <Pages />
    </>
  );
}

export { CharacterList, Pages };
