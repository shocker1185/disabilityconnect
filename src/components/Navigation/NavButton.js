import React from 'react';
import { useNavigate } from 'react-router-dom';

/* 
  NavButton Component:
  Renders an individual button for navigation.
  Accepts label (button text) and path (URL path to navigate to).
*/
const NavButton = ({ label, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);  // Navigate to the given path on click
  };

  return (
    <button className='nav-button' onClick={handleClick}>
      {label}
    </button>
  );
};

export default NavButton;
