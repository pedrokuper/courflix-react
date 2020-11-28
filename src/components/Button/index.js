import React from "react";
import "./style.scss";

class Button extends React.Component {
  render() {
    const { title, color } = this.props;
    return (
      <div className={`hero--buttons`}>
        <button className={`hero-button ${color}`}>{title}</button>
      </div>
    );
  }
}

export default Button;
