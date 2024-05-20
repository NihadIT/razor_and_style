import React, { useState } from "react";
import feed_1 from "../images/feedback/feed_1.jpg";
import feed_2 from "../images/feedback/feed_2.jpg";
import feed_3 from "../images/feedback/feed_3.jpg";
import feed_4 from "../images/feedback/feed_4.jpg";
import feed_5 from "../images/feedback/feed_5.jpg";
import "./Feedback.css";

function Feedback() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFeedbackSubmitted(true);
  };

  return (
    <div className="feedback">
      <div className="content">
        <h2 className="title">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
        <div className="feedback-block">
          <div className="client-feedback">
            <img src={feed_1} />
            <strong>Евгений</strong>
            <span>
              Отличный опыт! Профессиональный подход, уютная атмосфера и
              идеальный результат. Буду рекомендовать всем друзьям!
            </span>
          </div>
          <div className="client-feedback">
            <img src={feed_2} />
            <strong>Александр</strong>
            <span>
              Потрясающий сервис! Очень доволен результатом. Барберы здесь
              просто мастера своего дела. Обязательно вернусь снова.
            </span>
          </div>
          <div className="client-feedback">
            <img src={feed_3} />
            <strong>Никита</strong>
            <span>
              Впечатления выше всяких похвал! Профессиональные барберы,
              великолепная атмосфера и исключительное качество услуг. Это место,
              где каждый мужчина может почувствовать себя вне конкуренции.
              Рекомендую всем!
            </span>
          </div>
          <div className="client-feedback">
            <img src={feed_4} />
            <strong>Анатолий</strong>
            <span>
              Идеальное место для мужчин, которые ценят свой стиль и комфорт.
              Отличный сервис, опытные мастера и уютная атмосфера. Все, что
              нужно для идеальной стрижки и бритья.
            </span>
          </div>
          <div className="client-feedback">
            <img src={feed_5} />
            <strong>Юрий</strong>
            <span>
              Опыт в этом барбершопе был просто потрясающим! Мастера великолепно
              справились с моей стрижкой, создав именно то, что я хотел.
            </span>
          </div>
          <div className="client-feedback">
            {!feedbackSubmitted ? (
              <form onSubmit={handleSubmit}>
                <strong>Оставить отзыв</strong>
                <label htmlFor="feedback-text">Ваш отзыв:</label>
                <textarea
                  id="feedback-text"
                  name="feedback"
                  rows="4"
                  cols="50"
                  placeholder="Напишите ваш отзыв..."
                ></textarea>

                <label htmlFor="feedback-image">Выберите изображение:</label>
                <input
                  type="file"
                  id="feedback-image"
                  name="image"
                  accept="image/*"
                />
                <button type="submit">Отправить</button>
              </form>
            ) : (
              <div className="submission-message">
                Спасибо за ваш отзыв! Наш оператор рассмотрит его в ближайшее время.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
