// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
      <img src="/logos.png" alt="Logo" className="navbar-logo"  style={{ width: '40px', marginRight: '10px' }} />FZI</a>
       <img src="/public/logo.png" alt="Logo" className="navbar-logo" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Membership">Membership</a>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
