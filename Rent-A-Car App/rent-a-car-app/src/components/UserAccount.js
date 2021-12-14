import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import { LoginContext } from "./LoginContext";
import AdminPanel from "./AdminPanel";

function UserAccount({ setIsClientLoggedIn, ...isClientLoggedIn }) {
  const [access] = useContext(LoginContext);
  const [userBookings, setUserBookings] = useState("");
  const [showAllBookings, setShowAllBookings] = useState(false);

  const url =
    "https://car-rental-rest-api.herokuapp.com/bookings/?ordering=6&page=1";

  useEffect(() => {
    if (access !== "") {
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${access.access}`,
          "Content-Type": "application/json",
          "X-CSRFToken": `${access.access}`,
        },
      }).then((response) => {
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          setUserBookings(data);
        });
      });
    }
  }, [access]);

  console.log(isClientLoggedIn);
  console.log(userBookings);
  console.log(typeof userBookings);

  // if (userBookings !== "") {
  //   userBookings.results.map((result) => {
  //     return <ul>{result}</ul>;
  //   });
  // }
  const showAllBookingsOnClick = (e) => {
    setShowAllBookings(!showAllBookings);
  };

  return (
    <>
      {/* <Nav /> */}
      <div>
        <h1>User Account</h1>
        <h2>
          <Link to="/">Main{/* <a href="/home">Home</a> */}</Link>
        </h2>
      </div>
      <div className="bookings">
        {showAllBookings
          ? userBookings && userBookings.results
            ? userBookings.results.map((result) => {
                return (
                  <ul
                    className="booking_list"
                    key={result.user + result.created}
                  >
                    <h3> Reservation date:</h3>
                    <h4>
                      {new Date(result.created).toISOString().slice(0, 10)}
                    </h4>
                    <li className="booking_element">User ID: {result.user}</li>
                    <li className="booking_element">
                      Booking start: {result.booking_start}
                    </li>
                    <li className="booking_element">
                      Booking end: {result.booking_end}
                    </li>
                    <li className="booking_element">
                      Booking duration: {result.booking_duration} days
                    </li>
                    <li className="booking_element">
                      Car brand: {result.car.brand}
                    </li>
                    <li className="booking_element">
                      Car model: {result.car.model}
                    </li>
                    <li className="booking_element">Year: {result.car.year}</li>
                    <li className="booking_element">
                      Engine: {result.car.engine}
                    </li>
                    <li className="booking_element">
                      Location: {result.car.location}
                    </li>
                    <li className="booking_element">
                      Day price: {result.car.day_price} $
                    </li>
                    <li className="booking_element">
                      Booking created:{" "}
                      {new Date(result.created).toISOString().slice(0, 10)}
                    </li>
                    <li className="booking_element">
                      Total price: {result.total_price} $
                    </li>
                    <li className="booking_element">
                      Booking updated:{" "}
                      {new Date(result.updated).toISOString().slice(0, 10)}
                    </li>
                    <li>
                      Booking ID:{result.url.slice(51, 55).replace("/", "")}
                    </li>
                  </ul>
                );
              })
            : ""
          : ""}
        <button onClick={showAllBookingsOnClick}>
          {!showAllBookings ? "Show all bookings" : "Hide all bookings"}
        </button>
      </div>
      <UserLogin
        isClientLoggedIn={isClientLoggedIn}
        setIsClientLoggedIn={setIsClientLoggedIn}
      />
      <UserRegister />
      <AdminPanel></AdminPanel>
    </>
  );
}

export default UserAccount;
