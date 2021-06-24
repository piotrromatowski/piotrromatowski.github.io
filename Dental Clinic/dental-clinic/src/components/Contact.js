import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="contact-map">
          <iframe
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.02741542761!2d21.00314311161419!3d52.22322543477548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc9345f075c9%3A0x12a78682f1dc6f23!2sKoszykowa%2C%20Warszawa!5e0!3m2!1sen!2spl!4v1621438233551!5m2!1sen!2spl"
            allowfullscreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
        <div className="contact-data">
          <div className="contact-address">
            <h2 className="contact-data-title">Skontaktuj się z nami</h2>
            <p className="data">
              <i className="fas fa-map-marker"></i>ul. Koszykowa 80D, Warszawa
            </p>
            <p className="data">
              <i className="fas fa-phone-alt"></i>tel. 22 255 58 70
            </p>
            <p className="data">
              <i className="fas fa-mobile"></i>kom. 505 505 505
            </p>
            <p className="data">
              <i className="fas fa-at"></i>contact@mrdentist.com
            </p>
            <h3 className="account">Masz konto? Zapisz się online!</h3>
            <button className="sign-in">Zapisy online</button>
          </div>
          <div className="data-hours">
            <h2 className="contact-data-title">Godziny otwarcia</h2>
            <p className="data-week">
              <i className="far fa-clock"></i>Poniedziałek - Piątek 8-20
            </p>
            <p className="data-weekend">
              <i className="far fa-clock"></i>Sobota 9-14
            </p>
          </div>
          <form action="POST" className="contact-form">
            <label>Imię i nazwisko</label>
            <input type="text" name="user_name" className="user_name" />
            <label>Numer telefonu</label>
            <input type="number" name="user_phone" className="user_phone" />
            <label>Adres email</label>
            <input type="email" name="user_mail" className="user_mail" />
            <label>Treść wiadomości</label>
            <textarea name="user_message" className="user_message"></textarea>

            <div className="allow">
              <input type="checkbox"></input>
              <label>
                Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą
                o ochronie danych osobowych w związku z wysłaniem zapytania
                przez formularz kontaktowy. Podanie danych jest dobrowolne, ale
                niezbędne do przetworzenia zapytania. Zostałem poinformowany, że
                przysługuje mi prawo dostępu do swoich danych, możliwości ich
                poprawiania, żądania zaprzestania ich przetwarzania.
                Administratorem danych jest Mr Dentist.
              </label>
            </div>
            <Link to="/cookies" className="cookies-link">
              Polityka prywatności & cookies
            </Link>
            <input type="submit" value="Wyślij zapytanie" className="send" />
          </form>
        </div>
        <div className="clinic">
          <img
            src="https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="clinic-photo"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
