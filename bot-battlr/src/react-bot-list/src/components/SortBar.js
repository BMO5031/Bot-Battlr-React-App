import React from 'react';
import './SortBar.css';

const SortBar = ({ sortBy }) => {
  return (
    <div className="sort-bar">
      <p>Sort By:</p>
      <button onClick={() => sortBy('health')}>Health</button>
      <button onClick={() => sortBy('damage')}>Damage</button>
      <button onClick={() => sortBy('armor')}>Armor</button>
    </div>
  );
};

export default SortBar;
