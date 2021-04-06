import React, { useState } from "react";
import logo from "../img/1300231.png";
import { Link } from "react-router-dom";

import PromotedCars from "./PromotedCars";
import About from "./About";
import Awards from "./Awards";
import Services from "./Services";
import OurCars from "./OurCars";
import Opinions from "./Opinions";
import Contact from "./Contact";
import Footer from "./Footer";
// import Blog from "./Blog";

function Nav() {
  const [isActive, setActive] = useState("false");

  const burgerHandler = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav className="nav">
        <button
          id="burger"
          onClick={burgerHandler}
          type="button"
          className={isActive ? "burger burger-active" : "burger"}
        >
          <i className="fas fa-angle-right"></i>
        </button>
        <ul className="nav-list">
          <ol className="logo">
            <img src={logo} alt="logo" />
          </ol>
          <li className="home">
            <a href="/#home">Home</a>
          </li>
          <li className="about-us">
            <a href="/#about">About Us</a>
          </li>
          <li className="rates">
            <a href="/#rates">Service Rates</a>
          </li>
          <li className="services">
            <a href="/#services">Our Services</a>
          </li>
          <li className="cars">
            <a href="/#cars-prices">Our Cars</a>
          </li>

          <li className="blog">
            <Link to="/blog">
              <a href="#blog">Blog</a>
            </Link>
          </li>

          <li className="contact">
            <a href="/#contact">Contact Us</a>
          </li>
          <li className="search">
            <a href="/">
              <i className="fas fa-search"></i>
            </a>
          </li>
        </ul>
      </nav>
      <PromotedCars />
      <About />
      <Awards />
      <Services />
      <OurCars />
      <Opinions />
      <Contact />
      <Footer />
    </>
  );
}

export default Nav;
