import React, { useState } from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function ConservativeDentistry() {
  return (
    <>
      <Navbar />
      <section className="conservative-dentistry">
        <h2 className="selected-doctors-info">
          Lekarze zajmujący się stomatologią zachowawczą
        </h2>
        <ServicesDoctors doctorsdata={"conservative"} />
        <h2 className="services-prices-title">
          Cennik stomatologii zachowawczej
        </h2>
        <ServicesPrices pricesdata={"Stomatologia zachowawcza"} />
      </section>
    </>
  );
}

export default ConservativeDentistry;
