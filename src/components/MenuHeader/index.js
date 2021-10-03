import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import Menu from '../Menu';
import Navbar from '../Navbar';
import Modal from '../Modal';
import LoginForm from '../LoginForm';

const loginSingupUser = async ({ email, password, type }) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  }

  switch (type) {
    case 'signup':
      return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkflO_HsmuWMXHjqoedhZaHtFcoDaO0Q4', requestOptions).then(res => res.json());
    case 'login':
      return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkflO_HsmuWMXHjqoedhZaHtFcoDaO0Q4', requestOptions).then(res => res.json());
    default:
      return 'I cannot login user'
  }
}

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleClickHamburger = () => {
    setOpen(prevState => !prevState);
  }

  const handleClickLogin = () => {
    setOpenModal(prevState => !prevState);
  }

  const handleClickSubmitLogin = async (props) => {
    const response = loginSingupUser(props)
    if (response.hasOwnProperty('error')) {
      NotificationManager.error(response.error.message, 'Wrong!');
    } else {
      localStorage.setItem('idToken', response.idToken)
      NotificationManager.success('Success');
      handleClickLogin();
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