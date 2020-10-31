import React from "react";
import "./App.css";
import content from "./data/content.json";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

import heroContent from "./data/hero.json";

class App extends React.Component {
  handleContent(type) {
    const getContent = content.filter((category) => {
      if (category.type === type) return category;
    });

    return getContent;
  }
  render() {
    const [firstHero] = heroContent;

    const { hero, plot, title, year, duration, similarity } = firstHero;
    return (
      <>
        <Navbar />
        <Hero
          id="inicio"
          hero={hero}
          plot={plot}
          title={title}
          year={year}
          duration={duration}
          similarity={similarity}
        />
        <Carousel
          title="Series"
          content={this.handleContent("series")}
          id="series"
        />
        <Carousel
          title="Seguir viendo contenido de Pedro"
          content={this.handleContent("keepWatching")}
        />
        <Carousel
          id="last-added"
          title="Agregados recientemente"
          content={this.handleContent("lastAdded")}
        />
      </>
    );
  }
}

export default App;
