import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./MainAndNav";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";

function UserAccount({ setIsClientLoggedIn, ...isClientLoggedIn }) {
  //   const [isClientLoggedIn, setIsClientLoggedIn] = useState({
  //     logged: false,
  //     login: "",
  //   });

  //   const [reservation, setReservation] = useState({
  //     car: {},
  //     car_id: "",
  //     booking_start: "",
  //     booking_end: "",
  //   });

  //   const [reservedCar, setReservedCar] = useState({
  //     brand: "",
  //     model: "",
  //     engine: "",
  //     year: "",
  //     location: "",
  //     condition: "",
  //     day_price: "",
  //   });

  console.log(isClientLoggedIn);

  return (
    <>
      {/* <Nav /> */}
      <div>
        <h1>Konto klienta</h1>
        <h2>
          <Link to="/">Home{/* <a href="/home">Home</a> */}</Link>
        </h2>
      </div>
      <UserLogin
        isClientLoggedIn={isClientLoggedIn}
        setIsClientLoggedIn={setIsClientLoggedIn}
      />
      <UserRegister />
    </>
  );
}

export default UserAccount;
