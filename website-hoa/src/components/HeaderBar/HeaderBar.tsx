import React from 'react';
import classes from './HeaderBar.module.css';
import NavBar from '../NavBar/NavBar';

function HeaderBar() {
  return (
    <div className={classes.headerContainer}>
      <NavBar />
      <div className={classes.title}>Sienna Forest</div>
    </div>
  );
}

export default HeaderBar;
