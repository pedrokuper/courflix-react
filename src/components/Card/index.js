import React from "react";
import "./style.scss";

class Card extends React.Component {
  render() {
    const { thumbnail, alt, content, progress, seasonData } = this.props;

    const percentageBar = {
      width: `${progress}%`,
      height: "100%",
      backgroundColor: "#C60F0E",
    };

    return (
      <>
        <img
          className="carousel-thumbnail responsive"
          src={thumbnail}
          alt={`${alt} thumnail`}
        />

        {progress && (
          <div className="progress-bar">
            <div style={percentageBar}></div>
          </div>
        )}
        {seasonData && (
          <div className="season-data-container ">
            <h3 className="season-data-title">{content.title}</h3>
            <p className="season-data-description">{content.description}</p>
          </div>
        )}
      </>
    );
  }
}

export default Card;
