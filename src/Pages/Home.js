import React from "react";
import "./Home.css";
import CarouselBox from "../Components/CarouselBox";
import slide_1 from "../images/slide/slide_1.png";
import slide_2 from "../images/slide/slide_2.png";
import slide_3 from "../images/slide/slide_3.png";

function Home() {
  const content = (
    <div className="content">
      <div className="carousel-container">
      <CarouselBox slides={[slide_1, slide_2, slide_3]} />
      </div>
    </div>
  );

  return <div>{content}</div>;
}

export default Home;
