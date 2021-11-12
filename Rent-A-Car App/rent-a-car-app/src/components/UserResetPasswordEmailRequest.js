import React, { useState } from "react";

function UserResetPasswordEmailRequest(params) {
  const [passwordReset, setPasswordReset] = useState({
    email: "",
  });

  const [requestSend, setRequestSend] = useState(false);

  const onChangePasswordReset = (e) => {
    setPasswordReset({
      email: e.target.value,
    });
  };

  const url = "https://car-rental-rest-api.herokuapp.com/request-reset-email/";

  const resetRequest = (e) => {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passwordReset),
    }).then((response) => {
      console.log(passwordReset);
      response.json();
      console.log(response.status);
      if (response.status === 200) {
        setRequestSend(true);
      }
    });
    setPasswordReset({
      email: "",
    });
  };

  return (
    <>
      <h2>Forgot Your password? Reset by email</h2>
      <form type="submit" className="reset-form" onSubmit={resetRequest}>
        <label>Email</label>
        <input
          name="email"
          className="email"
          type="email"
          placeholder="email"
          value={passwordReset.email}
          onChange={onChangePasswordReset}
        ></input>
        <button type="submit">Reset password</button>
        {requestSend ? (
          <span style={{ color: "red" }}>Request send, check Your email.</span>
        ) : (
          ""
        )}
      </form>
    </>
  );
}
export default UserResetPasswordEmailRequest;
