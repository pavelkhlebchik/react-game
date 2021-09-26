import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonsCard from '../../../../components/PokemonsCard';
import s from './finish.module.css';

const FinishPage = () => {
  const { pokemons, player2PokemonsContext } = useContext(PokemonContext);
  const pokemonContext = useContext(PokemonContext);
 
  const history = useHistory();
  const handleBackToStart = () => {
    history.replace('/game');
    pokemonContext.clean();
  }


  return (
    <div className={s.wrap}>
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
      <button onClick={handleBackToStart} >END GAME</button> 
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
    </div>
  )
};
export default FinishPage;