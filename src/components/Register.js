import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { registerWithEmail } from '../firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    registerWithEmail(email, password);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <h2>Register</h2>
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
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
