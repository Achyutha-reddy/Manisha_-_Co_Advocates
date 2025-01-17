import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a separate CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Manisha & Co Advocates</h1>
        <p>Your trusted legal partner for corporate, family, and criminal law.</p>
        <Link to="/contact" className="cta-btn">Get in Touch</Link>
        
        {/* Image under Hero Section */}
        <div className="hero-image-container">
          <img src="path-to-your-image.jpg" alt="Legal Services" className="hero-image" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>
        A boutique law firm at Hyderabad, constituted as a ‘Partnership Firm’ under the laws of India. The Partners & Associates are registered under the Rolls of ‘Bar Council of India’ and primarily practice out of Hyderabad, Vishakhapatnam, Bangalore and Chen
        </p>
        <Link to="/about" className="learn-more-btn">Learn More</Link>
      </div>

      {/* Practice Areas Section */}
      <div className="practice-areas-section">
        <h2>Our Practice Areas</h2>
        <div className="practice-area-cards">
          <div className="practice-area-card">
            <h3>Corporate Law</h3>
            <p>Expert advice on mergers, acquisitions, and corporate governance.</p>
            <Link to="/practice-areas" className="read-more-btn">Read More</Link>
          </div>
          <div className="practice-area-card">
            <h3>Family Law</h3>
            <p>Guidance on divorce, child custody, and property settlements.</p>
            <Link to="/practice-areas" className="read-more-btn">Read More</Link>
          </div>
          <div className="practice-area-card">
            <h3>Criminal Defense</h3>
            <p>Defending your rights in criminal cases with a strong track record.</p>
            <Link to="/practice-areas" className="read-more-btn">Read More</Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-card">
          <p>"Manisha & Co Advocates helped me navigate a complex corporate dispute. Their professionalism and expertise were invaluable!"</p>
          <p>- John Doe, CEO of XYZ Corp</p>
        </div>
        <div className="testimonial-card">
          <p>"I was able to resolve my family matter smoothly with the support of the legal team at Manisha & Co. Highly recommended!"</p>
          <p>- Sarah Lee, Client</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to get started?</h2>
        <p>Contact us today to schedule a consultation with one of our experienced attorneys.</p>
        <Link to="/contact" className="cta-btn">Get in Touch</Link>
      </div>
    </div>
  );
};

export default Home;
