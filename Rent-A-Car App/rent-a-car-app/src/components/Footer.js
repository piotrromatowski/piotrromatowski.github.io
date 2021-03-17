import React from "react";
import logo from "../img/1300231.png";

function Footer() {
  return (
    <>
      <footer>
        <div>
          <h4>
            Contact Us <span></span>
          </h4>
          <p>Address: 11235 Damn Street, London</p>
          <h4>carrental inc</h4>
          <img src={logo} alt="logo" />
        </div>
        <div className="social-media">
          <ul>
            <li className="instagram">
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="twitter">
              <a href="https://twitter.com/">
                <i className="fab fa-twitter-square"></i>
              </a>
            </li>
            <li className="facebook">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="youtube">
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube-square"></i>
              </a>
            </li>
            <li className="linked">
              <a href="https://www.linkedin.com/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="pinterest">
              <a href="https://pinterest.com/">
                <i className="fab fa-pinterest-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
