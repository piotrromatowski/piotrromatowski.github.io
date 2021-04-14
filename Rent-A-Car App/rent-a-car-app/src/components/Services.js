import React, { useState } from "react";
// import ModalForm from "./ModalForm";

const carPictures = [
  "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

  "https://cdn.motor1.com/images/mgl/ekqEW/s1/2019-audi-a8l-first-drive.jpg",

  "https://images.unsplash.com/photo-1552519507-ac11af17dcc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
];

function Services() {
  const [currentImage, setCurrentImage] = useState(0);

  const prevPhotoOnClickHandle = () => {
    currentImage > 0 && setCurrentImage(currentImage - 1);
  };

  const nextPhotoOnClickHandle = () => {
    currentImage < carPictures.length - 1 && setCurrentImage(currentImage + 1);
  };

  // const [buttonModal, setButtonModal] = useState(false);
  return (
    <>
      <section id="services" className="our-services">
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
            <div className="buttons">
              <button className="left-btn" onClick={prevPhotoOnClickHandle}>
                <i class="fas fa-arrow-left"></i>
              </button>
              <button className="right-btn" onClick={nextPhotoOnClickHandle}>
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>

            <div
              className="best-cars-carousel"
              style={{ backgroundImage: `url(${carPictures[currentImage]})` }}
            >
              <div>
                <p>starting from $299 per day</p>
                {/* <button onClick={() => setButtonModal(true)}> */}
                <button>
                  <a href="/#cars-prices">rent a car</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ModalForm trigger={buttonModal} setTrigger={setButtonModal} /> */}
    </>
  );
}

export default Services;
