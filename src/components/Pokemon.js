import React from "react";
const Pokemon=({pokemon})=>{
    return(
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body text-primary">
                    <p>{pokemon.name}</p>  
                </div>    
            </div>
        </div>
        /*
        <>
            
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name}/>
        </>*/
    );
};
export default Pokemon;