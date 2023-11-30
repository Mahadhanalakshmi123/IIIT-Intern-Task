// components/Navbar/Navbar.js

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faHome, faAddressCard, faChartPie, faTable, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = ({ onMenuItemClick }) => {
  const [showSections, setShowSections] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  let lastScrollTop = window.scrollY;

  const toggleSections = () => {
    setShowSections(!showSections);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSectionClick = (section) => {
    toggleSections();

    if (section === 'cards') {
      const cardsElement = document.getElementById('cards');
      if (cardsElement) {
        cardsElement.scrollIntoView({ behavior: 'smooth' });
        onMenuItemClick('piechart');
        return;
      }
    }

    onMenuItemClick(section);
  };

  const handleSearch = () => {
    const sections = ['home', 'cards', 'piechart', 'tables', 'forms'];
    const matchingSection = sections.find((sec) =>
      sec.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSection) {
      onMenuItemClick(matchingSection);
    }
  };
  const handleScroll = () => {
    const sections = ['home', 'cards', 'piechart', 'tables', 'forms'];
    let currentSection = 'home';
  
    for (const section of sections) {
      const element = document.getElementById(section);
  
      if (element) {
        const rect = element.getBoundingClientRect();
  
        if (rect.top <= 50 && rect.bottom >= 50) {
          currentSection = section;
          break;
        }
      }
    }
  
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    // Debounce the `onMenuItemClick` function using a timer
    let timerId;
  
    if (scrollTop > lastScrollTop) {
      // Clear the existing timer before setting a new one
      clearTimeout(timerId);
  
      timerId = setTimeout(() => {
        onMenuItemClick(currentSection);
      }, 300); // Set a debounce delay of 300 milliseconds (0.3 seconds)
    }
  
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <Sidebar onClick={toggleSections} />
      <h2 onClick={scrollToTop}>SCHOOL MANAGEMENT SYSTEM</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
      </div>
      <nav className={showSections ? 'show' : ''}>
        <Link to="home" smooth={true} duration={500} onClick={() => handleSectionClick('home')}>
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link
          to="cards"
          smooth={true}
          duration={500}
          onClick={() => handleSectionClick('cards')}
        >
          <FontAwesomeIcon icon={faAddressCard} /> Cards
        </Link>
        <Link
          to="piechart"
          smooth={true}
          duration={500}
          onClick={() => handleSectionClick('piechart')}
        >
          <FontAwesomeIcon icon={faChartPie} /> Pie Chart
        </Link>
        <Link
          to="tables"
          smooth={true}
          duration={500}
          onClick={() => handleSectionClick('tables')}
        >
          <FontAwesomeIcon icon={faTable} /> Tables
        </Link>
        <Link
          to="forms"
          smooth={true}
          duration={500}
          onClick={() => handleSectionClick('forms')}
        >
          <FontAwesomeIcon icon={faEdit} /> Forms
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
