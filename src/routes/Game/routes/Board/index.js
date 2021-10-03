import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonsCard from '../../../../components/PokemonsCard';
import PlayerBoard from './components/PlayerBoard';
import { selectedPokemons } from '../../../../store/pokemon';
import { getPokemonsGameAsync, selectedPokemonsGame} from "../../../../store/game";
import s from './board.module.css';

const counterWin = (board, player1, player2) => {
	let player1Count = player1.length;
	let player2Count = player2.length;

	board.forEach(item => {
		if (item.card.possession === 'red') {
			player2Count++;
		}

		if (item.card.possession === 'blue') {
			player1Count++;
		}
	});

	return [player1Count, player2Count];
}

const BoardPage = () => {
	const selectedPokemonsRedux = useSelector(selectedPokemons);
  const selectedPokemonsGameRedux = useSelector(selectedPokemonsGame);
	const [board, setBoard] = useState([]);
	const [player1, setPlayer1] = useState(() => {
		return Object.values(selectedPokemonsRedux).map(item => ({
			...item,
			possession: 'blue',
		}))
	});
	const [player2, setPlayer2] = useState([]);
	const [choiseCard, setChoiseCard] = useState(null);
	const [step, setStep] = useState(0);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(async () => {
		async function fetchData() {
			const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
			const boardRequest = await boardResponse.json();
			setBoard(boardRequest.data);
		}
		fetchData();
	}, [])

	useEffect(() => {
    if (!selectedPokemonsGameRedux.length) {
      dispatch(getPokemonsGameAsync());
    }

    setPlayer2(() => {
      return selectedPokemonsGameRedux.map((item) => ({
        ...item,
        possession: "red",
      }));
    });
  }, [selectedPokemonsGameRedux, dispatch]);

  if (Object.keys(selectedPokemonsRedux).length === 0) {
		history.replace('/game');
	}

	const handleClickBoardPlate = async (position) => {
		if (choiseCard) {
			const params = {
				position,
				card: choiseCard,
				board,
			};

			const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(params),
			});

			const request = await res.json();

			if (choiseCard.player === 1) {
				setPlayer1(prevState => prevState.filter(item => item.id !== choiseCard.id))
			}

			if (choiseCard.player === 2) {
				setPlayer2(prevState => prevState.filter(item => item.id !== choiseCard.id))
			}

			setBoard(request.data);
			setStep(prevState => {
				const count = prevState + 1;
				return count;
			})
		}
	}

	// const { setWinner } = useContext(PokemonContext);

	// useEffect(() => {
	// 	if (step === 9) {
	// 		const [count1, count2] = counterWin(board, player1, player2)

	// 		if (count1 > count2) {
	// 			setWinner(true)
	// 		} else if (count1 < count2) {
	// 			setWinner(false)
	// 		} else {
	// 			setWinner(false)
	// 		}
	// 		history.replace('/game/finish');
	// 	}
	// })

	return (
		<div className={s.root}>
			<div className={s.playerOne}>
				<PlayerBoard
					player={1}
					cards={player1}
					onClickCard={(card) => setChoiseCard(card)}
				/>
			</div>
			<div className={s.board}>
				{
					board.map((item) =>
						<div
							key={item.position}
							className={s.boardPlate}
							onClick={() => !item.card && handleClickBoardPlate(item.position)}
						>
							{
								item.card && <PokemonsCard {...item.card} isActive minimize />
							}
						</div>
					)
				}
			</div>
			<div className={s.playerTwo}>
				{
					<PlayerBoard
						player={2}
						cards={player2}
						onClickCard={(card) => setChoiseCard(card)}
					/>
				}
			</div>
		</div>
	);
};

export default BoardPage;