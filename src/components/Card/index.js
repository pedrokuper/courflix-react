import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class Card extends React.Component {
  render() {
    const { thumbnail, alt, content, progress } = this.props;
    const contentTitle = content.title.toLowerCase();
    const contentPath = contentTitle.replace(/\s/g, "-");
    const percentageBar = {
      width: `${progress}%`,
      height: "100%",
      backgroundColor: "#C60F0E",
    };
    console.log(percentageBar);
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
      </>
    );
  }
}

export default Card;
