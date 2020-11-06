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
      backgroundImage: `url(${hero})`,
      backgroundSize: "cover",
      minHeight: "100vh",
      backgroundColor: "#000000",
    };

    const seasonLength = seasons > 1 ? "temporadas" : "temporada";
    const { socialIcons } = this.props;

    return (
      <div className="container" style={heroImg}>
        <section className="hero" id="inicio">
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

            <div className="icons-container">
              <Button title="Reproducir" />
              <Button
                handleCallback={() => this.handleCallback2()}
                title="+ Mi Lista"
              />
              {socialIcons && <Icons />}
            </div>
            <p className="hero--description">{plot}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
