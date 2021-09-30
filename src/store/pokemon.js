import {createSlice} from '@reduxjs/toolkit';
import FireBaseClass from '../service/firebase';

export const slice = createSlice({
  name: 'pokemons',
  initialState: {
    isLoading: false,
    data: {},
    error: null,
    selectedPokemons: {},
  },
  reducers: {
    fetchPokemons: state => ({
      ...state,
      isLoading: true,
    }),

    fetchPokemonsResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),

    fetchPokemonsReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),

    handleChangeSelectedPokemon: (state, {payload: {key, pokemon}}) => {
      const newSelectedPokemon = {...state.selectedPokemons};

      if(newSelectedPokemon[key]) {
        delete newSelectedPokemon[key];
        return {...state, selectedPokemons: newSelectedPokemon};
      };

      newSelectedPokemon[key] = pokemon;
      return {...state, selectedPokemons: newSelectedPokemon};
    }
  }
});

export const {fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject, handleChangeSelectedPokemon} = slice.actions;

export const selectPokemonsLoading = state => state.pokemons.isLoading;
export const selectPokemonsData = state => state.pokemons.data;
export const selectedPokemons = state => state.pokemons.selectedPokemons;

export const getPokemonsAsync = () => async (dispatch) => {
  dispatch(fetchPokemons());
  const data = await FireBaseClass.getPokemonsOnce();
  dispatch(fetchPokemonsResolve(data));
} 

export default slice.reducer;