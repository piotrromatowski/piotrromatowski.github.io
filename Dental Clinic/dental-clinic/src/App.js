import "./styles/App.scss";
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Team} path="/team" />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
