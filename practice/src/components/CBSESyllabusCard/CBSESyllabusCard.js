// components/CBSESyllabusCard/CBSESyllabusCard.js

import React from 'react';
import './CBSESyllabusCard.css';

const CBSESyllabusCard = () => {
  return (
    <div className="syllabus-card">
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.uhCocZ_oUes5Gvewv5NKJQAAAA&pid=Api&P=0&h=180"
        alt="CBSE Syllabus"
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h3>CBSE Syllabus Overview</h3>
      <p>
        The CBSE syllabus aims to provide a balanced and holistic education.
        Key Subjects: Mathematics, Physics, Chemistry, Biology, English.
      </p>
      <a href="https://leverageedu.com/discover/school-education/top-10-cbse-schools-in-india/" target="_blank" rel="noopener noreferrer" className="know-more-link">
        Know More....
      </a>
    </div>
  );
}

export default CBSESyllabusCard;