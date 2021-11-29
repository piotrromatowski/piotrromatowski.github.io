import React, { useState, useContext, useMemo } from "react";
import { useEffect } from "react/cjs/react.development";
import { LoginContext } from "./LoginContext";

function AdminPanel() {
  const [access, setAccess] = useContext(LoginContext);

  const [bookingID, setBookingId] = useState({ booking: "" });
  const [bookingsArray, setBookingsArray] = useState();
  const [error, setError] = useState("");

  const [users, setUsers] = useState();
  const [userID, setUserID] = useState({ user: "" });
  const [singleUser, setSingleUser] = useState();

  //GET ALL USERS LIST
  useEffect(() => {
    setError(error);
    fetchUsers();
    async function fetchUsers() {
      if (access !== "") {
        await fetch("https://car-rental-rest-api.herokuapp.com/users/", {
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
            setUsers({ ...data }, data);
          });
        });
      }
    }
  }, [error, access]);

  //GET USER BY ID

  const onChangeUserID = (e) => {
    setUserID({ ...userID, [e.target.name]: e.target.value });
  };

  const getUserById = (e) => {
    e.preventDefault();
    if (access !== "") {
      fetch(`https://car-rental-rest-api.herokuapp.com/users/${userID.user}/`, {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${access.access}`,
          "Content-Type": "application/json",
          "X-CSRFToken": `${access.access}`,
        },
      }).then((response) => {
        let resStatus = response.status;
        response.json().then((data) => {
          if (resStatus === 201 || 200) {
            setSingleUser(data);
            console.log({ singleUser });
          }
          if (resStatus === 404 || 401) {
            setError("No data");
          }
        });
      });
    }
  };

  //GET BOOKING BY ID

  const onChangeBookingID = (e) => {
    setBookingId({ ...bookingID, [e.target.name]: e.target.value });
  };

  const getBookingById = (e) => {
    e.preventDefault();
    if (access !== "") {
      fetch(
        `https://car-rental-rest-api.herokuapp.com/bookings/${bookingID.booking}/`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            authorization: `Bearer ${access.access}`,
            "Content-Type": "application/json",
            "X-CSRFToken": `${access.access}`,
          },
        }
      ).then((response) => {
        let resStatus = response.status;
        response.json().then((data) => {
          if (resStatus === 201 || 200) {
            setBookingsArray({ ...bookingsArray, data });
          }
          if (resStatus === 404 || 401) {
            setError("No data");
          }
        });
      });
    }
  };

  return (
    <>
      <div className="bookings">
        <form>
          <label>Booking ID:</label>
          <input
            placeholder="ID"
            value={bookingID.booking}
            name="booking"
            type="text"
            onChange={onChangeBookingID}
          ></input>
          <button type="submit" onClick={getBookingById}>
            Show bookings
          </button>
        </form>

        {bookingsArray ? (
          bookingsArray.data.car ? (
            <ul className="booking-list">
              <li className="single-booking">URL: {bookingsArray.data.url}</li>
              <li className="single-booking">
                USER ID: {bookingsArray.data.user}
              </li>
              <li className="single-booking">
                BOOKING START: {bookingsArray.data.booking_start}
              </li>
              <li className="single-booking">
                BOOKING END: {bookingsArray.data.booking_end}
              </li>
              <li className="single-booking">
                CREATED: {bookingsArray.data.created}
              </li>
              <li className="single-booking">
                UPDATED: {bookingsArray.data.updated}
              </li>
              <li className="single-booking">
                BOOKING DURATION: {bookingsArray.data.booking_duration}
              </li>
              <li className="single-booking">
                TOTAL PRICE: {bookingsArray.data.total_price}
              </li>
              <li className="single-booking">
                CAR BRAND: {bookingsArray.data.car.brand}
              </li>
              <li className="single-booking">
                CAR MODEL: {bookingsArray.data.car.model}
              </li>
              <li className="single-booking">
                ENGINE: {bookingsArray.data.car.engine}
              </li>
              <li className="single-booking">
                YEAR: {bookingsArray.data.car.year}
              </li>
              <li className="single-booking">
                LOCATION: {bookingsArray.data.car.location}
              </li>
              <li className="single-booking">
                CONDITION: {bookingsArray.data.car.condition}
              </li>
              <li className="single-booking">
                DAY PRICE: {bookingsArray.data.car.day_price}
              </li>
              <li className="single-booking">
                CAR URL: {bookingsArray.data.car.url}
              </li>
              <button className="single-booking-btn">DELETE RESERVATION</button>
              <button className="single-booking-btn">CHANGE RESERVATION</button>
            </ul>
          ) : (
            <p className="booking-message">{error}</p>
          )
        ) : (
          ""
        )}
      </div>
      <div className="cars"></div>
      <div className="car-photos"></div>
      <div className="users">
        <div className="users-all">
          <h2>All Users</h2>
          <button onClick="">Show all users</button>
          <div className="show-users active">
            {users
              ? users.results
                ? users.results.map((user) => {
                    return (
                      <ul className="user" key={user.url.slice(48, 51)}>
                        <li className="user-item">URL: {user.url}</li>
                        <li className="user-item">USERNAME: {user.username}</li>
                        <li className="user-item">USER EMAIL: {user.email}</li>

                        {user.profile ? (
                          <ul className="user-profile">
                            <li className="user-profile-item">
                              FIRST NAME: {user.profile.first_name}
                            </li>
                            <li className="user-profile-item">
                              LAST NAME: {user.profile.last_name}
                            </li>
                            <li className="user-profile-item">
                              STREET: {user.profile.street}
                            </li>
                            <li className="user-profile-item">
                              APT.NUMBER: {user.profile.apartment_number}
                            </li>
                            <li className="user-profile-item">
                              CITY: {user.profile.city}
                            </li>
                            <li className="user-profile-item">
                              COUNTRY: {user.profile.country}
                            </li>
                            <li className="user-profile-item">
                              POSTAL CODE: {user.profile.postal_code}
                            </li>
                            <li className="user-profile-item">
                              PHONE: {user.profile.phone_number}
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                        <button>Edit</button>
                        <button>Delete</button>
                      </ul>
                    );
                  })
                : ""
              : ""}
          </div>
        </div>
        <div className="users-by-ID">
          <h2>Users By ID</h2>
          <form>
            <label>User ID:</label>
            <input
              placeholder="User ID"
              value={userID.user}
              name="user"
              type="text"
              onChange={onChangeUserID}
            ></input>
            <button type="submit" onClick={getUserById}>
              Show users
            </button>
          </form>
          {singleUser ? (
            singleUser.username ? (
              <ul className="single-user">
                <li className="single-user-item">
                  USERNAME: {singleUser.username}
                </li>
                <li className="single-user-item">EMAIL: {singleUser.email}</li>
                <li className="single-user-item">URL: {singleUser.url}</li>
                {singleUser.profile ? (
                  <ul className="single-user-profile">
                    <li className="single-user-profile-item">
                      FIRST NAME: {singleUser.profile.first_name}
                    </li>
                    <li className="single-user-profile-item">
                      LAST NAME: {singleUser.profile.last_name}
                    </li>
                    <li className="single-user-profile-item">
                      STREET: {singleUser.profile.street}
                    </li>
                    <li className="single-user-profile-item">
                      APT.NUMBER: {singleUser.profile.apartment_number}
                    </li>
                    <li className="single-user-profile-item">
                      CITY: {singleUser.profile.city}
                    </li>
                    <li className="single-user-profile-item">
                      COUNTRY: {singleUser.profile.country}
                    </li>
                    <li className="single-user-profile-item">
                      POSTAL CODE: {singleUser.profile.postal_code}
                    </li>
                    <li className="single-user-profile-item">
                      PHONE: {singleUser.profile.phone_number}
                    </li>
                    <li className="single-user-profile-item">
                      USER ID: {singleUser.url.slice(48, 51)}
                    </li>
                  </ul>
                ) : (
                  ""
                )}
                <button>Edit</button>
                <button>Delete</button>
              </ul>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          {singleUser ? !singleUser.username ? <span>No data</span> : "" : ""}
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
