// components/SSCSyllabusCard/SSCSyllabusCard.js

import React from 'react';
import './SSCSyllabusCard.css';

const SSCSyllabusCard = () => {
  const sscImportanceLink = 'https://example.com/ssc-importance'; // Replace with the actual URL

  return (
    <div className="syllabus-card">
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.IgmUttOkh8l9t3WQFyPqKwAAAA&pid=Api&P=0&h=180"
        alt="SSC Syllabus"
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h3>SSC Syllabus Overview</h3>
      <p>
        The SSC syllabus is designed to provide a comprehensive education covering various subjects.
        Key Subjects: Mathematics, Science, Social Studies, English, Hindi.
      </p>
      <a href="https://blog.oureducation.in/top-state-wise-state-board-schools-in-india/" target="_blank" rel="noopener noreferrer" className="know-more-link">
        Know More....
      </a>
    </div>
  );
}

export default SSCSyllabusCard;
