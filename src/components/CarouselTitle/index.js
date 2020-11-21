import React from "react";
import "./style.scss";

class CarouselTitle extends React.Component {
  render() {
    return <h2 className="title">{this.props.title}</h2>;
  }
}

export default CarouselTitle;
