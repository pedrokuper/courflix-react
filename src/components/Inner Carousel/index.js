import React from "react";
import Slider from "react-slick";
import "./style.scss";
import content from "../../data/content.json";
import "slick-carousel/slick/slick-theme.css";

class InnerCarousel extends React.Component {
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      draggable: true,
      centerMode: true,
      className: "slides",
      lazyLoad: "ondemand",
      edgeFriction: 5
    };
    return (
      <div>
        <Slider {...settings}>
          {content.map((content) => {
            return (
              <div>
                <img
                  src={content.thumbnail}
                  alt={content.name + " thumbnail"}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default InnerCarousel;
