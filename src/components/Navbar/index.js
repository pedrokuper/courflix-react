import React from "react";
import "./style.scss";
import logo from "../../assets/logo/logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <img src={logo} className="courflix-logo" alt="Logo de Courflix"></img>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-link">Inicio</li>
            <li className="navbar-link">Series</li>
            <li className="navbar-link">Películas</li>
            <li className="navbar-link">Agregados recientemente</li>
            <li className="navbar-link">Mi lista</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
