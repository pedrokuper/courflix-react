import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";

import Card from "../Card";

class InnerCarousel extends React.Component {
  render() {
    const { unslick } = this.props;
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
      mobileFirst: true,

      edgeFriction: 1,
      lazyLoad: "progressive",
      responsive: [
        {
          breakpoint: 1650,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            centerMode: false,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            centerMode: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            edgeFriction: 1,
            infinite: true,
            centerMode: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            centerMode: false,
            draggable: true,
          },
        },
        {
          breakpoint: 460,
          settings: !unslick
            ? {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                draggable: true,
              }
            : "unslick",
        },
        {
          breakpoint: 360,
          settings: !unslick
            ? {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                draggable: true,
              }
            : "unslick",
        },
      ],
    };

    const { content, seasonData } = this.props;

    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {content.map((content, key) => {
            const { thumbnail, title, progress } = content;

            return (
              <div key={key} className="card-wrapper">
                <Link
                  to={`/content/${title.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <Card
                    thumbnail={thumbnail}
                    alt={title}
                    key={key}
                    content={content}
                    progress={progress}
                    seasonData={seasonData}
                  />
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default InnerCarousel;
