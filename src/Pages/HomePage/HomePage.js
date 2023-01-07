import Header from "../../components/Header/Header";
import Card from "../../components/Cards/PokemonCard"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { HomeContainer, CardsConatiner } from "../HomePage/HomePage.styled"
import React, { useEffect } from "react"

const HomePage = () => {
  const context = useContext(GlobalContext)

  const {pokemons, fetchAllPokemons, pokedex, setPokedex} = context

  useEffect(()=> {
    fetchAllPokemons()
  }, [])

  return (
    <>
      <Header isOnHomePageSreen={true}/>
      <HomeContainer>
      <h1>Todos Pokémons</h1>
      <CardsConatiner>
        {pokemons.map((pokemon) => {
        return (
          <Card key={pokemon} pokemon={pokemon} pokedex={pokedex} setPokedex={setPokedex}/>
          )
        })}
      </CardsConatiner>
      </HomeContainer>
    </>
  )
}

export default HomePage
