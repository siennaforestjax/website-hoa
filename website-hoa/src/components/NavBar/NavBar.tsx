import './NavBar.css';

const NavBar = ({ ...isLoggedIn }) => {
  function displayContactList() {
    return <li>Contact List (Log in)</li>;
  }

  return (
    <nav className="nav-container">
      <button className="nav-hamburger">l l l</button>
      <div className="nav-panel">
        <ul className="nav-list">
          <li>Events</li>
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
          <li className="empty"></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
