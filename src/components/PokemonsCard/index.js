import pokemons from './pokemons.module.css';

const PokemonsCard = () => {
  return (
    <div className="root">
      <div className="pokemonCard">
        <div className="cardFront">
          <div className="wrap front">
            <div className="pokemon <-- Type Pokemon -->">
              <div className="values">
                <div className="count top"><-- Count Value --></div>
                <div className="count right"><-- Count Value --></div>
                <div className="count bottom"><-- Count Value --></div>
                <div className="count left"><-- Count Value --></div>
              </div>
              <div className="imgContainer">
                <img src="<-- Pokemon Picture -->" alt="<-- Name Pokemon -->" />
              </div>
              <div className="info">
                <span className="number">#{< --ID Pokemon -->}</span>
                <h3 className="name"><-- Name Pokemon --></h3>
                <small className="type">Type: <span><-- Type Pokemon --></span></small>
              </div>
            </div>
          </div>
        </div>

        <div className="cardBack">
          <div className="wrap back">
            <img src="./assets/card-back-side.jpg" alt="Сard Backed" />
          </div>
        </div>

      </div>
    </div>
  )
}