import React from "react";
import "./App.css";
import content from "./data/content.json";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import heroContent from "./data/hero.json";

class App extends React.Component {
  handleContent(type) {
    const getContent = content.filter(category => {
      if (category.type === type) return category;
    });

    return getContent;
  }

  render() {
    const [firstHero] = heroContent;

    const { hero, plot, title, year, duration, similarity } = firstHero;
    return (
      <>
        <Navbar showNav id="logo" />
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
          unslick={false}
        />
        <Carousel
          title="Seguir viendo contenido de Pedro"
          content={this.handleContent("keepWatching")}
          unslick={false}
        />
        <Carousel
          id="last-added"
          title="Agregados recientemente"
          content={this.handleContent("lastAdded")}
          unslick={false}
        />
        <Footer />
      </>
    );
  }
}

export default App;
