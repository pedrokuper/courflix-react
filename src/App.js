import React from "react";
import "./App.css";
import content from "./data/content.json";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

import hero from "./data/hero.json";

class App extends React.Component {
  handleContent(type) {
    const getContent = content.filter((category) => {
      if (category.type === type) return category;
    });

    return getContent;
  }
  render() {
    const [first] = hero;

    return (
      <>
        <Navbar />
        <Hero
          hero={first.hero}
          plot={first.plot}
          title={first.title}
          year={first.year}
          duration={first.duration}
          similarity={first.similarity}
        />
        <Carousel title="Series" content={this.handleContent("series")} />
        <Carousel
          title="Seguir viendo contenido de Pedro"
          content={this.handleContent("keepWatching")}
        />
        <Carousel
          title="Agregados recientemente"
          content={this.handleContent("lastAdded")}
        />
      </>
    );
  }
}

export default App;
