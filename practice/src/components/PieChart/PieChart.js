// components/PieChart/PieChart.js

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from 'react-scroll';
import './PieChart.css';

const PieChart = ({ onMenuItemClick }) => {
  // Data for SSC School Rating vs CBSE School Rating
  const schoolRatingData = {
    labels: ['SSC School Rating', 'CBSE School Rating'],
    datasets: [
      {
        data: [60, 40], // Example percentages, adjust these values accordingly
        backgroundColor: ['#4CAF50', '#2196F3'],
        hoverBackgroundColor: ['#43A047', '#1565C0'],
      },
    ],
  };

  // Data for Studies vs Extracurricular Activities
  const activitiesData = {
    labels: ['Studies', 'Extracurricular Activities'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  // Data for Students' Performance in SSC Schools
  const sscPerformanceData = {
    labels: ['Intelligent Students', 'Average Students', 'Below Average Students'],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['#4CAF50', '#FFC107', '#FF5722'],
        hoverBackgroundColor: ['#43A047', '#FFA000', '#E64A19'],
      },
    ],
  };

  // Data for Students' Performance in CBSE Schools
  const cbsePerformanceData = {
    labels: ['Intelligent Students', 'Average Students', 'Below Average Students'],
    datasets: [
      {
        data: [35, 40, 25],
        backgroundColor: ['#4CAF50', '#FFC107', '#FF5722'],
        hoverBackgroundColor: ['#43A047', '#FFA000', '#E64A19'],
      },
    ],
  };

  const handleGoForward = () => {
    // Navigate to 'tables' section
    onMenuItemClick('tables');
  };

  return (
    <div className="piechart-page">
      <h1 style={{ textAlign: 'center' }}>Pie Chart Page</h1>
      <div id="piechart">
        {/* SSC School Rating vs CBSE School Rating */}
        <div className="chart-container">
          <h3>SSC School Rating vs CBSE School Rating (India)</h3>
          <Doughnut data={schoolRatingData} width={200} height={200} />
        </div>

        {/* Studies vs Extracurricular Activities */}
        <div className="chart-container">
          <h3>Studies vs Extracurricular Activities</h3>
          <Doughnut data={activitiesData} width={200} height={200} />
        </div>

        {/* Performance of Students in SSC Schools */}
        <div className="chart-container">
          <h3>Performance of Students in SSC Schools</h3>
          <Doughnut data={sscPerformanceData} width={200} height={200} />
        </div>

        {/* Performance of Students in CBSE Schools */}
        <div className="chart-container">
          <h3>Performance of Students in CBSE Schools</h3>
          <Doughnut data={cbsePerformanceData} width={200} height={200} />
        </div>

        {/* "Go Forward" button to navigate to the Tables page */}
        <Link to="tables" smooth={true} duration={500} onClick={handleGoForward}>
          <button className="go-forward-button">Go Forward</button>
        </Link>
      </div>
    </div>
  );
};

export default PieChart;
