import React from "react";
import { useState } from "react";
import "./Header.css";
import logo from "../images/logo.png";
import pastel from "../images/icons/pastel.png";
import phone from "../images/icons/phone.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return <>
    <div className="header">
      <div className="container">
        <div className="header-top">
          <a href="/" className="logo-link">
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
        <ul className={`nav ${isOpen ? 'show' : ''}`} id="navbarToggleExternalContent">
            <li className="nav-item"><a href="/services" className="nav-link">Услуги и цены</a></li>
            <li className="nav-item"><a href="/barbers" className="nav-link">Барберы</a></li>
            <li className="nav-item"><a href="/gallery" className="nav-link">Фотогалерея</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">О нас</a></li>
            <li className="nav-item"><a href="/feedback" className="nav-link">Отзывы</a></li>
            <li className="nav-item"><a href="/contacts" className="nav-link">Контакты</a></li>
          </ul>

          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
              <span className="navbar-toggler-icon"></span>
            </button>
         </nav>

        </div>
      </div>
    </div>
</>
};

export default Header;
