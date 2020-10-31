import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class Card extends React.Component {
  render() {
    const { thumbnail, alt, content, progress } = this.props;
    const contentTitle = content.title.toLowerCase();
    const contentPath = contentTitle.replace(/\s/g, "-");
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
          <div className="progress-container">
            <progress
              className="progress-bar"
              value={progress}
              max="100"
            ></progress>
          </div>
        )}
      </>
    );
  }
}

export default Card;
