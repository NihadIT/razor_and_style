import React from "react";
import "./Home.css";
import CarouselBox from "../Components/CarouselBox";

function Home() {
  const content = (
    <div className="content">
      <div className="carousel-container">
        <CarouselBox />
      </div>
    </div>
  );

  return <div>{content}</div>;
}

export default Home;
