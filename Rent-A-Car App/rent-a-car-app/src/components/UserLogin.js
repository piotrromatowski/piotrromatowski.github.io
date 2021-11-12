import React, { useEffect, useState } from "react";
import UserLogout from "./UserLogout";
import UserResetPasswordEmailRequest from "./UserResetPasswordEmailRequest";

function UserLogin({ setIsClientLoggedIn, ...isClientLoggedIn }) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [correctLogin, setCorrectLogin] = useState(true);

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    })
      .then((response) => {
        response.json();
        console.log(response.status);
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
      })
      .then((login) => {
        console.log("Success:", login);
      })
      .catch((error) => {
        console.error("Error:", login);
      });
    setLogin({
      username: "",
      password: "",
    });

    // get users list from api

    fetchUsers();

    async function fetchUsers() {
      const res = await fetch(
        `https://car-rental-rest-api.herokuapp.com/users/?page=1`
      );

      const data = await res.json();
      console.log(data);
    }
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
