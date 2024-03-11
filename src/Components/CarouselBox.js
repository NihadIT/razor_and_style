import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import slide_1 from "../images/slide/slide_1.png";
import slide_2 from "../images/slide/slide_2.png";

const CarouselBox = () => {
    return (
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                className="carousel-img"
                src={slide_1}
                alt="slide_1"
                 />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img"
                src={slide_2}
                alt="slide_2"
                 />
            </Carousel.Item>
        </Carousel>
    )
 }

 export default CarouselBox