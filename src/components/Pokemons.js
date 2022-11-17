import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

const Pokemons = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");



  const onChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "name") {
      setName(e.target.value);
    } 
  };


  const url = "https://pokeapi.co/api/v2/pokemon/" + name.toString();

  useEffect(() => {
    axios.get(url).then((response) => {
      setCharacters(response.data.results);
    });
  });

  return (
    <>
      <div className="input-group mb-3 text-center">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre a buscar"
          aria-describedby="basic-addon2"
          name="name"
          id="name"
          value={name}
          onChange={onChange}
        />
      </div>
      <div className="row">
        {characters.map((character) => {
          return <Pokemon key={character.id} character={character} />;
        })}

        <div className="row justify-content-around mb-5">
          <div className="col-4">
            <button
              className="btn btn-primary"
              onClick={() => setPage(page - 1)}
            >
              Anterior
            </button>
          </div>
          <div className="col-4">
            <button
              className="btn btn-primary"
              onClick={() => setPage(page + 1)}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemons;
