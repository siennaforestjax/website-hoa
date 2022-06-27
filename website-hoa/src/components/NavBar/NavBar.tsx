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
              <Link to="/documents">See All</Link>
            </ul>
          </li>
          <li>
            About
            <ul className="nav-sub-list">
              <Link to="/board">See All</Link>
              <Link to="/neighborhood">See All</Link>
            </ul>
          </li>
        </ul>
      </div>
      <div className="nav-panel-background" onClick={toggleNavPanel}></div>
    </nav>
  );
};

export default NavBar;
