import React from "react";
import "./style.scss";
import Button from "../Button";
import Icons from "../Icons";

class Hero extends React.Component {
  handleCallback2() {
    this.props.handleCallback2();
  }

  render() {
    const {
      title,
      hero,
      plot,
      similarity,
      year,
      duration,
      seasons,
    } = this.props;

    const heroImg = {
      backgroundImage: `linear-gradient(-45deg, rgba(0, 0, 0, 0.0001) 25%, #000000 100%),url(${hero})`,
    };

    const seasonLength = seasons > 1 ? "temporadas" : "temporada";
    const { socialIcons } = this.props;

    return (
      <div className="hero" style={heroImg}>
        <section id="inicio">
          <div className="hero__content">
            <h1 className="hero__title">{title}</h1>

            <div className="content__info">
              <span className="info coincidence">{`${similarity}% de coincidencia`}</span>
              <span className="info">{year}</span>
              <span className="info">{duration}</span>
              {seasons > 0 && (
                <span className="info">{`${seasons} ${seasonLength}`}</span>
              )}
            </div>
            <div className="interaction-container">
              <div className="button-container">
                <Button title="Reproducir" />
                <Button
                  handleCallback={() => this.handleCallback2()}
                  title="+ Mi Lista"
                />
              </div>
              <div className="icons-container">{socialIcons && <Icons />}</div>
            </div>
            <p className="hero--description">{plot}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
