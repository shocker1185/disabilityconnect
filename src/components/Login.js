import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { loginWithEmail } from '../firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    loginWithEmail(email, password);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <h2>Login</h2>
      <TextField 
        label="Email" 
        variant="outlined" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <TextField 
        label="Password" 
        type="password" 
        variant="outlined" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
