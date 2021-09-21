import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";

import PokemonsCard from "../../components/PokemonsCard";


import s from "./style.module.css";
import { FireBaseContext } from "../../service/firebaseContext";



const GamePage = () => {
  const firebase = useContext(FireBaseContext);

  const [pokemons, setPokemons] = useState({});

  const history = useHistory();
  
  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons)
    })
  }, []);
  
    const handleClickPokemonCard = (id) => {
      setPokemons(prevState => {
        return Object.entries(prevState).reduce((acc, item) => {
          const pokemon = { ...item[1] };
          if (pokemon.id === id) {
            pokemon.active = !pokemon.active;
          };
          acc[item[0]] = pokemon;

          firebase.postPokemon([item[0]], pokemon)

          return acc;
        }, {});
      });
    };
    
    const handleAddPokemon = () => {
      const pokemonsArr = Object.entries(pokemons);
      const pokemonLength = pokemonsArr.length; 
      const index = Math.floor(Math.random() * pokemonLength);
      const newPokemon = pokemonsArr[index];
      const pokemon = newPokemon[1];
      const newId = Date.now();
      pokemon.id = newId;

      firebase.addPokemon(pokemon);
    }
    
    const handleClick = () => {
      history.push('/');
    };

  return (
    <div className={s.wrapper}>
      <button onClick={handleAddPokemon}>
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