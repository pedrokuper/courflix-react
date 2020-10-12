import React from "react";
import "./style.scss";

class Button extends React.Component {
  render() {
    return (
      <div  className="hero--buttons">
        <a href="#" className="hero-button" >
          {this.props.title}
        </a>
      </div>
    );
  }
}

export default Button;
