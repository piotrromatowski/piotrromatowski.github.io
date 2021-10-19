import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeSlider() {
  const list = [
    {
      href: "https://images.pexels.com/photos/6812463/pexels-photo-6812463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      linkto: "/comprehensive-treatment",
      desc: "Leczenie kompleksowe",
    },
    {
      href: "https://images.pexels.com/photos/4687360/pexels-photo-4687360.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      linkto: "/root-canal-treatment",
      desc: "Leczenie kanałowe",
    },
    {
      href: "https://images.pexels.com/photos/5355710/pexels-photo-5355710.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      linkto: "/dental-surgery",
      desc: "Chirurgia stomatologiczna",
    },
    {
      href: "https://images.pexels.com/photos/5355838/pexels-photo-5355838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      linkto: "/prosthodontics",
      desc: "Protetyka",
    },
    {
      href: "https://images.pexels.com/photos/5355899/pexels-photo-5355899.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      linkto: "/cosmetic-dentistry",
      desc: "Stomatologia estetyczna",
    },
    {
      href: "https://images.pexels.com/photos/4269370/pexels-photo-4269370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      linkto: "/implants",
      desc: "Implanty",
    },
    {
      href: "https://images.pexels.com/photos/6528907/pexels-photo-6528907.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      linkto: "/orthodontics",
      desc: "Ortodoncja",
    },
    {
      href: "https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      linkto: "/conservative-dentistry",
      desc: "Stomatologia zachowawcza",
    },
    {
      href: "https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      linkto: "/pediatric-dentistry",
      desc: "Stomatologia dziecięca",
    },
    {
      href: "https://images.pexels.com/photos/6502162/pexels-photo-6502162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      linkto: "/dental-x-ray",
      desc: "Rentgen zębów",
    },
    {
      href: "https://images.pexels.com/photos/6690852/pexels-photo-6690852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      linkto: "/dental-hygiene",
      desc: "Higiena zębów",
    },
    {
      href: "https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      linkto: "/periodontology",
      desc: "Periodontologia",
    },
  ];

  return (
    <>
      <section className="slider">
        <div className="services-carousel">
          <Carousel
            autoPlay="true"
            infiniteLoop="true"
            showThumbs="false"
            centerMode="true"
            centerSlidePercentage="30"
            width="100%"
            styles={styles}
            useKeyboardArrows="true"
          >
            {list.map((item, index) => {
              return (
                <>
                  <Link to={item.linkto}>
                    <div className="services-slider">
                      <span>{item.desc}</span>
                      <img src={item.href} alt=""></img>
                    </div>
                  </Link>
                </>
              );
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default HomeSlider;
