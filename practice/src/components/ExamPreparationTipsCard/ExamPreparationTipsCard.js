  // components/ExamPreparationTipsCard/ExamPreparationTipsCard.js

  import React from 'react';
  import './ExamPreparationTipsCard.css';
  
  const ExamPreparationTipsCard = () => {
    return (
      <div className="exam-tips-card">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.N1U4WGtYx1MyX-PU53stQgHaE7&pid=Api&P=0&h=180"
          alt="Exam Preparation Tips"
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <h3>Exam Preparation Tips</h3>
        <p>
          Get ready for SSC and CBSE exams with our helpful tips and strategies.
          Manage your time effectively, follow a recommended study schedule, and learn stress-relief techniques
          to excel in your exams.
        </p>
        <a href="https://blog.teachmint.com/exam-preparation/" target="_blank" rel="noopener noreferrer" className="know-more-link">
        Know More....
      </a>
      </div>
    );
  }
  
  export default ExamPreparationTipsCard;