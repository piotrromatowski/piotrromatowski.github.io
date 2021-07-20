import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserAccount from "./UserAccount";
import LoginScreen from "./LoginScreen";
import FormUnregisteredUser from "./FormUnregisteredUser";

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
  const [hide, setHide] = useState("");

  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    adminUser.map((item, index) => {
      if (details.email === item.email && details.password === item.password) {
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
      } else setError("Błędny email lub hasło");
      return null;
    });
  };

  const Logout = () => {
    setUser({ email: "" });
  };

  const showSignUp = () => {
    setHide(!hide);
  };

  return (
    <>
      <Navbar />
      <section className="sign-up">
        {user.email !== "" ? (
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
              <button className="sign-up-btn" onClick={showSignUp}>
                Zapisy ONLINE
              </button>
              <LoginScreen hide={hide} Login={Login} error={error} />
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
            <FormUnregisteredUser />
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

export default SignUp;
