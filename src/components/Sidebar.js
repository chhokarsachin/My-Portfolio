import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isMobileOpen, closeSidebar }) {
  return (
    <div className={`sidebar bg-light p-3 ${isMobileOpen ? 'show' : ''}`}>
      {/* Close button - only visible on mobile */}
      <div className="d-flex justify-content-end d-lg-none">
        <button 
          className="btn btn-sm btn-outline-secondary mb-3" 
          onClick={closeSidebar}
        >
          ✖
        </button>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item"><Link className="nav-link" to="/" onClick={closeSidebar}>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/portfolio" onClick={closeSidebar}>Portfolio</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeSidebar}>About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact" onClick={closeSidebar}>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
