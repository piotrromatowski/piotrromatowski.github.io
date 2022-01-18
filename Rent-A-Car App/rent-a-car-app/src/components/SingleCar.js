import React, { useContext, useState } from "react";
import Carousel from "react-elastic-carousel";
// import OurCars, { changeCarList, listType } from "./OurCars";
import ModalForm from "./ModalCalendarForm";
import UserReservation from "./UserReservation";
import { LoginContext } from "./LoginContext";

// const singlecarResults = [
//   {
//     id: 13,
//     photos: [
//       {
//         photo:
//           "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
//       },
//       {
//         photo:
//           "https://images.unsplash.com/photo-1552519507-ac11af17dcc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//       },
//       {
//         photo:
//           "https://images.unsplash.com/photo-1552519507-848ebd4028d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
//       },
//     ],
//     brand: "Chevrolet",
//     model: "Camaro ",
//     engine: "6.2L, petrol",
//     mileage: "22500",
//     year: "2020",
//     location: "Warsaw",
//     condition: "used",
//     day_price: "659.99",
//     hour_price: "65.99",
//     type: "muscle",
//   },
//   {
//     id: 12,
//     photos: [
//       {
//         photo:
//           "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/5759865/pexels-photo-5759865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/3954434/pexels-photo-3954434.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       },
//     ],
//     brand: "Ferrari",
//     model: "F12berlinetta ",
//     engine: "6.3L, petrol",
//     mileage: "17500",
//     year: "2012",
//     location: "Warsaw",
//     condition: "used",
//     day_price: "759.99",
//     hour_price: "75.99",
//     type: "sport",
//   },
//   {
//     id: 11,
//     photos: [
//       {
//         photo:
//           "https://images.pexels.com/photos/4635341/pexels-photo-4635341.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/4635345/pexels-photo-4635345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       },
//     ],
//     brand: "Lamborghini",
//     model: "Huracan",
//     engine: "5.2L, petrol",
//     mileage: "8500",
//     year: "2020",
//     location: "Warsaw",
//     condition: "used",
//     day_price: "799.99",
//     hour_price: "79.99",
//     type: "sport",
//   },
//   {
//     id: 10,
//     photos: [
//       {
//         photo:
//           "https://cdn.motor1.com/images/mgl/Px7Oy/s1/2019-audi-a8l-first-drive.jpg",
//       },
//       {
//         photo:
//           "https://cdn.motor1.com/images/mgl/xeyNq/s1/2019-audi-a8l-first-drive.jpg",
//       },
//       {
//         photo:
//           "https://cdn.motor1.com/images/mgl/ekqEW/s1/2019-audi-a8l-first-drive.jpg",
//       },
//     ],
//     brand: "Audi",
//     model: "A8 L",
//     engine: "3.0L, petrol",
//     mileage: "15000",
//     year: "2021",
//     location: "Warsaw",
//     condition: "used",
//     day_price: "609.99",
//     hour_price: "69.99",
//     type: "limo",
//   },
//   {
//     id: 9,
//     photos: [
//       {
//         photo:
//           "https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/100651/pexels-photo-100651.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       },
//     ],
//     brand: "BMW",
//     model: "335D",
//     engine: "3.5L, diesel",
//     mileage: "95000",
//     year: "2020",
//     location: "Warsaw",
//     condition: "used",
//     day_price: "309.99",
//     hour_price: "39.99",
//     type: "limo",
//   },
//   {
//     id: 8,
//     photos: [
//       {
//         photo:
//           "https://store.carlexdesignlimited.com/images/virtuemart/product/mercedes-benz_exy_extreme_demo_car_01.jpg",
//       },
//       {
//         photo:
//           "https://store.carlexdesignlimited.com/images/virtuemart/product/mercedes-benz_exy_extreme_demo_car_02.jpg",
//       },
//       {
//         photo:
//           "https://store.carlexdesignlimited.com/images/virtuemart/product/mercedes-benz_exy_extreme_demo_car_03.jpg",
//       },
//     ],
//     brand: "Mercedes",
//     model: "X-Class EXY",
//     engine: "3.0L, diesel",
//     mileage: "25000",
//     year: "2021",
//     location: "Warsaw",
//     condition: "used",
//     day_price: "509.99",
//     hour_price: "59.99",
//     type: "suv",
//   },
//   {
//     id: 7,
//     photos: [
//       {
//         photo:
//           "https://store.carlexdesignlimited.com/images/virtuemart/product/Mercedes-Benz_Sprinter_Carlex_Design_Unpainted_012.jpg",
//       },
//       {
//         photo:
//           "https://store.carlexdesignlimited.com/images/virtuemart/product/MERCEDES-BENZ_SPRINTER_EXTERIOR_04.jpg",
//       },
//       {
//         photo:
//           "https://store.carlexdesignlimited.com/images/virtuemart/product/MERCEDES-BENZ_SPRINTER_EXTERIOR_06.jpg",
//       },
//     ],
//     brand: "Mercedes",
//     model: "Sprinter",
//     engine: "3.0L, diesel",
//     mileage: "55000",
//     year: "2020",
//     location: "Warsaw",
//     condition: "used",
//     day_price: "209.99",
//     hour_price: "29.99",
//     type: "bus",
//   },
//   {
//     id: 6,
//     photos: [
//       {
//         photo:
//           "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/2832251/pexels-photo-2832251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/2533090/pexels-photo-2533090.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       },
//     ],
//     brand: "Volkswagen",
//     model: "T1",
//     engine: "1.6L, petrol",
//     mileage: "220000",
//     year: "1968",
//     location: "Warsaw",
//     condition: "used",
//     day_price: "309.99",
//     hour_price: "39.99",
//     type: "bus",
//   },
//   {
//     id: 5,
//     photos: [
//       {
//         photo:
//           "https://images.unsplash.com/photo-1573763688302-374349a7f3bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//       },
//       {
//         photo:
//           "https://images.unsplash.com/photo-1574629399771-563c592b8fc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//       },
//       {
//         photo:
//           "https://images.unsplash.com/photo-1574628433491-466ec5b5dbf6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80",
//       },
//     ],
//     brand: "Nissan",
//     model: "Skyline GT-R",
//     engine: "2.6L, petrol",
//     mileage: "80000",
//     year: "2001",
//     location: "Warsaw",
//     condition: "used",
//     day_price: "809.99",
//     hour_price: "80.99",
//     type: "sport",
//   },
//   {
//     id: 4,
//     photos: [
//       {
//         photo:
//           "https://cdn.motor1.com/images/mgl/kXr6Q/s1/dodge-challenger-srt-demon-speedkore-carbon-fiber-profile.jpg",
//       },
//       {
//         photo:
//           "https://cdn.motor1.com/images/mgl/GGNZZ/s1/dodge-challenger-srt-demon-speedkore-carbon-fiber-fender.jpg",
//       },
//       {
//         photo:
//           "https://cdn.motor1.com/images/mgl/1x7kW/s1/dodge-challenger-srt-demon-speedkore-carbon-fiber-profile-side.jpg",
//       },
//     ],
//     brand: "Dodge",
//     model: "Demon",
//     engine: "6.2L, petrol",
//     mileage: "300",
//     year: "2020",
//     location: "Warsaw",
//     condition: "new",
//     day_price: "859.99",
//     hour_price: "89.99",
//     type: "muscle",
//   },
//   {
//     id: 3,
//     photos: [
//       {
//         photo:
//           "https://images.pexels.com/photos/3874330/pexels-photo-3874330.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/4061420/pexels-photo-4061420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       },
//     ],
//     brand: "Toyota",
//     model: "Supra",
//     engine: "3.0L, petrol",
//     mileage: "300",
//     year: "2021",
//     location: "Warsaw",
//     condition: "new",
//     day_price: "759.99",
//     hour_price: "79.99",
//     type: "sport",
//   },
//   {
//     id: 2,
//     photos: [
//       {
//         photo:
//           "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/898336/pexels-photo-898336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       },
//     ],
//     brand: "BMW",
//     model: "350",
//     engine: "3.5L, petrol",
//     mileage: "75000",
//     year: "2020",
//     location: "Los Angeles",
//     condition: "used",
//     day_price: "459.99",
//     hour_price: "49.99",
//     type: "sport",
//   },
//   {
//     id: 1,
//     photos: [
//       {
//         photo:
//           "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       },
//       {
//         photo:
//           "https://rentacarapi.s3.amazonaws.com/photos/pexels-scosche-1149055.jpg",
//       },
//       {
//         photo:
//           "https://rentacarapi.s3.amazonaws.com/photos/pexels-scosche-1149056.jpg",
//       },
//     ],
//     brand: "Toyota",
//     model: "Tacoma",
//     engine: "3.5L, diesel",
//     mileage: "42000",
//     year: "2019",
//     location: "Los Angeles",
//     condition: "used",
//     day_price: "559.99",
//     hour_price: "59.99",
//     type: "suv",
//   },
// ];

