import React, { useState } from 'react';
import { loginWithEmail } from '../firebase/auth';  // Firebase login

/* 
  Login Component:
  Renders a login form for user authentication.
  Uses Firebase to handle user authentication.
*/
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await loginWithEmail(email, password);  // Perform login
      console.log('User logged in');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <input 
        type='email' 
        placeholder='Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type='password' 
        placeholder='Password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
