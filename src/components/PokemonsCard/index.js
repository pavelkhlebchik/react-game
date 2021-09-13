import { useState } from 'react';

import pokemons from './pokemons.module.css';

import cardBackSide from '../../assets/card-back-side.jpg';

const PokemonsCard = ({ id, img, name, type, values }) => {
  const [isActive, setActive] = useState(false);

  const handlerClick = () => {
    setActive(!isActive)
  }

  return (
    <div className={pokemons.root} onClick={handlerClick}>
      <div className={`${pokemons.pokemonCard} ${isActive ? pokemons.active : ''}`}>
        <div className={pokemons.cardFront}>
          <div className={`${pokemons.wrap} ${pokemons.front}`}>
            <div className={pokemons.pokemon}>
              <div className={pokemons.values}>
                <div className={`${pokemons.count} ${pokemons.top}`}>{values.top}</div>
                <div className={`${pokemons.count} ${pokemons.right}`}>{values.right}</div>
                <div className={`${pokemons.count} ${pokemons.bottom}`}>{values.bottom}</div>
                <div className={`${pokemons.count} ${pokemons.left}`}>{values.left}</div>
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
          <div className={`${pokemons.wrap} ${pokemons.back}`}>
            <img src={cardBackSide} alt="Сard Backed" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default PokemonsCard;