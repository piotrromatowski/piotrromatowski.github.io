import React from "react";
import Carousel from "react-elastic-carousel";

const mainCarData = [
  {
    id: 1,
    linkCar:
      "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    carName: "Lamborghini Huracan",
    price: 299,
  },
  {
    id: 2,
    linkCar:
      "https://images.pexels.com/photos/1383834/pexels-photo-1383834.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    carName: "Nissan Skyline GTR",
    price: 499,
  },
  {
    id: 3,
    linkCar:
      "https://images.pexels.com/photos/5214397/pexels-photo-5214397.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    carName: "Dodge Challenger",
    price: 399,
  },
];

function PromotedCars() {
  return (
    <>
      <section className="promoted-cars">
        <Carousel
          pagination={false}
          showArrows={false}
          transitionMs={500}
          enableAutoPlay={true}
          autoPlaySpeed={2000}
        >
          {mainCarData.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  className="carousel-with-pictures"
                  style={{ backgroundImage: `url(${data.linkCar})` }}
                >
                  <div className="promoted-text">
                    <p className="car-category">Luxury Car Rental</p>
                    <h1 className="car-name">{data.carName}</h1>
                    <h2 className="car-price">
                      starting from ${data.price} per day
                    </h2>
                    <button className="prices">
                      <a href="/prices"> Show Prices</a>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>

        <div className="popular-cars">
          <div className="popular-car">
            <img
              src="https://images.pexels.com/photos/5704227/pexels-photo-5704227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <h3 className="popular-car-name">Mercedes</h3>
            <h4 className="popular-car-price">starting from $120</h4>
          </div>
          <div className="popular-car">
            <img
              src="https://images.pexels.com/photos/4909544/pexels-photo-4909544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <h3 className="popular-car-name">Cadillac</h3>
            <h4 className="popular-car-price">starting from $120</h4>
          </div>
          <div className="popular-car">
            <img
              src="https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <h3 className="popular-car-name">Audi</h3>
            <h4 className="popular-car-price">starting from $120</h4>
          </div>
          <div className="popular-car">
            <img
              src="https://images.pexels.com/photos/3972750/pexels-photo-3972750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <h3 className="popular-car-name">Lexus</h3>
            <h4 className="popular-car-price">starting from $120</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default PromotedCars;
