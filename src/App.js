import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Test from "./components/Test";
import Home from "./components/Home";
import Header from "./components/Header";

import World from "./components/World";
import India from "./components/India";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <India />
          </Route>
          <Route path="/World">
            <World />
          </Route>

          <Route path="/Ajax">
            <Test />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
