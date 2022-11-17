import "./styles/App.css";
import Pokemons from "./components/Pokemons";

import React, {useState} from 'react';
import Pokemons from "./components/Pokemons";
//sesion por default no iniciada hasta que se presione el boton
function App() {
  const [sesion, cambiarSesion]=useState(false); 
  return (
    <>
      {sesion==true?(
        <div className="App">
        <header className="App-header">
            <br/>
            <h1 className="text-info">Pokemon</h1>
            <br/>
            <div className="container text-center">
                <Pokemons/>
            </div>
        </header>
    </div>
      ):(
        <>
            <div className="App">
                    <header className="App-header">
                        <br/>
                        <h1 className="text-info">Pokemon</h1>
                        <br/>
                        <div className="container text-center">
                            <button onClick={()=> cambiarSesion(true)}>Siguiente</button>
                        </div>
                    </header>
                </div>
        </>
      )}


    </>
  );
}

export default App;
