import React from "react";
import "./style.scss";
import InnerCarousel from "../Inner Carousel";

class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel">
        <h2 className="title">Series</h2>
        <InnerCarousel />
      </div>
    );
  }
}

export default Carousel;
