import React, { useContext, useEffect, useState } from "react";
import UserAccount from "./UserAccount";
import SingleCar from "./SingleCar";
import { PropTypes } from "prop-types";
import { LoginContext } from "./LoginContext";

function UserReservation({ bookingDate, login, reservedCar, reservation }) {
  console.log(bookingDate);
  console.log(reservedCar);
  console.log(reservation);
  console.log(reservation.car_id);

  const [access, setAccess] = useContext(LoginContext);
  const [userBooking, setUserBooking] = useState({
    car: {
      brand: "",
      model: "",
      engine: "",
      year: "",
      location: "",
      condition: "",
      day_price: "",
    },
    car_id: "",
    booking_start: "",
    booking_end: "",
  });

  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [readyToSend, setReadyToSend] = useState(false);
  const url = "https://car-rental-rest-api.herokuapp.com/bookings/";

  const sendReservation = (e) => {
    // e.preventDefault();

    setUserBooking({
      car: {
        brand: reservedCar.brand,
        model: reservedCar.model,
        engine: reservedCar.engine,
        year: reservedCar.year,
        location: reservedCar.location,
        condition: reservedCar.condition,
        day_price: reservedCar.day_price,
      },
      car_id: reservation.car_id,
      booking_start: bookingDate.booking_start.toISOString().slice(0, 10),
      booking_end: bookingDate.booking_end.toISOString().slice(0, 10),
    });
    setReadyToSend(true);

    console.log(userBooking);

    // const readyToSend = JSON.stringify(userBooking);
    // console.log(readyToSend);

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     authorization: `Bearer ${access.access}`,
    //     "Content-Type": "application/json",
    //     "X-CSRFToken": `${access.access}`,
    //   },
    //   body: JSON.stringify(userBooking),
    // }).then((response) => {
    //   console.log(userBooking);
    //   // response.json();
    //   console.log(response.status);
    //   console.log(response.json());
    //   console.log(access.access);
    //   if (response.status === 200 || 201) {
    //     setReservationSuccess(true);
    //   }
    // });
    // fetchBookingData();
  };

  useEffect(() => {
    setUserBooking(userBooking);
    console.log(userBooking);
    setReservationSuccess(reservationSuccess);
    // fetchBookingData();
  }, [userBooking, reservationSuccess]);

  if (readyToSend === true) {
    fetchBookingData();
    setReadyToSend(false);
  }

  async function fetchBookingData() {
    console.log(userBooking);
    await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${access.access}`,
        "Content-Type": "application/json",
        "X-CSRFToken": `${access.access}`,
      },
      body: JSON.stringify(userBooking),
    }).then((response) => {
      // console.log(userBooking);
      // response.json();
      console.log(response.status);
      console.log(response.json());
      console.log(access.access);
      if (response.status === 200 || 201) {
        setReservationSuccess(true);
      }
    });
  }
  console.log(login);

  return (
    <>
      {access.access && login !== "" ? (
        <div className="reservation-summary">
          <h1 className="user-login">Hello {login} !</h1>
          <h2 className="title">Your reservation</h2>
          <ul className="single-reservation">
            <li className="single-reservation-content">
              Reservation date start:
              {`${new Date(bookingDate.booking_start).toLocaleDateString()}`}
            </li>
            <li className="single-reservation-content">
              Reservation date end:
              {`${new Date(bookingDate.booking_end).toLocaleDateString()}`}
            </li>
            <li className="single-reservation-content">
              Car: {reservedCar.brand}
            </li>
            <li className="single-reservation-content">
              Model: {reservedCar.model}
            </li>
            <li className="single-reservation-content">
              Engine: {reservedCar.engine}
            </li>
            <li className="single-reservation-content">
              Year: {reservedCar.year}
            </li>
            <li className="single-reservation-content">
              Car location: {reservedCar.location}
            </li>
            <li className="single-reservation-content">
              Condition: {reservedCar.condition}
            </li>
            <li className="single-reservation-content">
              Day price: {reservedCar.day_price}
            </li>
          </ul>
          <p className="price-summary">
            Summary price for Your car rent:{" "}
            {Math.floor(
              ((bookingDate.booking_end - bookingDate.booking_start) /
                (1000 * 60 * 60 * 24)) *
                reservedCar.day_price
            )}{" "}
            $
          </p>
          <button onClick={sendReservation} className="confirm">
            Confirm this reservation?
          </button>
          {reservationSuccess ? (
            <span>Booking sucess, check Your e-mail</span>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default UserReservation;
