import {combineReducers} from 'redux';
import personList from './personList';
import changePage from './changePage';
import person from './person';
import pokemon from "./pokemon";
import pokemonImage from "./pokemonImage";

export default combineReducers({
  currentPage: changePage,
  persons: personList,
  person,
  pokemonState: pokemon,
  pokemonImage
})