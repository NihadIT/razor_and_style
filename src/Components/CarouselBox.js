import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import recordBtn from "../images/gif/recordBtn.gif";

const CarouselBox = ({ slides }) => {
  return (
    <Carousel className="carousel">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="carousel-img" src={slide} alt={`slide_${index}`} />
          <button className="carousel-btn">
            <img src={recordBtn} />
          </button>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBox;
