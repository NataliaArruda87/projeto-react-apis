import { CardContainer, Imgpokebola, Imgpokemon } from "./PokemonCard.styled"
import pokebola from "../../assets/PokebolWatermark.png"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { backgroundColorsByType } from "../../components/cardsBackgroundColors"
import { pokemonTypes } from "../../components/pokemonsTypesImages"
import { goToDetailsPage } from "../../Router/coordinaitor"
import { useNavigate } from "react-router";

const Card = (props) => {

  const navigate = useNavigate()

  const [ details, setDetails] = useState({})

  const fetchDetails = async () => {
    try {
        const response = await axios.get(`${props.pokemon.url}`)
        setDetails(response.data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  const capturePokemon = (pokemon) => {
    const isOnPokedex = props.pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name)
    
    if(!isOnPokedex) {
      props.setPokedex([...props.pokedex, pokemon])
    }
    console.log(props.pokedex)
  }


  return (
    <CardContainer color={backgroundColorsByType(details.types&&details.types[0].type.name)}>
        <div>
            <div className="textdetails">
                <h3>#{details.id}</h3>
                <h2>{details.name}</h2>
            </div>
            <div className="types">
                { details.types && details.types.map((type) => {
                  return <img src={pokemonTypes(type.type.name)} alt="tipo do pokemon"/>
                })}
            </div>
            <Imgpokebola src={pokebola} alt="pokebol watermark"/>
            <Imgpokemon src={details.sprites?.other['official-artwork'].front_default} alt="pokemon"/>
            <div className="buttonsContainer">
                <button className="detailsbutton" onClick={() => goToDetailsPage(navigate, details.id)}>Detalhes</button>
                <button className="capturebutton" onClick={() => capturePokemon(details)}>Capturar!</button>
            </div>
        </div>   
    </CardContainer>
  )
}

export default Card