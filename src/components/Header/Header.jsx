import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons
import './Header.css'; // Create a CSS file for styling
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo and Title */}
        <div className="header-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="title">Manisha & Co Advocates</h1>
        </div>

        {/* Social Media Icons */}
        <div className="header-socio">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
