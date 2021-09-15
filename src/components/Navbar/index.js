import nav from './navbar.module.css';
import classNames from 'classnames';

const Navbar = () => {
  return (
    <nav className={nav.root}>
      <div className={nav.navWrapper}>
        <p className={nav.brand}>
          LOGO
        </p>
        <a className={classNames(nav.menuButton, nav.active)}>
          <span />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;