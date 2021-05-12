import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function Periodontology() {
  return (
    <>
      <Navbar />
      <section className="periodontology">
        <h2 className="selected-doctors-info">
          Lekarz zajmujący się leczeniem periodontologicznym
        </h2>
        <ServicesDoctors doctorsdata={"periodontist"} />
        <h2 className="services-prices-title">
          Cennik zabiegów periodontologicznych
        </h2>
        <ServicesPrices pricesdata={"Periodontologia"} />
      </section>
    </>
  );
}

export default Periodontology;
