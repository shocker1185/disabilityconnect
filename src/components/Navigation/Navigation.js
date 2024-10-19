import React from 'react';
import NavButton from './NavButton';  // Importing the button component

/* 
  Navigation Component: 
  Renders the navigation bar for navigating between pages. 
  Includes buttons for different sections like Profile, Posts, Events, etc. 
*/
const Navigation = () => {
  return (
    <nav className='nav-bar'>
      <NavButton label='Profile' path='/profile' />
      <NavButton label='Posts' path='/posts' />
      <NavButton label='Events' path='/events' />
      <NavButton label='Settings' path='/settings' />
      <NavButton label='Notifications' path='/notifications' />
      <NavButton label='Messages' path='/messages' />
      <NavButton label='Friends' path='/friends' />
    </nav>
  );
};

export default Navigation;
