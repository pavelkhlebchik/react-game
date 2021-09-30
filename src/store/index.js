import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './game';
import pokemonReducer from './pokemon';


export default configureStore({
  reducer: {
    pokemons: pokemonReducer,
    game: gameReducer,
  }
});