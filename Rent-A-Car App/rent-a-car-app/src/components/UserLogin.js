import React, { useContext, useEffect, useState } from "react";
import curl from "curl";
import UserLogout from "./UserLogout";
import UserResetPasswordEmailRequest from "./UserResetPasswordEmailRequest";
import { LoginContext } from "./LoginContext";

function UserLogin({ setIsClientLoggedIn, ...isClientLoggedIn }) {
  const [access, setAccess] = useContext(LoginContext);

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [correctLogin, setCorrectLogin] = useState(true);

  // const [access, setAccess] = useState("");

  const onChangeLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const url = "https://car-rental-rest-api.herokuapp.com/login/";

  const userLogin = (e) => {
    e.preventDefault();
    console.log(login);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    }).then((response) => {
      // response.text();
      response.json().then((data) => {
        setAccess(data);
      });
      console.log(response.status);
      // console.log(response.text());
      // console.log(response.formData());
      // setAccess(response.text());
      // setAccess(response.text());

      if (response.status === 200) {
        setIsLoggedIn(!isLoggedIn);
        setCorrectLogin(correctLogin);
        setIsClientLoggedIn({
          logged: true,
          login: login.username,
        });
      } else {
        setCorrectLogin(!correctLogin);
        setIsLoggedIn(isLoggedIn);
      }
    });
    console.log(access);
    console.log(access.refresh);

    setLogin({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <form type="submit" className="user-form" onSubmit={userLogin}>
        <h2>
          {isLoggedIn
            ? `You're logged in ${login.username}`
            : "You're not logged in"}
        </h2>
        <label>Login</label>
        <input
          name="username"
          className="login"
          type="text"
          placeholder="login"
          value={login.username}
          onChange={onChangeLogin}
        ></input>
        <label>Password</label>
        <input
          name="password"
          className="password"
          type="password"
          placeholder="password"
          value={login.password}
          onChange={onChangeLogin}
        ></input>
        {correctLogin ? (
          ""
        ) : (
          <span style={{ color: "red" }}>Incorrect login or password</span>
        )}
        <button type="submit">Log In</button>
      </form>
      <UserLogout setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <UserResetPasswordEmailRequest />
    </>
  );
}
export default UserLogin;
