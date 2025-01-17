import React, { useState } from 'react';
import './Contact.css'; // Create a separate CSS file for styling
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or save to database)
    alert('Form submitted!');
  };

  return (
    <div className="contact-container">
      {/* Join Us Button at the top */}
      <div className="join-us-container">
        <Link to="/joinus" className="join-us-btn">
          JOIN US
        </Link>
      </div>

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with Manisha & Co Advocates. We're here to help.</p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Our Office</h2>
          <address>
            <p>MANISHA REDDY (B.A, LL.M)</p>
            <p>Dhobipet(V), Shankerpally(M)</p>
            <p>Ranga Reddy dist. , Telangana, 501203</p>
            <p>Email: manishareddy.adv@gmail.com </p>
            <p>Phone: +91 7093215302</p>
          </address>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
