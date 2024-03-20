import React from "react";
import "./Barbers.css";
import CarouselBox from "../Components/CarouselBoxWithoutButtons";
import barbers from "../images/slide/barbers.jpg";
import nastya from "../images/slide/nastya.jpg";
import dimash from "../images/slide/dimash.jpg";
import olya from "../images/slide/olya.jpg";
import maks from "../images/slide/maks.jpg";

function Barbers() {
  return (
    <div className="content">
      <div className="barbers">
        <h2 className="container-title">НАШИ БАРБЕРЫ</h2>
        <div className="barbers-container">
          <div className="barbers-container-description">
            <span>
              <span className="text-bold">Наши барберы</span> - это истинные мастера своего ремесла, вдохновленные
              страстью к созданию идеального образа для каждого клиента. С
              глубоким пониманием трендов и индивидуальных особенностей, они
              обеспечивают не только идеальные стрижки и бритье, но и подлинное
              чувство комфорта и доверия у каждого посетителя. Наши барберы -
              это не просто стилисты, это партнеры в вашем пути к
              непревзойденному облику и самовыражению.
            </span>
          </div>
          <div className="barbers-container-slider">
            <CarouselBox
              slides={[
                {
                  image: barbers,
                  title: "Razor & Style",
                  description:
                    "Наши барберы помогут вам не просто преобразиться, но и обрести уверенность в своем облике",
                },
                {
                  image: nastya,
                  title: "Анастасия, 26 лет.",
                  description:
                    "Эта барберша - воплощение элегантности и стиля. Ее необычайное чутье за красотой помогает каждому клиенту найти свой уникальный образ и выглядеть безупречно.",
                },
                {
                  image: dimash,
                  title: "Димаш, 25 лет.",
                  description:
                    "Этот барбер всегда готов выслушать и понять потребности каждого клиента. Его индивидуальный подход и профессионализм делают каждое посещение салона приятным и комфортным.",
                },
                {
                  image: olya,
                  title: "Ольга, 26 лет.",
                  description:
                    "Эта барберша - воплощение точности и аккуратности. Ее внимательный подход к деталям и стремление к идеальному результату делают каждую стрижку непревзойденной.",
                },
                {
                  image: maks,
                  title: "Максим, 28 лет.",
                  description:
                    "Этот барбер - настоящий стилист с характером. Его смелые идеи и нестандартный подход к работе помогают клиентам раскрыть свою индивидуальность и выглядеть модно и смело.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barbers;
