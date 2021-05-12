import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function PediatricDentistry() {
  return (
    <>
      <Navbar />
      <section className="pediatric-dentistry">
        <h2 className="selected-doctors-info">
          Lekarze dentyści dedykowani do stomatologii dziecięcej
        </h2>
        <ServicesDoctors doctorsdata={"pediatric"} />
        <h2 className="services-prices-title">
          Cennik stomatologii dziecięcej
        </h2>
        <ServicesPrices pricesdata={"Stomatologia dziecięca"} />
      </section>
    </>
  );
}

export default PediatricDentistry;
