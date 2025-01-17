import React, { useState } from 'react';
import './Join.css'; // Assuming you have a separate CSS file for styling
// import { Link } from 'react-router-dom';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save to database, send email, etc.)
    alert('Application submitted successfully!');
  };

  return (
    <div className="join-container">
      <div className="join-header">
        <h1>Join Us at Manisha & Co Advocates</h1>
        <p>We're looking for talented individuals to join our growing team. Apply now!</p>
      </div>

      <div className="join-content">
        {/* Join Us Information */}
        <div className="join-info">
          <h2>Why Join Us?</h2>
          <p>
            At Manisha & Co Advocates, we are committed to fostering a supportive work environment where
            creativity and professionalism are highly valued. We believe in offering opportunities for growth
            and learning, making it an ideal place to develop your legal career.
          </p>
        </div>

        {/* Join Form */}
        <div className="join-form">
          <h2>Apply Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
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
              <label htmlFor="resume">Upload Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
