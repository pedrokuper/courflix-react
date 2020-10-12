import React from "react";
import "./style.scss";
import InnerCarousel from "../Inner Carousel";
import content from "../../data/content.json";

class Carousel extends React.Component {

  
  handleContent(type) {

    const getContent = content.filter((category) => {
      if(category.type === type) return category
      console.log(category)
    })
    return getContent
    
  }

  render() {
  
    return (
      <div className="carousel">
        <section className="carouselSection">
          <h2 className="title">Series</h2>
          <InnerCarousel content={ this.handleContent('series')} />
        </section>
        <section className="carouselSection">
          <h2 className="title">Seguir viendo contenido de Pedro</h2>
          <InnerCarousel content={ this.handleContent('keepWatching')} />
        </section>
        <section className="carouselSection">
          <h2 className="title">Agregados recientemente</h2>
          <InnerCarousel content={this.handleContent('lastAdded')} />
        </section>
      </div>
    );
  }
}

export default Carousel;



