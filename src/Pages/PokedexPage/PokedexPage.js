import { useContext } from "react";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../context/GlobalContext";
import { PokedexContainer, PokedexCardsConatiner } from "../PokedexPage/PokedexPage.styled";
import { PokedexCardContainer, Imgpokebola, Imgpokemon } from "./PokedexPage.styled";
import { backgroundColorsByType } from "../../components/cardsBackgroundColors";
import { pokemonTypes } from "../../components/pokemonsTypesImages";
import pokebola from "../../assets/PokebolWatermark.png";
import { goToDetailsPage } from "../../Router/coordinaitor"
import { useNavigate } from "react-router";


const PokedexPage = () => {

  const navigate = useNavigate()
  
  const context = useContext(GlobalContext)

  const { pokedex, setPokedex } = context

  const removeFromPokedex = (pokemonToBeRemoved) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToBeRemoved.name
    )
    setPokedex(newPokedex)
  }

  return (
    <>
      <Header isOnPokedexPageSreen={true} />
      <PokedexContainer>
      <h1>Meus Pokémons</h1>
      <PokedexCardsConatiner>
        {pokedex.map((pokemon) => {
        return (
          <PokedexCardContainer color={backgroundColorsByType(pokemon.types&&pokemon.types[0].type.name)}>
        <div>
            <div className="textdetails">
                <h3>#{pokemon.id}</h3>
                <h2>{pokemon.name}</h2>
            </div>
            <div className="types">
                { pokemon.types && pokemon.types.map((type) => {
                  return <img src={pokemonTypes(type.type.name)} alt="tipo do pokemon"/>
                })}
            </div>
            <Imgpokebola src={pokebola} alt="pokebol watermark"/>
            <Imgpokemon src={pokemon.sprites?.other['official-artwork'].front_default} alt="pokemon"/>
            <div className="buttonsContainer">
                <button className="detailsbutton" onClick={() => goToDetailsPage(navigate, pokemon.id)}>Detalhes</button>
                <button className="excludebutton" onClick={() => removeFromPokedex(pokemon)}>Excluir</button>
            </div>
        </div>   
      </PokedexCardContainer>
      )
        })}
      </PokedexCardsConatiner>
      </PokedexContainer>
    </>
  )
}

export default PokedexPage
