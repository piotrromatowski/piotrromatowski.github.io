import React, { useState } from "react";

function ModalForm(props) {
  const [nameValue, setNameValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleMailChange = (e) => {
    setMailValue(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessageValue(e.target.value);
  };

  return props.trigger ? (
    <div className="modal-form">
      <div className="close" onClick={() => props.setTrigger(false)}>
        <i className="far fa-times-circle"></i>
      </div>
      <form type="submit" className="form">
        <label>
          <i className="fas fa-user"></i>USERNAME
        </label>
        <input
          className="username"
          type="text"
          placeholder="username"
          value={nameValue}
          onChange={handleNameChange}
        ></input>
        <label>
          <i className="far fa-envelope"></i>EMAIL
        </label>
        <input
          className="email"
          type="email"
          placeholder="email"
          value={mailValue}
          onChange={handleMailChange}
        ></input>
        <label>
          <i className="fas fa-phone-alt"></i>PHONE NUMBER
        </label>
        <input
          className="phone"
          type="tel"
          placeholder="phone"
          value={phoneValue}
          onChange={handlePhoneChange}
        ></input>
        <label>
          <i className="far fa-comment"></i>MESSAGE
        </label>
        <textarea
          className="message"
          type="text"
          placeholder="message"
          value={messageValue}
          onChange={handleMessageChange}
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  ) : (
    ""
  );
}

export default ModalForm;
