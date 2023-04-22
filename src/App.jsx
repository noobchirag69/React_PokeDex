import { useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { Pokemon } from "./components/Pokemon";

const apiURL = "https://pokeapi.co/api/v2/pokemon/";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchEmpty, setSearchEmpty] = useState(false);
  const searchPokemon = async (title) => {
    if (title !== "") {
      const response = await fetch(`${apiURL}${title}`);
      if (response.status === 404) {
        setSearchEmpty(true);
        setPokemon("");
      } else {
        setSearchEmpty(false);
        const data = await response.json();
        setPokemon(data);
      }
    }
  };

  return (
    <div className="container">
      <h1>Pokedex</h1>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchPokemon={searchPokemon}
      />
      {pokemon ? (
        <Pokemon pokemon={pokemon} />
      ) : (
        searchEmpty && (
          <div
            className="empty"
            style={{ marginTop: "50px", fontSize: "24px", textAlign: "center" }}
          >
            This pokemon doesn't exist!
          </div>
        )
      )}
    </div>
  );
};

export default App;
