import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TeamMembersDentists } from "./TeamMembers";
import { Link } from "react-router-dom";
import UserAccount from "./UserAccount";
import LoginScreen from "./LoginScreen";

function SignUp() {
  const adminUser = [
    {
      email: "admin@admin.com",
      password: "admin123",
      name: "Jurek Kowalski",
      phone: "505505505",
    },
    {
      email: "andrzej@andrzej.com",
      password: "andrzej123",
      name: "Andrzej Nowak",
      phone: "600600600",
    },
  ];

  const [user, setUser] = useState({ email: "" });
  const [name, setName] = useState({ name: "" });
  const [phone, setPhone] = useState({ phone: "" });

  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    adminUser.map((item, index) => {
      if (details.email == item.email && details.password == item.password) {
        console.log("Logged In");
        setUser({
          email: details.email,
        });
        setName({
          name: item.name,
        });
        setPhone({
          phone: item.phone,
        });
      } else {
        setError("Błędny email lub hasło");
      }
    });
  };

  const Logout = () => {
    setUser({ email: "" });
  };

  return (
    <>
      <Navbar />
      <section className="sign-up">
        {user.email != "" ? (
          <>
            <button className="logout-btn" onClick={Logout}>
              Wyloguj
            </button>
            <UserAccount
              name={name.name}
              user={user.email}
              phone={phone.phone}
            />
          </>
        ) : (
          <>
            <div className="visit-info">
              <h2 className="visit-info-text">
                Jeśli posiadasz konto pacjenta MR Dentist, zapisz się online
                klikając poniżej
              </h2>
              <button className="sign-up-btn">Zapisy ONLINE</button>
              <LoginScreen Login={Login} error={error} />
              <h2 className="visit-info-text">
                lub wypełnij poniższy formularz w celu kontaktu z Mr Dentist
              </h2>
            </div>
            <div className="contact-steps">
              <div className="step">
                <div className="circle">
                  <i className="far fa-clipboard"></i>
                </div>
                <h3 className="step-title">1. Formularz rejetracyjny</h3>
                <p className="step-description">
                  Wypełnij poniższy formularz zapisu na wizytę, co pozwoli nam
                  poznać charakter wizyty
                </p>
              </div>
              <div className="step">
                <div className="circle">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="step-title">2. Skontaktujemy się z Tobą</h3>
                <p className="step-description">
                  Tak szybko jak to możliwe skontaktujemy się z Tobą w celu
                  ustalenia szczegółów wizyty u stomatologa
                </p>
              </div>
              <div className="step">
                <div className="circle">
                  <i className="far fa-check-circle"></i>
                </div>
                <h3 className="step-title">3. Wizyta w naszym gabinecie</h3>
                <p className="step-description">
                  Po ustaleniu szczegółów zaprosimy Cię na wizytę w gabinecie
                  stomatologicznym OptimDent
                </p>
              </div>
            </div>
            <form action="POST" className="visit-form">
              <div className="user">
                <label>Imię i nazwisko</label>
                <input type="text" name="user_name" className="user_name" />
                <label>Numer telefonu</label>
                <input type="number" name="user_phone" className="user_phone" />
                <label>Adres email</label>
                <input type="email" name="user_mail" className="user_mail" />
              </div>
              <div className="user-visit">
                <div className="choose-doctor">
                  <label>Proszę wybrać lekarza</label>
                  <select>
                    <option>Wybierz...</option>
                    <option>Wizyta pierwszorazowa - dowolny lekarz</option>
                    {TeamMembersDentists.map((item, index) => {
                      return (
                        <option className={item.teamClassName} key={index + 2}>
                          {item.name}, {item.profession}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="kind-of-visit">
                  <label>Proszę wybrać rodzaj wizyty</label>
                  <select>
                    <option>Wizyta standardowa</option>
                    <option>Wizyta bólowa</option>
                  </select>
                </div>
              </div>
              <div className="user-preferred">
                <div className="date">
                  <label>Proponowana data wizyty</label>
                  <input type="date" className="user-date"></input>
                </div>
                <div className="time">
                  <label>Preferowana godzina wizyty</label>
                  <select>
                    <option>Dowolna</option>
                    <option>Rano</option>
                    <option>godz. 10-17</option>
                    <option>po godz. 17</option>
                  </select>
                </div>
                <div className="preferred-contact">
                  <p>Preferowany sposób kontaktu</p>
                  <div className="type-of-contact">
                    <input type="checkbox" />
                    <label>Dowolny</label>
                  </div>
                  <div className="type-of-contact">
                    <input type="checkbox" />
                    <label>Telefon</label>
                  </div>
                  <div className="type-of-contact">
                    <input type="checkbox" />
                    <label>Email</label>
                  </div>
                  <div className="type-of-contact">
                    <input type="checkbox" />
                    <label>SMS</label>
                  </div>
                </div>
              </div>

              <div className="allow">
                <input type="checkbox"></input>
                <label>
                  Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z
                  ustawą o ochronie danych osobowych w związku z wysłaniem
                  zapytania przez formularz kontaktowy. Podanie danych jest
                  dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem
                  poinformowany, że przysługuje mi prawo dostępu do swoich
                  danych, możliwości ich poprawiania, żądania zaprzestania ich
                  przetwarzania. Administratorem danych jest Mr Dentist.
                </label>
              </div>
              <Link to="/cookies" className="cookies-link">
                Polityka prywatności & cookies
              </Link>
              <input type="submit" value="Wyślij zapytanie" className="send" />
            </form>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

export default SignUp;
