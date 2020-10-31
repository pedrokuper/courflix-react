import React from "react";
import "./style.scss";
import CarouselTitle from "../CarouselTitle";
import InnerCarousel from "../Inner Carousel";

class Carousel extends React.Component {
  render() {
    const { title, id } = this.props;
    return (
      <div className="carousel">
        <div className="nav-point" id={id}>asd</div>
        <section className="carouselSection">
          <CarouselTitle title={title} />
          <InnerCarousel content={this.props.content} />
        </section>
      </div>
    );
  }
}

export default Carousel;
