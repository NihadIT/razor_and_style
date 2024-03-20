import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselBoxWithoutButtons = ({ slides }) => {
  return (
    <Carousel className="carousel">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="carousel-img" src={slide.image} alt={`slide_${index}`} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBoxWithoutButtons;
