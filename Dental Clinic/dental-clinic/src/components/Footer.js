import React from "react";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-social">
          <h3 className="footer-title">Social Media</h3>
          <ul className="footer-list">
            <li className="footer-item">Facebook</li>
            <li className="footer-item">Instagram</li>
          </ul>
        </div>
        <div className="footer-services">
          <h3 className="footer-title">Usługi</h3>
          <ul className="footer-list">
            <li className="footer-item">Leczenie kompleksowe</li>
            <li className="footer-item">Leczenie kanałowe</li>
            <li className="footer-item">Chirurgia stomatologiczna</li>
            <li className="footer-item">Protetyka</li>
            <li className="footer-item">Stomatologia estetyczna</li>
            <li className="footer-item">Implanty</li>
            <li className="footer-item">Ortodoncja</li>
            <li className="footer-item">Stomatologia zachowawcza</li>
            <li className="footer-item">Stomatologia dziecięca</li>
            <li className="footer-item">Rentgen zębów</li>
            <li className="footer-item">Higiena zębów</li>
            <li className="footer-item">Periodontologia</li>
          </ul>
        </div>
        <div className="footer-about">
          <h3 className="footer-title">O nas</h3>
          <ul className="footer-list">
            <li className="footer-item">Zespół</li>
            <li className="footer-item">Cennik</li>
            <li className="footer-item">Galeria</li>
            <li className="footer-item">Kontakt</li>
            <li className="footer-item">Zapisz się na wizytę</li>
            <li className="footer-item">Polityka prywatności & cookies</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3 className="footer-title">Kontakt</h3>
          <ul className="footer-list">
            <li className="footer-item">Adres: ul. Koszykowa 80D, Warszawa</li>
            <li className="footer-item">Tel.: 22 255 58 70</li>
            <li className="footer-item">Kom.: 505 505 505</li>
            <li className="footer-item">Email: contact@mrdentist.com</li>
            <li className="footer-item">
              Godziny otwarcia: pn. - pt. 8 - 20 sb. 9 - 14
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Footer;
