import React from "react";
import { Link } from "react-router-dom";
import logo from "../pictures/Mr_Dentist.png";
// import Button from "./Button";
// import Dropdown from "./Dropdown";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <section className="home">
        <Navbar />
        {/* <div className="navbar">
          <div className="logo">
            <img src={logo} alt=""></img>
          </div>
          <nav className="nav">
            <ul>
              <li>
                Zespół <i class="fas fa-chevron-down"></i>
              </li>
              <li>
                Usługi <i class="fas fa-chevron-down"></i>
              </li>
              <li>
                Galeria <i class="fas fa-chevron-down"></i>
              </li>
              <li>
                Cennik <i class="fas fa-chevron-down"></i>
              </li>
              <li>
                Zapisy online <i class="fas fa-chevron-down"></i>
              </li>
              <li>
                Kontakt <i class="fas fa-chevron-down"></i>
              </li>
            </ul>
          </nav>
        </div> */}
        <div className="home-picture">
          <img src="" alt=""></img>
        </div>

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
            <button className="btn-visit">Umów wizytę</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
