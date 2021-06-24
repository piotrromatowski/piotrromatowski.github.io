import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <Navbar />
      <section className="services">
        <div className="subpage-info">
          <h1 className="subpage-title">Usługi</h1>
          <h2 className="subpage-subtitle">
            Usługi stomatologiczne w Mr Dentist
          </h2>
        </div>
        <div className="link-wrapper">
          <Link to="/comprehensive-treatment" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/6812463/pexels-photo-6812463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Leczenie kompleksowe</h2>
              <ul className="link-list">
                <li className="link-subtitle">Indywidualne podejście</li>
                <li className="link-subtitle">
                  Zespół doświadczonych dentystów
                </li>
              </ul>
            </div>
          </Link>
          <Link to="/root-canal-treatment" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/4687360/pexels-photo-4687360.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Leczenie kanałowe</h2>
              <ul className="link-list">
                <li className="link-subtitle">Leczenie pod mikroskopem</li>
                <li className="link-subtitle">Skomplikowane przypadki</li>
              </ul>
            </div>
          </Link>
          <Link to="/dental-surgery" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/5355710/pexels-photo-5355710.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Chirurgia stomatologiczna</h2>
              <ul className="link-list">
                <li className="link-subtitle">Usuwanie zębów (ósemek)</li>
                <li className="link-subtitle">Zabiegi chirurgiczne</li>
              </ul>
            </div>
          </Link>
          <Link to="/prosthodontics" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/5355838/pexels-photo-5355838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Protetyka</h2>
              <ul className="link-list">
                <li className="link-subtitle">Korony zębowe</li>
                <li className="link-subtitle">Mosty, protezy</li>
              </ul>
            </div>
          </Link>
          <Link to="/cosmetic-dentistry" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/5355899/pexels-photo-5355899.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Stomatologia estetyczna</h2>
              <ul className="link-list">
                <li className="link-subtitle">Licówki pełnoceramiczne</li>
                <li className="link-subtitle">Wybielanie zębów</li>
              </ul>
            </div>
          </Link>
          <Link to="/implants" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/4269370/pexels-photo-4269370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Implanty</h2>
              <ul className="link-list">
                <li className="link-subtitle">Uzupełnienie braków zębowych</li>
                <li className="link-subtitle">Sprawdzone materiały</li>
              </ul>
            </div>
          </Link>
          <Link to="/orthodontics" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/6528907/pexels-photo-6528907.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Ortodoncja</h2>
              <ul className="link-list">
                <li className="link-subtitle">Aparaty metalowe</li>
                <li className="link-subtitle">Aparaty estetyczne</li>
              </ul>
            </div>
          </Link>
          <Link to="/conservative-dentistry" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Stomatologia zachowawcza</h2>
              <ul className="link-list">
                <li className="link-subtitle">Estetyczne wypełnienia zębów</li>
                <li className="link-subtitle">Odbudowy zębów</li>
              </ul>
            </div>
          </Link>
          <Link to="/pediatric-dentistry" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Stomatologia dziecięca</h2>
              <ul className="link-list">
                <li className="link-subtitle">
                  Bezstresowe i komfortowe leczenie
                </li>
                <li className="link-subtitle">Wizyty adaptacyjne</li>
              </ul>
            </div>
          </Link>
          <Link to="/dental-x-ray" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/6502162/pexels-photo-6502162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Rentgen zębów</h2>
              <ul className="link-list">
                <li className="link-subtitle">
                  Pantomogram (zdjęcie panoramiczne)
                </li>
                <li className="link-subtitle">Tomografia zębów CBCT</li>
              </ul>
            </div>
          </Link>
          <Link to="/dental-hygiene" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/6690852/pexels-photo-6690852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Higiena zębów</h2>
              <ul className="link-list">
                <li className="link-subtitle">
                  Profesjonalne czyszczenie zębów
                </li>
                <li className="link-subtitle">Piaskowanie, skaling, fluor</li>
              </ul>
            </div>
          </Link>
          <Link to="/periodontology" className="single-link">
            <div className="picture">
              <img
                className="link-photo"
                src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="link-text-wrapper">
              <h2 className="link-title"> Periodontologia</h2>
              <ul className="link-list">
                <li className="link-subtitle">Zabiegi periodontologiczne</li>
                <li className="link-subtitle">Specjalista periodontologii</li>
              </ul>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
