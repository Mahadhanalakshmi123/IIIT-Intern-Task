// components/ExtracurricularActivitiesCard/ExtracurricularActivitiesCard.js
import React from 'react';
import './ExtracurricularActivitiesCard.css';

const ExtracurricularActivitiesCard = () => {
  return (
    <div className="activities-card">
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.B0JnErM9R9v1P_cLse-LawAAAA&pid=Api&P=0&h=180"
        alt="Extracurricular Activity"
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h3>Extracurricular Activities</h3>
      <p>
        Explore a variety of extracurricular activities including clubs, sports teams,
        and special interest groups. Join us in fostering creativity, teamwork, and skill development.
      </p>
      <a href="https://surejob.in/extra-curricular-activities.html" target="_blank" rel="noopener noreferrer" className="know-more-link">
        Know More....
      </a>
    </div>
  );
}

export default ExtracurricularActivitiesCard;