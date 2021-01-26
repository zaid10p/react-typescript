import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { login, selectAuthState } from '../features/auth/authSlice';

export const Login: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const { loggedIn, user, error } = useSelector(selectAuthState);
  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('user', JSON.stringify(user));
      props.history.push('/todos');
    } else {
      console.log(error);
    }
  }, [loggedIn, error]);

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login(username, password));
    setusername('');
    setpassword('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'username') setusername(value);
    else setpassword(value);
  };

  return (
    <div style={{ margin: '15px' }}>
      <h2> Login </h2>
      <form onSubmit={handleSubmit}>
        <h6>Username</h6>
        <input
          type="text"
          className="form-control"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />

        <h6>Password</h6>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login </button>
      </form>
    </div>
  );
};
