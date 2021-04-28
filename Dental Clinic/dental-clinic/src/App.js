import "./styles/App.scss";
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";
import Home from "./components/Home";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Prices from "./components/Prices";
import Comprehensive from "./components/services-pages/ComprehensiveTreatment";
import RootCanal from "./components/services-pages/RootCanal";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Team} path="/team" />
            <Route component={Gallery} path="/gallery" />
            <Route component={Prices} path="/prices" />
            <Route component={Comprehensive} path="/comprehensive-treatment" />
            <Route component={RootCanal} path="/root-canal-treatment" />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
