import React, { useState, useEffect } from "react";
import "../styles/FaceClear.css";
import servicesData from "../data/services.json";
import procedureImage from "../assets/face-care.jpg"; // Фото процедури
import specialistImage from "../assets/specialist.jpg"; // Фото косметолога
import { useNavigate } from "react-router-dom";


const FaceCarePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const service = servicesData.find((s) => s.name === "Догляд за Обличчям");
    if (service) {
      setName(service.name);
      setDescription(service.description);
      setPrice(service.price);
    }
  }, []);
  return (
    <div className="face-clear-container">
      <h3 className="top-clear-face">
        {name ? name : "Завантаження..."}
        <br />
        {description ? description : "Завантаження..."}
      </h3>

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
      <h1>Догляд за обличчям</h1>
      <div className="service-description">
        <h1>Що таке активний догляд за обличчям</h1>
        <h2 className="service-title">Активний догляд за обличчям – секрет здорової шкіри</h2>
        <p>
          Косметолог Марина Соболь запрошує мешканців Павлограду, Тернівки, Першотравенська на процедуру з догляду за обличчям.
          Використовується професійна косметика іспанського бренду Holy Land, Esse, Jean d'Arcel, Jean d'Estrees, Marjolie, Dibi Milano.
        </p>

        <h3>Показання</h3>
        <ul>
          <li>Фотостаріння</li>
          <li>Висипи на шкірі</li>
          <li>Сухість шкіри</li>
          <li>Пігментація</li>
          <li>Зморшки</li>
        </ul>

        <h3>Популярні бренди</h3>
        <ul>
          <li><strong>Holy Land</strong> – Ізраїльська компанія, що пропонує програми для догляду за шкірою обличчя у салоні та домашніх умовах. Є програми для догляду за проблемною шкірою, проти старіння та гіперпігментації.</li>
          <li><strong>Jean d'Arcel</strong> – Комплексні догляди для корекції овалу обличчя, омолодження, зволоження шкіри, вирівнювання тону шкіри та підвищення тонусу.</li>
          <li><strong>Jean d'Estrees</strong> – Французька професійна косметика, що пропонує лінії для очищення шкіри, догляд для жирної та комбінованої шкіри, а також відновлення зрілої шкіри.</li>
          <li><strong>Marjolie</strong> – Французький бренд, що має ефективні препарати для омолоджуючих процедур і сповільнення процесів старіння шкіри.</li>
        </ul>

        <h3>Протипоказання</h3>
        <ul>
          <li>Індивідуальна чутливість до компонентів засобу</li>
          <li>Порізи, рани на шкірі</li>
          <li>Захворювання шкіри: герпес, псоріаз</li>
        </ul>
        <p>
          Не використовуйте засоби догляду за шкірою без попередньої консультації з косметологом. У косметологічному кабінеті Марини Соболь
          спеціаліст підбере відповідну процедуру та надасть рекомендації з догляду та захисту шкіри в домашніх умовах.
        </p>

        <div className="cta-section">
          <p>✨ Запишіться на процедуру активного догляду за обличчям та подаруйте своїй шкірі здоров’я та молодість! ✨</p>
          <button className="book-btn" onClick={() => navigate("/contact")}>
          Записатись на процедуру
        </button>
        </div>
      </div>

    </div>
  );
};

export default FaceCarePage;
