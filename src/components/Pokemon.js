import React from "react";
import "../styles/characters.css"

const Pokemon = ({character}) => {
    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-horizontal">
                        <div className={"img-square-wrapper"}>
                            <img className="card-img-top" src={character.image} alt={character.name}/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-justify">{character.name}</h5>
                            <p className="card-title text-justify   ">{character.status} - {character.species}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pokemon;
