import React from "react";
import ServiceCard from "../components/ServiceCard";
import "../styles/HomePage.css";
import procedureImage from "../assets/face-cleaning.jpg";
import massageImage from "../assets/face-massage.jpg";
import careImage from "../assets/face-care.jpg";
import peelingImage from "../assets/face-piling.jpg";
import aboutImage from "../assets/about.jpg"
import { Link } from "react-router-dom";

const HomePage = () => {
  const recommendedService = {
    name: "Чистка обличчя",
    description: "Рекомендована процедура для здорової шкіри обличчя.",
    details: "face-clear",
  };

  const otherServices = [
    { name: "Масаж обличчя", details: "/face-massage", image: massageImage },
    { name: "Чистка обличчя", details: "face-clear", image: procedureImage },
    { name: "Догляд за обличчям", details: "/face-care", image: careImage },
    { name: "Пілінг обличчя", details: "/face-piling", image: peelingImage },
  ];

  return (
    <div className="homepage">
      <section className="recommended-service">
        <div className="overlay">
          <h2>Рекомендована процедура</h2>
          <div className="service-content">
            <h2>{recommendedService.name}</h2>
            <p>{recommendedService.description}</p>
            <Link to={recommendedService.details} className="details-button">Детальніше</Link>
          </div>
        </div>
      </section>


      <section className="all-services">
        <h2 className="services_care">Послуги:</h2>
        <div className="services-grid">
          {otherServices.map((service, index) => (
            <ServiceCard key={index} name={service.name} details={service.details} image={service.image} />
          ))}
        </div>
      </section>

      <section className="about-center">
        <div className="container">
          <h1>Косметологічний кабінет "Маріанна"</h1>
          <p>Ми пропонуємо послуги косметолога.</p>
            <p> У нашому косметологічному кабінеті Ви зможете покращити зовнішній вигляд шкіри обличчя:</p>
          <ul>
            <li>Омолодити</li>
            <li>Підтягнути</li>
            <li>Розгладити зморшки</li>
          </ul>
          <p>Вже після перших процедур клієнт побачить результат: свіжий вигляд обличчя, сяюча здорова шкіра.</p>
          <p>Приділіть час собі та своєму організму. Підберіть необхідну для себе процедуру на нашому сайті.</p>
          <p><strong>📍 Черкаси, вул. Луценка 7</strong></p>
          <a href="/contact" className="button">Дізнатися більше</a>
        </div>
        <img src={aboutImage} alt="Косметологічний кабінет" />
      </section>

    </div>
  );
};

export default HomePage;


// // const faceMassageService = [
// //   { name: 'Масаж обличчя', details: '/service/2' },
// // ]
// // const pilingFaceService = [
// //   { name: 'Пілінг обличчя', details: '/service/4' },
// // ]
// // const faceCareService = [
// //   { name: 'Догляд за обличчям', details: '/service/5' },
// // ];
//  {/* <section className='all-services'>
//       <h2>Послуги</h2>
//       <ServiceCard name={faceMassageService.name} ></ServiceCard>
//       <ServiceCard name={faceCareService.name}></ServiceCard>

//     </section> */}