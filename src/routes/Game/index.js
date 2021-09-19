import { useHistory } from "react-router";

const GamePage = () => {
  const history = useHistory();
  const handlerClick = () => {
    history.push('/');
  };

  return (
    <div>
      This is GamePage
      <button onClick={handlerClick}>
        back to Home
      </button>
    </div>
  )
}

export default GamePage;