import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import s from "./style.module.css";

import PokemonsCard from "../../components/PokemonsCard";

import database from '../../service/firebase';

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    });
  });

  const handleClickPokemonCard = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
          database.ref('pokemons/' + item[0]).set({
            ...pokemon
          });
        };

        acc[item[0]] = pokemon;
        return acc;
      }, {});
    });
  };

  const addPokemon = (data) => {
    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(data);
  }

  return (
    <div className={s.wrapper}>
      <button onClick={addPokemon}>
        ADD NEW POKEMON
      </button>
      <div className="flex">
        {
          Object.entries(pokemons).map(([key, { id, type, name, img, values, active }]) => <PokemonsCard
            key={key}
            id={id}
            type={type}
            name={name}
            img={img}
            values={values}
            isActive={active}
            handleClickCard={handleClickPokemonCard}
          />)
        }
      </div>
      <button onClick={handleClick}>
        BACK TO HOME
      </button>
    </div>
  )
}

export default GamePage;