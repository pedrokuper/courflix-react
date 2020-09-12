import React from "react";
import Navbar from "../../components/Navbar";
import content from "../../data/content.json";
import Button from "../../components/Button";
import "./style.scss";

class DetailPage extends React.Component {
  state = {
    desc: "",
    img: "",
    title: ""
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const findContent = content.find((content) => {
      return content.name.toLowerCase().replace(/\s/g, "-") == id;
    });
    this.setState({
      img: findContent.thumbnail,
      desc: findContent.desc,
      title: findContent.name
    });
  }

  render() {
    const { desc, img, title } = this.state;

    return (
      <>
        {/* <Navbar /> */}
        <section className="content-detail">
          <div className="hero">
            <h1>{title}</h1>
          </div>
          <div className="content-info">
            <p>95% de coincidencia</p>
            <p>2016</p>
            <p>+16</p>
            <p>5 temporadas</p>
          </div>
          <Button title="Reproducir" />
          <Button title="Mi Lista" />
        </section>
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
