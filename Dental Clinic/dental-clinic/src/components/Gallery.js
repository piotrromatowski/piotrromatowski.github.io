import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GalleryItems } from "./GalleryItems";

function Gallery() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  useEffect(() => {
    width < 1300 && handleSideNavToggle();
  });
  function handleSideNavToggle() {
    console.log("toggle it");
  }
  console.log(width);
  return (
    <>
      <Navbar />
      <section className="gallery">
        <h1>
          <i className="fas fa-tooth"></i>
          <i className="fas fa-tooth"></i>
          <i className="fas fa-tooth"></i>
          Galeria
          <i className="fas fa-tooth"></i>
          <i className="fas fa-tooth"></i>
          <i className="fas fa-tooth"></i>
        </h1>
        {width >= 1300 && (
          <div className="gallery-container">
            {GalleryItems.map((item, index) => {
              return (
                <div className="gallery-card" key={index}>
                  <img src={item.link} alt=""></img>
                  <div className="gallery-card-head">Mr Dentist Clinic</div>
                </div>
              );
            })}
          </div>
        )}
        {width < 1300 && (
          <div className="gallery-container">
            {GalleryItems.map((item, index) => {
              return (
                <div className="gallery-small-card" key={index}>
                  <img
                    src={item.link}
                    alt=""
                    className="small-gallery-photo"
                  ></img>
                  {/* <div className="gallery-card-head">Mr Dentist Clinic</div> */}
                </div>
              );
            })}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Gallery;
