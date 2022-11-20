import "./styles/App.css";
import Pokemons from "./components/Pokemons";
import React, {useState} from 'react';

//sesion por default no iniciada hasta que se presione el boton
function App() {
    const [sesion, cambiarSesion] = useState(false);
    return (
        <>
            {sesion === true ? (
                <div className="bg-image">
                    <header className="App-header">
                        <br/>
                        <h1 className="text-info">Pokemon</h1>
                        <br/>
                        <div className="container text-center">
                            <Pokemons/>
                        </div>
                    </header>
                </div>
            ) : (
                <>
                    <div className="bg-image d-flex justify-content-center align-items-center img-fluid">
                        <h1 className="text-info">Pokemon</h1>
                        <div className="container text-center">
                            <button className={"btn btn-primary"} onClick={() => cambiarSesion(true)}>Siguiente</button>
                        </div>
                    </div>
                </>
            )}


        </>
    );
}

export default App;
