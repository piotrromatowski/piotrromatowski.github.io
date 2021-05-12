import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";

function DentalXRay() {
  return (
    <>
      <Navbar />
      <section className="dental-x-ray">
        <h2 className="services-prices-title">
          Szczegółowy cennik prześwietlenia zębów
        </h2>
        <ServicesPrices pricesdata={"Rentgen stomatologiczny"} />
      </section>
    </>
  );
}

export default DentalXRay;
