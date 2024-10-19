import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { Button, Box } from '@mui/material';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="App">
      <h1>Your Social Media App</h1>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        {isRegistered ? <Login /> : <Register />}
        <Button variant="text" onClick={() => setIsRegistered(!isRegistered)}>
          {isRegistered ? 'Need to Register?' : 'Already Registered?'}
        </Button>
      </Box>
    </div>
  );
}

export default App;
