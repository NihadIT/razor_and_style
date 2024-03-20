import React from "react";
import "./Services.css";
import barber_img from "../images/slide/service_hair.png";

function Services() {
  const content = (
    <div className="content">
      <div className="services">
        <div className="services-container">
          <h2 className="container-title">УСЛУГИ БАРБЕРШОПА</h2>
          <div className="service-main service-haircut">
            <div className="service-header">
              <h3>Мужские стрижки</h3>
              <strong>Высшего качества</strong>
            </div>
            <div className="service-description">
              Профессиональные мужские стрижки, воплощающие индивидуальный стиль
              каждого клиента с учетом их предпочтений и особенностей внешности.
            </div>
            <div className="service-footer">
              <div className="service-button">
                <a href="#">Всё о стрижках</a>
              </div>
              <div className="service-price">
                <strong>От 15 AZN</strong>
              </div>
            </div>
          </div>
          <div className="service-main service-beard">
            <div className="service-header">
              <h3>Стрижка усов и бороды</h3>
              <strong>Наша специализация</strong>
            </div>
            <div className="service-description">
              Идеальные контуры: наши мастера создадут идеальную форму усов и
              бороды, придавая вашему облику уверенный и стильный вид.
            </div>
            <div className="service-footer">
              <div className="service-button">
                <a href="#">Усы и борода</a>
              </div>
              <div className="service-price">
                <strong>От 10 AZN</strong>
              </div>
            </div>
          </div>
          <div className="barber-img-center">
            <img src={barber_img} />
          </div>
          <div className="service-main service-shaving">
            <div className="service-header">
              <h3>Бритьё</h3>
              <strong>Бороды и головы</strong>
            </div>
            <div className="service-description">
              Наши мастера владеют искусством бритья, обеспечивая гладкость
              бороды и головы, придавая вашему облику неповторимый шарм и
              ухоженность.
            </div>
            <div className="service-footer">
              <div className="service-button">
                <a href="#">Услуги бритья</a>
              </div>
              <div className="service-price">
                <strong>От 7 AZN</strong>
              </div>
            </div>
          </div>
          <div className="service-main service-spa">
            <div className="service-header">
              <h3>Барбер–SPA</h3>
              <strong>Комплексный уход</strong>
            </div>
            <div className="service-description">
              Барбер-СПА предлагает комплексный уход за кожей, массаж головы и
              другое, чтобы вы почувствовали себя максимально ухоженными и
              расслабленными.
            </div>
            <div className="service-footer">
              <div className="service-button">
                <a href="#">Coming soon</a>
              </div>
              <div className="service-price">
                <strong>От 18 AZN</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <div>{content}</div>;
}

export default Services;
