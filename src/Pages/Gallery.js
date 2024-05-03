import React from "react";
import ImageGallery from "react-image-gallery";
import './Gallery.css';

function Gallery(){
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
        <div className="content">
            <div className="gallery">
            <div className="gallery-container">
                <div className="gallery-container-images">
                <ImageGallery items={images} className="custom-image-gallery" />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Gallery;