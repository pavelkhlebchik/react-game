import { Link } from 'react-router-dom';

import menu from './menu.module.css';
import classNames from 'classnames';

const MENU = [
  {
    to: "home",
    title: "HOME",
  },
  {
    to: "game",
    title: "GAME",
  },
  {
    to: "about",
    title: "ABOUT",
  },
  {
    to: "contact",
    title: "CONTACT",
  }
]

const Menu = ({ isOpen, handleClick }) => {
  return (
    <div className={classNames(menu.menuContainer, {
      [menu.active]: isOpen === true,
      [menu.deactive]: isOpen === false
    })}>
      <div className={menu.overlay} />
      <div className={menu.menuItems}>
        <ul>
          {
            MENU.map(({ title, to }, index) => (
              <li onClick={handleClick} key={index}>
                <Link to={to}>
                  {title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Menu;