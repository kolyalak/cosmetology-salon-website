import React from 'react';
import services from '../data/services.json';
import { Link } from 'react-router-dom';
import '../styles/ServicesPage.css'

const ServicesPage = () => {
  return (
    <div className='services-page'>
       <h1>Наші послуги</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link to={`${service.id}`}>
              <h3>{service.name}</h3>
            </Link>
            <p>{service.description}</p>
            <p>Ціна: {service.price} грн</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
