import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "game",
  initialState: {
    isLoading: false,
    data: {},
    selectedPokemons: [],
    winner: null,
    error: null,
  },
  reducers: {
    fetchPokemons: (state) => ({
      ...state,
      isLoading: true,
    }),

    fetchPokemonsResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload.data,
      selectedPokemons: action.payload.pokemons,
    }),

    fetchPokemonsReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      selectedPokemons: [],
      error: action.payload,
    }),

    clearPokemonsGame: (state) => ({
      ...state,
      selectedPokemons: [],
    }),

    setWinner: (state, action) => ({
      ...state,
      winner: action.payload,
    }),
  },
});

export const { fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject, handleSelectedPokemons, clearPokemonsGame } = slice.actions;
export const cardsGameData = (state) => state.game.data;
export const selectedPokemonsGame = (state) => state.game.selectedPokemons;
export const gameWinner = (state) => state.game.winner;

export const getPokemonsGameAsync = () => async (dispatch) => {
  dispatch(fetchPokemons());
  try {
    const player2Response = await fetch("https://reactmarathon-api.netlify.app/api/create-player");
    const player2Request = await player2Response.json();
    dispatch(fetchPokemonsResolve({ data: player2Request, pokemons: player2Request.data }));
  } catch (error) {
    dispatch(fetchPokemonsReject("Error"));
  }
};


export default slice.reducer;