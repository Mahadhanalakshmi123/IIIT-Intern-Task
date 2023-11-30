  // components/TechnologyIntegrationCard/TechnologyIntegrationCard.js

  import React from 'react';
  import './TechnologyIntegrationCard.css';
  
  const TechnologyIntegrationCard = () => {
    return (
      <div className="tech-card">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.CBWT9LeuMLsT8SySu6xsgwHaEK&pid=Api&P=0&h=180"
          alt="Technology Integration"
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <h3>Technology Integration</h3>
        <p>
          Explore how technology is seamlessly integrated into the learning process at our school.
          We leverage computers, smartboards, and cutting-edge educational software to enhance
          the educational experience for students.
        </p>
        <a href="https://edtechbooks.org/lidtfoundations/tech_integration_in_schools" target="_blank" rel="noopener noreferrer" className="know-more-link">
        Know More....
      </a>
      </div>
    );
  }
  
  export default TechnologyIntegrationCard;