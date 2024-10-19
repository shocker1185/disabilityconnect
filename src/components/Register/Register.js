import React, { useState } from 'react';
import { registerWithEmail } from '../firebase/auth';

/* 
  Register Component:
  Renders a registration form for new users.
  Uses Firebase to register a new user.
*/
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await registerWithEmail(email, password);  // Perform registration
      console.log('User registered');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='register-container'>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
