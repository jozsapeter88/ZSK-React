import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "@stripe/stripe-js";
import "./style.css";
import Home from "./views/home";
import NotFound from "./views/not-found";
import Success from "./views/success";
import Cancel from "./views/cancel";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Success} exact path="/success" />
        <Route component={Cancel} exact path="/cancel" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
