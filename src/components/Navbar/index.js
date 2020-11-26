import React from "react";
import BurgerMenu from "../BurgerMenu";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/courflix-logo.png";
import "./style.scss";

class Navbar extends React.Component {
  render() {
    const { showNav, id } = this.props;
    console.log(window.innerWidth);
    return (
      <div className="navbar-wrapper">
        <Link to="/">
          <div id={id}></div>
          <img
            src={logo}
            className="courflix-logo"
            alt="Logo de Courflix"
          ></img>
        </Link>
        <BurgerMenu />
        {showNav && (
          <nav className="navbar">
            <ul className="navbar-list">
              <a href="#inicio">
                <li className="navbar-link">Inicio</li>
              </a>
              <a href="#series">
                <li className="navbar-link">Series</li>
              </a>
              <li className="navbar-link">Películas</li>
              <a href="#last-added">
                <li className="navbar-link">Agregados recientemente</li>
              </a>
            </ul>
          </nav>
        )}
      </div>
    );
  }
}

export default Navbar;
