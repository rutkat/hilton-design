import React from 'react';
import logo from '../../assets/logo.png';
import './header.scss';
import NavButton from '../NavButton';

function Header() {
  return (
    <header className="app-header">
      <NavButton></NavButton>
      <h2>Hotel Details</h2>
      <a href="https://hilton.com" tabIndex="0" className="app-header-link">
        <img src={logo} className="app-logo" alt="Hilton logo" />
      </a>
    </header>

  );
}

export default Header;
