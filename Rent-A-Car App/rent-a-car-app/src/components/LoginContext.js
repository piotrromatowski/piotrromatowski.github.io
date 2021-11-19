import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [access, setAccess] = useState("");

  return (
    <LoginContext.Provider value={[access, setAccess]}>
      {props.children}
    </LoginContext.Provider>
  );
};
