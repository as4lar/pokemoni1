import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pokemon from './Pokemon';
const Pokemons = () => {
    const [pokemons, setPokemons]=useState([]);
    const[pagina,cambiarPagina]=useState(0);
    const[name, setName]=useState("");

    const onChange=(e)=>{
        if(e.target.name=="buscador"){
            setName(e.target.value)
            console.log(e.target.value)
        }
    }
    let url="https://pokeapi.co/api/v2/ability/"+name.toString();

    useEffect(()=>{
        axios.get(url+pagina.toString()).then((response)=>{
            console.log(response.data.results);
            setPokemons(response.data.results);
        });
    },[pagina,name]);
    return (
        <>
        <div className="form-group">
            <input type="text" className="form-control" id="buscador" placeholder="Buscar..." name='buscador' value={name} onChange={onChange}/>
        </div>
            <div className='row'>
                {pokemons.map((pokemon)=>(
                    <Pokemon key= {pokemon.id} pokemon={pokemon}/>
                ))}
            </div>
            <div>
                <button onClick={()=>cambiarPagina(pagina-1)}>Anterior</button>
                <button onClick={()=>cambiarPagina(pagina+1)}>Siguiente</button>
            </div>
        </>
    );
};
 
export default Pokemons;