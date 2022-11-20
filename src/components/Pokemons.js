import React, {useState, useEffect} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

const Pokemons = () => {
    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(0);
    const [type, setType] = useState([]);


    const urlType = "https://pokeapi.co/api/v2/type/" +
        "";
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=24&offset=" + page.toString();

    axios.get(urlType).then((response) => {
        setType(response.data.results)
    });

    useEffect(() => {
        axios.get(url).then((response) => {
            setPokemon(response.data.results)
        });
    }, [url]);


    return (
        <>
            <div className="align-content-center " >
                {type.map((type) => (
                    <button type="button" className={"btn btn-primary"}> {type.name} </button>
                ))}
            </div>
            <br/>
            <div className="row">
                {pokemon.map((pokemon) => {
                    return <Pokemon key={pokemon.name} pokemon={pokemon} />;
                })}

                <div className="row justify-content-around mb-5">
                    <div className="col-4">
                        {(() => {
                            if (page >= 1) {
                                return (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setPage(page - 24)}
                                    >
                                        Anterior
                                    </button>
                                )
                            } else if (page <= 1) {
                                return (
                                    <button
                                        className="btn btn-primary disabled"
                                        onClick={() => setPage(page - 24)}
                                    >
                                        Anterior
                                    </button>
                                )
                            }
                        })()}
                    </div>
                    <div className="col-4">
                        {(() => {
                            if (page < 1154) {
                                return (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setPage(page + 24)}
                                    >
                                        Siguiente
                                    </button>
                                )
                            } else if (page > 1154) {
                                return (
                                    <button
                                        className="btn btn-primary disabled"
                                        onClick={() => setPage(page + 24)}
                                    >
                                        Siguiente
                                    </button>
                                )
                            }
                        })()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pokemons;
