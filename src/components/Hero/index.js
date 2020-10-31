import React from "react";
import "./style.scss";
import Button from "../Button";

class Hero extends React.Component {
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

    const temporadas = seasons > 1 ? "temporadas" : "temporada";

    return (
      <div className="container" style={heroImg}>
        <section className="hero" id="inicio">
          <div className="hero__content">
            <h2 className="hero__title">{title}</h2>

            <div className="content__info">
              <span className="info coincidence">{`${similarity}% de coincidencia`}</span>
              <span className="info">{year}</span>
              <span className="info">{duration}</span>
              {seasons > 0 && (
                <span className="info">{`${seasons} ${temporadas}`}</span>
              )}
            </div>

            <div>
              <Button title="Reproducir" />
              <Button title="Mi Lista" />
            </div>
            <p className="hero--description">{plot}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
