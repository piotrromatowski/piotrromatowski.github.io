import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </Router>
  );
}

export default App;
