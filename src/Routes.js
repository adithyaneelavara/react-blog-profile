import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./about";

export default () =>
  <Switch>
    <Route path="/" exact component={About} />
  </Switch>;