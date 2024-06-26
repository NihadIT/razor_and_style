import React from "react";
import "./Home.css";
import CarouselBox from "../Components/CarouselBox";
import slide_1 from "../images/slide/slide_1.png";
import slide_2 from "../images/slide/slide_2.png";
import slide_3 from "../images/slide/slide_3.png";
import hair from "../images/icons/hair.png";
import style from "../images/icons/style.png";

function Home() {
  const content = (
    <div className="home">
      <div className="content">
        <div className="carousel-container">
          <CarouselBox slides={[slide_1, slide_2, slide_3]} />
        </div>
        <div className="description">
          <div className="hair-block">
            <img src={hair} alt="hair" />
            <strong>
              Наши барберы и стилисты обладают мастерством и творческим
              подходом, чтобы преобразить вашу прическу в идеальный образ.
            </strong>
          </div>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Mj7KARIRji4?si=FJRWwumNGrWnKeP_"
              title="YouTube barbershop video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="style-block">
            <img src={style} alt="style" />
            <strong>
              Быстро. Качественно. Стильно. Наш барбершоп - ваш идеальный выбор
              для непревзойденного облика.
            </strong>
          </div>
        </div>
      </div>
    </div>
  );

  return <div>{content}</div>;
}

export default Home;
