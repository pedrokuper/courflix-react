import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

class Icons extends React.Component {
  state = {
    like: "",
    dislike: "",
  };

  //TODO  La función que hace que los botones se pinten de rojo o verde cuando se da like, hay que refactorizarla para que funcione en una sola.

  handleLike() {
    const { like } = this.state;

    if (!like) {
      this.setState({
        like: "like",
        dislike: "",
      });
    } else {
      this.setState({
        like: "",
      });
    }
  }
  //TODO  La función que hace que los botones se pinten de rojo o verde cuando se da like, hay que refactorizarla para que funcione en una sola.
  handleDislike() {
    const { dislike } = this.state;
    if (!dislike) {
      this.setState({
        dislike: "dislike",
        like: "",
      });
    } else {
      this.setState({
        dislike: "",
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="icons-wrapper ">
        <div
          onClick={() => this.handleLike()}
          className={`icon-circle ${this.state.like}`}
        >
          <AiOutlineLike className={`icon`} />
        </div>
        <div
          onClick={() => this.handleDislike()}
          className={`icon-circle ${this.state.dislike}`}
        >
          <AiOutlineDislike className={`icon ${this.state.dislike}`} />
        </div>
      </div>
    );
  }
}

export default Icons;
