import React, { useState, useEffect } from "react";
import "../styles/FaceClear.css";
import servicesData from "../data/services.json";
import procedureImage from "../assets/face-massage.jpg"; // Фото процедури
import specialistImage from "../assets/specialist.jpg"; // Фото косметолога
import { useNavigate } from "react-router-dom";

const FaceMassagePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const service = servicesData.find((s) => s.name === "Масаж Обличчя");
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
        <h1>Масаж обличчя</h1>
        <h2 className="service-title">Масаж обличчя – секрет природного омолодження</h2>
        <p>
          Наші м’язи потребують постійного тренування, і обличчя – не виняток. Масаж обличчя – це своєрідна пасивна гімнастика, яка стимулює м’язи,
          покращує кровообіг, сприяє виведенню токсинів та лімфи, а також допомагає зберегти молодість і пружність шкіри.
        </p>

        <div className="highlight-box">
          <h3>Що входить у процедуру?</h3>
          <ul>
            <li>Альгінатна маска або термомаска</li>
            <li>Розслаблюючий чайний ритуал</li>
          </ul>
        </div>

        <h3>Кому підходить масаж обличчя?</h3>
        <p>Масаж обличчя рекомендований у будь-якому віці – як для профілактики, так і для корекції певних змін:</p>
        <ul>
          <li>Втрата тонусу, в’ялість шкіри</li>
          <li>Набряки, мішки під очима</li>
          <li>Деформація овалу обличчя</li>
          <li>Вікові зміни обличчя та шиї</li>
        </ul>

        <h3>Які результати дає масаж?</h3>
        <ul>
          <li>Покращення тонусу та кольору шкіри</li>
          <li>Усунення набряклості, темних кіл під очима</li>
          <li>Зменшення носогубних складок, зморшок</li>
          <li>Підтяжка контуру обличчя та підборіддя</li>
        </ul>

        <h3>Як часто потрібно робити масаж?</h3>
        <p>
          Оптимальна кількість процедур залежить від бажаного результату. Рекомендується курс <strong>7-15 сеансів</strong>
          із періодичністю <strong>2-3 рази на тиждень</strong>. Для підтримки ефекту варто проходити курс двічі на рік.
        </p>

        <div className="highlight-box">
          <h3>Як довго триває ефект?</h3>
          <p><strong>Після одного сеансу:</strong> 3-4 дні</p>
          <p><strong>Після курсу:</strong> тривалий омолоджувальний ефект</p>
        </div>

        <h3>Популярні техніки масажу</h3>
        <div className="massage-techniques">
          <div className="technique">
            <h4>Іспанський пластичний масаж</h4>
            <p>Глибоке опрацювання м’язів, покращення кровообігу та лімфодренаж.</p>
          </div>
          <div className="technique">
            <h4>Лімфодренажний масаж "Душі"</h4>
            <p>Позбавлення від зайвої рідини, усунення набряків і темних кіл.</p>
          </div>
          <div className="technique">
            <h4>Бразильський моделюючий масаж "Танець рук"</h4>
            <p>Корекція овалу обличчя, шиї та зони декольте.</p>
          </div>
          <div className="technique">
            <h4>Gym-масаж</h4>
            <p>Глибокий вплив на м’язи для зміцнення та покращення пружності шкіри.</p>
          </div>
          <div className="technique">
            <h4>Французький 3D-моделюючий масаж</h4>
            <p>Профілактика старіння, розгладження зморшок і підвищення тонусу.</p>
          </div>
        </div>

        <div className="cta-section">
          <p>✨ Запишіться на масаж обличчя вже сьогодні та подаруйте своїй шкірі природне сяйво! ✨</p>
          <button className="book-btn" onClick={() => navigate("/contact")}>
          Записатись на процедуру
        </button>
        </div>
      </div>
    </div>
  );
};

export default FaceMassagePage;
