// components/Cards/Cards.js

import React from 'react';
import { Link } from 'react-scroll';
import SSCSyllabusCard from '../SSCSyllabusCard/SSCSyllabusCard';
import CBSESyllabusCard from '../CBSESyllabusCard/CBSESyllabusCard';
import TechnologyIntegrationCard from '../TechnologyIntegrationCard/TechnologyIntegrationCard';
import ExamPreparationTipsCard from '../ExamPreparationTipsCard/ExamPreparationTipsCard';
import ExtracurricularActivitiesCard from '../ExtracurricularActivitiesCard/ExtracurricularActivitiesCard';
import './Cards.css';

const Cards = ({ onMenuItemClick }) => {
  const handleGoForward = () => {
    // Navigate to 'piechart' section
    onMenuItemClick('piechart');
  };

  return (
    <div id="cards">
      <h1>About Education!!....</h1>
      <div className="horizontal-cards">
        <SSCSyllabusCard />
        <CBSESyllabusCard />
        <TechnologyIntegrationCard />
        <ExamPreparationTipsCard />
        <ExtracurricularActivitiesCard />
      </div>
      {/* "Go Forward" button to navigate to the PieChart page */}
      <Link to="piechart" smooth={true} duration={500} onClick={handleGoForward}>
        <button className="go-forward-button">Go Forward</button>
      </Link>
    </div>
  );
};

export default Cards;
