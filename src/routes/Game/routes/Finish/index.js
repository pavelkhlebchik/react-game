import { useContext } from 'react';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonsCard from '../../../../components/PokemonsCard';
import s from './finish.module.css';

const FinishPage = () => {
  const { pokemons, player2PokemonsContext } = useContext(PokemonContext);
  console.log('#### player1', pokemons);
console.log('#### player2', player2PokemonsContext.player2Pokemons);
  return (
    <>
      <div className={s.flex}>
        {
          Object.values(pokemons).map((item) => {
            return (
              <PokemonsCard
                className={s.card}
                key={item.key}
                id={item.id}
                type={item.type}
                name={item.name}
                img={item.img}
                values={item.values}
                isActive
                minimize
              />
            )
          })
        }
      </div>
      <button>END GAME</button> 
      <div className={s.flex}>
      {
          player2PokemonsContext.player2Pokemons.map((item) => {
            return (
              <PokemonsCard
                className={s.card}
                key={item.key}
                id={item.id}
                type={item.type}
                name={item.name}
                img={item.img}
                values={item.values}
                isActive
                minimize
              />
            )
          })
        }
      </div>
    </>
  )
};
export default FinishPage;