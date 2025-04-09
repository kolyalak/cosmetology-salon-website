import React, { useState, useEffect } from "react";
import "../styles/FaceClear.css";
import servicesData from "../data/services.json";
import procedureImage from "../assets/face-cleaning.jpg"; // Фото процедури
import specialistImage from "../assets/specialist.jpg"; // Фото косметолога
import { useNavigate } from "react-router-dom";

const FaceClear = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const service = servicesData.find((s) => s.name === "Чистка Обличчя");
    if (service) setName(service.name)
    if (service) setDescription(service.description)
    if (service) setPrice(service.price);
  }, []);


  return (
    <div className="face-clear-container">
      <h3 className="top-clear-face"> {name  ? `${name}` : "Завантаження..."}<br/>
        {description ? `${description}` : "Завантаження"}</h3>

      <div className="top-section">
        <img src={procedureImage} alt="Процедура" className="procedure-img" />
        <div className="specialist-info">
          <h3 className="top-clear-face">Процедуру проводить</h3>
          <img src={specialistImage} alt="Косметолог" className="specialist-img" />
          <h3>Маріанна М</h3>
          <p>Косметолог-естетист</p>
          <p>Черкаси, вул. Луценка, 7, салон Еліт</p>
          <p>ПН-ПТ: 09:00 - 18:00</p>
          <button className="book-btn" onClick={() => navigate("/contact")}>
            Записатись на процедуру
          </button>
        </div>
      </div>

      <div className="price-section">
        <h2>Ціна процедури</h2>
        <p>{price ? `${price} грн` : "Завантаження..."}</p>
        <button className="book-btn" onClick={() => navigate("/contact")}>
          Записатись на процедуру
        </button>
      </div>

      <div className="description-section">
        <h2>Про процедуру чистка обличчя</h2>
        <p>Чистка обличчя - це первинне ознайомлення зі шкірою клієнта. <br />
          Процедура дозволяє очистити шкіру від забруднень та покращити її зовнішній вигляд.<br />
          Чистку обличчя проводить косметолог Маріанна М.</p>
        <h3>Показання</h3>
        <ul>
          <li>Чорні цятки, вугрі.</li>
          <li>Жирний блиск.</li>
          <li>Тьмяний або нерівний колір шкіри.</li>
          <li>Пігментація.</li>
          <li>Розширені пори.</li>
          <li>Мімічні зморшки.</li>
        </ul>
        <h3>Етапи проведення процедури</h3>
        <ol>
          <li>Зняття макіяжу.</li>
          <li>Очищення шкіри.</li>
          <li>Нанесення основного засобу очищення.</li>
          <li>Нанесення заспокійливої маски.</li>
          <li>Нанесення захисного крему.</li>
        </ol>
        <h3>Рекомендації після проведення</h3>
        <ul>
          <li>Не засмагати, не відвідувати солярій у перші дні.</li>
          <li>Не відвідувати баню, сауну.</li>
          <li>Не використовувати скраби без консультації косметолога.</li>
        </ul>
        <h3>Протипоказання</h3>
        <ul>
          <li>Псоріаз, дерматити, герпес.</li>
          <li>Алергія на деякі косметичні засоби.</li>
          <li>Онкологічні захворювання.</li>
          <li>Діабет.</li>
          <li>Рани, порізи.</li>
        </ul>
        <button className="book-btn" onClick={() => navigate("/contact")}>
          Записатись на процедуру
        </button>

      </div>
    </div>
  );
};

export default FaceClear;
