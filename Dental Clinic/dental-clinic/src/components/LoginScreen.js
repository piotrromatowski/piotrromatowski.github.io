import React, { useState } from "react";

function LoginScreen({ Login, error, hide }) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <>
      <form onSubmit={submitHandler} className={hide ? "active" : "hide"}>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <label>adres email</label>
        <input
          type="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        <label>hasło</label>
        <input
          type="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        {/* <Link to="/user-account" className="login-btn">
              Zaloguj
            </Link> */}
        <input type="submit" className="login-btn" value="Zaloguj"></input>
      </form>
    </>
  );
}

export default LoginScreen;
