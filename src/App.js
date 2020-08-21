import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Pay from "./components/Pay";
import Offer from "./components/Offer";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/intro">
          <Intro />
        </Route>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/offer">
          <Offer />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
