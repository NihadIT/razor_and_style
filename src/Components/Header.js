import React from "react";
import "./Header.css";
import logo from "../images/logo.png";
import pastel from "../images/icons/pastel.png";
import phone from "../images/icons/phone.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-top">
          <a href="#" className="logo-link">
            <img src={logo} className="logo-img" alt="logo" />
          </a>
          <div className="info">
            <div className="address">
              <img src={pastel} alt="Pastel" />
              <span>Баку</span>
              <span>Oktay Shabanov 108</span>
            </div>
            <div className="contact">
              <img src={phone} alt="Phone" />
              <span>+994 50 572 44 29</span>
              <span>по Баку и БО</span>
            </div>
          </div>
        </div>
        <div className="navbar">
          <ul className="nav">
            <li className="nav-item"><a href="#" className="nav-link">Услуги и цены</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Барберы</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Фотогалерея</a></li>
            <li className="nav-item"><a href="#" className="nav-link">О нас</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Отзывы</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Контакты</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
