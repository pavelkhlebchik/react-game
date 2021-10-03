import {createSlice} from '@reduxjs/toolkit';
import FireBaseClass from '../service/firebase';

export const slice = createSlice({
  name: 'pokemons',
  initialState: {
    isLoading: false,
    data: {},
    error: null,
    isSelected: {},
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
    
      const pokemons = {...state.isSelected};

      
      if(pokemons[key]) {
        delete pokemons[key];
        return {
          ...state,
          isSelected: pokemons,
        };
      };
      
      pokemons[key] = pokemon;
      
      console.log(state.isSelected);
      
      return {
        ...state,
        isSelected: pokemons
      }
    }
  }
});

export const {fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject, handleChangeSelectedPokemon} = slice.actions;

export const selectPokemonsLoading = state => state.pokemons.isLoading;
export const selectPokemonsData = state => state.pokemons.data;
export const selectedPokemons = state => state.pokemons.isSelected;

export const getPokemonsAsync = () => async (dispatch) => {
  dispatch(fetchPokemons());
  const data = await FireBaseClass.getPokemonsOnce();
  dispatch(fetchPokemonsResolve(data));
} 

export default slice.reducer;