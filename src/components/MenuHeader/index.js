import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import Menu from '../Menu';
import Navbar from '../Navbar';
import Modal from '../Modal';
import LoginForm from '../LoginForm';

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleClickHamburger = () => {
    setOpen(prevState => !prevState);
  }

  const handleClickLogin = () => {
    setOpenModal(prevState => !prevState);
  }

  const handleClickSubmitLogin = async ({ email, password }) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    }
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkflO_HsmuWMXHjqoedhZaHtFcoDaO0Q4', requestOptions).then(res => res.json())

    if (response.hasOwnProperty('error')) {
      NotificationManager.error(response.error.message, 'Wrong!');
    } else {
      localStorage.setItem('idToken', response.idToken)
      NotificationManager.success('Success');
    }
  }

  return (
    <>
      <Menu
        isOpen={isOpen}
        handleClick={handleClickHamburger}
      />
      <Navbar
        isOpen={isOpen}
        bgActive={bgActive}
        onClick={handleClickHamburger}
        onClickLogin={handleClickLogin}
      />
      <Modal
        isOpen={isOpenModal}
        title="Log in"
        onCloseModal={handleClickLogin}>
        <LoginForm
          isReset={!isOpenModal}
          onSubmit={handleClickSubmitLogin}
        ></LoginForm>
      </Modal>
    </>
  )
}

export default MenuHeader;