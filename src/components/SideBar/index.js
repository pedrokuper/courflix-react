import React from "react";
import "./style.scss";

class SideBar extends React.Component {
  render() {
    return (
      <nav className="sidebar-container">
        <ul className="sidebar">
          <a href="#inicio">
            <li className="sidebar-elemenet">Inicio</li>
          </a>
          <a href="#series">
            <li className="sidebar-elemenet">Series</li>
          </a>
          <a href="#peliculas">
            <li className="sidebar-elemenet">Películas</li>
          </a>
          <a href="#last-added">
            <li className="sidebar-elemenet">Agregados recientemente</li>
          </a>
        </ul>
      </nav>
    );
  }
}

export default SideBar;
