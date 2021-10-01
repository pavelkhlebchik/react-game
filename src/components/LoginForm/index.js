import { useState } from 'react';

import s from './form.module.css'

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit && onSubmit({
      email,
      password
    })

    setEmail('');
    setPassword('');
  }

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
        <button>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;