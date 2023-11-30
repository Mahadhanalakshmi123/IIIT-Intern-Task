// components/Home/Home.js

import React from 'react';
import { Link } from 'react-scroll';
import './Home.css';

const Home = ({ onMenuItemClick }) => {
  const schoolIconUrl =
    'https://media.istockphoto.com/vectors/happy-school-children-in-front-of-school-vector-id1190553411?k=6&m=1190553411&s=612x612&w=0&h=fjaV2w5gWIafzUjF-w4pVvz1yN34l9IIT-f4QJztfrw=';

  const handleGoForward = () => {
    onMenuItemClick('cards');
  };

  return (
    <div className="home-background">
      <div className="home-container">
        <div className="left-section">
          <img
            className="logo-image"
            src="https://cloudware.ng/wp-content/uploads/2019/07/School-Management-System.jpg"
            alt="Logo"
          />
        </div>
        <div className="right-section">
          <h1 className="cursive-heading">
            <strong>Welcome!!...Students</strong>
            <img
              className="children-icon"
              src={schoolIconUrl}
              alt="Children Icon"
            />
          </h1>
          <div>
            <p>
              <strong>Welcome to our School Management System. This system provides a comprehensive solution
              for managing various aspects of a school, including student information, classes, and
              examination details.</strong>
            </p>
            <h2><strong>SSC and CBSE</strong></h2>
            <p>
              <strong>We offer education under both the SSCS (State Secondary Certification) and
              CBSE (Central Board of Secondary Education) curriculums. Our schools provide a nurturing
              environment for students to excel academically and personally.</strong>
            </p>

            

            <p>
              <strong>Explore the possibilities with our School Management System and embark on a journey towards efficient school administration and enhanced educational experiences.</strong>
            </p>

            {/* Link to scroll to the "Cards" section */}
            <Link to="cards" smooth={true} duration={500} onClick={() => onMenuItemClick('cards')}>
              <button className="go-forward-button" onClick={handleGoForward}>Go Forward</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
