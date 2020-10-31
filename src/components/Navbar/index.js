import React from "react";
import "./style.scss";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <Link to="/">
          <img
            src={logo}
            className="courflix-logo"
            alt="Logo de Courflix"
          ></img>
        </Link>
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
            <Link to="/mylist">
              <li className="navbar-link">Mi lista</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
