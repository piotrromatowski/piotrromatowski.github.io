import "../styles/App.scss";
import React from "react";
import Nav from "./Nav";
import PromotedCars from "./PromotedCars";
import About from "./About";
import Awards from "./Awards";
import Services from "./Services";
import OurCars from "./OurCars";
import Opinions from "./Opinions";
import Contact from "./Contact";
import Footer from "./Footer";
import Blog from "./Blog";

function Main() {
  return (
    <>
      <Nav />
      <PromotedCars />
      <About />
      <Awards />
      <Services />
      <OurCars />
      <Opinions />
      <Contact />
      <Footer />
      <div>wtf</div>
    </>
  );
}

export default Main;
