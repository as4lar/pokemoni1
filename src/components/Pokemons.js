import React, {useState, useEffect} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

const Pokemons = () => {
    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(0);
    const [name, setName] = useState("");
    const [search, setSearch] = useState("");
    const [team, setTeam] = useState([]);


    let url = "https://pokeapi.co/api/v2/pokemon/?limit=24&offset=" + page.toString();
    let urlSearch = "https://pokeapi.co/api/v2/pokemon/" + search;
    let url_img = "";


    useEffect(() => {
        if (search !== "") {
            axios.get(urlSearch).then((response) => {
                setPokemon(response.data)
            });
        } else if (name === "") {
            axios.get(url).then((response) => {
                setPokemon(response.data.results)
            });
        }


    }, [page, urlSearch]);

    const onChange = (e) => {
        console.log(e.target.value);
        if (e.target.name === "name") {
            setName(e.target.value);
        }
        if (e.target.value === "") {
            setSearch("");
        }
    };

    const onSubmit = (e) => {
        e.preventDefault()
        team.pop(team.id);
        console.log(team)
    };

    return (
        <>
            {/*            <div className="input-group mb-3 text-center">
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
                <button className={"btn btn-primary"} onClick={() => setSearch(name)}> Buscar</button>
            </div>
            <br/>*/}

            <div className="card-group ">
                {team.map((team) => {
                    return (
                        url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + team.id + ".png",

                            <div className="card p-3 ">
                                <img className="card-img-top" src={url_img} alt={team.id}/>
                                <div className="card-body">
                                    <h5 className="card-title">{team.name}</h5>
                                    <form action={""} onSubmit={onSubmit}>
                                        <button className={"btn btn-lg btn-danger button"}> Eliminar </button>
                                    </form>
                                </div>
                            </div>
                    )
                })}

            </div>


            <br/>
            <div className="row">
                {(() => {
                    if (search !== "") {
                        return (
                            console.log(pokemon, "asd"),
                                <Pokemon key={pokemon.id} pokemon={pokemon} search={search} name={name}
                                         setTeam={setTeam}/>
                        )
                    } else {
                        return (
                            console.log(pokemon),
                                pokemon.map((pokemon) => {
                                    return <Pokemon key={pokemon.id} pokemon={pokemon} search={search} name={name}
                                                    setTeam={setTeam}
                                                    team={team}/>
                                })
                        )
                    }
                })()}

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
