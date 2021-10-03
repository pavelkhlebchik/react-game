import { useEffect, useState } from 'react';

import s from './form.module.css'

const LoginForm = ({ onSubmit, isReset }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setLogin] = useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit && onSubmit({
      type: isLogin ? 'login' : 'signup',
      email,
      password
    })

    setEmail('');
    setPassword('');
  }

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [isReset])

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div>
        <div className={s.root}>
          <input
            className={s.input}
            required
            value={email}
            type="text"
            name="email"
            onChange={(evt) => setEmail(evt.target.value)} />
          <span className={s.highlight}></span>
          <span className={s.bar}></span>
          <label className={s.label}>Email</label>
        </div>
        <div className={s.root}>
          <input
            className={s.input}
            required
            value={password}
            type="password"
            name="password"
            onChange={(evt) => setPassword(evt.target.value)} />
          <span className={s.highlight}></span>
          <span className={s.bar}></span>
          <label className={s.label}>Password</label>
        </div>
        <div className={s.flex}>
          <button>
            {isLogin ? 'Login' : 'SignUp'}
          </button>
          <div 
            className={s.link}
            onClick={() => setLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Login'}
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;