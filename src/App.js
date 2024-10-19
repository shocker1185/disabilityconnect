import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { Button, Box, Typography, AppBar, Toolbar } from '@mui/material';
import messages from './messages'; // Import messages
import { ReactComponent as MorphingShapes } from './MorphingShapes.svg'; // Import SVG as React component
import './App.css'; // Import your custom styles

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [currentMessage, setCurrentMessage] = useState('');

  // Handle scrolling to hide banner
  useEffect(() => {
    const handleScroll = () => {
      setShowBanner(window.scrollY <= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cycle through messages every few seconds
  useEffect(() => {
    const changeMessage = () => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setCurrentMessage(randomMessage);
    };
    changeMessage(); // Set initial message
    const messageInterval = setInterval(changeMessage, 4000); // Change every 4 seconds
    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="App">
      {/* Top Banner with rotating messages */}
      {showBanner && (
        <div className="top-banner animated-banner">
          <div className="rotating-message">{currentMessage}</div>
        </div>
      )}

      {/* Morphing shapes behind the navigation bar */}
      <div className="background-shapes">
        <MorphingShapes />
      </div>

      {/* Navigation Bar */}
      <AppBar position="sticky" className="nav-bar">
        <Toolbar className="toolbar">
          <div className="nav-left">
            <Button color="inherit" className="nav-button">Profile</Button>
            <Button color="inherit" className="nav-button">Posts</Button>
            <Button color="inherit" className="nav-button">Events</Button>
            <Button color="inherit" className="nav-button">Settings</Button>
            <Button color="inherit" className="nav-button">Notifications</Button>
          </div>
          <div className="nav-right">
            <Button color="inherit" className="nav-button">Messages</Button>
            <Button color="inherit" className="nav-button">Friends</Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Typography variant="h2" sx={{ textAlign: 'center', margin: '20px 0' }}>
        Disability Connect
      </Typography>

      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
        className="animated-box"
      >
        {isRegistered ? <Login /> : <Register />}
        <Button
          variant="text"
          color="secondary"
          onClick={() => setIsRegistered(!isRegistered)}
          className="animated-button"
        >
          {isRegistered ? 'Need to Register?' : 'Already Registered?'}
        </Button>
      </Box>
    </div>
  );
}

export default App;
