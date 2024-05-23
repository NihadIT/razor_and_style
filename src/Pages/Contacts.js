import React from "react";
import "./Contacts.css";
import Map from "../Components/Map";
import ig from "../images/icons/instagram.png";
import tg from "../images/icons/telegram.png";
import wa from "../images/icons/whatsapp.png";

function Contacts() {
  return (
    <div className="contacts">
      <div className="content">
        <h2 className="title">НАШИ КОНТАКТЫ</h2>
        <div className="contacts-info">
          <div className="contact-instagram">
            <a href="https://www.instagram.com/nihad353/">
              <img src={ig} alt="instagram" />
              <span>Instagram</span>
            </a>
          </div>
          <div className="contact-telegram">
            <a href="https://t.me/nihadbabaev">
              <img src={tg} alt="telegram" />
              <span>Telegram</span>
            </a>
          </div>
          <div className="contact-whatsapp">
            <a href="#">
              <img src={wa} alt="whatsapp" />
              <span>Whatsapp</span>
            </a>
          </div>
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
