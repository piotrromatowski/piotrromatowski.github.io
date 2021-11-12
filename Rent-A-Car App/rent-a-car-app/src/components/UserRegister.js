import React, { useState } from "react";

function UserRegister(params) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    profile: {},
  });

  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    postal_code: "",
    street: "",
    apartment_number: "",
    phone_number: "",
  });

  const [usernameError, setUsernameError] = useState({});
  const [userMailError, setUserMailError] = useState({});
  const [userPasswordError, setUserPasswordError] = useState({});
  const [userPassword2Error, setUserPassword2Error] = useState({});
  const [userPhoneError, setUserPhoneError] = useState({});
  const [otherError, setOtherError] = useState({});

  const onChangeuser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      profile: profile,
    });
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  //   console.log(user, { profile });
  const url = "https://car-rental-rest-api.herokuapp.com/users/";

  const registerUser = (e) => {
    e.preventDefault();
    console.log(user);

    const isValid = formValidation();

    if (isValid) {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((user) => {
          console.log("Success:", user);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setUser({
        username: "",
        email: "",
        password: "",
        password2: "",
        profile: {},
      });
      setProfile({
        first_name: "",
        last_name: "",
        country: "",
        city: "",
        postal_code: "",
        street: "",
        apartment_number: "",
        phone_number: "",
      });
    }
  };

  const formValidation = () => {
    const nameError = {};
    const mailError = {};
    const passwordError = {};
    const password2Error = {};
    const phoneError = {};
    const otherError = {};
    let isValid = true;

    if (user.username.trim().length < 2) {
      nameError.usernameShort = "Username is too short";
      isValid = false;
    }
    if (user.username.trim().length > 50) {
      nameError.usernameLong = "Username is too long";
      isValid = false;
    }
    if (!user.email.includes("@")) {
      mailError.userMailSign = "E-mail must contain @ sign";
      isValid = false;
    }
    if (user.password.trim().length < 8) {
      passwordError.passwordShort =
        "This password is too short. It must contain at least 8 characters.";
      isValid = false;
    }
    if (user.password !== user.password2) {
      password2Error.differentPasswords = "Passwords must be the same";
      isValid = false;
    }
    if (profile.phone_number.trim().length < 9) {
      phoneError.userPhoneShort = "Phone number is too short";
      isValid = false;
    }
    if (profile.phone_number.trim().length > 15) {
      phoneError.userPhoneLong = "Phone number is too long";
      isValid = false;
    }
    if (
      profile.first_name.trim().length > 50 ||
      profile.last_name.trim().length > 50 ||
      profile.country.trim().length > 50 ||
      profile.city.trim().length > 50 ||
      profile.postal_code.trim().length > 10 ||
      profile.street.trim().length > 50 ||
      profile.apartment_number.trim().length > 10
    ) {
      otherError.otherLong = "Text is too long";
      isValid = false;
    }
    if (
      profile.first_name.trim().length < 2 ||
      profile.last_name.trim().length < 2 ||
      profile.country.trim().length < 2 ||
      profile.city.trim().length < 2 ||
      profile.postal_code.trim().length < 2 ||
      profile.street.trim().length < 2 ||
      profile.apartment_number.trim().length < 2
    ) {
      otherError.otherShort = "Text is too short";
      isValid = false;
    }
    setUsernameError(nameError);
    setUserMailError(mailError);
    setUserPasswordError(passwordError);
    setUserPassword2Error(password2Error);
    setUserPhoneError(phoneError);
    setOtherError(otherError);
    return isValid;
  };

  return (
    <>
      <form type="submit" className="user-form" onSubmit={registerUser}>
        <div className="main">
          MAIN
          <label>Username</label>
          <input
            name="username"
            className="username"
            type="text"
            placeholder="username"
            value={user.username}
            onChange={onChangeuser}
          ></input>
          {Object.keys(usernameError).map((key) => {
            return <span style={{ color: "red" }}>{usernameError[key]}</span>;
          })}
          <label>Email</label>
          <input
            name="email"
            className="email"
            type="email"
            placeholder="email"
            value={user.email}
            onChange={onChangeuser}
          ></input>
          {Object.keys(userMailError).map((key) => {
            return <span style={{ color: "red" }}>{userMailError[key]}</span>;
          })}
          <label>Password</label>
          <input
            name="password"
            className="password"
            type="password"
            placeholder="password"
            value={user.password}
            onChange={onChangeuser}
          ></input>
          {Object.keys(userPasswordError).map((key) => {
            return (
              <span style={{ color: "red" }}>{userPasswordError[key]}</span>
            );
          })}
          <label>Confirm password</label>
          <input
            name="password2"
            className="confirm-password"
            type="password"
            placeholder="confirm password"
            value={user.password2}
            onChange={onChangeuser}
          ></input>
          {Object.keys(userPassword2Error).map((key) => {
            return (
              <span style={{ color: "red" }}>{userPassword2Error[key]}</span>
            );
          })}
        </div>
        <div className="profile">
          PROFILE
          <label>Login</label>
          <input
            name="first_name"
            className="first-name"
            type="text"
            placeholder="first name"
            value={profile.first_name}
            onChange={onChangeuser}
          ></input>
          {Object.keys(otherError).map((key) => {
            return <span style={{ color: "red" }}>{otherError[key]}</span>;
          })}
          <label>Last name</label>
          <input
            name="last_name"
            className="last-name"
            type="text"
            placeholder="last name"
            value={profile.last_name}
            onChange={onChangeuser}
          ></input>
          {Object.keys(otherError).map((key) => {
            return <span style={{ color: "red" }}>{otherError[key]}</span>;
          })}
          <label>City</label>
          <input
            name="city"
            className="city"
            type="text"
            placeholder="city"
            value={profile.city}
            onChange={onChangeuser}
          ></input>
          {Object.keys(otherError).map((key) => {
            return <span style={{ color: "red" }}>{otherError[key]}</span>;
          })}
          <label>Country</label>
          <input
            name="country"
            className="country"
            type="text"
            placeholder="country"
            value={profile.country}
            onChange={onChangeuser}
          ></input>
          {Object.keys(otherError).map((key) => {
            return <span style={{ color: "red" }}>{otherError[key]}</span>;
          })}
          <label>Postal code</label>
          <input
            name="postal_code"
            className="postal-code"
            type="text"
            placeholder="postal code"
            value={profile.postal_code}
            onChange={onChangeuser}
          ></input>
          {Object.keys(otherError).map((key) => {
            return <span style={{ color: "red" }}>{otherError[key]}</span>;
          })}
          <label>Street</label>
          <input
            name="street"
            className="street"
            type="text"
            placeholder="street"
            value={profile.street}
            onChange={onChangeuser}
          ></input>
          {Object.keys(otherError).map((key) => {
            return <span style={{ color: "red" }}>{otherError[key]}</span>;
          })}
          <label>Apartment number</label>
          <input
            name="apartment_number"
            className="apartment-number"
            type="text"
            placeholder="apartment number"
            value={profile.apartment_number}
            onChange={onChangeuser}
          ></input>
          {Object.keys(otherError).map((key) => {
            return <span style={{ color: "red" }}>{otherError[key]}</span>;
          })}
          <label>Phone</label>
          <input
            name="phone_number"
            className="phone"
            type="phone"
            placeholder="phone"
            value={profile.phone_number}
            onChange={onChangeuser}
          ></input>
          {Object.keys(userPhoneError).map((key) => {
            return <span style={{ color: "red" }}>{userPhoneError[key]}</span>;
          })}
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
export default UserRegister;
