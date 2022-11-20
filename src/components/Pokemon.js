import React, {useEffect, useState} from "react";
import "../styles/characters.css"
import axios from "axios";

const Pokemon = ({pokemon, state}) => {
    const [pokeinfo, setPokeinfo] = useState([]);
    const [poketype, setPokeTypes] = useState([]);

    useEffect(() => {
        axios.get(pokemon.url).then((response) => {
            setPokeinfo(response.data);
            setPokeTypes(response.data.types);
        });
    }, [pokemon.url]);

    let url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeinfo.id + ".png";

    return (
        <>
            <div className="col-md-3 mb-3">
                <div className="card">
                    <div className={"img-square-wrapper"}>
                        <img className="card-img-top" src={url_img} alt=""/>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-justify">{pokeinfo.name}</h3>
                        {poketype.map((poketype) => {
                            return <p className="card-title text-justify" key={poketype.name} > {poketype.type.name}</p>

                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pokemon;
