import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class Card extends React.Component {
  render() {
    const { thumbnail, alt, content, progress, seasonData } = this.props;
    const contentTitle = content.title.toLowerCase();
    const contentPath = contentTitle.replace(/\s/g, "-");
    const percentageBar = {
      width: `${progress}%`,
      height: "100%",
      backgroundColor: "#C60F0E",
    };
    console.log(this.props);
    return (
      <>
        <Link to={`/content/${contentPath}`}>
          <img
            className="carousel-thumbnail"
            src={thumbnail}
            alt={`${alt} thumnail`}
          />
        </Link>
        {progress && (
          <div className="progress-bar">
            <div style={percentageBar}></div>
          </div>
        )}
        {seasonData && (
          <div className="season-data-container">
            <h3 className="season-data-title">{content.title}</h3>
            <p className="season-data-description">{content.description}</p>
          </div>
        )}
      </>
    );
  }
}

export default Card;
