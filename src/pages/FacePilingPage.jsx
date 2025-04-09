import React, { useState, useEffect } from "react";
import "../styles/FaceClear.css";
import servicesData from "../data/services.json";
import procedureImage from "../assets/face-piling.jpg"; // Фото процедури
import specialistImage from "../assets/specialist.jpg"; // Фото косметолога
import { useNavigate } from "react-router-dom";

const FacePilingPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const service = servicesData.find((s) => s.name === "Пілінг Обличчя");
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

      <div className="service-description">
        <h1>Що таке пілінг</h1>
        <h2 className="service-title">Пілінг – секрет омолодження шкіри</h2>
        <p>
          Пілінг - це популярна косметична процедура, в результаті якої злущується ороговілий шар епідермісу та регенеруються молоді клітини.
          Процедура підходить чоловікам та жінкам для покращення та омолодження шкіри.
        </p>

        <div className="highlight-box">
          <h3>Що входить у процедуру?</h3>
          <ul>
            <li>Альгінатна маска або термомаска</li>
            <li>Розслаблюючий чайний ритуал</li>
          </ul>
        </div>

        <h3>Кому підходить пілінг?</h3>
        <p>Пілінг рекомендований у будь-якому віці для корекції таких змін:</p>
        <ul>
          <li>Розширені пори</li>
          <li>Тьмяний колір обличчя</li>
          <li>Акне</li>
          <li>Пігментація</li>
          <li>Зморшки, вікові зміни</li>
          <li>Сильний птоз</li>
        </ul>

        <h3>Які результати дає пілінг?</h3>
        <ul>
          <li>Покращення кольору та рельєфу шкіри</li>
          <li>Звуження пор</li>
          <li>Розгладження зморшок</li>
          <li>Підвищення пружності шкіри завдяки виробленню колагену</li>
        </ul>

        <h3>Як часто потрібно робити пілінг?</h3>
        <p>
          Рекомендується курс <strong>7-15 сеансів</strong> із періодичністю <strong>2-3 рази на тиждень</strong>. Для підтримки результату варто проходити курс двічі на рік.
        </p>

        <div className="highlight-box">
          <h3>Як довго триває ефект?</h3>
          <p><strong>Після одного сеансу:</strong> 3-4 дні</p>
          <p><strong>Після курсу:</strong> тривалий омолоджувальний ефект</p>
        </div>

        <h3>Популярні види пілінгу:</h3>
        <ul className="peeling-techniques">
          <li className="technique">
            <h4>Поверхневий пілінг</h4>
            <p>М’яке очищення шкіри, підходить для будь-якого типу шкіри.</p>
          </li>
          <li className="technique">
            <h4>Поверхнево-серединний пілінг</h4>
            <p>Для боротьби з пігментацією та дрібними зморшками.</p>
          </li>
          <li className="technique">
            <h4>Глибокий пілінг</h4>
            <p>Корекція глибоких зморшок і помітних вікових змін.</p>
          </li>
        </ul>

        <div className="cta-section">
          <p>✨ Запишіться на пілінг обличчя та отримайте природне омолодження шкіри! ✨</p>
          <button className="book-btn" onClick={() => navigate("/contact")}>Записатися</button>
        </div>
      </div>

    </div>
  );
};

export default FacePilingPage;
