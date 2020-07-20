import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
        <a href="#" className="hero-button play">
          {this.props.title}
        </a>
      </div>
    );
  }
}

export default Button;
