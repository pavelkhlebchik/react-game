import { useHistory } from 'react-router';

import header from './header.module.css';

const Header = ({ title, descr, onClickButton}) => {

  return (
    <header className={header.root}>
      <div className={header.forest}></div>
      <div className={header.silhouette}></div>
      <div className={header.moon}></div>
      <div className={header.container}>
        {title && (<h1>{title}</h1>)}
        {descr && (<p>{descr}</p>)}
        <button onClick={onClickButton}>
          Start Game
        </button>
      </div>
    </header>
  )
}

export default Header;
