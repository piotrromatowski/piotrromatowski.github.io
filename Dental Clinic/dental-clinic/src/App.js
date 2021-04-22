import "./styles/App.scss";
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";
import Home from "./components/Home";
import Team from "./components/Team";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Team} path="/team" />
            <Route component={Gallery} path="/gallery" />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
