import { useContext } from 'react';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonsCard from '../../../../components/PokemonsCard';
import s from './board.module.css';

const BoardPage = () => {
	const { pokemons } = useContext(PokemonContext);
	console.log(pokemons);
	return (
		<div className={s.root}>
			<div className={s.playerOne}>
				{
					Object.values(pokemons).map(({ id, name, img, type, values }) => (	
						<PokemonsCard
							className={s.card}
							key={id}
							id={id}
							type={type}
							name={name}
							img={img}
							values={values}
							isActive
							minimize
						/>
					))
				}
			</div>
			<div className={s.board}>
				<div className={s.boardPlate}>1</div>
				<div className={s.boardPlate}>2</div>
				<div className={s.boardPlate}>3</div>
				<div className={s.boardPlate}>4</div>
				<div className={s.boardPlate}>5</div>
				<div className={s.boardPlate}>6</div>
				<div className={s.boardPlate}>7</div>
				<div className={s.boardPlate}>8</div>
				<div className={s.boardPlate}>9</div>
			</div>
		</div>
	);
};

export default BoardPage;