import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>SocialConnect</h1>
      <nav>
        <ul>
          <li><Link to="/">Feed</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/friend-requests">Friend Requests</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
