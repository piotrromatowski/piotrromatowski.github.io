import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to="sign-up">
      <button className="btn">Sign UP</button>
    </Link>
  );
}

export default Button;
