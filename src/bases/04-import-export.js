//si uso solo export
// import {heroes} from "./data/heroes";

//Si uso export default heroes
import heroes from "../data/heroes";

// console.log(heroes);

export const getHeroeById = (id) => {
  //   return heroes.find((heroe) => heroe.id === id);

  return heroes.find((heroe) => heroe.id === id);
};

export const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

// console.log(getHeroeById(2));
// console.log(getHeroesByOwner("Marvel"));
