import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

function Contact() {
  const [user, setUser] = useState({
    username: "",
    userMail: "",
    userPhone: "",
    message: "",
  });
  const [userAgreement, setUserAgreement] = useState(false);
  const [checked, setChecked] = useState(null);

  const [usernameError, setUsernameError] = useState({});
  const [userMailError, setUserMailError] = useState({});
  const [userPhoneError, setUserPhoneError] = useState({});
  const [messageError, setMessageError] = useState({});
  const [userAgreementError, setUserAgreementError] = useState({});

  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setChecked(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(user);

    const isValid = formValidation();
    if (isValid) {
      emailjs
        .sendForm(
          "service_7qwi2aw",
          "template_27cogrh",
          e.target,
          "user_KAu5GebCnGeCX5HGIKkua"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      setUser({ username: "", userMail: "", userPhone: "", message: "" });
      setUserAgreement(true);
      setChecked(false);
    }
  };

  const formValidation = () => {
    const nameError = {};
    const mailError = {};
    const phoneError = {};
    const messageError = {};
    const agreementError = {};
    let isValid = true;

    if (user.username.trim().length < 2) {
      nameError.usernameShort = "Imię i nazwisko jest za krótkie";
      isValid = false;
    }
    if (user.username.trim().length > 50) {
      nameError.usernameLong = "Imię i nazwisko jest za długie";
      isValid = false;
    }
    if (!user.userMail.includes("@")) {
      mailError.userMailSign = "E-mail musi zawierać znak @";
      isValid = false;
    }
    if (user.userPhone.trim().length < 9) {
      phoneError.userPhoneShort = "Numer telefonu jest za króki";
      isValid = false;
    }
    if (user.message.trim().length > 350) {
      messageError.messageLong = "Twoja wiadomość jest za długa";
      isValid = false;
    }
    if (userAgreement === false) {
      agreementError.userAgreementUnchecked =
        "Musisz zaznaczyć zgodę na przetwarzanie danych";
      isValid = false;
    }
    setUsernameError(nameError);
    setUserMailError(mailError);
    setUserPhoneError(phoneError);
    setMessageError(messageError);
    setUserAgreementError(agreementError);
    return isValid;
  };

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

            <Link to="/sign-up">
              <button className="sign-in">Zapisy online</button>
            </Link>
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
          <form action="POST" className="contact-form" onSubmit={sendEmail}>
            <label>Imię i nazwisko</label>
            <input
              type="text"
              className="user_name"
              name="username"
              value={user.username}
              onChange={onChangeUser}
            />
            {Object.keys(usernameError).map((key) => {
              return <span style={{ color: "red" }}>{usernameError[key]}</span>;
            })}
            <label>Numer telefonu</label>
            <input
              type="number"
              name="userPhone"
              className="user_phone"
              value={user.userPhone}
              onChange={onChangeUser}
            />
            {Object.keys(userPhoneError).map((key) => {
              return (
                <span style={{ color: "red" }}>{userPhoneError[key]}</span>
              );
            })}
            <label>Adres email</label>
            <input
              type="email"
              name="userMail"
              className="user_mail"
              value={user.userMail}
              onChange={onChangeUser}
            />
            {Object.keys(userMailError).map((key) => {
              return <span style={{ color: "red" }}>{userMailError[key]}</span>;
            })}
            <label>Treść wiadomości</label>
            <textarea
              name="message"
              className="user_message"
              type="text"
              value={user.message}
              onChange={onChangeUser}
            ></textarea>
            {Object.keys(messageError).map((key) => {
              return <span style={{ color: "red" }}>{messageError[key]}</span>;
            })}

            <div className="allow">
              <input
                type="checkbox"
                checked={checked}
                name="userAgreement"
                value={userAgreement}
                onChange={(e) => {
                  setUserAgreement(!userAgreement);
                }}
              ></input>
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
            {Object.keys(userAgreementError).map((key) => {
              return (
                <span style={{ color: "red" }}>{userAgreementError[key]}</span>
              );
            })}
            <Link to="/cookies" className="cookies-link">
              Polityka prywatności & cookies
            </Link>
            <button type="submit" className="send">
              Wyślij zapytanie
            </button>
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
