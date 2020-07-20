import React from "react";
import "./style.scss";
import Button from "../Button";

class Hero extends React.Component {


  render() {
    
    return (
      <div className="hero--wrapper">
        <section className="hero--section" id="inicio">
          <div className="hero--content">
            <h2 className="hero--subtitle">Original de COURFLIX</h2>
            <h1 className="hero--title">BLACK SUMMER</h1>
            <h3 className="hero--mobile">2019 - 16+ - 1 temporada</h3>
            <div className="hero--buttons">
              <Button title="Reproducir" />
              <Button  title='Mi Lista'/>
            </div>

            <div className="hero--description">
              <p className="hero--text">Ve la temporada 1</p>
              <p className="hero--plot">
                Una ansiada luna de miel. Un asesinato terrible.Varios
                sospechosos. Si sobreviven, serán unas vacaciones de ensueño.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
