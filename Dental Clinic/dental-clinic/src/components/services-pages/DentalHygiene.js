import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function DentalHygiene() {
  return (
    <>
      <Navbar />
      <section className="dental-hygiene">
        <h2 className="selected-doctors-info">
          Nasze higienistki stomatologiczne
        </h2>
        <ServicesDoctors doctorsdata={"hygienist"} />
        <h2 className="services-prices-title">
          Cennik zabiegów higienizacyjnych
        </h2>
        <ServicesPrices pricesdata={"Profilaktyka"} />
      </section>
    </>
  );
}

export default DentalHygiene;
