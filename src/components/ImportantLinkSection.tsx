import React from 'react';
import './ImportantLinkSection.css'; // Import CSS file

const ImportantLinkSection = () => {
  return (
    <div className="banner-container">
      <div className="cards-container">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="card">
            <span>Card {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantLinkSection;
