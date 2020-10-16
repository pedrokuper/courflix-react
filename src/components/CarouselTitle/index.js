import React from "react";
import "./style.scss";

class CarouselTitle extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title">{this.props.title}</h2>
      </div>
    );
  }
}

export default CarouselTitle;
