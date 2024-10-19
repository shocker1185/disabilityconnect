import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Import routing components
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';  // Import the UserProfile component
import { Button, Box, Typography, AppBar, Toolbar } from '@mui/material';
import messages from './messages';  // Import messages for rotating banner
import './App.css';  // Import your custom styles

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [currentMessage, setCurrentMessage] = useState("");

  // Handle scrolling to hide banner
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cycle through messages every few seconds
  useEffect(() => {
    const changeMessage = () => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setCurrentMessage(randomMessage);
    };
    const messageInterval = setInterval(changeMessage, 4000);  // Change every 4 seconds
    return () => clearInterval(messageInterval);
  }, []);

  return (
    <Router>  {/* Wrap everything inside Router for routing */}
      <div className="App">
        {/* Top Banner with rotating messages */}
        {showBanner && (
          <div className="top-banner animated-banner">
            <div className="rotating-message">{currentMessage}</div>
          </div>
        )}

        {/* Morphing shapes behind the navigation bar */}
        <div className="background-shapes">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,32L48,53.3C96,75,192,117,288,128C384,139,480,117,576,117.3C672,117,768,139,864,144C960,149,1056,139,1152,133.3C1248,128,1344,128,1392,128L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z" 
              fill="url(#wave-gradient)">
              <animate attributeName="d" dur="15s" repeatCount="indefinite"
                values="M0,32L48,53.3C96,75,192,117,288,128C384,139,480,117,576,117.3C672,117,768,139,864,144C960,149,1056,139,1152,133.3C1248,128,1344,128,1392,128L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z;
                  M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z;
                  M0,32L48,53.3C96,75,192,117,288,128C384,139,480,117,576,117.3C672,117,768,139,864,144C960,149,1056,139,1152,133.3C1248,128,1344,128,1392,128L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z;" />
            </path>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%">
                <stop offset="0%" stopColor="#ff9a9e" />
                <stop offset="100%" stopColor="#fad0c4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Navigation Bar */}
        <AppBar position="sticky" className="nav-bar">
          <Toolbar className="toolbar">
            <div className="nav-left">
              <Link to="/profile" className="nav-link">Profile</Link>
              <Link to="/" className="nav-link">Posts</Link>
              <Link to="/events" className="nav-link">Events</Link>
              <Link to="/settings" className="nav-link">Settings</Link>
              <Link to="/notifications" className="nav-link">Notifications</Link>
            </div>
            <div className="nav-right">
              <Link to="/messages" className="nav-link">Messages</Link>
              <Link to="/friends" className="nav-link">Friends</Link>
            </div>
          </Toolbar>
        </AppBar>

        {/* Routing for different pages */}
        <Routes>
          <Route path="/profile" element={<UserProfile />} />  {/* Render UserProfile when visiting /profile */}
          <Route path="/" element={
            <div className="main-content">
              {isRegistered ? <Login /> : <Register />}
              <Button
                variant="text"
                color="secondary"
                onClick={() => setIsRegistered(!isRegistered)}
                className="animated-button"
              >
                {isRegistered ? 'Need to Register?' : 'Already Registered?'}
              </Button>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
