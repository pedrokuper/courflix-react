import React from "react";
import "./style.scss";

class SideBar extends React.Component {
  handleMenu() {
    this.props.handleCallback();
  }
  render() {
    return (
      <nav className="sidebar-container">
        <ul className="sidebar">
          <a href="#inicio">
            <li onClick={() => this.handleMenu()} className="sidebar-elemenet">
              Inicio
            </li>
          </a>
          <a href="#series">
            <li onClick={() => this.handleMenu()} className="sidebar-elemenet">
              Series
            </li>
          </a>
          <a href="#peliculas">
            <li onClick={() => this.handleMenu()} className="sidebar-elemenet">
              Películas
            </li>
          </a>
          <a href="#last-added">
            <li onClick={() => this.handleMenu()} className="sidebar-elemenet">
              Agregados recientemente
            </li>
          </a>
        </ul>
      </nav>
    );
  }
}

export default SideBar;
