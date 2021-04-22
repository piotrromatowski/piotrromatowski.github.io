import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pictures/Mr_Dentist.png";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [clickMenu, setClickMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClickMenu = () => setClickMenu(!clickMenu);
  const closeMobileMenu = () => setClickMenu(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt=""></img>
        </Link>
        <div className="menu-icon" onClick={handleClickMenu}>
          <i className={clickMenu ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clickMenu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Usługi <i className="fas fa-caret-down"></i>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
              Zespół
            </Link>
            <li className="nav-item">
              <Link
                to="/prices"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Cennik
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Galeria
              </Link>
            </li>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Kontakt
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Umów wizytę
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
