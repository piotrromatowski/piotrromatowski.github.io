import React from "react";
import { useState } from "react";
import SingleCar from "./SingleCar";

export let changeCarList = "";

function OurCars() {
  const [listType, setListType] = useState("");

  const handleTypeCarClick = (e) => {
    setListType(e.target.className);
    changeCarList = e.target.className;
  };

  return (
    <>
      <section className="our-cars">
        <div id="cars-prices" className="newest-cars">
          <h2>
            Our Newest Cars<span></span>
          </h2>
          <ul>
            <li className="all" value="all" onClick={handleTypeCarClick}>
              All
            </li>
            <span> / </span>
            <li className="bus" value="bus" onClick={handleTypeCarClick}>
              Bus
            </li>
            <span> / </span>
            <li className="limo" value="limo" onClick={handleTypeCarClick}>
              Limo
            </li>
            <span> / </span>
            <li className="sport" value="sport" onClick={handleTypeCarClick}>
              Sport
            </li>
            <span> / </span>
            <li className="muscle" value="muscle" onClick={handleTypeCarClick}>
              Muscle
            </li>
            <span> / </span>
            <li className="suv" value="suv" onClick={handleTypeCarClick}>
              SUV
            </li>
          </ul>
          <div className="newest-cars-list">
            <SingleCar />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCars;
