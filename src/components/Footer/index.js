import React from "react";
import "./styles.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-media">
          <span className="icon">
            <FaFacebookSquare />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaYoutube />
          </span>
        </div>
        <div className="footer-items-container">
          <div className="footer-item item-4">
            <span>Audio y subtítulos</span>
            <span>Prensa</span>
            <span>Privacidad</span>
            <span>Contáctanos</span>
          </div>
          <div className="footer-item">
            <span>Audio Descriptivo</span>
            <span>Relaciones con inversionistas</span>
            <span>Avisos legales</span>
          </div>
          <div className="footer-item">
            <span>Centro de ayuda</span>
            <span>Empleo</span>
            <span>Preferencias de cookies</span>
          </div>
          <div className="footer-item">
            <span>Tarjetas de regalo</span>
            <span>Términos de uso</span>
            <span>Información corporativa</span>
          </div>
        </div>
        <a href="" className="footer-link">
          Código de servicio
        </a>
        <p>
          Made with 🐱‍🏍 by
          <a className="footer-personal" href="http://github.com/pedrokuper">
            _pedrokuper
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
