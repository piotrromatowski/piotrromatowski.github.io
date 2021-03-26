import React, { useState } from "react";
import emailjs from "emailjs-com";
import Calendar from "react-calendar";

function ModalForm(props) {
  const [user, setUser] = useState({
    username: "",
    userMail: "",
    userPhone: "",
    message: "",
    dateFrom: new Date(),
    dateTo: new Date(),
  });

  const [usernameError, setUsernameError] = useState({});
  const [userMailError, setUserMailError] = useState({});
  const [userPhoneError, setUserPhoneError] = useState({});
  const [messageError, setMessageError] = useState({});

  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  let [calendarState, setCalendarState] = useState(true);
  const [showResDate, setShowResDate] = useState("");

  let style = {};
  const onClickCalendarHandle = () => {
    calendarState = !calendarState;
    setCalendarState(calendarState);

    calendarState
      ? (style = { display: "none" })
      : (style = { display: "flex" });
  };

  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(user);

    const isValid = formValidation();
    if (isValid) {
      emailjs
        .sendForm(
          "service_7qwi2aw",
          "template_27cogrh",
          e.target,
          "user_KAu5GebCnGeCX5HGIKkua"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      setUser({ username: "", userMail: "", userPhone: "", message: "" });
      setShowResDate("");
    }

    // e.target.reset();
  };

  const onChangeDateFrom = (dateFrom) => {
    setDateFrom(dateFrom);
  };
  const onChangeDateTo = (dateTo) => {
    setDateTo(dateTo);
  };

  const onClickShowDates = () => {
    setShowResDate(
      ` Reservation date: ${dateFrom.toLocaleDateString()} -
        ${dateTo.toLocaleDateString()}`
    );
  };
  console.log(showResDate);

  const formValidation = () => {
    const nameError = {};
    const mailError = {};
    const phoneError = {};
    const messageError = {};
    let isValid = true;

    if (user.username.trim().length < 2) {
      nameError.usernameShort = "Username is too short";
      isValid = false;
    }
    if (user.username.trim().length > 12) {
      nameError.usernameLong = "Username is too long";
      isValid = false;
    }
    if (!user.userMail.includes("@")) {
      mailError.userMailSign = "E-mail must contain @ sign";
      isValid = false;
    }
    if (user.userPhone.trim().length < 9) {
      phoneError.userPhoneShort = "Phone number is too short";
      isValid = false;
    }
    if (user.message.trim().length > 350) {
      messageError.messageLong = "Your message is too long";
      isValid = false;
    }
    setUsernameError(nameError);
    setUserMailError(mailError);
    setUserPhoneError(phoneError);
    setMessageError(messageError);
    return isValid;
  };

  return props.trigger ? (
    <div className="modal-form">
      <div className="close" onClick={() => props.setTrigger(false)}>
        <i className="far fa-times-circle"></i>
      </div>
      <form type="submit" className="form" onSubmit={sendEmail}>
        <div className="rentDate">
          <button
            type="button"
            onClick={onClickCalendarHandle}
            className="showCalendar"
          >
            {calendarState ? "SELECT DATES OF RENT" : "CLOSE CALENDAR"}
          </button>
          <div
            className="calendars"
            calendarState={calendarState}
            style={calendarState ? { display: "none" } : null}
          >
            <div className="dateFrom">
              <h3>From:</h3>
              <Calendar
                name="dateFrom"
                value={user.dateFrom}
                onChange={onChangeDateFrom}
                onClickDay={onClickShowDates}
              ></Calendar>
              {console.log(dateFrom.toLocaleDateString())}
            </div>
            <div className="dateTo">
              <h3>To:</h3>
              <Calendar
                name="dateTo"
                value={user.dateTo}
                onChange={onChangeDateTo}
                onClickDay={onClickShowDates}
              ></Calendar>
              {console.log(dateTo.toLocaleDateString())}
            </div>
          </div>
        </div>
        <label>
          <i className="fas fa-user"></i>USERNAME
        </label>
        <input
          name="username"
          className="username"
          type="text"
          placeholder="username"
          value={user.username}
          onChange={onChangeUser}
        ></input>
        {Object.keys(usernameError).map((key) => {
          return <span style={{ color: "red" }}>{usernameError[key]}</span>;
        })}
        <label>
          <i className="far fa-envelope"></i>EMAIL
        </label>
        <input
          name="userMail"
          className="email"
          type="email"
          placeholder="email"
          value={user.userMail}
          onChange={onChangeUser}
        ></input>
        {Object.keys(userMailError).map((key) => {
          return <span style={{ color: "red" }}>{userMailError[key]}</span>;
        })}
        <label>
          <i className="fas fa-phone-alt"></i>PHONE NUMBER
        </label>
        <input
          name="userPhone"
          className="phone"
          type="tel"
          placeholder="phone"
          value={user.userPhone}
          onChange={onChangeUser}
        ></input>
        {Object.keys(userPhoneError).map((key) => {
          return <span style={{ color: "red" }}>{userPhoneError[key]}</span>;
        })}
        <label>
          <i className="far fa-comment"></i>MESSAGE
        </label>
        <textarea
          name="message"
          className="message"
          type="text"
          placeholder="message"
          value={user.message}
          onChange={onChangeUser}
        ></textarea>
        {Object.keys(messageError).map((key) => {
          return <span style={{ color: "red" }}>{messageError[key]}</span>;
        })}
        <div className="show-date">{showResDate}</div>
        {console.log(showResDate)}
        <span>
          {calendarState ? "" : "Double click to set or change correct date"}
        </span>

        <button type="submit">SEND</button>
      </form>
    </div>
  ) : (
    ""
  );
}

export default ModalForm;
