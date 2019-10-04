import React from 'react';
import './nav_button.scss';

function NavButton() {
  return (
    <button role="navigation" aria-label="Go back" className="app-button">
      <span className="arrow-left"></span> Back
    </button>
  );
}

export default NavButton;
