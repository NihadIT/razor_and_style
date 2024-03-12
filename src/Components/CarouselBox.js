import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide_1 from "../images/slide/slide_1.png";
import slide_2 from "../images/slide/slide_2.png";
import slide_3 from "../images/slide/slide_3.png";
import recordBtn from "../images/gif/recordBtn.gif";

const CarouselBox = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="carousel-img" src={slide_1} alt="slide_1" />
        <button className="carousel-btn">
          <img src={recordBtn} />
        </button>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={slide_2} alt="slide_2" />
        <button className="carousel-btn">
          <img src={recordBtn} />
        </button>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={slide_3} alt="slide_3" />
        <button className="carousel-btn">
          <img src={recordBtn} />
        </button>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBox;
