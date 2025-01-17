import React from 'react';
import './Teams.css'; // Assuming you have a separate CSS file for styling
import nodp from '../../../assets/nodp.jpg'

const Teams = () => {
  const teamMembers = [
    {
      name: 'MANISHA REDDY',
      role: 'B.A, LL.M',
      bio: '',
      image: nodp,
    },
    {
      name: 'Ravi Kumar',
      role: 'Associate Partner',
      bio: '',
      image: nodp,
    },
    {
      name: 'Ananya Gupta',
      role: 'Legal Counsel',
      bio: '',
      image: nodp,
    },
    {
      name: 'Amit Desai',
      role: 'Associate Attorney',
      bio: '',
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
