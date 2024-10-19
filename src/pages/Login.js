import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../redux/userSlice'; 
import { useNavigate } from 'react-router-dom'; 
import './Login.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault();

    if (username && password) {
      const user = { name: username };

      dispatch(setUserName(user.name));

      navigate('/Home'); 
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-container">
      <div className='login-section'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
