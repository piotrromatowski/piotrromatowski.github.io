import React from "react";
import Navbar from "../Navbar";
import ServicesPrices from "./ServicesPrices";
import ServicesDoctors from "./ServicesDoctors";

function RootCanal() {
  return (
    <>
      <Navbar />
      <section className="root-canal">
        <h4 className="selected-doctors-info">
          Lekarze zajmujący się leczeniem kanałowym
        </h4>
        <ServicesDoctors doctorsdata={"root"} />
        <h3 className="services-prices-title">Cennik leczenia kanałowego</h3>
        <ServicesPrices pricesdata={"Leczenie kanałowe – Endodoncja"} />
      </section>
    </>
  );
}

export default RootCanal;
