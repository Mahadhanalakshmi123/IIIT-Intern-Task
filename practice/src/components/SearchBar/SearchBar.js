// components/SearchBar/SearchBar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="navbar-right">
      <input
        type="text"
        placeholder="Search here"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
    </div>
  );
}

export default SearchBar;