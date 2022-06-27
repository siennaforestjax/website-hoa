import React from 'react';
import './HeaderBar.css';
import NavBar from '../NavBar/NavBar';

function HeaderBar() {
  return (
    <div className="header-container">
      <NavBar />
      <div className="title">Sienna Forest</div>
    </div>
  );
}

export default HeaderBar;
