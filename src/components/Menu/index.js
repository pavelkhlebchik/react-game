import menu from './menu.module.css';
import classNames from 'classnames';

const Menu = () => {
  return (
    <div className={classNames(menu.menuContainer, menu.active, menu.deactive)}>
      <div className={menu.overlay} />
      <div className={menu.menuItems}>
        <ul>
          <li>
            <a href="#welcome">
              HOME
            </a>
          </li>
          <li>
            <a href="#game">
              GAME
            </a>
          </li>
          <li>
            <a href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;