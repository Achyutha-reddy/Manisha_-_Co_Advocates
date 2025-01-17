import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a separate CSS file for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Manisha & Co Advocates</h2>
        </div>
        
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/home" className="navbar-link">HOME</Link>
          </li>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/team" className="navbar-link">TEAM</Link>
          </li>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/practiceareas" className="navbar-link">PRACTICE AREAS</Link>
          </li>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/aboutus" className="navbar-link">ABOUT US</Link>
          </li>
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/contact" className="navbar-link">CONTACT</Link>
          </li>
        </ul>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? 'X' : '☰'} {/* Change button to '×' when menu is open */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
