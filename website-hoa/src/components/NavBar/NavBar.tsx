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
          type="button"
          className={classes.exitButton}
          onClick={() => toggleNavPanel()}
        >
          +
        </button>
        <ul className={classes.navList}>
          <li>
            Events
            <ul className={classes.navSubList}>
              <li>
                <Link to="/events">See All</Link>
              </li>
            </ul>
          </li>
          <li>
            Docs
            <ul className={classes.navSubList}>
              <li>
                <Link to="/documents">See All</Link>
              </li>
            </ul>
          </li>
          <li>
            About
            <ul className={classes.navSubList}>
              <li>
                <Link to="/board">The Board</Link>
              </li>
              <li>
                <Link to="/">The Neighborhood (Home)</Link>
              </li>
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
