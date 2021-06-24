import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GalleryItems } from "./GalleryItems";

function Gallery() {
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
      </section>
      <Footer />
    </>
  );
}

export default Gallery;
