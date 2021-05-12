import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function CosmeticDentistry() {
  return (
    <>
      <Navbar />
      <section className="cosmetic-dentistry">
        <h2 className="selected-doctors-info">
          Lekarze zajmujący się stomatologią estetyczną
        </h2>
        <ServicesDoctors doctorsdata={"aesthetics"} />
        <h2 className="services-prices-title">
          Cennik stomatologii estetycznej
        </h2>
        <ServicesPrices pricesdata={"Stomatologia estetyczna"} />
      </section>
    </>
  );
}

export default CosmeticDentistry;
