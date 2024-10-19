import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { loginWithEmail } from '../firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // State for error messages
  const [success, setSuccess] = useState(null);  // State for success messages

  const handleLogin = async () => {
    setError(null);  // Reset error messages
    setSuccess(null);  // Reset success messages
    try {
      const user = await loginWithEmail(email, password);
      setSuccess('Login successful!');  // Display success message
      console.log('Logged in user:', user);  // Optionally log the user object
    } catch (err) {
      setError(err.message);  // Display error message
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Typography variant="h4">Login</Typography>
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
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
