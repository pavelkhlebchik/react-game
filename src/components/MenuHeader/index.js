import Menu from '../Menu';
import Navbar from '../Navbar';
import { useState } from 'react';

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);

  const handleClickHamburger = () => {
    setOpen(prevState => !prevState);
  }
  return (
    <>
      <Menu
        isOpen={isOpen}
      />
      <Navbar
        isOpen={isOpen}
        bgActive={bgActive}
        handleClick={handleClickHamburger}
      />
    </>
  )
}

export default MenuHeader;