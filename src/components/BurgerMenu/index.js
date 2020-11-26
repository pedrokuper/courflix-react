import React from "react";
import "./style.scss";

class BurgerMenu extends React.Component {
  render() {
    return (
      <div className="burger">
        <div className="burger__lines"></div>
        <div className="burger__lines"></div>
        <div className="burger__lines"></div>
      </div>
    );
  }
}

export default BurgerMenu;
