import { useEffect} from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import PokemonsCard from "../../../../components/PokemonsCard";

import { getPokemonsAsync, handleChangeSelectedPokemon, selectedPokemons, selectPokemonsData} from "../../../../store/pokemon";
import s from "./start.module.css";


const StartPage = () => {

  const pokemonsRedux = useSelector(selectPokemonsData);
  const selectedPokemonsRedux = useSelector(selectedPokemons);
  const dispatch = useDispatch()

  const history = useHistory();

  useEffect(() => {
    dispatch(getPokemonsAsync());
  }, [dispatch]);

const handleChangeSelected = (key, pokemon) => {
  dispatch(handleChangeSelectedPokemon({key, pokemon}));
};

const handleClick = () => {
  history.push('/');
};

const handleStartGameClick = () => {
  history.push('game/board');
}

return (
  <>
    <button onClick={handleStartGameClick}
      disabled={Object.keys(selectedPokemonsRedux).length < 5}
    >
      START GAME
    </button>
    <div className={s.flex}>
      {
        Object.entries(pokemonsRedux).map(([key, pokemon]) => {
        const { id, type, name, img, values, selected } = pokemon;
        return (
        <PokemonsCard
          className={s.card}
          key={key}
          id={id}
          type={type}
          name={name}
          img={img}
          values={values}
          isActive={true}
          isSelected={selected}
          handleClickCard={() => {
            if (Object.keys(selectedPokemonsRedux).length < 5 || selected) {
              handleChangeSelected(key, pokemon)
            }
          }}
        />
        )})
      }
    </div>
    <button onClick={handleClick}>
      BACK TO HOME
    </button>
  </>
)
}

export default StartPage;