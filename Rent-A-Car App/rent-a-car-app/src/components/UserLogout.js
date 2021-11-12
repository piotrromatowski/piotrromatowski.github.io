import React, { useEffect, useState } from "react";

function UserLogout({ setIsLoggedIn, ...isLoggedIn }) {
  const logout = (e) => {
    setIsLoggedIn(!isLoggedIn);

    e.preventDefault();
    window.location.reload();

    const url = "https://car-rental-rest-api.herokuapp.com/logout/";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Success logged out");
      })
      .catch((error) => {
        console.error("Error");
      });
  };

  return <button onClick={logout}>Logout</button>;
}

export default UserLogout;
