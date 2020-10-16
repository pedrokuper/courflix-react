import React from "react";
import "./style.scss";
import Button from "../Button";

class Hero extends React.Component {
  render() {
    const heroImg = {
      backgroundImage: `url(${this.props.hero})`,
      backgroundSize: "cover",
      maxHeight: "95vh",
    };

    
    return (
      <div className="hero--wrapper" style={heroImg}>
        <section className="hero--section" id="inicio">
          <div className="hero--content">
            <h1 className="hero--title">{this.props.title}</h1>
            <Button title="Reproducir" />
            <Button title="Mi Lista" />
            <div className="hero--description">
              <p className="hero--plot">{this.props.plot}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
