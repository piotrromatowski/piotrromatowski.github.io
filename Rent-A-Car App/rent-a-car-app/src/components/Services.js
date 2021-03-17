import React from "react";

function Services() {
  return (
    <>
      <section className="our-services">
        <div className="best-cars">
          <div className="offer">
            <p className="offer-title">
              We offer clean cars for everyone
              <span>fast.cheap.quality.security</span>
            </p>
            <p className="offer-more">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda deleniti id ratione asperiores porro optio sunt
              architecto minima corrupti possimus fuga libero quaerat repellat
              ullam nesciunt aperiam quia dolorum, voluptate vitae esse
              distinctio hic tenetur voluptatibus tempore. Delectus nisi aliquam
              modi dolor? Minus aut maiores iste obcaecati, mollitia omnis quae.
            </p>
            <div className="best-cars-carousel">
              <div>
                <p>starting from $299 per day</p>
                <button>
                  <a href="/rent">rent a car</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
