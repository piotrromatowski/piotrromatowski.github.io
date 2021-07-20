import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PricesItems } from "./PricesItems";

function Prices() {
  return (
    <>
      <Navbar />
      <section className="prices">
        <div className="price-list">
          {PricesItems.map((item, index) => {
            return (
              <div className="type" key={index}>
                <i className="fas fa-tooth"></i>
                <h2>{item.field}</h2>
                <h3>{item.information}</h3>
                {item.type.map((items, index) => {
                  return (
                    <ul className="prices-items" key={items.activity}>
                      <li className="activity">{items.activity}</li>
                      <li className="price">{items.price}</li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Prices;
