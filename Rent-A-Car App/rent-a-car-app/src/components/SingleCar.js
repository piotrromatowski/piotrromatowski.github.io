import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { changeCarList } from "./OurCars";
import ModalForm from "./ModalForm";

const singleCarData = [
  {
    id: 3,
    photos: [
      {
        photo:
          "https://images.pexels.com/photos/3874330/pexels-photo-3874330.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      },
      {
        photo:
          "https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        photo:
          "https://images.pexels.com/photos/4061420/pexels-photo-4061420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    brand: "Toyota",
    model: "Supra",
    engine: "3.0L, petrol",
    mileage: "300",
    year: "2021",
    location: "Warsaw",
    condition: "new",
    day_price: "759.99",
    hour_price: "79.99",
    type: "sport",
  },
  {
    id: 2,
    photos: [
      {
        photo:
          "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        photo:
          "https://images.pexels.com/photos/898336/pexels-photo-898336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        photo:
          "https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    brand: "BMW",
    model: "IS300",
    engine: "3.2L, petrol",
    mileage: "25000",
    year: "2015",
    location: "Los Angeles",
    condition: "used",
    day_price: "559.99",
    hour_price: "59.99",
    type: "sport",
  },
  {
    id: 1,
    photos: [
      {
        photo:
          "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        photo:
          "https://rentacarapi.s3.amazonaws.com/photos/pexels-scosche-1149055.jpg",
      },
      {
        photo:
          "https://rentacarapi.s3.amazonaws.com/photos/pexels-scosche-1149056.jpg",
      },
    ],
    brand: "Toyota",
    model: "IS300",
    engine: "3.2L, petrol",
    mileage: "42000",
    year: "2015",
    location: "Los Angeles",
    condition: "used",
    day_price: "59.99",
    hour_price: "559.99",
    type: "suv",
  },
];

function SingleCar() {
  const [buttonModal, setButtonModal] = useState(false);
  return (
    <div className="newest-cars-list">
      {singleCarData.map((carData) => {
        console.log(changeCarList);
        if (changeCarList === "all" || changeCarList === "") {
          return (
            <div key={carData.id} id={carData.id} className="single-new-car">
              <Carousel
                pagination={false}
                // showArrows={false}
              >
                {carData.photos.map((carPhoto) => {
                  return (
                    <>
                      <img src={carPhoto.photo} alt={singleCarData.brand}></img>
                    </>
                  );
                })}
              </Carousel>
              <p className="car-model">{carData.brand}</p>
              <ul>
                <li className="location">Location: {carData.location}</li>
                <li className="engine">Engine: {carData.engine}</li>
                <li className="mileage">Mileage: {carData.mileage} km</li>
                <li className="condition">Conditon: {carData.condition}</li>
                <li className="year">Year: {carData.year}</li>
                <li className="brand">Brand: {carData.brand}</li>
                <li className="model">Model: {carData.model}</li>
                <li className="price-hour">
                  Price per hour: <span>${carData.hour_price}</span>
                </li>
                <li className="price-day">
                  Price per day: <span>${carData.day_price}</span>
                </li>
                <button onClick={() => setButtonModal(true)}>
                  rent car
                  {/* <a href="/rent">rent car</a> */}
                </button>
              </ul>
            </div>
          );
        } else if (carData.type === changeCarList) {
          return (
            <>
              <div key={carData.id} id={carData.id} className="single-new-car">
                <Carousel
                  pagination={false}
                  // showArrows={false}
                >
                  {carData.photos.map((carPhoto) => {
                    return (
                      <>
                        <img
                          src={carPhoto.photo}
                          alt={singleCarData.brand}
                        ></img>
                      </>
                    );
                  })}
                </Carousel>
                <p className="car-model">{carData.brand}</p>
                <ul>
                  <li className="location">Location: {carData.location}</li>
                  <li className="engine">Engine: {carData.engine}</li>
                  <li className="mileage">Mileage: {carData.mileage} km</li>
                  <li className="condition">Conditon: {carData.condition}</li>
                  <li className="year">Year: {carData.year}</li>
                  <li className="brand">Brand: {carData.brand}</li>
                  <li className="model">Model: {carData.model}</li>
                  <li className="price-hour">
                    Price per hour: <span>${carData.hour_price}</span>
                  </li>
                  <li className="price-day">
                    Price per day: <span>${carData.day_price}</span>
                  </li>
                  <button onClick={() => setButtonModal(true)}>
                    rent a car
                    {/* <a href="/rent">rent car</a> */}
                  </button>
                </ul>
              </div>
            </>
          );
        }
      })}
      <ModalForm trigger={buttonModal} setTrigger={setButtonModal} />
    </div>
  );
}

export default SingleCar;
