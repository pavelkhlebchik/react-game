import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";

import PokemonsCard from "../../../../components/PokemonsCard";

import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";
import s from "./start.module.css";


const StartPage = () => {
  const firebase = useContext(FireBaseContext);

  const pokemonsContext = useContext(PokemonContext);
  console.log(pokemonsContext);
  const [pokemons, setPokemons] = useState({});

  const history = useHistory();

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons)
    });

    return () => firebase.offPokemonSoket();
  }, []);

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

  return (
    <>
      <button>
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