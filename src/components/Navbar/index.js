import nav from './navbar.module.css';
import classNames from 'classnames';
// import {ReactComponent as LogoSVG} from '../../assets/logo.svg';
import {ReactComponent as LoginSVG} from '../../assets/login.svg';


const Navbar = ({ isOpen, bgActive = false, onClick, onClickLogin }) => {
  return (
    <nav className={classNames(
      nav.root,
      {
        [nav.bgActive]: bgActive
      }
    )}>
      <div className={nav.navWrapper}>
        <p className={nav.brand}>
          {/* <LogoSVG /> */}
        </p>
        <div className={nav.loginAndMenu}>
          <div
           className={nav.loginWrap}
           onClick={onClickLogin}
           >
          <LoginSVG />
          </div>
          <div
            className={classNames(nav.menuButton,
              { [nav.active]: isOpen })}
            onClick={onClick}
          >
            <span />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;