import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/chhokar-logo.jpeg';
import './Navbar.css';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* Mobile Toggle Button */}
      <button 
        className="btn btn-outline-light d-lg-none me-2" 
        onClick={toggleSidebar}
      >
        ☰
      </button>

    
      <Link className="navbar-brand" to="/">
        <img 
          src={logo} 
          alt="Chhokar Logo" 
          className="d-block" 
          style={{ height: '50px' }}
        />
      </Link>

      {/* Navbar content - hidden on mobile via Bootstrap collapse */}
      <div className="collapse navbar-collapse d-none d-lg-block">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
              Portfolio
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/portfolio">My Work</Link></li>
              <li><Link className="dropdown-item" to="/about">About</Link></li>
              <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
            </ul>
          </li>
        </ul>

        {/* Search bar */}
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
