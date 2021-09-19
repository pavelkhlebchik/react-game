import classNames from 'classnames';

import pokemons from './pokemons.module.css';
import cardBackSide from '../../assets/card-back-side.jpg';

const PokemonsCard = ({ id, img, name, type, values, isActiveCard, handleClickCard}) => {

  const handleClick = () => {
    handleClickCard && handleClickCard(id);
  }

  return (
    <div className={pokemons.root} onClick={handleClick}>
      <div className={classNames(pokemons.pokemonCard, {[pokemons.active]: isActiveCard})}>
        <div className={pokemons.cardFront}>
          <div className={classNames(pokemons.wrap, pokemons.front)}>
            <div className={pokemons.pokemon}>
              <div className={pokemons.values}>
                <div className={classNames(pokemons.count, pokemons.top)}>{values.top}</div>
                <div className={classNames(pokemons.count, pokemons.right)}>{values.right}</div>
                <div className={classNames(pokemons.count, pokemons.bottom)}>{values.bottom}</div>
                <div className={classNames(pokemons.count, pokemons.left)}>{values.left}</div>
              </div>
              <div className={pokemons.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={pokemons.info}>
                <span className={pokemons.number}>{id}</span>
                <h3 className={pokemons.name}>{name}</h3>
                <small className={pokemons.type}>Type: <span>{type}</span></small>
              </div>
            </div>
          </div>
        </div>

        <div className={pokemons.cardBack}>
          <div className={classNames(pokemons.wrap, pokemons.back)}>
            <img src={cardBackSide} alt="Сard Backed" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default PokemonsCard;