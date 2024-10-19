import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { registerWithEmail } from '../firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // Error handling state
  const [success, setSuccess] = useState(null);  // Success message state

  const handleRegister = async () => {
    setError(null);  // Clear any previous errors
    setSuccess(null);  // Clear any previous success messages

    try {
      await registerWithEmail(email, password);
      setSuccess('Registration successful!');  // Display success message
    } catch (err) {
      setError(err.message);  // Handle and display errors
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Typography variant="h4">Register</Typography>
      <TextField 
        label="Email" 
        variant="outlined" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        fullWidth
      />
      <TextField 
        label="Password" 
        type="password" 
        variant="outlined" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        fullWidth
      />
      {error && <Typography color="error">{error}</Typography>}  {/* Display error */}
      {success && <Typography color="primary">{success}</Typography>}  {/* Display success */}
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
