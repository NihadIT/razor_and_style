import React from "react";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";
import room_1 from "../images/gallery/room_1.jpg";
import room_2 from "../images/gallery/room_2.jpg";

function Gallery() {
  const images = [
    {
      original: "http://surl.li/scphn",
    },
    {
      original: "http://surl.li/scpdm",
    },
    {
      original: "http://surl.li/scpel",
    },
    {
      original: "http://surl.li/scpex",
    },
    {
      original: "http://surl.li/scpff",
    },
    {
      original: "http://surl.li/scpfk",
    },
  ];

  return (
    <div className="gallery">
      <div className="content">
        <div className="gallery-container">
          <div className="gallery-container-images">
            <ImageGallery items={images} className="custom-image-gallery" />
          </div>
        </div>
        <div className="barber-rooms">
        <strong>
        Наше здание - не просто место, где вы получаете качественные услуги по уходу за собой, это настоящий оазис стиля и комфорта. 
          </strong>
          <img src={room_1} alt="room_1" />
          <img src={room_2} alt="room_2" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
