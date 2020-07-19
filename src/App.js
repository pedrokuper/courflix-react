import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

class App extends React.Component {
  render() {
    const button = {
      play: "Reproducir",
      miList: "Mi lista"
    };

    return (
      <div>
        <Navbar />
        <Hero buttons={button} />
      </div>
    );
  }
}

export default App;
