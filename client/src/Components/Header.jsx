import React from 'react';
import '../Styles/header.css';

var Header = function () {
  return (
    <div id="header">
      <div id="h2Title">
        <h2>Ratings & Reviews</h2>
      </div>
      <div>
        <button id='header_button'>Write a review</button>
      </div>
    </div>
  );
};

export default Header;
