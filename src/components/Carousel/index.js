import React from "react";
import "./style.scss";
import CarouselTitle from "../CarouselTitle";
import InnerCarousel from "../Inner Carousel";

class Carousel extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="carousel">
        <section className="carouselSection">
          <CarouselTitle title={title} />
          <InnerCarousel content={this.props.content} />
        </section>
      </div>
    );
  }
}

export default Carousel;
