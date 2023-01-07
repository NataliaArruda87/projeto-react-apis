export const backgroundColorsByType = (type) => {
    switch (type){
  case "grass":
    return "#729f92";
  case "fire":
    return "#eaab7d";
  case "water":
    return "#71c3ff";
  case "bug":
    return "#77a968";
  case "normal":
    return "#bf9762";
  case "poison":
    return "#ca9cbf";
  case "electric":
    return "#eddb89";
  case "ground":
    return "#ed9d74";
  case "fairy":
    return "#f6c9f3";
  case "fighting":
    return "#f4658e";
  case "psychic":
    return "#f48c90";
  case "rock":
    return "#e4d6b1";
  case "ghost":
    return "#748dd7";
  case "flying":
    return "#6892b0"; 
  case "steel":
    return "#bbbbbb";
  case "ice":
    return "#74cee0";
  case "dragon":
    return "#3e9bea";
  case "dark":
    return "#5c5365";
  default:
    return "#8a8a8a";
      }
  }