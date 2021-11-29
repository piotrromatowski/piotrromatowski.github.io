import React, { useEffect, useState } from "react";
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
import UserAccount from "./UserAccount";
import UserReservation from "./UserReservation";

function Nav(isClientLoggedIn) {
  const [isActive, setActive] = useState("false");

  const [carResults, setCarResults] = useState([]);

  console.log({ ...isClientLoggedIn.isClientLoggedIn });
  const { logged, login } = isClientLoggedIn.isClientLoggedIn;
  console.log({ login });

  useEffect(() => {
    fetchCar();

    async function fetchCar() {
      const res = await fetch(
        "https://car-rental-rest-api.herokuapp.com/cars/"
      );
      const data = await res.json();
      // console.log(res.json());
      setCarResults(data.results);
    }
  }, []);

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
              Blog
              {/* Blog<a href="#blog">Blog</a> */}
            </Link>
          </li>

          <li className="contact">
            <a href="/#contact">Contact Us</a>
          </li>
          <li className="search">
            <Link to="/account">{login !== "" ? login : `Log In`}</Link>
          </li>
        </ul>
      </nav>
      <PromotedCars carResults={carResults} />
      <About />
      <Awards />
      <Services carResults={carResults} />
      <OurCars carResults={carResults} login={login} />
      <Opinions />
      <Contact />
      <Footer />
    </>
  );
}

export default Nav;
