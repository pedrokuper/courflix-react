import React from "react";
import Slider from "react-slick";
import "./style.scss";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";

class InnerCarousel extends React.Component {
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      draggable: false,
      swipeToSlide: true,
      centerMode: false,
      className: "slides",
      lazyLoad: true,
      edgeFriction: 5,
    };

    const { content } = this.props;

    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {content.map((content, key) => {
            return (
              <>
                <Card
                  thumbnail={content.thumbnail}
                  alt={content.title}
                  key={key}
                  content={content}
                  progress="nada"
                />
              </>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default InnerCarousel;
