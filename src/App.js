import axios from "axios";
import React, { useState } from "react";
import Router from "./Router/Router";
import { GlobalContext } from "./context/GlobalContext";

function App() {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  const fetchAllPokemons =  async() => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
      setPokemons(response.data.results)
    }
    catch(error) {
      console.log(error)
    }
  }

  const removeFromPokedex = (pokemonToBeRemoved) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToBeRemoved.name
    )
    setPokedex(newPokedex)
  }


  const context = {
    pokemons,
    setPokemons,
    fetchAllPokemons,
    pokedex,
    setPokedex,
    removeFromPokedex,
  }

  return (
    <>
      <GlobalContext.Provider value={context}>
      <Router/>
      </GlobalContext.Provider>
    </>
    
  );
}

export default App;
