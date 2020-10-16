import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import hero from "./data/hero.json";

class App extends React.Component {
  render() {
    const [first] = hero;

    return (
      <>
        <Navbar />
        <Hero hero={first.hero} plot={first.plot} title={first.title} />
        <Carousel />
      </>
    );
  }
}

export default App;
