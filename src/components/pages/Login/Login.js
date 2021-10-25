import { useState } from 'react';
import styles from './Login.module.scss';
import { loginPostFetch } from '../../../fetches/fetches';

const Login = ({ setIsLogin }) => {

  const [user, setUser] = useState({userName: '', password: ''});

  const handleChange = (event) => {
    setUser({...user,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loginPostFetch(setIsLogin, user);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="userName" onChange={handleChange} type="text" placeholder="Введите имя пользователя"/>
        <input name="password" onChange={handleChange} type="password" placeholder="Введите пароль"/>
        <input type="submit" />
      </form>
    </div>
)};

export default Login;
