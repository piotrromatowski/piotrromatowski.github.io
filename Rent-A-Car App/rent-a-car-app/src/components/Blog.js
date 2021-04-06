import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Blog() {
  return (
    <>
      <section id="blog" className="blog-page">
        <nav className="blog-nav">
          <ul className="blog-list">
            <li className="blog-list-nav-item">
              <Link to="/">
                <a href="/home">Home</a>
              </Link>
            </li>

            <li className="blog-list-nav-item">
              <a href="https://www.topgear.com/car-news">TG News</a>
            </li>
            <li className="blog-list-nav-item">
              <a href="https://www.topgear.com/car-reviews">TG Reviews</a>
            </li>
            <li className="blog-list-nav-item">
              <a href="https://www.topgear.com/electric">TG Electric</a>
            </li>
            <li className="blog-list-nav-item">
              <a href="https://www.topgear.com/long-term-car-reviews">
                TG Garage
              </a>
            </li>
            <li className="blog-list-nav-item">
              <a href="https://www.topgear.com/car-news/gaming">TG Gaming</a>
            </li>
            <li className="blog-list-nav-item">
              <a href="https://www.topgear.com/videos">TG Videos</a>
            </li>
            <li className="blog-list-nav-item">
              <a href="https://www.topgear.com/retro">TG Retro</a>
            </li>
          </ul>
        </nav>
        <div className="articles">
          <div className="article">
            <span className="article-date">2021-04-02</span>
            <h2 className="article-title">New sports car available</h2>
            <div className="article-video">
              <iframe
                src="https://www.youtube.com/embed/pjMhPurdtEQ?&loop=1&controls=0&rel=0&playsinline=1&showinfo=0&autoplay=1&playlist=pjMhPurdtEQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; gyroscope;"
                allowfullscreen
              ></iframe>
            </div>
            <h3 className="movie-promotion-text">
              NISMO GTR is now available in carrental inc
            </h3>
            <p className="article-description">
              "IN MY most recent review of the Nissan GT-R I said it was pretty
              much perfect in every way and declared at the end that it’s not a
              five-star car. It’s the five-star car. I stand by that. If you
              want to go fast, in any weather, on any road, there is simply
              nothing else that even gets close."<span> - Jeremy Clarkson</span>
            </p>
            <a href="https://www.topgear.com/car-reviews/nissan/gt-r-nismo">
              Top Gear Review
            </a>
          </div>
          <div className="article-gray">
            <span className="article-date">2021-03-15</span>
            <h2 className="article-title">New muscle car available</h2>
            <div className="article-video">
              <iframe
                src="https://www.youtube.com/embed/eZG_Q7-8X-k?&loop=1&controls=0&rel=0&playsinline=1&showinfo=0&autoplay=0&playlist=eZG_Q7-8X-k"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; gyroscope;"
                allowfullscreen
              ></iframe>
            </div>
            <h3 className="movie-promotion-text">
              DODGE DEMON is now available in carrental inc
            </h3>
            <p className="article-description">
              "The Challenger SRT Demon is even mightier than the Hellcat
              version, boasting up to 840 horsepower and exclusive drag-racing
              equipment. Did we mention that it can do a wheelie, too? While the
              limited-edition Demon went out of production after the 2018 model
              year, it remains one of the coolest and craziest cars to ever wear
              a Dodge badge. Many of its engine and transmission goodies are now
              available on the Challenger SRT Hellcat Redeye. Still, even the
              most powerful pony-car competitors, such as the 650-hp Chevy
              Camaro ZL1 and the all-new 700-plus-horsepower Ford Mustang Shelby
              GT500, will be hard-pressed to match the straight-line
              acceleration of the Demon."<span> - caranddriver.com</span>
            </p>
            <a href="https://www.topgear.com/car-reviews/dodge/demon-2dr/first-drive">
              Top Gear Review
            </a>
          </div>
          <div className="article">
            <span className="article-date">2021-01-30</span>
            <h2 className="article-title">New SUV available</h2>
            <div className="article-video">
              <iframe
                src="https://www.youtube.com/embed/TdDmHsLnPZ8?&loop=1&controls=0&rel=0&playsinline=1&showinfo=0&autoplay=0&playlist=TdDmHsLnPZ8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; gyroscope;"
                allowfullscreen
              ></iframe>
            </div>
            <h3 className="movie-promotion-text">
              Lamborghini Urus is now available in carrental inc
            </h3>
            <p className="article-description">
              "The soul of a super sports car and the functionality of an SUV:
              Lamborghini Urus is the first Super Sport Utility Vehicle in the
              world. With extreme proportions, breathtaking design,
              extraordinary driving dynamics and heart-pounding performance,
              Urus represents freedom in its quintessential state. You can
              experience any road, from track to the sand, ice, gravel or rocks,
              thus unlocking any road. You can explore any new terrain, thus
              expressing yourself"<span> - lamborghini.com</span>
            </p>
            <a href="https://www.topgear.com/car-reviews/lamborghini/urus">
              Top Gear Review
            </a>
          </div>
          <div className="article-gray">
            <span className="article-date">2021-01-10</span>
            <h2 className="article-title">New limo available</h2>
            <div className="article-video">
              <iframe
                src="https://www.youtube.com/embed/uHPC6KaB344?&loop=1&controls=0&rel=0&playsinline=1&showinfo=0&autoplay=0&playlist=uHPC6KaB344"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; gyroscope;"
                allowfullscreen
              ></iframe>
            </div>
            <h3 className="movie-promotion-text">
              VOLVO S90 is now available in carrental inc
            </h3>
            <p className="article-description">
              "The Volvo S90 is an elegant, uniquely Scandanavian luxury sedan
              that offers a distinctive personality in a field of German
              competitors. Rather than sporty handling and big power, it trades
              on comfort and serenity thanks to its plush interior and
              comfortable ride. We also find its minimalist design to be
              particularly attractive inside and out. While we don’t have full
              U.S. details on the updated 2021 model, we think the two engine
              choices will continue from before: a T6 model with a turbocharged
              and supercharged inline-four, and a T8 plug-in-hybrid that adds an
              electric motor for more power and a bit of all-electric driving
              range. Plenty of driver-assistance features are on hand to back up
              Volvo’s reputation for safety."<span> - caranddriver.com</span>
            </p>
            <a href="https://www.topgear.com/car-reviews/volvo/s90">
              Top Gear Review
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
