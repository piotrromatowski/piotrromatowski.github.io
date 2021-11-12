import React, { useRef } from "react";
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

function PromotedCars(carResults) {
  const itemsPerPage = 1;
  const items = [1, 2, 3];
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let resetTimeout;

  const promoCarBanner = carResults.carResults.slice(0, 4);

  return (
    <>
      <section id="home" className="promoted-cars">
        <Carousel
          pagination={false}
          showArrows={false}
          transitionMs={3000}
          enableAutoPlay={true}
          autoPlaySpeed={6000}
          ref={carouselRef}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout);
            if (index + 1 === totalPages) {
              resetTimeout = setTimeout(() => {
                carouselRef.current.goTo(1);

                setTimeout(() => {
                  carouselRef.current.goTo(0);
                }, 6000);
              }, 6000);
            }
          }}
          itemsToShow={itemsPerPage}
        >
          {mainCarData.map((data) => {
            return (
              <>
                <div
                  className="carousel-with-pictures"
                  style={{ backgroundImage: `url(${data.linkCar})` }}
                  key={data.id + data.linkCar}
                >
                  <div key={data.id + "text"} className="promoted-text">
                    <p key={data.id + "category"} className="car-category">
                      Luxury Car Rental
                    </p>
                    <h1 key={data.carName + data.id} className="car-name">
                      {data.carName}
                    </h1>
                    <h2 key={data.price + data.id} className="car-price">
                      starting from ${data.price} per day
                    </h2>
                    <button
                      key={data.price + data.id + "button"}
                      className="prices"
                    >
                      <a
                        key={data.price + data.id + "link"}
                        href="/#cars-prices"
                      >
                        Show Prices
                      </a>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>

        <div className="popular-cars">
          {promoCarBanner.map((promotedCar) => {
            return (
              <>
                <div className="popular-car">
                  <img
                    src={promotedCar.photos
                      .map((pics) => {
                        return pics.photo;
                      })
                      .slice(0, 1)}
                    alt=""
                  />
                  <h3 className="popular-car-name">{promotedCar.brand}</h3>
                  <h4 className="popular-car-price">
                    starting from $ {promotedCar.day_price}
                  </h4>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default PromotedCars;
