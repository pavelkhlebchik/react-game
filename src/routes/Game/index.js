const GamePage = ({onChangePage}) => {
  const handlerClick = (page) => {
    onChangePage && onChangePage(page);
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