import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");



  const onChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "name") {
      setName(e.target.value);
    }
  };

  const url = "https://pokeapi.co/api/v2/pokemon/?limit=21&offset=" +page.toString();


  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data.results);
    });
  }, [page]);



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
        {pokemon.map((pokemon) => {
          return <Pokemon key={pokemon.name} pokemon={pokemon} />;
        })}

        <div className="row justify-content-around mb-5">
          <div className="col-4">
            <button
              className="btn btn-primary"
              onClick={() => setPage(page - 21)}
            >
              Anterior
            </button>
          </div>
          <div className="col-4">
            <button
              className="btn btn-primary"
              onClick={() => setPage(page + 21)}
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
