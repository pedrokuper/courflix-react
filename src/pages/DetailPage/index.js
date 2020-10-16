import React from "react";
import Navbar from "../../components/Navbar";
import content from "../../data/content.json";
import Button from "../../components/Button";
import "./style.scss";
import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel";

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
          <Hero
            title={title}
            hero={hero}
            plot={plot}
            similarity={similarity}
            year={year}
            duration={duration}
            seasons={seasons}
          />
        </section>
        {episodes && <Carousel content={episodes} />}
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
