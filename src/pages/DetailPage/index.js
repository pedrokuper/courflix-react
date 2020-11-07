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

    return (
      <main>
        <Navbar />
        <section>
          <Hero
            showNav={false}
            title={title}
            hero={hero}
            plot={plot}
            similarity={similarity}
            year={year}
            duration={duration}
            seasons={seasons}
            socialIcons={true}
          />
        </section>
        {episodes && <Carousel content={episodes} seasonData={true} />}
      </main>
    );
  }
}

export default DetailPage;
