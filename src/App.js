import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { Button, Box, Typography } from '@mui/material';
import './App.css';  // Import your custom styles

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="App">
      {/* Add animated image above the form */}
      <Box sx={{ textAlign: 'center', margin: '20px 0' }} className="animated-image">
        <img
          src="/images/inclusive_design.webp"
          alt="Inclusive Design for Social Platform"
          className="form-image"  // Class for styling and animations
        />
      </Box>

      {/* Animated Heading */}
      <Typography variant="h2" sx={{ textAlign: 'center', margin: '20px 0' }} className="animated-heading">
        Disability Connect
      </Typography>

      {/* Form Section with Register/Login Toggle */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }} className="animated-box">
        {isRegistered ? <Login /> : <Register />}
        <Button
          variant="text"
          color="secondary"
          onClick={() => setIsRegistered(!isRegistered)}
          className="animated-button"  // Class for animated button
        >
          {isRegistered ? 'Need to Register?' : 'Already Registered?'}
        </Button>
      </Box>
    </div>
  );
}

export default App;
