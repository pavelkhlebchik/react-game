import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import PokemonsCard from "../../../../components/PokemonsCard";

import { PokemonContext } from "../../../../context/pokemonContext";
import { getPokemonsAsync, selectPokemonsData} from "../../../../store/pokemon";
import s from "./start.module.css";


const StartPage = () => {

  const pokemonsContext = useContext(PokemonContext);
  const pokemonsRedux = useSelector(selectPokemonsData);
  const dispatch = useDispatch()
  const [pokemons, setPokemons] = useState({});

  const history = useHistory();

  useEffect(() => {
    dispatch(getPokemonsAsync());
  }, []);

  useEffect(() => {
    setPokemons(pokemonsRedux)
  }, [pokemonsRedux]);



const handleChangeSelected = (key) => {
  const pokemon = { ...pokemons[key] };
  pokemonsContext.onSelectedPokemons(key, pokemon);

  setPokemons(prevState => ({
    ...prevState,
    [key]: {
      ...prevState[key],
      selected: !prevState[key].selected,
    }
  }))
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
      disabled={Object.keys(pokemonsContext.pokemons).length < 5}
    >
      START GAME
    </button>
    <div className={s.flex}>
      {
        Object.entries(pokemons).map(([key, { id, type, name, img, values, selected }]) => <PokemonsCard
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
            if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
              handleChangeSelected(key)
            }
          }}
        />
        )
      }
    </div>
    <button onClick={handleClick}>
      BACK TO HOME
    </button>
  </>
)
}

export default StartPage;