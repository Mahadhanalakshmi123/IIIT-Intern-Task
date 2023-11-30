// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';
import PieChart from './components/PieChart/PieChart';
import Tables from './components/Tables/Tables';
import Forms from './components/Forms/Forms';
import Home from './components/Home/Home';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleMenuItemClick = (menuItem) => {
    setCurrentSection(menuItem);
  };

  return (
    <div className="app-container">
      <Navbar onMenuItemClick={handleMenuItemClick} />
      <div className="card-container">
        {currentSection === 'home' && <Home onMenuItemClick={handleMenuItemClick} />}
        {currentSection === 'cards' && <Cards onMenuItemClick={handleMenuItemClick} />}
        {currentSection === 'piechart' && <PieChart onMenuItemClick={handleMenuItemClick} />}
        {currentSection === 'tables' && <Tables onMenuItemClick={handleMenuItemClick} />}
        {currentSection === 'forms' && <Forms onMenuItemClick={handleMenuItemClick} />} {/* Pass onMenuItemClick to Forms */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
