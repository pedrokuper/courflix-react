import React from "react";
import { slide as Menu } from "react-burger-menu";
import SideBar from "../SideBar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/courflix-logo.png";
import "./style.scss";

class Navbar extends React.Component {
  state = { menuOpen: false };
  closeMenu() {
    console.log("padre");
    this.setState({ menuOpen: false });
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    const { showNav, id } = this.props;
    return (
      <div className="navbar-wrapper">
        <div className="align">
          <Link to="/">
            <img src={logo} className="courflix-logo" alt="Logo de Courflix" />
          </Link>
        </div>
        {showNav && (
          <nav className="navbar">
            <Menu
              isOpen={this.state.menuOpen}
              onStateChange={state => this.handleStateChange(state)}
            >
              <SideBar handleCallback={() => this.closeMenu()} />
            </Menu>
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
