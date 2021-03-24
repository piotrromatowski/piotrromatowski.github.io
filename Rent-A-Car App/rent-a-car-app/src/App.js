import "./styles/App.scss";
import React, { useState } from "react";
import Nav from "./components/Nav";
import PromotedCars from "./components/PromotedCars";
import About from "./components/About";
import Awards from "./components/Awards";
import Services from "./components/Services";
import OurCars from "./components/OurCars";
import Opinions from "./components/Opinions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="page">
        <Nav />
        <PromotedCars />
        <About />
        <Awards />
        <Services />
        <OurCars />
        <Opinions />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
