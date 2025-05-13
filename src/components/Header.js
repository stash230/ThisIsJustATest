import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
 



function Header() {
  return (
   <header className="header">
      <div className="nav-container">
        <h1 className="logo">My Demo Site</h1>
        <div className="dropdown">
          <button className="dropdown-button">Pages ▾</button>
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
