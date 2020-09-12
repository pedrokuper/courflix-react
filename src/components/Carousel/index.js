import React from "react";
import "./style.scss";
import InnerCarousel from "../Inner Carousel";
import content from "../../data/content.json";

class Carousel extends React.Component {
  render() {
    const series = content.filter((category) => {
      if (category.type === "series") return category;
    });
    const keepWatching = content.filter((category) => {
      if (category.type === "keepWatching") return category;
    });
    const lastAdded = content.filter((category) => {
      if (category.type === "lastAdded") return category;
    });

    return (
      <div className="carousel">
        <section className="carouselSection">
          <h2 className="title">Series</h2>
          <InnerCarousel content={series} />
        </section>
        <section className="carouselSection">
          <h2 className="title">Seguir viendo contenido de Pedro</h2>
          <InnerCarousel content={keepWatching} />
        </section>
        <section className="carouselSection">
          <h2 className="title">Agregados recientemente</h2>
          <InnerCarousel content={lastAdded} />
        </section>
      </div>
    );
  }
}

export default Carousel;
