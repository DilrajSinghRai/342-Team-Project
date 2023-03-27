import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Facilities from "../Facilities";
import Home from '../Home';
import history from './history';
import landing from '../Landing'
import ReviewFacility from "../ReviewFacility";
import Filter from "../Filter";


export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (

    <Router history={history}>
      <Switch>
      <Route path="/" exact component={landing} />
      <Route path="/facilities" exact component={Facilities} />
      <Route path="/ReviewFacility" exact component={ReviewFacility} />
      <Route path="/Filter" exact component={Filter} />
      </Switch>
    </Router>
  );
}