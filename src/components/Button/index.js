import React from "react";
import "./style.scss";

class Button extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="hero--buttons">
        <a href="" className="hero-button">
          {title}
        </a>
      </div>
    );
  }
}

export default Button;
