import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DetailPage from "./pages/DetailPage";
import MyList from "./pages/MyList";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/content/:id" component={DetailPage} />
    <Route exact path="/mylist" component={MyList} />
  </Router>,
  document.getElementById("root")
);
