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

  handleSocial(state) {
    if (state === "like") {
      this.setState({
        dislike: "",
        like: state,
      });
    } else if (state === "dislike") {
      this.setState({
        like: "",
        dislike: state,
      });
    }
  }

  render() {
    const { like, dislike } = this.state;
    return (
      <div className="icons-wrapper ">
        <div
          onClick={() => this.handleSocial("like")}
          className={`icon-circle ${like}`}
        >
          <AiOutlineLike className={`icon`} />
        </div>
        <div
          onClick={() => this.handleSocial("dislike")}
          className={`icon-circle ${dislike}`}
        >
          <AiOutlineDislike className={`icon ${dislike}`} />
        </div>
      </div>
    );
  }
}

export default Icons;
