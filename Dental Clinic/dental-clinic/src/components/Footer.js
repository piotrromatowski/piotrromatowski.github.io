import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-social">
          <h3 className="footer-title">Social Media</h3>
          <ul className="footer-list">
            <a href="https://www.facebook.com/" className="footer-link">
              <li className="footer-item">Facebook</li>
            </a>
            <a href="https://www.instagram.com/" className="footer-link">
              <li className="footer-item">Instagram</li>
            </a>
          </ul>
        </div>
        <div className="footer-services">
          <h3 className="footer-title">Usługi</h3>
          <ul className="footer-list">
            <Link to="/comprehensive-treatment" className="footer-link">
              <li className="footer-item">Leczenie kompleksowe</li>
            </Link>
            <Link to="/root-canal-treatment" className="footer-link">
              <li className="footer-item">Leczenie kanałowe</li>
            </Link>
            <Link to="/dental-surgery" className="footer-link">
              <li className="footer-item">Chirurgia stomatologiczna</li>
            </Link>
            <Link to="/prosthodontics" className="footer-link">
              <li className="footer-item">Protetyka</li>
            </Link>
            <Link to="/cosmetic-dentistry" className="footer-link">
              <li className="footer-item">Stomatologia estetyczna</li>
            </Link>
            <Link to="/implants" className="footer-link">
              <li className="footer-item">Implanty</li>
            </Link>
            <Link to="/orthodontics" className="footer-link">
              <li className="footer-item">Ortodoncja</li>
            </Link>
            <Link to="/conservative-dentistry" className="footer-link">
              <li className="footer-item">Stomatologia zachowawcza</li>
            </Link>
            <Link to="/pediatric-dentistry" className="footer-link">
              <li className="footer-item">Stomatologia dziecięca</li>
            </Link>
            <Link to="/dental-x-ray" className="footer-link">
              <li className="footer-item">Rentgen zębów</li>
            </Link>
            <Link to="/dental-hygiene" className="footer-link">
              <li className="footer-item">Higiena zębów</li>
            </Link>
            <Link to="/periodontology" className="footer-link">
              <li className="footer-item">Periodontologia</li>
            </Link>
          </ul>
        </div>
        <div className="footer-about">
          <h3 className="footer-title">O nas</h3>
          <ul className="footer-list">
            <Link to="/team" className="footer-link">
              <li className="footer-item">Zespół</li>
            </Link>
            <Link to="/prices" className="footer-link">
              <li className="footer-item">Cennik</li>
            </Link>
            <Link to="/gallery" className="footer-link">
              <li className="footer-item">Galeria</li>
            </Link>
            <Link to="/contact-us" className="footer-link">
              <li className="footer-item">Kontakt</li>
            </Link>
            <Link to="/sign-up" className="footer-link">
              <li className="footer-item">Zapisz się na wizytę</li>
            </Link>
            <Link to="/cookies" className="footer-link">
              <li className="footer-item">Polityka prywatności & cookies</li>
            </Link>
          </ul>
        </div>
        <div className="footer-contact">
          <h3 className="footer-title">Kontakt</h3>
          <ul className="footer-list">
            <div className="footer-link">
              <li className="footer-item">
                Adres: ul. Koszykowa 80D, Warszawa
              </li>
              <li className="footer-item">Tel.: 22 255 58 70</li>
              <li className="footer-item">Kom.: 505 505 505</li>
              <li className="footer-item">Email: contact@mrdentist.com</li>
              <li className="footer-item">
                Godziny otwarcia: pn. - pt. 8 - 20 sb. 9 - 14
              </li>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Footer;
