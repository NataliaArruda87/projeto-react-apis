import { HeaderContainer } from "./Header.styled"
import logo from "../../assets/logopokemon.svg"
import { useNavigate } from "react-router"
import { goToPokedexPage, goToHomePage } from "../../Router/coordinaitor"

const Header = (props) => {

  const { isOnHomePageSreen, isOnPokedexPageSreen, isOnDetailsPage } = props

  const navigate = useNavigate()

  return (
    <>
    {isOnHomePageSreen &&
    <HeaderContainer>
      <img src={logo} alt="Logo icon"/>
      <button onClick={() => goToPokedexPage(navigate)}>Pokédex</button>
      
    </HeaderContainer>
    }
    {(isOnPokedexPageSreen || isOnDetailsPage) &&
    <HeaderContainer>
    <img src={logo} alt="Logo icon"/>
    <button className="allPokemonsButton" onClick={() => goToHomePage(navigate)}>Todos Pokemons</button>
    
    </HeaderContainer>
    }
    </>
  )
}

export default Header
