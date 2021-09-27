import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {FireBaseContext} from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonsCard from '../../../../components/PokemonsCard';
import s from './finish.module.css';

const FinishPage = () => {
  const { pokemons, player2PokemonsContext } = useContext(PokemonContext);
  const pokemonContext = useContext(PokemonContext);
  const firebase = useContext(FireBaseContext);
  const [enemyCard, setEnemyCard] = useState({})
  const history = useHistory();

  const handleChoiseCard = (id) => {
    if (pokemonContext.winner === true) {
      Object.values(player2PokemonsContext.player2Pokemons).map(item => {
        if (item.id === id) {
          setEnemyCard(item);
          item.selected = true;
        } else {
          item.selected = false;
        } return item
      })
    }
  }

  const handleBackToStart = () => {
    firebase.addPokemon(enemyCard);
    pokemonContext.clean();
    history.replace('/game');
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
      <button onClick={handleBackToStart}>END GAME</button>
      <div
        className={s.flex}
      >
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
                isSelected={item.selected}
                isActive
                minimize
                handleClickCard={handleChoiseCard}
              />
            )
          })
        }
      </div>
    </div>
  )
};
export default FinishPage;