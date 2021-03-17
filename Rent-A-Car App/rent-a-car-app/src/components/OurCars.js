import React from "react";
import SingleCar from "./SingleCar";

function OurCars() {
  return (
    <>
      <section className="our-cars">
        <div className="newest-cars">
          <h2>
            Our Newest Cars<span></span>
          </h2>
          <ul>
            <li className="all">All</li>
            <span> / </span>
            <li className="bus">Bus </li>
            <span> / </span>
            <li className="limo">Limo </li>
            <span> / </span>
            <li className="sport">Sport </li>
            <span> / </span>
            <li className="muscle">Muscle </li>
            <span> / </span>
            <li className="suv">SUV</li>
          </ul>
          <div className="newest-cars-list">
            <div className="single-new-car">
              <img
                src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <p className="car-model">Toyota</p>
              <ul>
                <li className="location">Location: Los Angeles</li>
                <li className="engine">Engine: 3.2L, petrol</li>
                <li className="mileage">Mileage: 30000 km</li>
                <li className="condition">Conditon: Used</li>
                <li className="year">Year: 2015</li>
                <li className="brand">Brand: Lexus</li>
                <li className="model">Model: IS300</li>
                <li className="price-hour">
                  Price per hour: <span>$59.99</span>
                </li>
                <li className="price-day">
                  Price per day: <span>$559.99</span>
                </li>
                <button>
                  <a href="/rent">rent car</a>
                </button>
              </ul>
            </div>
            <div className="single-new-car">
              <img
                src="https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <p className="car-model">BMW</p>
              <ul>
                <li className="location">Location: Los Angeles</li>
                <li className="engine">Engine: 3.2L, petrol</li>
                <li className="mileage">Mileage: 30000 km</li>
                <li className="condition">Conditon: Used</li>
                <li className="year">Year: 2015</li>
                <li className="brand">Brand: Lexus</li>
                <li className="model">Model: IS300</li>
                <li className="price-hour">
                  Price per hour: <span>$59.99</span>
                </li>
                <li className="price-day">
                  Price per day: <span>$559.99</span>
                </li>
                <button>
                  <a href="/rent">rent car</a>
                </button>
              </ul>
            </div>
            <div className="single-new-car">
              <img
                src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <p className="car-model">Land Rover</p>
              <ul>
                <li className="location">Location: Los Angeles</li>
                <li className="engine">Engine: 3.2L, petrol</li>
                <li className="mileage">Mileage: 30000 km</li>
                <li className="condition">Conditon: Used</li>
                <li className="year">Year: 2015</li>
                <li className="brand">Brand: Lexus</li>
                <li className="model">Model: IS300</li>
                <li className="price-hour">
                  Price per hour: <span>$59.99</span>
                </li>
                <li className="price-day">
                  Price per day: <span>$559.99</span>
                </li>
                <button>
                  <a href="/rent">rent car</a>
                </button>
              </ul>
            </div>
            <div className="single-new-car">
              <img
                src="https://images.pexels.com/photos/3541743/pexels-photo-3541743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <p className="car-model">Mercedes</p>
              <ul>
                <li className="location">Location: Los Angeles</li>
                <li className="engine">Engine: 3.2L, petrol</li>
                <li className="mileage">Mileage: 30000 km</li>
                <li className="condition">Conditon: Used</li>
                <li className="year">Year: 2015</li>
                <li className="brand">Brand: Lexus</li>
                <li className="model">Model: IS300</li>
                <li className="price-hour">
                  Price per hour: <span>$59.99</span>
                </li>
                <li className="price-day">
                  Price per day: <span>$559.99</span>
                </li>
                <button>
                  <a href="/rent">rent car</a>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCars;
