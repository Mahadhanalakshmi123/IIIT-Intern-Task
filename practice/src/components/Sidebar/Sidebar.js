// components/Sidebar/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHome, faAddressCard, faChartPie, faTable, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import './Sidebar.css';

library.add(faBars, faHome, faAddressCard, faChartPie, faTable, faFileAlt);

const Sidebar = ({ onClick }) => {
  return (
    <div className="sidebar">
      <FontAwesomeIcon icon={faBars} onClick={onClick} />
      <nav>
        <Link to="home" smooth={true} duration={500}><FontAwesomeIcon icon={faHome} /> <strong>Home</strong></Link>
        <Link to="cards" smooth={true} duration={500}><FontAwesomeIcon icon={faAddressCard} /> <strong>Cards</strong></Link>
        <Link to="piechart" smooth={true} duration={500}><FontAwesomeIcon icon={faChartPie} /> <strong>Pie Chart</strong></Link>
        <Link to="tables" smooth={true} duration={500}><FontAwesomeIcon icon={faTable} /> <strong>Tables</strong></Link>
        <Link to="forms" smooth={true} duration={500}><FontAwesomeIcon icon={faFileAlt} /> <strong>Forms</strong></Link>
      </nav>
    </div>
  );
}

export default Sidebar;
