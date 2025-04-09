import React, { useState,  } from 'react';
import '../styles/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('contactFormData');
    return savedData ? JSON.parse(savedData) : { name: '', phone: '', procedure: '', callbackTime: '' };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    localStorage.setItem('contactFormData', JSON.stringify(updatedData)); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', phone: '', procedure: '', callbackTime: '' }); 
    localStorage.removeItem('contactFormData'); 
  };

  return (
    <div className="contactPage">
      <div className="contactInfo">
        <div className="contactItem">
          <h2>Телефон</h2>
          <a href="tel:+38 063 119 75 06" className="link">+38 (063) 119-75-06</a>
        </div>
        <div className="contactItem">
          <h2>Адреса</h2>
          <p className="link">м. Черкаси, вул. Луценка 7</p>
        </div>
      </div>

      <div className="formAndMap">
        <div className="formContainer">
          <form onSubmit={handleSubmit} className="form">
            <h1>Записатися на процедуру</h1>
            <input
              type="text"
              name="name"
              placeholder="Ваше ім'я"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Ваш номер телефону"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="procedure"
              placeholder="Назва процедури"
              value={formData.procedure}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="callbackTime"
              placeholder="Час для зворотного дзвінка"
              value={formData.callbackTime}
              onChange={handleChange}
              required
              className="input"
            />
            <button type="submit" className="submitButton">Записатися</button>
          </form>
        </div>

        <div className="mapContainer">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d648.7934398654925!2d32.03773342854395!3d49.42452889820596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b8a4de0a901%3A0x7c8a62ad7b89071d!2z0YPQuy4g0JvRg9GG0LXQvdC60L4sIDcsINCn0LXRgNC60LDRgdGB0YssINCn0LXRgNC60LDRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgMTgwMDc!5e0!3m2!1sru!2shu!4v1738335686821!5m2!1sru!2shu"
            style={{ width: '100%', height: '100%' }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
