import React from 'react';
import './AboutUs.css'; // Assuming you have a separate CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>We are one of the most promising and upcoming Law Firm backed by experience of lawyers having a collective experience of 22 years in the practice area of real estate law and allied practice areas. We are primarily based in Telangana and also provide services across States of Andhra Pradesh, Karnataka, Tamil Nadu and Kerala. We excel in providing services to our clients and accomplish results to their benefit as customer satisfaction is one of the cornerstones of the Firm. We represent and act as consultants to a host of national and international clientele.

Wel would be pleased to provide legal assistance and support to its clients in respect of conducting title due diligence of the property, providing multi-layered legal advice in drafting/vetting commercial contracts and liasioning and negotiation with government and revenue authorities. Our endeavours for securing beneficial results for our client has been one of our fortes and we achieve this by unparalleled combination of legal prowess, deep-rooted understanding of the market modus operandi and relentless hard work.</p>
      </div>

      <div className="about-content">
        {/* Company Information */}
        <div className="about-info">
          <h2>Who We Are</h2>
          <p>
            Manisha & Co Advocates is a law firm committed to providing high-quality legal services
            to individuals and businesses alike. We are passionate about protecting our clients' interests
            and ensuring their success.
          </p>
        </div>

        {/* Our Mission */}
        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver expert legal advice with integrity and professionalism. We aim to be
            trusted legal advisors, helping our clients navigate complex legal issues with confidence.
          </p>
        </div>

        {/* Our Values */}
        <div className="about-values">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity: Upholding the highest standards of ethics and professionalism.</li>
            <li>Client-Centered: Putting our clients' needs at the center of everything we do.</li>
            <li>Innovation: Adapting to new legal challenges with creative solutions.</li>
            <li>Excellence: Striving for the best possible outcomes for our clients.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
