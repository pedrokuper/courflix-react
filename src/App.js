import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Carousel />
      </>
    );
  }
}

export default App;
