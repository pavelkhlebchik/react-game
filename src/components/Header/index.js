import header from './header.module.css';

const Header = ({title, descr, onClickButton}) => {
  const handlerClick = () => {
    onClickButton && onClickButton('game');
  }
  return (
    <header className={header.root}>
      <div className={header.forest}></div>
      <div className={header.container}>
        {title && (<h1>{title}</h1>)}
        {descr && (<p>{descr}</p>)}
        <button onClick={handlerClick}>
          Start Game
        </button>
      </div>
    </header>
  )
}

export default Header;
