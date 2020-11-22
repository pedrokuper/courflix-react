import React from "react";
import "./style.scss";
import CarouselTitle from "../CarouselTitle";
import InnerCarousel from "../Inner Carousel";

class Carousel extends React.Component {
  render() {
    console.log(this.props)
    const { title, id, progress, content, seasonData, unslick } = this.props;
    return (
      <div className="carousel">
        <div className="nav-point" id={id}></div>
        <section className="carouselSection">
          <CarouselTitle title={title} />
          <InnerCarousel
            content={content}
            progress={progress}
            seasonData={seasonData}
            unslick={unslick}
          />
        </section>
      </div>
    );
  }
}

export default Carousel;
