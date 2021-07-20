import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { TeamMembersDentists } from "./TeamMembers";

function FormUnregisteredUser() {
  const [unregisteredUser, setUnregisteredUser] = useState({
    userName: "",
    userMail: "",
    userPhone: "",
    userSelectedDate: new Date(),
  });

  const [userSelectedDoctor, setUserSelectedDoctor] = useState("");
  const [userSelectedVisit, setUserSelectedVisit] = useState("");
  const [userSelectedHours, setUserSelectedHours] = useState("");
  const [userPreferedContact, setUserPreferedContact] = useState({
    any: false,
    phone: false,
    mail: false,
    sms: false,
  });
  const [userAgreement, setUserAgreement] = useState(false);
  const [usernameError, setUsernameError] = useState({});
  const [userMailError, setUserMailError] = useState({});
  const [userPhoneError, setUserPhoneError] = useState({});
  const [userAgreementError, setUserAgreementError] = useState({});

  const [checked, setChecked] = useState(null);

  const OnChangeUnregisteredUser = (e) => {
    setUnregisteredUser({
      ...unregisteredUser,
      [e.target.name]: e.target.value,
    });
    setChecked(null);

    console.log(unregisteredUser);
  };
  console.log(userSelectedDoctor);
  console.log(userSelectedVisit);
  console.log(userSelectedHours);
  console.log(userPreferedContact);
  console.log(userAgreement);

  const sendEmail = (e) => {
    e.preventDefault();

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
      setUnregisteredUser({
        userName: "",
        userMail: "",
        userPhone: "",
        userSelectedDate: new Date(),
      });
      setUserSelectedDoctor("");
      setUserSelectedVisit("");
      setUserSelectedHours("");
      setUserPreferedContact({
        any: false,
        phone: false,
        mail: false,
        sms: false,
      });
      setUserAgreement(true);
      setChecked(false);
    }
  };

  const formValidation = () => {
    const nameError = {};
    const mailError = {};
    const phoneError = {};
    const agreementError = {};
    let isValid = true;

    if (unregisteredUser.userName.trim().length < 2) {
      nameError.usernameShort = "Imię i nazwisko jest za krótkie";
      isValid = false;
    }
    if (unregisteredUser.userName.trim().length > 50) {
      nameError.usernameLong = "Imię i nazwisko jest za długie";
      isValid = false;
    }
    if (!unregisteredUser.userMail.includes("@")) {
      mailError.userMailSign = "E-mail musi zawierać znak @";
      isValid = false;
    }
    if (unregisteredUser.userPhone.trim().length < 9) {
      phoneError.userPhoneShort = "Numer telefonu jest za króki";
      isValid = false;
    }
    if (userAgreement === false) {
      console.log("Musisz zaznaczyć zgodę na przetwarzanie danych");
      agreementError.userAgreementUnchecked =
        "Musisz zaznaczyć zgodę na przetwarzanie danych";
      isValid = false;
    }

    setUsernameError(nameError);
    setUserMailError(mailError);
    setUserPhoneError(phoneError);
    setUserAgreementError(agreementError);
    return isValid;
  };
  return (
    <>
      <form action="POST" className="visit-form" onSubmit={sendEmail}>
        <div className="user">
          <label>Imię i nazwisko</label>
          <input
            type="text"
            name="userName"
            value={unregisteredUser.userName}
            onChange={OnChangeUnregisteredUser}
            className="user_name"
          />
          {Object.keys(usernameError).map((key) => {
            return <span style={{ color: "red" }}>{usernameError[key]}</span>;
          })}
          <label>Numer telefonu</label>
          <input
            type="number"
            name="userPhone"
            value={unregisteredUser.userPhone}
            onChange={OnChangeUnregisteredUser}
            className="user_phone"
          />
          {Object.keys(userPhoneError).map((key) => {
            return <span style={{ color: "red" }}>{userPhoneError[key]}</span>;
          })}
          <label>Adres email</label>
          <input
            type="email"
            name="userMail"
            value={unregisteredUser.userMail}
            onChange={OnChangeUnregisteredUser}
            className="user_mail"
          />
          {Object.keys(userMailError).map((key) => {
            return <span style={{ color: "red" }}>{userMailError[key]}</span>;
          })}
        </div>
        <div className="user-visit">
          <div className="choose-doctor">
            <label>Proszę wybrać lekarza</label>
            <select
              value={userSelectedDoctor}
              onChange={(e) => {
                setUserSelectedDoctor(e.target.value);
              }}
            >
              <option>Wybierz...</option>
              <option name="userSelectedDoctor">
                Wizyta pierwszorazowa - dowolny lekarz
              </option>
              {TeamMembersDentists.map((item, index) => {
                return (
                  <option
                    name="userSelectedDoctor"
                    className={item.teamClassName}
                    key={index + 2}
                  >
                    {item.name}, {item.profession}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="kind-of-visit">
            <label>Proszę wybrać rodzaj wizyty</label>
            <select
              value={userSelectedVisit}
              onChange={(e) => {
                setUserSelectedVisit(e.target.value);
              }}
            >
              <option name="userSelectedVisit">Wizyta standardowa</option>
              <option name="userSelectedVisit">Wizyta bólowa</option>
            </select>
          </div>
        </div>
        <div className="user-preferred">
          <div className="date">
            <label>Proponowana data wizyty</label>
            <input
              name="userSelectedDate"
              value={unregisteredUser.userSelectedDate}
              onChange={OnChangeUnregisteredUser}
              type="date"
              className="user-date"
            ></input>
          </div>
          <div className="time">
            <label>Preferowana godzina wizyty</label>
            <select
              value={userSelectedHours}
              onChange={(e) => {
                setUserSelectedHours(e.target.value);
              }}
            >
              <option name="userSelectedHours">Dowolna</option>
              <option name="userSelectedHours">Rano</option>
              <option name="userSelectedHours">godz. 10-17</option>
              <option name="userSelectedHours">po godz. 17</option>
            </select>
          </div>
          <div className="preferred-contact">
            <p>Preferowany sposób kontaktu</p>
            <div className="type-of-contact">
              <input
                type="checkbox"
                checked={checked}
                name="userPreferedContact"
                value={userPreferedContact}
                onChange={(e) => {
                  setUserPreferedContact({
                    any: !userPreferedContact.any,
                  });
                }}
              />
              <label>Dowolny</label>
            </div>
            <div className="type-of-contact">
              <input
                type="checkbox"
                checked={checked}
                name="userPreferedContact"
                value={userPreferedContact}
                onChange={(e) => {
                  setUserPreferedContact({
                    phone: !userPreferedContact.phone,
                  });
                }}
              />
              <label>Telefon</label>
            </div>
            <div className="type-of-contact">
              <input
                type="checkbox"
                checked={checked}
                name="userPreferedContact"
                value={userPreferedContact}
                onChange={(e) => {
                  setUserPreferedContact({
                    mail: !userPreferedContact.mail,
                  });
                }}
              />
              <label>Email</label>
            </div>
            <div className="type-of-contact">
              <input
                type="checkbox"
                checked={checked}
                name="userPreferedContact"
                value={userPreferedContact}
                onChange={(e) => {
                  setUserPreferedContact({
                    sms: !userPreferedContact.sms,
                  });
                }}
              />
              <label>SMS</label>
            </div>
          </div>
        </div>
        {Object.keys(userAgreementError).map((key) => {
          return (
            <span style={{ color: "red" }}>{userAgreementError[key]}</span>
          );
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
            Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o
            ochronie danych osobowych w związku z wysłaniem zapytania przez
            formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne
            do przetworzenia zapytania. Zostałem poinformowany, że przysługuje
            mi prawo dostępu do swoich danych, możliwości ich poprawiania,
            żądania zaprzestania ich przetwarzania. Administratorem danych jest
            Mr Dentist.
          </label>
        </div>
        <Link to="/cookies" className="cookies-link">
          Polityka prywatności & cookies
        </Link>
        <input type="submit" value="Wyślij zapytanie" className="send" />
      </form>
    </>
  );
}

export default FormUnregisteredUser;
