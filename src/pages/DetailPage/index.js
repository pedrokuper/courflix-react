import React from "react";
import Navbar from "../../components/Navbar";
import content from "../../data/content.json";
import Button from "../../components/Button";
import "./style.scss";

class DetailPage extends React.Component {
  state = {
    title: "",
    hero: "",
    plot: "",
    seasons: "",
    similarity: "",
    year: "",
    episodes: [],
    duration: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const findContent = content.find((content) => {
      const contentTitle = content.title.toLowerCase();
      return contentTitle.replace(/\s/g, "-") === id; // Reemplaza los espacios por un '-'.
    });

    const {
      title,
      hero,
      plot,
      seasons,
      similarity,
      year,
      episodes,
      duration,
    } = findContent;

    this.setState({
      title,
      hero,
      plot,
      seasons,
      similarity,
      year,
      episodes,
      duration,
    });
  }

  render() {
    const {
      title,
      hero,
      plot,
      seasons,
      similarity,
      year,
      episodes,
      duration,
    } = this.state;
    const heroImg = {
      backgroundImage: `url(${hero})`,
      backgroundSize: "cover",

      minHeight: "90vh",
    };

    return (
      <>
        <Navbar />
        <section className="content-detail">
          <div style={heroImg} className="hero hero-gradient"></div>
          <div className="content-info">
            <h1 className="title">{title}</h1>
            <span className="info coincidence">{`${similarity}% de coincidencia`}</span>
            <span className="info">{year}</span>
            <span className="info">{duration}</span>
            <span className="info">{`${seasons} temporadas`}</span>
            <div>
              <Button title="Reproducir" />
              <Button title="Mi Lista" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailPage;

/*
    <img src={this.state.img}
      className="breaking-bad-logo"
      alt="Breaking Bad Logo"
    />
    <div class="serie-info">
      <p class="year data">2016</p>
      <p class="rated data">+16</p>
      <p class="duration data">5 temporadas</p>
      <p style={{ marginTop: "220px" }}></p>
    </div>
 */
