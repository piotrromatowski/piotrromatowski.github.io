import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HomeSlider from "./HomeSlider";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <section className="home">
        <Navbar />

        <div className="main">
          <div className="custom-shape-divider-top-1618502493">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="main-text-container">
          <div className="main-text"></div>
          <div className="text">
            <h1>PEŁNA OPIEKA STOMATOLOGICZNA </h1>
            <p>
              Nasza klinika stomatologiczna w Warszawie gwarantuje Państwu pełną
              opiekę stomatologiczną najwyższej jakości z zachowaniem
              najwyższych standardów europejskich.
            </p>

            <Link to="/sign-up">
              <button className="btn-visit">Umów wizytę</button>
            </Link>
          </div>
        </div>
      </section>
      <HomeSlider />
      <Footer />
    </>
  );
}

export default Home;
