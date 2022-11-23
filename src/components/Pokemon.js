import React, {useEffect, useState} from "react";
import "../styles/characters.css"
import axios from "axios";

const Pokemon = ({pokemon, search, name}) => {
    const [pokeinfo, setPokeinfo] = useState([]);
    const [poketype, setPokeTypes] = useState([]);
    const [team, setTeam] = useState([]);


    useEffect(() => {
        axios.get(pokemon.url).then((response) => {
            setPokeinfo(response.data);
            setPokeTypes(response.data.types);
        });
    }, []);

    const handleRemove = (e) => {
        console.log(e);
        if (team.length >=3){

        }else if(team.length === 0){
            team.push(pokeinfo.id)
            console.log(team)

        }else {
            setTeam([...team,e])

        }
    };

    let url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeinfo.id + ".png";
    let url_img_search = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png";

    return (
        <>
            {(() => {
                if (search !== "") {
                    return (
                        console.log(team),
                        <div className="card">
                            <div className={"img-square-wrapper"}>
                                <img className="card-img-top" src={url_img_search} alt=""/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title text-justify">{pokemon.name}</h3>
                                <button className={"btn btn-lg btPn-success" } value={pokeinfo.id}> Agregar</button>
                            </div>
                        </div>
                    )
                } else if (name === "") {
                    return (
                        <div className="col-md-3 mb-3">
                            <div className="card">
                                <div className={"img-square-wrapper"}>
                                    <img className="card-img-top" src={url_img} alt=""/>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title text-justify">{pokeinfo.name}</h3>
                                    {poketype.map((poketype) => {
                                        return <p className="card-title text-justify"
                                                  key={poketype.name}> {poketype.type.name}</p>
                                    })}
                                    <button className={"btn btn-lg btn-success" } name={pokeinfo.id} onClick={()=> handleRemove(pokeinfo.id)} ></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            })()}
        </>
    );
};

export default Pokemon;
