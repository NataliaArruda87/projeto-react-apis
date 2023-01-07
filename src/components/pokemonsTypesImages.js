import grass from "../assets/Grass.png"
import fire from "../assets/Fire.png"
import water from "../assets/Water.png"
import bug from "../assets/Bug.png"
import normal from "../assets/Normal.png"
import dragon from "../assets/Dragon.png"
import eletric from "../assets/Eletric.png"
import fairy from "../assets/Fairy.png"
import fighting from "../assets/Fighting.png"
import flying from "../assets/Flying.png"
import ghost from "../assets/Ghost.png"
import ground from "../assets/Ground.png"
import ice from "../assets/Ice.png"
import dark from "../assets/Dark.png"
import poison from "../assets/Poison.png"
import psychic from "../assets/Psychic.png"
import rock from "../assets/Rock.png"
import steel from "../assets/Steel.png"



export const pokemonTypes = (type) => {
    switch (type){
  case "grass":
    return grass
  case "fire":
    return fire
  case "water":
    return water
  case "bug":
    return bug
  case "normal":
    return normal
  case "poison":
    return poison
  case "electric":
    return eletric
  case "ground":
    return ground
  case "fairy":
    return fairy
  case "fighting":
    return fighting
  case "psychic":
    return psychic
  case "rock":
    return rock
  case "ghost":
    return ghost
  case "flying":
    return flying
  case "steel":
    return steel
  case "ice":
    return ice
  case "dragon":
    return dragon
  case "dark":
    return dark
  default:
    return normal
      }
  }