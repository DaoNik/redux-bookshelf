import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>
        &copy; {new Date().getFullYear()} Bookshelf
      </p>
    </footer>
  );
}

export default Footer;
