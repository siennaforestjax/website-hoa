import React, { useState } from 'react';
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavPanel() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <button className={classes.navHamburger} onClick={() => toggleNavPanel()}>
        l l l
      </button>
      <div className={`${classes.navPanel} ${isOpen ? classes.open : ''}`}>
        <button
          type='button'
          className={classes.exitButton}
          onClick={() => toggleNavPanel()}
        >
          +
        </button>
        <ul className={classes.navList}>
          <li>
            About
            <ul className={classes.navSubList}>
              <Link to='/' onClick={() => toggleNavPanel()}>
                Your Neighborhood (Home)
              </Link>
              <Link to='/board' onClick={() => toggleNavPanel()}>
                Your HOA Board
              </Link>
            </ul>
          </li>
          <li>
            Celebrate
            <ul className={classes.navSubList}>
              <Link to='/yotm' onClick={() => toggleNavPanel()}>
                Yard of the Month
              </Link>
            </ul>
          </li>
          <li>
            HOA Documents
            <ul className={classes.navSubList}>
              <Link to='/documents' onClick={() => toggleNavPanel()}>
                See All
              </Link>
            </ul>
          </li>
          <li>
            Contractor Recommendations
            <ul className={classes.navSubList}>
              <Link to='/recommendations' onClick={() => toggleNavPanel()}>
                See All
              </Link>
            </ul>
          </li>
        </ul>
      </div>
      <div
        className={`${classes.navPanelBackground} ${
          isOpen ? classes.open : ''
        }`}
        onClick={() => toggleNavPanel()}
      ></div>
    </nav>
  );
}

export default NavBar;
