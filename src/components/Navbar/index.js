import nav from './navbar.module.css';
import classNames from 'classnames';

const Navbar = ({ isOpen, bgActive = false, handleClick }) => {
  return (
    <nav className={classNames(
      nav.root,
      {
        [nav.bgActive]: bgActive
      }
    )}>
      <div className={nav.navWrapper}>
        <p className={nav.brand}>
          LOGO
        </p>
        <div className={classNames(nav.menuButton, { [nav.active]: isOpen })}
          onClick={handleClick}
        >
          <span />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;