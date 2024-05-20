import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import recordBtn from "../images/gif/recordBtn.gif";

const CarouselBox = ({ slides }) => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phone, setPhone] = useState("");

  const handleButtonClick = () => {
    setShowForm(true);
    setFormSubmitted(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена");
    setFormSubmitted(true);
    setShowForm(false);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <Carousel className="carousel">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img className="carousel-img" src={slide} alt={`slide_${index}`} />
            <button className="carousel-btn" onClick={handleButtonClick}>
              <img src={recordBtn} alt="Записаться" />
            </button>
          </Carousel.Item>
        ))}
      </Carousel>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <button className="close-btn" onClick={handleCloseForm}>
              ×
            </button>
            <form onSubmit={handleSubmit}>
              <label>
                Имя:
                <input type="text" name="name" required />
              </label>
              <label>
                Номер телефона:
                <PhoneInput
                  country={"ru"}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                />
              </label>
              <label>
                Время записи:
                <input type="datetime-local" name="appointmentTime" required />
              </label>
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      )}

      {formSubmitted && (
        <div className="confirmation-message">
          Оператор рассмотрит ваши данные и свяжется с вами.
        </div>
      )}
    </div>
  );
};

export default CarouselBox;
