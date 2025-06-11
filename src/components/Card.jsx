import React from 'react';

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="view-button">Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
