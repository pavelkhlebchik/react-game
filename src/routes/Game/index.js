import { useRouteMatch, Switch, Route} from "react-router-dom";
import { useState } from "react";

import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { useSelector } from "react-redux";
import { selectedPokemons } from "../../store/pokemon";

const GamePage = () => {
  const selectedPokemonsRedux = useSelector(selectedPokemons);
  // const [player2Pokemons, setPlayer2Pokemons] = useState([]);
  // const [winner, setWinner] = useState();
  const match = useRouteMatch();

  // const cleanPokemons = () => {
  //   setSelectedPokemons({});
  //   setPlayer2Pokemons([]);
  // }
  return (
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
  );
};

export default GamePage;