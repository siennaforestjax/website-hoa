import React from 'react';
import './NavBar.css';

const NavBar = ({ ...isLoggedIn }) => {
  function displayContactList() {
    return isLoggedIn ? (
      <li>
        <a>Contact List</a>
      </li>
    ) : (
      <li>Contact List (Log in)</li>
    );
  }

  function toggleNavPanel() {
    document.getElementsByClassName('nav-panel')[0].classList.toggle('open');
  }

  return (
    <nav className="nav-container">
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
              <li>See All</li>
            </ul>
          </li>
          <li>
            Docs
            <ul className="nav-sub-list">
              <li>Covenants & Restrictions</li>
              {displayContactList()}
            </ul>
          </li>
          <li>
            About
            <ul className="nav-sub-list">
              <li>The Board</li>
              <li>The Neighborhood</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
