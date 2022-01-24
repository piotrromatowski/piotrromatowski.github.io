import React, { useState, useContext, useEffect } from "react";
import { LoginContext } from "./LoginContext";

function AdminPanel() {
  const [access, setAccess] = useContext(LoginContext);
  const [bookingID, setBookingId] = useState({ booking: "" });
  const [bookingsArray, setBookingsArray] = useState();
  const [bookingUpdateForm, setBookingUpdateForm] = useState(false);
  const [bookingUpdateCarData, setBookingUpdateCarData] = useState({});
  const [allCarsList, setAllCarsList] = useState();
  const [carToChange, setCarToChange] = useState({ carID: "" });
  const [send, setSend] = useState(false);
  const [bookingUpdateDate, setBookingUpdateDate] = useState({
    booking_start: "",
    booking_end: "",
  });
  const [updatedBooking, setUpdatedBooking] = useState({
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

  const [error, setError] = useState("");

  const [users, setUsers] = useState();
  const [userID, setUserID] = useState({ user: "" });
  const [singleUser, setSingleUser] = useState();

  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    engine: "",
    year: "",
    location: "",
    condition: "",
    day_price: "",
  });

  const [carID, setCarID] = useState({ id: "" });
  const [carFound, setCarFound] = useState({});
  const [updateCar, setUpdateCar] = useState({
    brand: "",
    model: "",
    engine: "",
    year: "",
    location: "",
    condition: "",
    day_price: "",
  });

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const [carPhotoPanel, setCarPhotoPanel] = useState(false);
  const [newPhotoPanel, setNewPhotoPanel] = useState(false);
  const [addNewPhoto, setAddNewPhoto] = useState({
    url: "",
    photo: "",
  });

  const [showAllUsers, setshowAllUsers] = useState(false);
  const [userDeleted, setUserDeleted] = useState("");

  const [openEditForm, setOpenEditForm] = useState(false);
  const [userUpdate, setUserUpdate] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    profile: {
      first_name: "",
      last_name: "",
      country: "",
      city: "",
      postal_code: "",
      street: "",
      apartment_number: "",
      phone_number: "",
    },
  });

  const [editedUserID, setEditedUserID] = useState("");

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
    //UPDATE BOOKING DATES AND CAR FETCH
    if (send) {
      const url = `https://car-rental-rest-api.herokuapp.com/bookings/${bookingID.booking}/`;

      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          authorization: `Bearer ${access.access}`,
          "X-CSRFToken": `${access.access}`,
        },
        body: JSON.stringify(updatedBooking),
      }).then((response) => {
        console.log(response.json(), response.status);
      });
      setSend(false);
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
        });
      });
    }

    setUserDeleted(userDeleted);
  }, [
    error,
    access,
    userDeleted,
    bookingUpdateCarData,
    updatedBooking,
    bookingID,
    send,
    bookingsArray,
  ]);

  const showAllUsersOnClick = (e) => {
    setshowAllUsers(!showAllUsers);
  };

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

  //DELETE USER

  const deleteUserOnClick = (e) => {
    const userURL = e.target.value.slice(48, 51);
    const userID = userURL.replace("/", "");
    console.log(userURL);
    console.log(userID);

    const url = `https://car-rental-rest-api.herokuapp.com/users/${userID}/`;

    if (access !== "") {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          authorization: `Bearer ${access.access}`,
          "X-CSRFToken": `${access.access}`,
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 201 || 203 || 204) {
            setUserDeleted(`User ID:${userID} deleted`);
          }
        })
        .catch((error) => {
          console.error("Error");
        });
    }
  };

  // EDIT USER

  const editUserOnClick = (e) => {
    const userURL = e.target.value.slice(48, 51);
    const userID = userURL.replace("/", "");
    setOpenEditForm(!openEditForm);
    setEditedUserID(userID);
  };

  const cancelUserEdit = (e) => {
    setOpenEditForm(false);
    setUserUpdate({
      username: "",
      email: "",
      password: "",
      password2: "",
      profile: {
        first_name: "",
        last_name: "",
        country: "",
        city: "",
        postal_code: "",
        street: "",
        apartment_number: "",
        phone_number: "",
      },
    });
  };

  const editUserOnChange = (e) => {
    setUserUpdate({
      ...userUpdate,
      ...userUpdate.profile,
      [e.target.name]: e.target.value,
      profile: {
        [e.target.name]: e.target.value,
      },
    });

    console.log(userUpdate);
  };

  const saveChangesToUser = (e) => {
    e.preventDefault();

    const url = `https://car-rental-rest-api.herokuapp.com/users/${editedUserID}/`;

    if (access.access) {
      console.log(userUpdate);
      console.log(JSON.stringify(userUpdate));

      fetch(url, {
        method: "PATCH",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${access.access}`,
          "Content-Type": "application/json",
          "X-CSRFToken": `${access.access}`,
        },
        body: JSON.stringify(userUpdate),
      }).then((response) => {
        console.log(userUpdate);
        console.log(response.status);
        console.log(response.text());
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

  //DELETE BOOKING

  const deleteBookingOnClick = (e) => {
    e.preventDefault();
    const url = `https://car-rental-rest-api.herokuapp.com/bookings/${bookingID.booking}/`;

    if (access !== "") {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          authorization: `Bearer ${access.access}`,
          "X-CSRFToken": `${access.access}`,
        },
      })
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => {
          console.error("Error");
        });
    }
  };

  // UPDATE BOOKING

  const openBookingUpdateFormOnClick = (e) => {
    setBookingUpdateForm(!bookingUpdateForm);

    fetch(`https://car-rental-rest-api.herokuapp.com/cars/`, {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${access.access}`,
        "Content-Type": "application/json",
        "X-CSRFToken": `${access.access}`,
      },
    }).then((response) => {
      response.json().then((data) => {
        setAllCarsList(data.results);
      });
    });
  };

  const cancelChanges = (e) => {
    setBookingUpdateForm(false);
    setBookingUpdateDate({
      booking_start: "",
      booking_end: "",
    });
  };

  const carToChangeOnChange = (e) => {
    setCarToChange({ ...carToChange, [e.target.name]: e.target.value });
  };

  console.log(carToChange);

  async function getCarDataForUpdateBooking() {
    await fetch(
      `https://car-rental-rest-api.herokuapp.com/cars/${carToChange.carID}/`,
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
      response.json().then((data) => {
        console.log(data);
        setBookingUpdateCarData(data);
      });
    });
  }

  const getOnClick = (e) => {
    if (carToChange.carID) {
      getCarDataForUpdateBooking();
    }
  };

  console.log(bookingUpdateCarData);
  console.log(allCarsList);
  console.log(carToChange);

  const updatedBookingOnChange = (e) => {
    setBookingUpdateDate({
      ...bookingUpdateDate,
      [e.target.name]: e.target.value,
    });
  };
  console.log(bookingUpdateDate);

  const saveChangesToReservationOnClick = (e) => {
    setUpdatedBooking({
      ...updatedBooking,
      car: {
        brand: bookingUpdateCarData.brand,
        model: bookingUpdateCarData.model,
        engine: bookingUpdateCarData.engine,
        year: bookingUpdateCarData.year,
        location: bookingUpdateCarData.location,
        condition: bookingUpdateCarData.condition,
        day_price: bookingUpdateCarData.day_price,
      },
      car_id: carToChange.carID,
      booking_start: bookingUpdateDate.booking_start,
      booking_end: bookingUpdateDate.booking_end,
    });

    console.log(updatedBooking);

    setSend(true);
  };

  console.log(updatedBooking);

  // CARS CREATE

  const newCarOnChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
    console.log(newCar);
  };

  const addNewCar = (e) => {
    e.preventDefault();

    sendCar();

    async function sendCar() {
      console.log(JSON.stringify(newCar));
      if (access !== "") {
        await fetch(`https://car-rental-rest-api.herokuapp.com/cars/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            authorization: `Bearer ${access.access}`,
            "X-CSRFToken": `${access.access}`,
          },
          body: JSON.stringify(newCar),
        })
          .then((response) => console.log(response.json(), response.status))
          .then((newCar) => {
            console.log("Success", newCar);
          })
          .catch((error) => {
            console.error("Error");
          });
        setNewCar({
          brand: "",
          model: "",
          engine: "",
          year: "",
          location: "",
          condition: "",
          day_price: "",
        });
      }
    }
  };

  const searchCarOnChange = (e) => {
    setCarID({ [e.target.name]: e.target.value });
  };

  const findCarByID = (e) => {
    e.preventDefault();

    if (access !== "") {
      fetch(`https://car-rental-rest-api.herokuapp.com/cars/${carID.id}/`, {
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
            setCarFound({ ...carFound, data });
            console.log(carFound);
          }
          if (resStatus === 404 || 401) {
            setError("No data");
          }
        });
      });
      setCarID({ id: "" });
    }
  };

  //CARS UPDATE

  const updateOnClick = (e) => {
    setShowUpdateForm(true);
    console.log(updateCar);
  };

  const cancelUpdate = (e) => {
    e.preventDefault();
    setShowUpdateForm(false);
    setUpdateCar({
      brand: "",
      model: "",
      engine: "",
      year: "",
      location: "",
      condition: "",
      day_price: "",
    });
  };

  const updateCarOnChange = (e) => {
    setUpdateCar({
      ...updateCar,
      [e.target.name]: e.target.value,
    });
    console.log(updateCar);
  };

  const saveChangesOnClick = (e) => {
    e.preventDefault();

    const changedCarIDFromURL = carFound.data.url.slice(47, 50);
    const changedCarID = changedCarIDFromURL.replace("/", "");
    const url = `https://car-rental-rest-api.herokuapp.com/cars/${changedCarID}/`;

    sendChanges();

    async function sendChanges() {
      console.log(JSON.stringify(updateCar));
      if (access !== "") {
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            authorization: `Bearer ${access.access}`,
            "X-CSRFToken": `${access.access}`,
          },
          body: JSON.stringify(updateCar),
        })
          .then((response) => {
            console.log(response.json(), response.status);
          })
          .then((updateCar) => {
            console.log("Success");
          })
          .catch((error) => {
            console.error("Error");
          });
        setShowUpdateForm(false);
        setUpdateCar({
          brand: "",
          model: "",
          engine: "",
          year: "",
          location: "",
          condition: "",
          day_price: "",
        });
      }
    }
  };

  // CARS DELETE

  const deleteCarOnClick = (e) => {
    e.preventDefault();

    const changedCarIDFromURL = carFound.data.url.slice(47, 50);
    const changedCarID = changedCarIDFromURL.replace("/", "");
    const url = `https://car-rental-rest-api.herokuapp.com/cars/${changedCarID}/`;

    if (access !== "") {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          authorization: `Bearer ${access.access}`,
          "X-CSRFToken": `${access.access}`,
        },
      })
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => {
          console.error("Error");
        });
    }
  };

  // CAR PHOTOS LIST, UPDATE & DELETE

  const carPhotoPanelOnClick = (e) => {
    setCarPhotoPanel(!carPhotoPanel);
    console.log(carPhotoPanel);
    showCarPhotoList();
  };

  function showCarPhotoList() {
    if (access !== "") {
      fetch("https://car-rental-rest-api.herokuapp.com/car-photos/", {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${access.access}`,
          "X-CSRFToken": `${access.access}`,
        },
      }).then((response) => {
        console.log(response.status);
        console.log(response.json());
      });
    }
  }

  let photos = {};
  if (carFound && carFound.data && carFound.data.photos) {
    photos = carFound.data.photos;
  }

  const addPhotoOnClick = (e) => {
    setNewPhotoPanel(!newPhotoPanel);
  };

  // ADD PHOTO

  const addPhotoOnChange = (e) => {
    setAddNewPhoto({
      ...setAddNewPhoto,
      [e.target.name]: e.target.value,
    });
    console.log(addNewPhoto);
  };

  const saveNewPhoto = (e) => {
    console.log(carFound.data.url);
    console.log(addNewPhoto);

    console.log(
      JSON.stringify({
        url: addNewPhoto.url,
        car: carFound.data.url,
        photo: addNewPhoto.photo,
      })
    );
    e.preventDefault();
    if (access !== "") {
      fetch("https://car-rental-rest-api.herokuapp.com/car-photos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          authorization: `Bearer ${access.access}`,
          "X-CSRFToken": `${access.access}`,
        },
        body: JSON.stringify({
          url: addNewPhoto.url,
          car: carFound.data.url,
          addNewPhoto,
        }),
      })
        .then((response) => {
          console.log(response.json(), response.status);
        })

        .catch((error) => {
          console.error("Error");
        });
    }
  };

  //DELETE PHOTO

  const deletePhotoOnClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    const deletedPhotoIDFromURL = e.target.value.slice(53, 56);
    const deletedPhotoID = deletedPhotoIDFromURL.replace("/", "");
    const url = `https://car-rental-rest-api.herokuapp.com/car-photos/${deletedPhotoID}/`;
    console.log(deletedPhotoID);
    console.log(url);

    if (access !== "") {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          authorization: `Bearer ${access.access}`,
          "X-CSRFToken": `${access.access}`,
        },
      }).then((response) => {
        console.log(response.status);
      });
    }
  };

  return (
    <>
      {access.access ? (
        <div className="panel-wrapper">
          <div className="bookings">
            <h2 className="booking-title">Find booking by ID </h2>
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
                <div className="bookings-wrapper">
                  <ul className="booking-list">
                    <li className="single-booking">
                      URL: {bookingsArray.data.url}
                    </li>
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
                    <button
                      className="single-booking-btn"
                      onClick={deleteBookingOnClick}
                    >
                      DELETE RESERVATION
                    </button>
                    <button
                      className="single-booking-btn"
                      onClick={openBookingUpdateFormOnClick}
                    >
                      CHANGE RESERVATION
                    </button>
                  </ul>
                  {bookingUpdateForm ? (
                    allCarsList ? (
                      <div className="booking-change">
                        <label>CAR</label>
                        <select
                          name="carID"
                          onChange={carToChangeOnChange}
                          // value={carToChange}
                        >
                          <option>---</option>
                          {allCarsList.map((car) => {
                            return (
                              <option
                                onClick={getOnClick}
                                value={car.url.slice(47, 49).replace("/", "")}
                              >
                                {car.brand} {car.model} {car.engine} {car.year}{" "}
                                ID: {car.url.slice(47, 49).replace("/", "")}
                              </option>
                            );
                          })}
                        </select>
                        <label>BOOKING START</label>
                        <input
                          type="date"
                          name="booking_start"
                          value={bookingUpdateDate.booking_start}
                          onChange={updatedBookingOnChange}
                        ></input>
                        <label>BOOKING END</label>
                        <input
                          type="date"
                          name="booking_end"
                          value={bookingUpdateDate.booking_end}
                          onChange={updatedBookingOnChange}
                        ></input>
                        <button onClick={saveChangesToReservationOnClick}>
                          Save and update reservation
                        </button>
                        <button onClick={cancelChanges}>Cancel</button>
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <p className="booking-message">{error}</p>
              )
            ) : (
              ""
            )}
          </div>
          <div className="cars">
            <div className="cars-add">
              <h2 className="cars-title">Add new car</h2>
              <form className="cars-form">
                <label>Brand</label>
                <input
                  type="text"
                  name="brand"
                  className="add-car-input"
                  placeholder="brand"
                  value={newCar.brand}
                  onChange={newCarOnChange}
                />
                <label>Model</label>
                <input
                  type="text"
                  name="model"
                  className="add-car-input"
                  placeholder="model"
                  value={newCar.model}
                  onChange={newCarOnChange}
                />
                <label>Engine</label>
                <input
                  type="text"
                  name="engine"
                  className="add-car-input"
                  placeholder="engine"
                  value={newCar.engine}
                  onChange={newCarOnChange}
                />
                <label>Year</label>
                <input
                  type="text"
                  name="year"
                  className="add-car-input"
                  placeholder="year"
                  value={newCar.year}
                  onChange={newCarOnChange}
                />
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  className="add-car-input"
                  placeholder="location"
                  value={newCar.location}
                  onChange={newCarOnChange}
                />
                <label>Condition</label>
                <input
                  type="text"
                  name="condition"
                  className="add-car-input"
                  placeholder="new / used"
                  value={newCar.condition}
                  onChange={newCarOnChange}
                />
                <label>Day price</label>
                <input
                  type="text"
                  name="day_price"
                  className="add-car-input"
                  placeholder="day price"
                  value={newCar.day_price}
                  onChange={newCarOnChange}
                />
                <button type="submit" onClick={addNewCar}>
                  Add car
                </button>
              </form>
            </div>
            <div className="cars-search">
              <h2 className="cars-search-title">Find car by ID</h2>
              <form className="car-search-form">
                <label>CAR ID</label>
                <input
                  type="number"
                  name="id"
                  className="search-car-input"
                  placeholder="Car ID"
                  value={carID.id}
                  onChange={searchCarOnChange}
                ></input>
                <button type="submit" onClick={findCarByID}>
                  Find Car
                </button>
              </form>
              {carFound.data ? (
                carFound.data.photos ? (
                  <div className="car-found">
                    <ul className="car-found-list">
                      <li className="car-found-item">
                        BRAND: {carFound.data.brand}
                      </li>
                      <li className="car-found-item">
                        MODEL: {carFound.data.model}
                      </li>
                      <li className="car-found-item">
                        ENGINE: {carFound.data.engine}
                      </li>
                      <li className="car-found-item">
                        YEAR: {carFound.data.year}
                      </li>
                      <li className="car-found-item">
                        CONDITION: {carFound.data.condition}
                      </li>
                      <li className="car-found-item">
                        LOCATION: {carFound.data.location}
                      </li>
                      <li className="car-found-item">
                        DAY PRICE: {carFound.data.day_price}
                      </li>
                      <li className="car-found-item">
                        URL: {carFound.data.url}
                      </li>
                      <li className="car-found-item">
                        NUMBER OF PHOTOS: {carFound.data.photos.length}
                      </li>
                    </ul>
                    <button onClick={updateOnClick}>UPDATE THIS CAR</button>
                    <button onClick={deleteCarOnClick}>DELETE THIS CAR</button>
                    <button onClick={carPhotoPanelOnClick}>
                      CAR PHOTO PANEL
                    </button>
                    {showUpdateForm ? (
                      <div className="update-car">
                        <form className="update-car-form">
                          <label>BRAND</label>
                          <input
                            type="text"
                            name="brand"
                            className="change-car-input"
                            placeholder="brand"
                            value={updateCar.brand}
                            onChange={updateCarOnChange}
                          />
                          <label>MODEL</label>
                          <input
                            type="text"
                            name="model"
                            className="change-car-input"
                            placeholder="model"
                            value={updateCar.model}
                            onChange={updateCarOnChange}
                          />
                          <label>ENGINE</label>
                          <input
                            type="text"
                            name="engine"
                            className="change-car-input"
                            placeholder="engine"
                            value={updateCar.engine}
                            onChange={updateCarOnChange}
                          />
                          <label>YEAR</label>
                          <input
                            type="text"
                            name="year"
                            className="change-car-input"
                            placeholder="year"
                            value={updateCar.year}
                            onChange={updateCarOnChange}
                          />
                          <label>LOCATION</label>
                          <input
                            type="text"
                            name="location"
                            className="change-car-input"
                            placeholder="location"
                            value={updateCar.location}
                            onChange={updateCarOnChange}
                          />
                          <label>CONDITION</label>
                          <input
                            type="text"
                            name="condition"
                            className="change-car-input"
                            placeholder="new / used"
                            value={updateCar.condition}
                            onChange={updateCarOnChange}
                          />
                          <label>DAY PRICE</label>
                          <input
                            type="text"
                            name="day_price"
                            className="change-car-input"
                            placeholder="day price"
                            value={updateCar.day_price}
                            onChange={updateCarOnChange}
                          />
                          <button onClick={saveChangesOnClick}>
                            SAVE CHANGES
                          </button>
                          <button onClick={cancelUpdate}>CANCEL</button>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <span className="no-data">No data!</span>
                )
              ) : (
                ""
              )}
            </div>
            <div className="cars-update"></div>
          </div>
          {carPhotoPanel ? (
            <div className="car-photos">
              {/* ADD PHOTO */}
              <button onClick={addPhotoOnClick}>ADD PHOTO</button>
              {newPhotoPanel ? (
                <div className="car-photos-add">
                  <form className="car-photos-add-form">
                    <label>URL</label>
                    <input
                      type="text"
                      name="url"
                      placeholder="url"
                      value={addNewPhoto.url}
                      onChange={addPhotoOnChange}
                    />
                    <label>PHOTO</label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="photo url"
                      value={addNewPhoto.photo}
                      onChange={addPhotoOnChange}
                    />
                    <button onClick={saveNewPhoto}>SAVE</button>
                  </form>
                </div>
              ) : (
                ""
              )}
              {photos && carPhotoPanel ? (
                <div className="car-photos">
                  {photos.map((photo) => {
                    return (
                      <ul className="car-photo-list">
                        <li>
                          <h2 className="photo-url">URL: {photo.url}</h2>
                          <button
                            onClick={deletePhotoOnClick}
                            value={photo.url}
                          >
                            DELETE PHOTO
                          </button>
                          {/* <button>EDIT PHOTO</button> */}
                          <img
                            className="single-photo"
                            alt=""
                            src={photo.photo}
                          ></img>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}

          <div className="users">
            <div className="users-all">
              <h2 className="users-title">All Users</h2>
              <button onClick={showAllUsersOnClick}>
                {!showAllUsers ? "Show all users" : "Hide users"}
              </button>
              <div className="show-users">
                {showAllUsers
                  ? users
                    ? users.results
                      ? users.results.map((user) => {
                          return (
                            <ul className="user" key={user.url.slice(48, 51)}>
                              <li className="user-item">URL: {user.url}</li>
                              <li className="user-item">
                                USERNAME: {user.username}
                              </li>
                              <li className="user-item">
                                USER EMAIL: {user.email}
                              </li>

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
                              <button
                                onClick={editUserOnClick}
                                value={user.url}
                              >
                                Edit
                              </button>
                              <button
                                onClick={deleteUserOnClick}
                                value={user.url}
                              >
                                Delete
                              </button>
                            </ul>
                          );
                        })
                      : ""
                    : ""
                  : ""}
                {userDeleted}
                {openEditForm ? (
                  <div className="user-edit">
                    <form
                      className="user-edit-form"
                      type="submit"
                      onSubmit={saveChangesToUser}
                    >
                      <div className="user-update">
                        <h2 className="user-edit-title">User update</h2>
                        <label>USERNAME</label>
                        <input
                          name="username"
                          className="username"
                          type="text"
                          placeholder="username"
                          value={userUpdate.username}
                          onChange={editUserOnChange}
                        />
                        <label>EMAIL</label>
                        <input
                          name="email"
                          className="email"
                          type="email"
                          placeholder="email"
                          value={userUpdate.email}
                          onChange={editUserOnChange}
                        />
                        <label>PASSWORD</label>
                        <input
                          name="password"
                          className="password"
                          type="password"
                          placeholder="password"
                          value={userUpdate.password}
                          onChange={editUserOnChange}
                        />
                        <label>CONFIRM PASSWORD</label>
                        <input
                          name="password2"
                          className="password"
                          type="password"
                          placeholder="confirm password"
                          value={userUpdate.password2}
                          onChange={editUserOnChange}
                        />
                        <button type="submit">SAVE</button>
                      </div>
                      <div className="user-update-profile">
                        <h2 className="user-edit-title">User profile update</h2>
                        <label>First name</label>
                        <input
                          name="first_name"
                          className="first-name"
                          type="text"
                          placeholder="first name"
                          value={userUpdate.profile.first_name}
                          onChange={editUserOnChange}
                        />
                        <button type="submit">OK</button>
                        <label>Last name</label>
                        <input
                          name="last_name"
                          className="last-name"
                          type="text"
                          placeholder="last name"
                          value={userUpdate.profile.last_name}
                          onChange={editUserOnChange}
                        />
                        <button type="submit">OK</button>
                        <label>Country</label>
                        <input
                          name="country"
                          className="country"
                          type="text"
                          placeholder="country"
                          value={userUpdate.profile.country}
                          onChange={editUserOnChange}
                        />
                        <button type="submit">OK</button>
                        <label>City</label>
                        <input
                          name="city"
                          className="city"
                          type="text"
                          placeholder="city"
                          value={userUpdate.profile.city}
                          onChange={editUserOnChange}
                        />
                        <button type="submit">OK</button>
                        <label>Postal code</label>
                        <input
                          name="postal_code"
                          className="postal-code"
                          type="text"
                          placeholder="postal code"
                          value={userUpdate.profile.postal_code}
                          onChange={editUserOnChange}
                        />
                        <button type="submit">OK</button>
                        <label>Street</label>
                        <input
                          name="street"
                          className="street"
                          type="text"
                          placeholder="street"
                          value={userUpdate.profile.street}
                          onChange={editUserOnChange}
                        />
                        <button type="submit">OK</button>
                        <label>Apt. number</label>
                        <input
                          name="apartment_number"
                          className="apartment"
                          type="text"
                          placeholder="apt. number"
                          value={userUpdate.profile.apartment_number}
                          onChange={editUserOnChange}
                        />
                        <button type="submit">OK</button>
                        <label>Phone</label>
                        <input
                          name="phone_number"
                          className="phone"
                          type="text"
                          placeholder="phone"
                          value={userUpdate.profile.phone_number}
                          onChange={editUserOnChange}
                        />
                        <button type="submit">OK</button>
                      </div>

                      {/* <button type="submit">SAVE CHANGES</button> */}
                    </form>

                    <button onClick={cancelUserEdit}>CANCEL</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="users-by-ID">
              <h2 className="users-title">Users By ID</h2>
              <form className="users-by-ID-form">
                <label>User ID:</label>
                <input
                  placeholder="User ID"
                  value={userID.user}
                  name="user"
                  type="text"
                  onChange={onChangeUserID}
                ></input>
                <button type="submit" onClick={getUserById}>
                  Show user
                </button>
              </form>
              {singleUser ? (
                singleUser.username ? (
                  <ul className="single-user">
                    <li className="single-user-item">
                      USERNAME: {singleUser.username}
                    </li>
                    <li className="single-user-item">
                      EMAIL: {singleUser.email}
                    </li>
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
                    <button onClick={editUserOnClick}>Edit</button>
                    <button onClick={deleteUserOnClick}>Delete</button>
                  </ul>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              {singleUser ? (
                !singleUser.username ? (
                  <span className="no-data">No data!</span>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AdminPanel;
