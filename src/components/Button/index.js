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
    const { title } = this.props;
    return (
      <div className="hero--buttons">
        <button onClick={() => this.handleClick()} className="hero-button">
          {title}
        </button>
      </div>
    );
  }
}

export default Button;
