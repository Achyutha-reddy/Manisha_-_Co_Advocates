import React from 'react';
import './Teams.css'; // Assuming you have a separate CSS file for styling
import nodp from '../../../assets/nodp.jpg'

const Teams = () => {
  const teamMembers = [
    {
      name: 'Manisha Sharma',
      role: 'Senior Partner',
      bio: 'Manisha is the founder and senior partner at Manisha & Co Advocates. With over 20 years of experience in corporate law, she has represented numerous Fortune 500 companies and has a passion for mentoring young lawyers.',
      image: nodp,
    },
    {
      name: 'Ravi Kumar',
      role: 'Associate Partner',
      bio: 'Ravi specializes in intellectual property and trademark law. His expertise in protecting the rights of innovators and creative professionals has made him a trusted advisor in the field.',
      image: nodp,
    },
    {
      name: 'Ananya Gupta',
      role: 'Legal Counsel',
      bio: 'Ananya focuses on family law and dispute resolution. She is known for her empathetic approach to complex family matters, helping clients navigate sensitive situations with care.',
      image: nodp,
    },
    {
      name: 'Amit Desai',
      role: 'Associate Attorney',
      bio: 'Amit handles criminal defense cases with a strong record of defending clients in high-profile trials. His analytical skills and attention to detail make him a formidable advocate in the courtroom.',
      image: nodp,
    },
    // Add more team members as necessary
  ];

  return (
    <div className="teams-container">
      <div className="teams-header">
        <h1>Meet Our Team</h1>
        <p>Our team of dedicated legal professionals is here to serve your needs. Get to know our experts.</p>
      </div>

      <div className="teams-content">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-member-img" />
            <div className="team-member-info">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
