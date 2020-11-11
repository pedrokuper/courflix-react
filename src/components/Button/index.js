import React from "react";
import "./style.scss";

class Button extends React.Component {
  // TODO Ver si se puede mejorar
  handleClick() {
    if (this.props.title === "+ Mi Lista") {
      this.props.handleCallback();
    }
  }

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
