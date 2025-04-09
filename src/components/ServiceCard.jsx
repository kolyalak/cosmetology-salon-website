import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

const ServiceCard = ({ name, description, details, image, isRecommended }) => {
  return (
    <div
      className={`service-card `}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="service-content">
        <h3>{name}</h3>
        
          <p>{description}</p>
        
          <Link to={details} className="details-button">Детальніше</Link>
        
      </div>
    </div>

  );
};

export default ServiceCard;
