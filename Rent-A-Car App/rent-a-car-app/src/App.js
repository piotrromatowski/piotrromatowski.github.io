import "./styles/App.scss";
import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";
import Nav from "./components/MainAndNav";
import Blog from "./components/Blog";
import UserAccount from "./components/UserAccount";
import ModalForm from "./components/ModalForm";

function App() {
  const [isClientLoggedIn, setIsClientLoggedIn] = useState({
    logged: false,
    login: "",
  });

  console.log(isClientLoggedIn);

  return (
    <Router>
      {<ModalForm isClientLoggedIn={isClientLoggedIn} />}
      <ScrollToTop>
        <main className="page">
          <Switch>
            <Route path="/" exact>
              <Nav isClientLoggedIn={isClientLoggedIn} />
            </Route>
            <Route component={Blog} path="/blog" />
            <Route path="/">
              <UserAccount
                setIsClientLoggedIn={setIsClientLoggedIn}
                isClientLoggedIn={isClientLoggedIn}
              />
            </Route>
          </Switch>
        </main>
      </ScrollToTop>
    </Router>
  );
}

export default App;
