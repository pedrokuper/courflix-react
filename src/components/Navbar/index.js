import React from 'react';

class Navbar extends React.Component {
  render() {
    return(

      <div>
      <span>Logo de Courflix</span>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Series</li>
            <li>Películas</li>
            <li>Agregados recientemente</li>
            <li>Mi lista</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;