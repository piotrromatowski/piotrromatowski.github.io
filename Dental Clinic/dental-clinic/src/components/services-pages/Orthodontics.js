import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function Orthodontics() {
  return (
    <>
      <Navbar />
      <section className="orthodontics">
        <h2 className="selected-doctors-info">
          Lekarz zajmujący się leczeniem ortodontycznym
        </h2>
        <ServicesDoctors doctorsdata={"orthodontist"} />
        <h2 className="services-prices-title">
          Cennik leczenia ortodontycznego
        </h2>
        <ServicesPrices pricesdata={"Ortodoncja"} />
      </section>
    </>
  );
}

export default Orthodontics;
