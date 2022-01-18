import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./LoginContext";

function UserLogout({ setIsLoggedIn, ...isLoggedIn }) {
  const [access, setAccess] = useContext(LoginContext);

  const logout = (e) => {
    setIsLoggedIn(!isLoggedIn);

    e.preventDefault();
    window.location.reload();

    const url = "https://car-rental-rest-api.herokuapp.com/logout/";
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${access.access}`,
        "Content-Type": "application/json",
        "X-CSRFToken": `${access.access}`,
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        response.json();
        console.log(response.status);
      })
      .then(() => {
        console.log("Success logged out");
      })
      .catch((error) => {
        console.error("Error");
      });
  };

  return (
    <>
      {!access.access ? (
        ""
      ) : (
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      )}
    </>
  );
}

export default UserLogout;
