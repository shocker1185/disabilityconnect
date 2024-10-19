import React from 'react';

/* 
  Footer Component:
  Displays the footer at the bottom of each page.
  Can include copyright information, links to terms and conditions, etc.
*/
const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; 2024 DisabilityConnect. All rights reserved.</p>
      <a href='/terms'>Terms and Conditions</a>
    </footer>
  );
};

export default Footer;
