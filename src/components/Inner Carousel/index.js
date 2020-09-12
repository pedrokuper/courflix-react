import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./style.scss";
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
      swipeToSlide: true,
      centerMode: false,
      className: "slides",
      lazyLoad: true,
      edgeFriction: 5
    };

    const { content } = this.props;

    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {content.map((content, key) => {
            return (
              <>
                <Link
                  to={`/contenido/${content.name
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                >
                  <img
                    className="carousel-thumbnail"
                    key={key}
                    src={content.thumbnail}
                    alt={content.name + " thumbnail"}
                  />
                </Link>
              </>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default InnerCarousel;