function SingleCar({ listType, carResults, login }) {
  const [access, setAccess] = useContext(LoginContext);
  const [buttonModal, setButtonModal] = useState(false);
  const [choosenCar, setChoosenCar] = useState("");
  const [bookingDate, setBookingDate] = useState({
    booking_start: "",
    booking_end: "",
  });

  console.log(login);

  const [reservedCar, setReservedCar] = useState({
    brand: "",
    model: "",
    engine: "",
    year: "",
    location: "",
    condition: "",
    day_price: "",
  });

  const [reservation, setReservation] = useState({
    car: {},
    car_id: "",
    booking_start: "",
    booking_end: "",
  });

  const handleSetButtonModal = (e) => {
    setButtonModal(true);

    setChoosenCar(e.target.value);
    const value1 = e.target.getAttribute("data-value1");
    const value2 = e.target.getAttribute("data-value2");
    const value3 = e.target.getAttribute("data-value3");
    const value4 = e.target.getAttribute("data-value4");
    const value5 = e.target.getAttribute("data-value5");
    const value6 = e.target.getAttribute("data-value6");
    const value7 = e.target.getAttribute("data-value7");
    const value8 = e.target.getAttribute("data-value8");

    const getData = () => {
      setReservedCar({
        brand: value1,
        model: value2,
        engine: value3,
        year: value4,
        location: value5,
        condition: value6,
        day_price: value7,
      });
    };
    getData();
    setReservation({
      car: reservedCar,
      car_id: value8,
      booking_start: new Date(),
      booking_end: new Date(),
    });
  };

  console.log(reservedCar);
  console.log(reservation);

  return (
    <div className="newest-cars-list">
      {carResults.map((carResults) => {
        // console.log(carResults.url.slice(47, 48));
        if (
          // changeCarList === "all" ||
          // changeCarList === "" ||
          // carResults.type === changeCarList
          // console.log(carResults.type === listType.listType)
          carResults.type === listType.listType ||
          listType.listType === "all" ||
          listType.listType === ""
        ) {
          return (
            <div
              key={carResults.count}
              id={carResults.url.slice(47, 48)}
              className="single-new-car"
            >
              <Carousel
                pagination={false}
                key={carResults.count + "carousel"}
                // showArrows={false}
              >
                {carResults.photos.map((carPhoto) => {
                  return (
                    <>
                      <img
                        key={carPhoto.photo}
                        src={carPhoto.photo}
                        alt=""
                        // alt={singlecarResults.brand}
                      ></img>
                    </>
                  );
                })}
              </Carousel>
              <p
                key={carResults.brand + carResults.count + carResults.model}
                className="car-model"
              >
                {carResults.brand}
              </p>
              <ul key={carResults.model + carResults.year}>
                <li
                  key={carResults.count + carResults.location}
                  className="location"
                >
                  Location: {carResults.location}
                </li>
                <li
                  key={carResults.count + carResults.engine}
                  className="engine"
                >
                  Engine: {carResults.engine}
                </li>
                <li
                  key={carResults.count + carResults.mileage}
                  className="mileage"
                >
                  Mileage: {Math.floor(Math.random() * 10000)}km
                  {/* {carResults.mileage}  */}
                </li>
                <li
                  key={carResults.count + carResults.condition}
                  className="condition"
                >
                  Conditon: {carResults.condition}
                </li>
                <li key={carResults.count + carResults.year} className="year">
                  Year: {carResults.year}
                </li>
                <li key={carResults.count + carResults.brand} className="brand">
                  Brand: {carResults.brand}
                </li>
                <li key={carResults.count + carResults.model} className="model">
                  Model: {carResults.model}
                </li>
                <li
                  key={carResults.count + carResults.day_price / 10}
                  className="price-hour"
                >
                  Price per hour: <span>${carResults.day_price / 10}</span>
                </li>
                <li
                  key={carResults.count + carResults.day_price}
                  className="price-day"
                >
                  Price per day: <span>${carResults.day_price}</span>
                </li>
                <button
                  type="submit"
                  key={carResults.count + "button"}
                  onClick={handleSetButtonModal}
                  // value={`${carResults.id} ${carResults.brand} ${carResults.model}`}
                  value={`${carResults.brand} ${carResults.model}`}
                  data-value1={carResults.brand}
                  data-value2={carResults.model}
                  data-value3={carResults.engine}
                  data-value4={carResults.year}
                  data-value5={carResults.location}
                  data-value6={carResults.condition}
                  data-value7={carResults.day_price}
                  data-value8={carResults.url.slice(47, 48)}
                >
                  {login !== "" && access.access
                    ? "rent a car"
                    : "log in to rent"}
                  {/* <a href="/rent">rent car</a> */}
                </button>
              </ul>
            </div>
          );
        } else
          return console.log(
            `Only ${carResults.photos.length} other vehicles is available now`
          );
      })}

      {login !== "" && access.access ? (
        <ModalForm
          bookingDate={bookingDate}
          setBookingDate={setBookingDate}
          trigger={buttonModal}
          setTrigger={setButtonModal}
          choosenCar={choosenCar}
        />
      ) : (
        ""
      )}
      <UserReservation
        reservation={reservation}
        login={login}
        reservedCar={reservedCar}
        bookingDate={bookingDate}
      />
    </div>
  );
}

export default SingleCar;
