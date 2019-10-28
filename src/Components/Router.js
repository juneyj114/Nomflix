import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/" component={Home} />
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </Router>
);
