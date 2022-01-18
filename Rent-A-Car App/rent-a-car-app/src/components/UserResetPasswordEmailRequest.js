import React, { useContext, useState } from "react";
import { LoginContext } from "./LoginContext";

function UserResetPasswordEmailRequest(params) {
  const [access, setAccess] = useContext(LoginContext);
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
      headers: {
        accept: "application/json",
        authorization: `Bearer ${access.access}`,
        "Content-Type": "application/json",
        "X-CSRFToken": `${access.access}`,
      },
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
      {access ? (
        ""
      ) : (
        <div className="reset-wrapper">
          <h2 className="reset-title">Forgot Your password? Reset by email</h2>
          <form type="submit" className="reset-form" onSubmit={resetRequest}>
            {/* <label>Email</label> */}
            <input
              name="email"
              className="email"
              type="email"
              placeholder="email"
              value={passwordReset.email}
              onChange={onChangePasswordReset}
            ></input>
            <button className="reset-btn" type="submit">
              Reset password
            </button>
            {requestSend ? (
              <span style={{ color: "red" }}>
                Request send, check Your email.
              </span>
            ) : (
              ""
            )}
          </form>
        </div>
      )}
    </>
  );
}
export default UserResetPasswordEmailRequest;
