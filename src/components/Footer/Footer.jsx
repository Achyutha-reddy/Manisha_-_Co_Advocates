import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons
import './Footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2 className="title-logo">Manisha & Co Advocates</h2>
        </div>

        <div className="footer-nav">
          <h4>Quick Links</h4>
          <nav>
            <ul>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/team" className="footer-link">Teams</Link></li>
              <li><Link to="/aboutus" className="footer-link">About</Link></li>
              <li><Link to="/practiceareas" className="footer-link">Practice Areas</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </nav>
        </div>

        <div className="footer-socio">
          <h4>Follow Us</h4>
          <div className="socio-icons">
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
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Manisha & Co Advocates. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
