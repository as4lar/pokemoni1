import "./styles/App.css";
import Pokemons from "./components/Pokemons";

function App() {

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <br/>
                    <h1 className="text-info">Rick and Morty</h1>
                    <br/>
                    <div className="container text-center">
                        <Pokemons/>
                    </div>
                </header>
            </div>

        </>
    );
}

export default App;
