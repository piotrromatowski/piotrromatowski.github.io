import "./styles/App.scss";
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";
import Nav from "./components/Nav";
// import PromotedCars from "./components/PromotedCars";
// import About from "./components/About";
// import Awards from "./components/Awards";
// import Services from "./components/Services";
// import OurCars from "./components/OurCars";
// import Opinions from "./components/Opinions";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Blog from "./components/Blog";
// import Main from "./components/Main";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <main className="page">
          <Switch>
            <Route component={Nav} path="/" exact />
            <Route component={Blog} path="/blog" />
          </Switch>
          {/* <Nav />
          <PromotedCars />
          <About />
          <Awards />
          <Services />
          <OurCars />
          <Opinions />
          <Contact />
          <Footer /> */}
          {/* <Route component={Nav} path="/" exact /> */}
        </main>
      </ScrollToTop>
    </Router>
  );
}

export default App;
