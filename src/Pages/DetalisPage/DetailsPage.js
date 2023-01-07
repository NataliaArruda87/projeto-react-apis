import Header from "../../components/Header/Header";
import { DetailsContainer, DetailsCards, Imgpokebola, Imgpokemon, Image, Excludebutton } from "./DetailsPage.styled"
import pokebola from "../../assets/PokebolWatermark.png";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import { backgroundColorsByType } from "../../components/cardsBackgroundColors";
import { pokemonTypes } from "../../components/pokemonsTypesImages";

const DetailsPage = () => {

  const [pokemondetails, setPokemonDetails] = useState({})

  const context = useContext(GlobalContext)

  const { removeFromPokedex } = context


  const path = useParams()

  const fetchDetailsById = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${path.pokemonId}`)
      setPokemonDetails(response.data)
      console.log(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDetailsById()
  }, [])

  const FetchAllStats = () => {
    let allStats = 0 
    pokemondetails.stats?.map((stats) => {
      allStats += stats.base_stat;
    })
    return (allStats)
  }

  return (
    <div>
      <Header isOnDetailsPage={true}/>
      <Excludebutton onClick={() => removeFromPokedex(pokemondetails)}>Excluir da Pokédex</Excludebutton>
      <DetailsContainer>
        <h1>Detalhes</h1>
        <DetailsCards color={backgroundColorsByType(pokemondetails.types&&pokemondetails.types[0].type.name)}>
          <div className="details">
            <div className="pokemonPictures">
              <div className="front">
                <Image src={pokemondetails.sprites?.front_default} alt="imagem pokemon"/>
              </div>
              <div className="back">
                <Image src={pokemondetails.sprites?.back_default} alt="imagem pokemon"/>
              </div>
            </div>
            <div className="stats">
              <h2>Base Stats:</h2>
              {pokemondetails.stats?.map((stats) => {
                return (
                  <div className="individualStats">
                    <span className="statsNames">{stats.stat.name}:</span> 
                    <span className="statsNumbers">{stats.base_stat}</span>
                    <progress id="progress" value={stats.base_stat} max="100"/>
                  </div>
                )
              })}
              <div className="individualStats">
                <span className="statsNames">Total:</span>
                <span className="statsNumbers">{FetchAllStats()}</span>
              </div>
            </div>
            <div className="pokemonId">
              <div className="textdetails">
                <h3>#{path.pokemonId}</h3>
                <h1>{pokemondetails.name}</h1>
              </div>
              <div className="types">
              { pokemondetails.types && pokemondetails.types.map((type) => {
                  return <img src={pokemonTypes(type.type.name)} alt="tipo do pokemon"/>
                })}
              </div>
              <div className="moves">
                <h2>Moves:</h2>
                {pokemondetails.moves?.map((pokemonMoves, index) => {
                  if (index < 5) {
                    return (
                      <p>{pokemonMoves.move.name}</p>
                    )
                  }
                })}
              </div>
            </div>
            <Imgpokebola src={pokebola} alt="pokebol watermark"/>
            <Imgpokemon src={pokemondetails.sprites?.other['official-artwork'].front_default} alt="imagem pokemon"/>
            
          </div>

        </DetailsCards>
      </DetailsContainer>
    </div>
  )
}

export default DetailsPage
