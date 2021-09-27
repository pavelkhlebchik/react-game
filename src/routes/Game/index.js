import { useRouteMatch, Switch, Route} from "react-router-dom";
import { useState } from "react";

import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";

import { PokemonContext } from "../../context/pokemonContext";


const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [player2Pokemons, setPlayer2Pokemons] = useState([]);
  const [winner, setWinner] = useState();
  const match = useRouteMatch();

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons(prevState => {
      if (prevState[key]) {
        const copyState = {...prevState};
        delete copyState[key];

        return copyState;
      }

      return {
        ...prevState,
        [key]: pokemon,
      }
    })
  }

  const cleanPokemons = () => {
    setSelectedPokemons({});
    setPlayer2Pokemons([]);
  }
  return (
    <PokemonContext.Provider value={{
      pokemons: selectedPokemons,
      player2PokemonsContext: {player2Pokemons, setPlayer2Pokemons}, 
      onSelectedPokemons: handleSelectedPokemons,
      clean: cleanPokemons,
      winner: winner,
      setWinner: setWinner,
    }}>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
      </PokemonContext.Provider>
  );
};

export default GamePage;