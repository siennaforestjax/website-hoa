import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  function toggleNavPanel() {
    document.getElementsByClassName('nav-panel')[0].classList.toggle('open');
    document
      .getElementsByClassName('nav-panel-background')[0]
      .classList.toggle('open');
  }

  return (
    <nav>
      <button className="nav-hamburger" onClick={toggleNavPanel}>
        l l l
      </button>
      <div className="nav-panel">
        <button type="button" className="exit-button" onClick={toggleNavPanel}>
          +
        </button>
        <ul className="nav-list">
          <li>
            Events
            <ul className="nav-sub-list">
              <li>
                <Link to="/events">See All</Link>
              </li>
            </ul>
          </li>
          <li>
            Docs
            <ul className="nav-sub-list">
              <li>
                <Link to="/documents">See All</Link>
              </li>
            </ul>
          </li>
          <li>
            About
            <ul className="nav-sub-list">
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
      <div className="nav-panel-background" onClick={toggleNavPanel}></div>
    </nav>
  );
};

export default NavBar;
